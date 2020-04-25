
var width = 960, height = 500
var n = 80, // number of nodes
    m = 80, // number of links
    charge = -100;
    var teams
//
var svg,g,dataset
var width = 600;
var height = 520;
var margin = { top: 0, left: 20, bottom: 40, right: 10 };
var heightScale
var y3 =[]
var pie,path
// var teams = dataset.map(d=>{
//   return d.index;
// })
radius = Math.min(width, height) / 2;
var activationFunctions = [
  ()=>{
  
    g.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')') 
    console.log('Hey');
    d3.selectAll('rect')
    .transition()
    .duration(800)
    .attr('y',d=>{
        console.log(d.sentiment);
        
      return height-heightScale(d.sentiment)
    } )
    .attr('height',d=>{
        console.log(d.sentiment);
      return heightScale(d.sentiment) 
    } )
    .delay(function(d,i){console.log(i) ; return(i*100)})
    
    },
  ()=>{
    console.log('Wassup sai?');
    g.selectAll('.rect').transition().duration(600).attr('height',d=>{
      return heightScale(0)

  } )
  var pie = d3.pie()
        .sort(null);
      g.attr('transform', 'translate(' + width/2 +  ',' + height/2 +')'); 

    var arc = d3.arc()
        .innerRadius(radius - 100)
        .outerRadius(radius - 50).padAngle(.02)
        .padRadius(100)
        .cornerRadius(4);
   path = g.selectAll("path")
              .attr('class', 'p')
        .data(pie(y3))
        .enter().append("path")
        .attr("fill", function(d, i) { return color(i); })
        .transition()
        .delay(function(d, i) {
          return i * 800;
        })
            .attrTween('d', function(d) {
       var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
       return function(t) {
           d.endAngle = i(t);
         return arc(d);
       }
    })
    ;
 
  },
  ()=>{
    console.log('This is working');
    
   g.selectAll('.p')
   
    .attr('fill','none' )
    
  },
  ()=>{
    console.log('I heard you your self, right?');
    
  },
  ()=>{
    console.log('Let see');
    
  },()=>{
   
    
  },
  ()=>{
    
    
  },
  ()=>{
    
    
  },
  ()=>{
    
    
  },

  ]
var display = ()=>{
   svg = d3.select('#vis')
    svg =svg.select('svg') 
    svg.attr('width', width + margin.left + margin.right);
    svg.attr('height', height + margin.top + margin.bottom);
    g = svg.append('g')
             .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')') 
    
    
}
 
//All the scrolling function
//Will draw a new graph based on the index provided by the scroll


let scroll = scroller()
    .container(d3.select('#graphic'))
scroll()

let lastIndex, activeIndex = 0

scroll.on('active', function(index){


    d3.selectAll('.step')
        .transition().duration(500)
        .style('opacity', function (d, i) {return i === index ? 1 : 0.1;});
    
    activeIndex = index
    let sign = (activeIndex - lastIndex) < 0 ? -1 : 1; 
    let scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
    
    scrolledSections.forEach(i => {
       
       

        
      activationFunctions[i]()
         
    })
    lastIndex = activeIndex;

})

scroll.on('progress', function(index, progress){
    if (index == 2 & progress > 0.7){

    }
})


d3.csv('sentiment.csv').then(d=>{
  d3.select('#vis')
    .call(display)
  
  dataset =d
   teams = dataset.map(d=>{
    return d.index;
})

    bandScale=d3.scaleBand()
      .domain(teams)
      .range([0,width])
      .padding(.1);
     heightScale =d3.scaleLinear()
      .domain([0,33495])
      .range([0,height]); 
  console.log(dataset);
  g.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('class','rect' )
  .attr('opacity',1.0)
  .attr('x',(d,i)=>{
      return bandScale(d.index)
  } ) 
  .attr('y',d=>{
      return height-heightScale(0)
  }  )
  .attr('width',(d)=>{
      return bandScale.bandwidth(d.index)
  })
  .attr('height',d=>{
      return heightScale(0)
  } )
  .attr('fill',d=>{
      return d.Color;
  } )


  radius = Math.min(width, height) / 2;
  color = d3.scaleOrdinal(d3.schemeCategory10)

  d.forEach(element => {
    y3.push(element.sentiment)
    
});
   
// path = g.selectAll("path")
// .attr('class', 'p')
// .data(pie(y3))
// .enter().append("path")
    
    // var path = g.selectAll("path")
    //     .data(pie(y3))
    //     .enter().append("path")
    //     .attr("fill", function(d, i) { return color(i); })
    //     .transition()
    //     .delay(function(d, i) {
    //       return i * 800;
    //     })
    //         .attrTween('d', function(d) {
    //    var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
    //    return function(t) {
    //        d.endAngle = i(t);
    //      return arc(d);
    //    }
    // });
})
