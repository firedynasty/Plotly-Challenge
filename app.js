function toObject(arr) {
  var rv = {};
  for (var i = 0; i < arr.length; ++i)
    if (arr[i] !== undefined) rv[i] = arr[i];
  return rv;
}
// this will create a Javscript Object for reference later

var data_1 = {}
var data_1Names = [];
var d1 = [];

d3.json("samples.json").then((d) => {
    //  Create the Traces
    data_1 = d;
    d1 = d;
    console.log(d);
    data_1Names = data_1.names;
    console.log(data_1.names);
    // this is setting the variable of the array of participants

    var otuLabels = d1.samples[0].otu_labels;
    // this is list with the otuLabels
    console.log(otuLabels);
    
    var OtuID = d.samples[0].otu_ids.map(sure => 'otu ' + sure);
    // this is getting the variable name and id
    // the reason why I needed to map was to add the word otu in front of the sample number
    
    var SampleValues = d.samples[0].sample_values;
    // this is getting the sample values of the bacteria numbers

    var OtuLabels = d.samples[0].otu_labels;
    // get the name of otulabels
  
    var textReference = toObject(OtuIDwithoutOtu);
    // this will get your SampleValues into an Javascript Object
    console.log(textReference);

    var sortedByOtuID = OtuID.sort((a,b) => b - a);
    var sortedBySampleValues = SampleValues.sort((a,b) => b-a);
    var sortedByOtuIDwithoutOtu = OtuIDwithoutOtu.sort((a,b) => b - a);
    // computer, we only want the top 10 
    // computer please save this sample into a javascript object so you can reference it


    slicedByOtuID = sortedByOtuID.slice(0,10);
    slicedBySampleValues = sortedBySampleValues.slice(0,10);
    // computer, we only want the top 10

    reversedByOtuID = slicedByOtuID.reverse();
    reversedBySampleValues = slicedBySampleValues.reverse();
    // this is so that plotly can optimize the viewing

    var select = document.getElementById("selDataset");
    var options = data_1.names;
    // computer, you are setting the dropdown menu 

    for (var i = 0; i < options.length; i++ ) {
      var opt = options[i];
      var el = document.createElement("option");
      el.text = opt;
      el.value = opt;
      select.add(el);
    }

    // computer this is what we need to graph 
    var trace1 = {
      y: reversedByOtuID,
      x: reversedBySampleValues,
      type: 'bar',
      orientation: 'h'
    }


    var data = [trace1]

    Plotly.newPlot('bar', data);
   
  });

  d3.selectAll("body").on('change', getData);

  function getData() {
    var dropdownMenu = d3.selectAll('#selDataset').node();
    var dropdownMenuID = dropdownMenu.id;
    var selectedOption = dropdownMenu.value;
    console.log(typeof selectedOption, selectedOption);
    console.log(data_1Names.indexOf(selectedOption))
    indexNames = data_1Names.indexOf(selectedOption);
    // prints out the number 

    var OtuIDRestyle = d1.samples[indexNames].otu_ids.map(sure => 'otu ' + sure);
    // this is getting the variable name and id
    
    var SampleValuesRestyle = d1.samples[indexNames].sample_values;
    // this is getting the sample values of the bacteria numbers

    var sortedByOtuIDRS = OtuIDRestyle.sort((a,b) => b - a);
    var sortedBySampleValuesRS = SampleValuesRestyle.sort((a,b) => b-a);
    // computer, we only want the top 10 

    slicedByOtuIDRS = sortedByOtuIDRS.slice(0,10);
    slicedBySampleValuesRS = sortedBySampleValuesRS.slice(0,10);
    // computer, we only want the top 10

    reversedByOtuIDRS = slicedByOtuIDRS.reverse();
    reversedBySampleValuesRS = slicedBySampleValuesRS.reverse();
    // this is so that plotly can optimize the viewing
  
    Plotly.restyle("bar", "y", [reversedByOtuIDRS]);
    Plotly.restyle("bar", "x", [reversedBySampleValuesRS]);

  }

// I want to update the x and the y axis




console.log(data_1Names.indexOf('941'))
// okay cool 
console.log(typeof selectedOption, selectedOption);
// this returns a string


