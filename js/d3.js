



 //  Immediately Invoked Function Expression IIFI :)
( async function data() {
    try {
      const res = await fetch('../JSON/data1.json')
      const data = await res.json()
      console.log(data)
      showChart2(data)
    } catch (err) {
      console.log(err)
    }
  })()


 const showChart2 = (d) => {
   
        let width = 350,
        scaleFactor = 10,
        barHeight = 20;

      for (let i = 0; i< d.length;i++) {
        
        var graph = d3.select(".chart2")
                  .append("svg")
                  .attr("width", width)
                  .attr("height", barHeight * d.length);

        var bar = graph.selectAll("g")
                  .data(d)
                  .enter()
                  .append("g")
                  .attr("transform", function(d, i) {
                        return "translate(0," + i * barHeight + ")";
                  });

    bar.append("rect")
       .attr("width", 2)
       .attr("fill", function ( d ) {
          return d.color;
        })
       .attr("height", barHeight - 1)
       .transition()  //  code a rest for animation
         .ease(d3.easeLinear)   // change animation
         .duration(2000)
         .delay(2400)
         .attr('width', function(d) {
                return d.g * scaleFactor;
       }
         )
       

    bar.append("text")
       .attr("x", function(d) { return (d*scaleFactor); })
       .attr("fill", 'black')
       .attr("y", barHeight / 2)
       .attr("dy", ".30em")
       /* .attr("dx", ".5em") */
       .attr("dx", function(d) { return (d.g*scaleFactor + 6); })
       .text(function(d) { return d.team; });

     bar.append("text")
     .attr("fill", 'white')
     .attr("dy", ".3em")
     .attr("y", ".6em")
     .attr("dx", ".1em")
     .text(function(d) { return d.a; });

       return bar
      }  
  }