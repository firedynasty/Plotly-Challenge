var data_1 = {}

d3.json("samples.json").then((d) => {
    //  Create the Traces
    data_1 = d;
    console.log(d);
    console.log(data_1.names);
    
    var OtuID = d.samples[0].otu_ids.map(sure => 'otu ' + sure);
    var SampleValues = d.samples[0].sample_values;
    var sortedByOtuID = OtuID.sort((a,b) => b - a);
    var sortedBySampleValues = SampleValues.sort((a,b) => b-a);

    slicedByOtuID = sortedByOtuID.slice(0,10);
    slicedBySampleValues = sortedBySampleValues.slice(0,10);

    reversedByOtuID = slicedByOtuID.reverse();
    reversedBySampleValues = slicedBySampleValues.reverse();

    var select = document.getElementById("selDataset");
    var options = data_1.names;
    for (var i = 0; i < options.length; i++ ) {
      var opt = options[i];
      var el = document.createElement("option");
      el.text = opt;
      el.value = opt;
      select.add(el);
    }

    
    var trace1 = {
      y: reversedByOtuID,
      x: reversedBySampleValues,
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






  