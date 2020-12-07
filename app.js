var data_1 = {}
var data_1Names = [];

d3.json("samples.json").then((d) => {
    //  Create the Traces
    data_1 = d;
    console.log(d);
    data_1Names = data_1.names;
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
  
  });

  d3.selectAll("body").on('change', getData);

  function getData() {
    var dropdownMenu = d3.selectAll('#selDataset').node();
    var dropdownMenuID = dropdownMenu.id;
    var selectedOption = dropdownMenu.value;
    console.log(typeof selectedOption, selectedOption);
    console.log(data_1Names.indexOf(selectedOption))
    console.log(data_1Names)
    // prints out the number 
  
  }

// I want to update the x and the y axis




console.log(data_1Names.indexOf('941'))
// okay cool 
console.log(typeof selectedOption, selectedOption);
// this returns a string


