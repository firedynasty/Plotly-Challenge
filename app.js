var data_1 = {}

d3.json("samples.json").then((d) => {
    //  Create the Traces
    data_1 = d
    console.log(d);
    
    var trace1 = {
      y: d.samples[0].otu_ids.map(sure => 'otc ' + sure),
      x: d.samples[0].sample_values,
      type: 'bar',
      orientation: 'h'
    }

    var data = [trace1]

    Plotly.newPlot('plot1', data);

    // // Create a trace object with the data in `y0`
    // var trace1 = {
    //   y: data.samples.,
    //   // boxpoints: "all",
    //   type: "box"
    // };
    
    // // Create a trace object with the data in `y1`
    // var trace2 = {
    //   type: 'bar',
    //   x: data
    //   y: y1,
    //   // boxpoints: "all",
    //   type: "box"
    // };
    
    // // Create a data array with the above two traces
    // var data = [trace1, trace2];
    
    // // Use `layout` to define a title
    // var layout = {
    //   title: "Basic Box Plot"
    // };
    
    // // Render the plot to the `plot1` div
    // Plotly.newPlot("plot1", data, layout);

  
  });






  