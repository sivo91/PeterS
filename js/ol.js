 
 

 const fotky = [
   {
     id: 1,
     img: '../hokejfoto/alaskacupp.png'
   },
   {
     id: 2,
     img: '../hokejfoto/abots.png'
   },
   {
     id:3,
     img: '../hokejfoto/alaska.png'
   },
   {
     id:4,
     img: '../hokejfoto/rapid3.png'
   },
   {
     id:5,
     img: '../hokejfoto/za.png'
   },
   {
     id:6,
     img: '../hokejfoto/sanfran.png'
   },
   {
     id:7,
     img: '../hokejfoto/stockton.png'
   },
   {
     id: 8,
     img: '../hokejfoto/tulsa.png'
   },
   {
     id: 9,
     img: '../hokejfoto/ABBOTSF.png'
   },
   {
     id:10,
     img: '../hokejfoto/orlando2.png'
   },
   {
     id: 11,
     img: '../hokejfoto/bridgeport.png'
   },
   {
     id: 12,
     img: '../hokejfoto/sharks.png'
   },
   {
     id: 13,
     img: '../hokejfoto/zlin4.png'
   },
   {
     id: 14,
     img: '../hokejfoto/zlin.png'
   },
   {
     id: 15,
     img: '../hokejfoto/tn.jpg'
   },
   {
     id: 16,
     img: '../hokejfoto/DUBNICA.png'
   },
   {
     id: 17,
     img: '../hokejfoto/repid.png'
   },
   {
     id: 18,
     img: '../hokejfoto/zaa.png'
   },
   {
     id: 19,
     img: '../hokejfoto/aces.png'
   },
   {
     id:20,
     img: '../hokejfoto/lm.jpg'
   }
 ]



 window.onload = init
 

let point1 = [-159.6312637, 20.9473655];

 function init() {
   
 // Controls 
 const fullScreenControl = new ol.control.FullScreen()
 const mousePositionControl = new ol.control.MousePosition()
 const overViewMapControl = new ol.control.OverviewMap({
     collapsed: true,
     layers: [
       new ol.layer.Tile({
       source: new ol.source.OSM()
       })
     ]
 })
 const scaleLineControl = new ol.control.ScaleLine()
 const zoomSliderControl = new ol.control.ZoomSlider()
 const zoomToExtentControl = new ol.control.ZoomToExtent()

 let map = new ol.Map({
        target:'map',
       /*  layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ], */
        view: new ol.View({
          center: ol.proj.fromLonLat([-67.108701,40.2668189]),
          zoom: 2.8,
          maxZoom: 25,
          minZoom: 2,
          rotation: 0
        }),
        // can move with keyboard
        keyboardEventTarget: document,
        controls: ol.control.defaults().extend([
            fullScreenControl,
           // mousePositionControl,
            overViewMapControl,
            //scaleLineControl, // mierka
            zoomSliderControl,
            //zoomToExtentControl
        ])
      }) 

      //console.log(ol.control.defaults())

      // tri mapy z inim pozadim 
      // zmemim visible false to true
      const openStreetMapStandard = new ol.layer.Tile({
        source: new ol.source.OSM(),
        visible: true,
        title: 'OSMStandard'
      })

      const openStreetMapHumanitarian = new ol.layer.Tile({
        source: new ol.source.OSM({
          url:'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        }),
        visible: false,
        title: 'OSMHumanitarian'
      })

       // terrain map
      const stamenTerrain = new ol.layer.Tile({
        source: new ol.source.XYZ({
          url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
          attributions: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
        }),
        visible: false,
        title: 'StamenTerrain'
      })

        // watercolor
      const waterColor = new ol.layer.Tile({
         source: new ol.source.XYZ({
           url: 'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
           attributions: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.'
         }),
         visible: false,
         title: 'WaterColor'
      })

         // light 
      const cartoDBBaseLayer = new ol.layer.Tile({
        source: new ol.source.XYZ({
           url: 'http://{1-4}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{scale}.png'
        }), visible: false
        
      })


      const baseLayerGroup = new ol.layer.Group({
        layers: [
          openStreetMapStandard,openStreetMapHumanitarian,stamenTerrain,waterColor,cartoDBBaseLayer
        ]
      })
   
       
      map.addLayer(baseLayerGroup)


      const fillStyle = new ol.style.Fill({
        color: [84,88,255,1]
      })
      const strokeStyle = new ol.style.Stroke({
        color: [0,0,255,1],
        width: 1.2
      })
      const circleStyle = new ol.style.Circle({
        fill: new ol.style.Fill({
          color: [0,0,255,1]
        }),
        radius: 7,
        stroke: strokeStyle
      })

      // ICON MARKER STYLE
      const iconMarkerStyle = new ol.style.Icon({
        //src: './icon.svg',
        //src: './icon8.png', neukazuje presne tam kde ma
        src: "../imgs/icon22.png",
        size: [100,100],
        offset: [0,0],
        opacity:1,
        scale: 0.5,
        color: [137, 3, 171,1]
      })

      
      // data z geojson.io * les 27
      const geoJson = new ol.layer.VectorImage({
        source: new ol.source.Vector({
          url: '../geoJson/map.geojson', // folder/json
          format: new ol.format.GeoJSON()
        }),
        visible: true,
        title: 'Map',
        style: new ol.style.Style({
          // vyplni cez geojson.id or icon style
          fill: fillStyle,
          stroke: strokeStyle,
          //image: circleStyle  // modry kruzok
          image: iconMarkerStyle
           /* image: new ol.style.Icon({
            anchor: [0.5, 1],
            src: `${pointer}`
          }) */
        })
      })

      map.addLayer(geoJson)



      const popUp = document.querySelector('.popUp')
      const overlayLayer = new ol.Overlay({
        element: popUp
      })
      map.addOverlay(overlayLayer)
      const place = document.getElementById('name')
      


      // kde clickne tam sa ukaze coordinate
      const popCoordinates = document.querySelector('.pop-coord')
      const pop = new ol.Overlay({
        element: popCoordinates
      })

      map.addOverlay(pop)

      // on click e
      map.on('click', function(e){
        let clickedCoordinate = e.coordinate
        console.log('you clicked on all map ' +  e.coordinate)
        
 
        // prida coordinate na mapu
        /* pop.setPosition(undefined)
        pop.setPosition(clickedCoordinate)
        popCoordinates.innerHTML = clickedCoordinate */
        //popCoordinates.appendChild(addNewPoint())

        


        // znacky modre na mape, najde podla 'mena' geojson.io co som vytvoril
        map.forEachFeatureAtPixel(e.pixel,function(feature, layer) {
          console.log('you clicked to points ' + feature)
          console.log(feature.getKeys('name'))
          console.log(feature.getKeys('country'))
         
          let clickedFeatureName =  feature.get('name')
          let clickedFeatureCountry = feature.get('country')
          let clickedFeatureYear = feature.get('yr')
          let clickedFeatureId = feature.get('id')
         
          
            const img = fotky.map(item => {
              if(item.id === clickedFeatureId){
                const img = `<img src="${item.img}" class="card-img-top" alt="img">`
                //console.log(img)
                return img
              }
            })
            
            
            
          //console.log(clickedFeatureName)
          overlayLayer.setPosition(clickedCoordinate)
          place.innerHTML = `
                <div class="card pointCard" style="width: 18rem;">
                  <div class="img-map">${img.join('')}</div>
                  <div class="card-body">
                    <h4 class="card-title text-center">${clickedFeatureName}</h4>
                    <h5 class="text-center">${clickedFeatureCountry}</h5>
                    <h6 class="text-center">${clickedFeatureYear}</h6>
                   <div class="d-grid gap-2">
                    <button class="btn btn-secondary" type="button">Close</button>
                  </div>
                  </div>
                </div>
          `
    
          const btn = document.querySelector('.btn')
          const card = document.querySelector('.pointCard')
          btn.addEventListener('click', ()=> {
            card.style.display = 'none'
          })

        })
      })

      
      // current position
    let pointer = `../imgs/geo-fill.svg`
    
      let markers = new ol.layer.Vector({
    source: new ol.source.Vector(),
    style: new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: `${pointer}`
      })
    })
  }
);

map.addLayer(markers);
       // konec filma
    


  // get numbrs for current position
   navigator.geolocation.getCurrentPosition(function(position) {

     let point4 = [position.coords.longitude,position.coords.latitude];
     console.log('your current position: ' + point4)
     
    
      let marker4 = new ol.Feature(
        new ol.geom.Point(
          ol.proj.fromLonLat(point4)
        )
      );
     
      markers.getSource().addFeature(marker4);
   }) 


   // draw to map
   /* const draw = new ol.interaction.Draw({
     type: 'Polygon',
     freehand: true
   })
   map.addInteraction(draw)
 */
 }
      

 