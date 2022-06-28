


  const jersy = [
      {
        imagejersy: "../logos/dress.png",
        imagelogo: "../logos/lm.png",
        id:1,
        team: "HK-32 Lipt.Mikulas"
      },
      {
        imagejersy: "../logos/dress.png",
        imagelogo: "../logos/pn.png",
        id:2,
        team: "SHK-37 Piestany"
      },
      {
        imagejersy: "../logos/redDress.png",
        imagelogo: "../logos/povazska.png",
        id:3,
        team: "HK-95 P.Bystrica"
      },
      {
        imagejersy: "../logos/dress.png",
        imagelogo: "../logos/dubnica.png",
        id:4,
        team: "HK Dubnica"
      },
      {
        imagejersy: "../logos/redDress.png",
        imagelogo: "../logos/tn.png",
        id:5,
        team: "HK Dukla Trencin"
      },
      {
        imagejersy: "../logos/greenDress.png",
        imagelogo: "../logos/za.png",
        id:6,
        team: "MsHK Zilina"
      },
      {
        imagejersy: "../logos/dress.png",
        imagelogo: "../logos/HKM.png",
        id:7,
        team: "HKM Zvolen"
      },
      {
        imagejersy: "../logos/dress.png",
        imagelogo: "../logos/psg-zlin.png",
        id:8,
        team: "PSG Zlin"

      },
      {
        imagejersy: "../logos/redDress.png",
        imagelogo: "../logos/sf.png",
        id:9,
        team: " San Francisco Bulls"
      },
      {
        imagejersy: "../logos/sharkDress.png",
        imagelogo: "../logos/shark.png",
        id:10,
        team: "Worcester Sharks"
      },
      {
        imagejersy: "../logos/dress.png",
        imagelogo: "../logos/ak.png",
        id:11,
        team: "Alaska Aces"
      },
      {
        imagejersy: "../logos/dress.png",
        imagelogo: "../logos/abb.png",
        id:12,
        team: "Abbotsford Heat"
      },
      {
        imagejersy: "../logos/dress.png",
        imagelogo: "../logos/stockton.png",
        id:13,
        team: "Stockton Thunder"
      },
      {
        imagejersy: "../logos/dress.png",
        imagelogo: "../logos/brifge.png",
        id:14,
        team: "Bridgeport Sound Tigers"
      },
      {
        imagejersy: "../logos/purpleDress.png",
        imagelogo: "../logos/ORLANDO_SOLAR_BEARS.png",
        id:15,
        team: "Orlando Solar Bears"
      },
      {
        imagejersy: "../logos/greenDress.png",
        imagelogo: "../logos/utah.png",
        id:16,
        team: "Utah Grizzlies"
      },
      {
        imagejersy: "../logos/redDress.png",
        imagelogo: "../logos/komets.png",
        id:17,
        team: "Fort Wayne Komets"
      },
      {
      imagejersy: "../logos/redDress.png",
      imagelogo: "../logos/rapid.png",
      id:18,
      team: "Rapid City Rush"
      },
      {
        imagejersy: "../logos/dress.png",
        imagelogo: "../logos/tulsa.png",
        id:19,
        team: "Tulsa Oilers"
      },
      {
        imagejersy: "../logos/dress.png",
        imagelogo: "../logos/sd.png",
        id:20,
        team: "San Diego Gulls"
      },
    ] 

 
    export default  jersy 


<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAmrv5OLLP6-m8AFUD2yo80HRTTP-pphs0",
    authDomain: "pagenew-jersy.firebaseapp.com",
    projectId: "pagenew-jersy",
    storageBucket: "pagenew-jersy.appspot.com",
    messagingSenderId: "1080189416156",
    appId: "1:1080189416156:web:9eed41aaa5bf79b9e6fa19",
    measurementId: "G-T0SX86E38F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>