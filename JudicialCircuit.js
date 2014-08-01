var chart = {},
    info = {},
    width = 650,
    height = 750;

$(function() {
        $('#results').html('Plugin name: ' );   
}); 

chart.data = {}; 

//set up the color lengend for the map
var color_domain = [-0.2,-0.1,0,0.1,0.2]
var ext_color_domain = [-0.4,-0.2,-0.1,0,0.1,0.3]
var legend_labels = ["< -20%","-20% ~ -10%","-10% ~ 0%","0% ~ 10%","10% ~ 20%","> 20%"]
var color = d3.scale.threshold().domain(color_domain)
                    .range(["rgb(33,102,172)","rgb(103,169,207)","rgb(209,229,240)","rgb(255,247,188)","rgb(254,196,79)","rgb(217,95,14)"]);

var projection = d3.geo.mercator()
    .translate([11212.5, 4912.5])
    .scale(7500);

var path = d3.geo.path()
    .projection(projection)
    .pointRadius(2);   

var svg = d3.select("#circuitmap").append("svg")
    .attr("width", width)
    .attr("height", height);   

//quantize the colors by the change percentage
var quantize = d3.scale.quantize()
               .domain([-0.3, 0.3])
               .range(d3.range(6).map(function(i){ return "q" + i + "-9";}));

//combine the data 
d3.json('newcircuit.json', function(error, circuit) {
    chart.data.judicial = topojson.feature(circuit, circuit.objects.Circuits07);

    //load the file of Georgia county gemetry
    

    // Load the NewCrime.csv file of Georgia state prison data indexed by county name
    d3.csv('NewCrime1.csv', function(error, data) {
        chart.data.commitments = {
            raw: data,
            byCircuit: {},
            byCountyByMonth: {}
        };

        // Map prison data into array associated with each county's properties
        _.each(data, function(commitment) {
            var circuit = _.filter(chart.data.judicial.features, function(d) {
                var circuitname = d.id.trim().toLowerCase(),
                    commitmentcircuitname = commitment.conviction.trim().toLowerCase();
            // console.log("see the name of circuit" + commitmentcircuitname  + circuitname );

                return circuitname === commitmentcircuitname;
            });

            if (circuit[0]) {
                if (!circuit[0].commitments) {
                    circuit[0].commitments = [];
                }

                circuit[0].commitments.push(commitment);
                //console.log("what is push?");

            }
            
        }); 


        // Create paths for each county that will be used for county selection and UI effects
        svg.selectAll("#circuitmap")
          .data(chart.data.judicial.features)
          .enter()
          .append("path")
          .attr("class",function(d){
              var cost = 0;
              //cost = d.commitments.Change;
              cost = d3.sum(d.commitments,function(dd){
                //console.log("dd.change" + dd.Change);
                return dd.Change;
              });
              console.log("see the value" + d.id.trim() + ' ' + quantize(cost));
              return 'circuits ' + d.id.trim() + ' ' + quantize(cost);
          })
          .attr("d", path)
          .on("mouseover", function (d) {
               
          })
          .on("mouseout", function (d) {
               
          })
          .on("click",function (d){
               //console.log("the names of circuit in the click function is " + d.id);
               //chartline(d.id,true);
        hover(d, true);
        if (d.id == "Alapaha") {highchart.series[0].setData(AlapahaN);highchart.series[0].update({name:"Alapaha Judical Circuit"},true);highchart.setTitle({text: "Alapaha Circuit Commitments 09-13"});$('#headline').html(Alapaha.headline ); $('#chatter').html(Alapaha.chatter);}
        if (d.id == "Alcovy") {highchart.series[0].setData(AlcovyN);highchart.series[0].update({name:"Alcovy Judical Circuit"},true);highchart.setTitle({text: "Alcovy Circuit Commitments 09-13"});$('#headline').html(Alcovy.headline ); $('#chatter').html(Alcovy.chatter);}
        if (d.id == "Appalachian") {highchart.series[0].setData(AppalachianN);highchart.series[0].update({name:"Appalachian Judical Circuit"},true);highchart.setTitle({text: "Appalachian Circuit Commitments 09-13"});$('#headline').html(Appalachian.headline ); $('#chatter').html(Appalachian.chatter);}
        if (d.id == "Atlanta") {highchart.series[0].setData(AtlantaN);highchart.series[0].update({name:"Atlanta Judical Circuit"},true);highchart.setTitle({text: "Atlanta Circuit Commitments 09-13"});$('#headline').html(Atlanta.headline ); $('#chatter').html(Atlanta.chatter);}
        if (d.id == "Atlantic") {highchart.series[0].setData(AtlanticN);highchart.series[0].update({name:"Atlantic Judical Circuit"},true);highchart.setTitle({text: "Atlantic Circuit Commitments 09-13"});$('#headline').html(Atlantic.headline ); $('#chatter').html(Atlantic.chatter);}
        if (d.id == "Augusta") {highchart.series[0].setData(AugustaN);highchart.series[0].update({name:"Augusta Judical Circuit"},true);highchart.setTitle({text: "Augusta Circuit Commitments 09-13"});$('#headline').html(Augusta.headline ); $('#chatter').html(Augusta.chatter);}
        if (d.id == "Bell Forsyth") {highchart.series[0].setData(Bell_ForsythN);highchart.series[0].update({name:"Bell Forsyth Judical Circuit"},true);highchart.setTitle({text: "Bell Forsyth Circuit Commitments 09-13"});$('#headline').html(Bell_Forsyth.headline ); $('#chatter').html(Bell_Forsyth.chatter);}
        if (d.id == "Blue Ridge") {highchart.series[0].setData(Blue_RidgeN);highchart.series[0].update({name:"Blue Ridge Judical Circuit"},true);highchart.setTitle({text: "Blue Ridge Circuit Commitments 09-13"});$('#headline').html(Blue_Ridge.headline ); $('#chatter').html(Blue_Ridge.chatter);}
        if (d.id == "Brunswick") {highchart.series[0].setData(BrunswickN);highchart.series[0].update({name:"Brunswick Judical Circuit"},true);highchart.setTitle({text: "Brunswick Circuit Commitments 09-13"});$('#headline').html(Brunswick.headline ); $('#chatter').html(Brunswick.chatter);}
        if (d.id == "Chattahoochee") {highchart.series[0].setData(ChattahoocheeN);highchart.series[0].update({name:"Chattahoochee Judical Circuit"},true);highchart.setTitle({text: "Chattahoochee Circuit Commitments 09-13"});$('#headline').html(Chattahoochee.headline ); $('#chatter').html(Chattahoochee.chatter);}
        if (d.id == "Cherokee") {highchart.series[0].setData(CherokeeN);highchart.series[0].update({name:"Cherokee Judical Circuit"},true);highchart.setTitle({text: "Cherokee Circuit Commitments 09-13"});$('#headline').html(Cherokee.headline ); $('#chatter').html(Cherokee.chatter);}
        if (d.id == "Clayton") {highchart.series[0].setData(ClaytonN);highchart.series[0].update({name:"Clayton Judical Circuit"},true);highchart.setTitle({text: "Clayton Circuit Commitments 09-13"});$('#headline').html(Clayton.headline ); $('#chatter').html(Clayton.chatter);}
        if (d.id == "Cobb") {highchart.series[0].setData(CobbN);highchart.series[0].update({name:"Cobb Judical Circuit"},true);highchart.setTitle({text: "Cobb Circuit Commitments 09-13"});$('#headline').html(Cobb.headline ); $('#chatter').html(Cobb.chatter);}
        if (d.id == "Conasauga") {highchart.series[0].setData(ConasaugaN);highchart.series[0].update({name:"Conasauga Judical Circuit"},true);highchart.setTitle({text: "Conasauga Circuit Commitments 09-13"});$('#headline').html(Conasauga.headline ); $('#chatter').html(Conasauga.chatter);}
        if (d.id == "Cordele") {highchart.series[0].setData(CordeleN);highchart.series[0].update({name:"Cordele Judical Circuit"},true);highchart.setTitle({text: "Cordele Circuit Commitments 09-13"});$('#headline').html(Cordele.headline ); $('#chatter').html(Cordele.chatter);}
        if (d.id == "Coweta") {highchart.series[0].setData(CowetaN);highchart.series[0].update({name:"Coweta Judical Circuit"},true);highchart.setTitle({text: "Coweta Circuit Commitments 09-13"});$('#headline').html(Coweta.headline ); $('#chatter').html(Coweta.chatter);}
        if (d.id == "Dougherty") {highchart.series[0].setData(DoughertyN);highchart.series[0].update({name:"Dougherty Judical Circuit"},true);highchart.setTitle({text: "Dougherty Circuit Commitments 09-13"});$('#headline').html(Dougherty.headline ); $('#chatter').html(Dougherty.chatter);}
        if (d.id == "Douglas") {highchart.series[0].setData(DouglasN);highchart.series[0].update({name:"Douglas Judical Circuit"},true);highchart.setTitle({text: "Douglas Circuit Commitments 09-13"});$('#headline').html(Douglas.headline ); $('#chatter').html(Douglas.chatter);}
        if (d.id == "Dublin") {highchart.series[0].setData(DublinN);highchart.series[0].update({name:"Dublin Judical Circuit"},true);highchart.setTitle({text: "Dublin Circuit Commitments 09-13"});$('#headline').html(Dublin.headline ); $('#chatter').html(Dublin.chatter);}
        if (d.id == "Eastern") {highchart.series[0].setData(EasternN);highchart.series[0].update({name:"Eastern Judical Circuit"},true);highchart.setTitle({text: "Eastern Circuit Commitments 09-13"});$('#headline').html(Eastern.headline ); $('#chatter').html(Eastern.chatter);}
        if (d.id == "Enotah") {highchart.series[0].setData(EnotahN);highchart.series[0].update({name:"Enotah Judical Circuit"},true);highchart.setTitle({text: "Enotah Circuit Commitments 09-13"});$('#headline').html(Enotah.headline ); $('#chatter').html(Enotah.chatter);}
        if (d.id == "Flint") {highchart.series[0].setData(FlintN);highchart.series[0].update({name:"Flint Judical Circuit"},true);highchart.setTitle({text: "Flint Circuit Commitments 09-13"});$('#headline').html(Flint.headline ); $('#chatter').html(Flint.chatter);}
        if (d.id == "Griffin") {highchart.series[0].setData(GriffinN);highchart.series[0].update({name:"Griffin Judical Circuit"},true);highchart.setTitle({text: "Griffin Circuit Commitments 09-13"});$('#headline').html(Griffin.headline ); $('#chatter').html(Griffin.chatter);}
        if (d.id == "Gwinnett") {highchart.series[0].setData(GwinnettN);highchart.series[0].update({name:"Gwinnett Judical Circuit"},true);highchart.setTitle({text: "Gwinnett Circuit Commitments 09-13"});$('#headline').html(Gwinnett.headline ); $('#chatter').html(Gwinnett.chatter);}
        if (d.id == "Houston") {highchart.series[0].setData(HoustonN);highchart.series[0].update({name:"Houston Judical Circuit"},true);highchart.setTitle({text: "Houston Circuit Commitments 09-13"});$('#headline').html(Houston.headline ); $('#chatter').html(Houston.chatter);}
        if (d.id == "Lookout Mountain") {highchart.series[0].setData(Lookout_MountainN);highchart.series[0].update({name:"Lookout Mountain Judical Circuit"},true);highchart.setTitle({text: "Lookout Mountain Circuit Commitments 09-13"});$('#headline').html(Lookout_Mountain.headline ); $('#chatter').html(Lookout_Mountain.chatter);}
        if (d.id == "Macon") {highchart.series[0].setData(MaconN);highchart.series[0].update({name:"Macon Judical Circuit"},true);highchart.setTitle({text: "Macon Circuit Commitments 09-13"});$('#headline').html(Macon.headline ); $('#chatter').html(Macon.chatter);}
        if (d.id == "Middle") {highchart.series[0].setData(MiddleN);highchart.series[0].update({name:"Middle Judical Circuit"},true);highchart.setTitle({text: "Middle Circuit Commitments 09-13"});$('#headline').html(Middle.headline ); $('#chatter').html(Middle.chatter);}
        if (d.id == "Mountain") {highchart.series[0].setData(MountainN);highchart.series[0].update({name:"Mountain Judical Circuit"},true);highchart.setTitle({text: "Mountain Circuit Commitments 09-13"});$('#headline').html(Mountain.headline ); $('#chatter').html(Mountain.chatter);}
        if (d.id == "Northeastern") {highchart.series[0].setData(NortheasternN);highchart.series[0].update({name:"Northeastern Judical Circuit"},true);highchart.setTitle({text: "Northeastern Circuit Commitments 09-13"});$('#headline').html(Northeastern.headline ); $('#chatter').html(Northeastern.chatter);}
        if (d.id == "Northern") {highchart.series[0].setData(NorthernN);highchart.series[0].update({name:"Northern Judical Circuit"},true);highchart.setTitle({text: "Northern Circuit Commitments 09-13"});$('#headline').html(Northern.headline ); $('#chatter').html(Northern.chatter);}
        if (d.id == "Ocmulgee") {highchart.series[0].setData(OcmulgeeN);highchart.series[0].update({name:"Ocmulgee Judical Circuit"},true);highchart.setTitle({text: "Ocmulgee Circuit Commitments 09-13"});$('#headline').html(Ocmulgee.headline ); $('#chatter').html(Ocmulgee.chatter);}
        if (d.id == "Oconee") {highchart.series[0].setData(OconeeN);highchart.series[0].update({name:"Oconee Judical Circuit"},true);highchart.setTitle({text: "Oconee Circuit Commitments 09-13"});$('#headline').html(Oconee.headline ); $('#chatter').html(Oconee.chatter);}
        if (d.id == "Ogeechee") {highchart.series[0].setData(OgeecheeN);highchart.series[0].update({name:"Ogeechee Judical Circuit"},true);highchart.setTitle({text: "Ogeechee Circuit Commitments 09-13"});$('#headline').html(Ogeechee.headline ); $('#chatter').html(Ogeechee.chatter);}
        if (d.id == "Pataula") {highchart.series[0].setData(PataulaN);highchart.series[0].update({name:"Pataula Judical Circuit"},true);highchart.setTitle({text: "Pataula Circuit Commitments 09-13"});$('#headline').html(Pataula.headline ); $('#chatter').html(Pataula.chatter);}
        if (d.id == "Paulding") {highchart.series[0].setData(PauldingN);highchart.series[0].update({name:"Paulding Judical Circuit"},true);highchart.setTitle({text: "Paulding Circuit Commitments 09-13"});$('#headline').html(Paulding.headline ); $('#chatter').html(Paulding.chatter);}
        if (d.id == "Piedmont") {highchart.series[0].setData(PiedmontN);highchart.series[0].update({name:"Piedmont Judical Circuit"},true);highchart.setTitle({text: "Piedmont Circuit Commitments 09-13"});$('#headline').html(Piedmont.headline ); $('#chatter').html(Piedmont.chatter);}
        if (d.id == "Rockdale") {highchart.series[0].setData(RockdaleN);highchart.series[0].update({name:"Rockdale Judical Circuit"},true);highchart.setTitle({text: "Rockdale Circuit Commitments 09-13"});$('#headline').html(Rockdale.headline ); $('#chatter').html(Rockdale.chatter);}
        if (d.id == "Rome") {highchart.series[0].setData(RomeN);highchart.series[0].update({name:"Rome Judical Circuit"},true);highchart.setTitle({text: "Rome Circuit Commitments 09-13"});$('#headline').html(Rome.headline ); $('#chatter').html(Rome.chatter);}
        if (d.id == "South Georgia") {highchart.series[0].setData(South_GeorgiaN);highchart.series[0].update({name:"South Georgia Judical Circuit"},true);highchart.setTitle({text: "South Georgia Circuit Commitments 09-13"});$('#headline').html(South_Georgia.headline ); $('#chatter').html(South_Georgia.chatter);}
        if (d.id == "Southern") {highchart.series[0].setData(SouthernN);highchart.series[0].update({name:"Southern Judical Circuit"},true);highchart.setTitle({text: "Southern Circuit Commitments 09-13"});$('#headline').html(Southern.headline ); $('#chatter').html(Southern.chatter);}
        if (d.id == "Southwestern") {highchart.series[0].setData(SouthwesternN);highchart.series[0].update({name:"Southwestern Judical Circuit"},true);highchart.setTitle({text: "Southwestern Circuit Commitments 09-13"});$('#headline').html(Southwestern.headline ); $('#chatter').html(Southwestern.chatter);}
        if (d.id == "Stone Mountain") {highchart.series[0].setData(Stone_MountainN);highchart.series[0].update({name:"Stone Mountain Judical Circuit"},true);highchart.setTitle({text: "Stone Mountain Circuit Commitments 09-13"});$('#headline').html(Stone_Mountain.headline ); $('#chatter').html(Stone_Mountain.chatter);}
        if (d.id == "Tallapoosa") {highchart.series[0].setData(TallapoosaN);highchart.series[0].update({name:"Tallapoosa Judical Circuit"},true);highchart.setTitle({text: "Tallapoosa Circuit Commitments 09-13"});$('#headline').html(Tallapoosa.headline ); $('#chatter').html(Tallapoosa.chatter);}
        if (d.id == "Tifton") {highchart.series[0].setData(TiftonN);highchart.series[0].update({name:"Tifton Judical Circuit"},true);highchart.setTitle({text: "Tifton Circuit Commitments 09-13"});$('#headline').html(Tifton.headline ); $('#chatter').html(Tifton.chatter);}
        if (d.id == "Toombs") {highchart.series[0].setData(ToombsN);highchart.series[0].update({name:"Toombs Judical Circuit"},true);highchart.setTitle({text: "Toombs Circuit Commitments 09-13"});$('#headline').html(Toombs.headline ); $('#chatter').html(Toombs.chatter);}
        if (d.id == "Towaliga") {highchart.series[0].setData(TowaligaN);highchart.series[0].update({name:"Towaliga Judical Circuit"},true);highchart.setTitle({text: "Towaliga Circuit Commitments 09-13"});$('#headline').html(Towaliga.headline ); $('#chatter').html(Towaliga.chatter);}
        if (d.id == "Waycross") {highchart.series[0].setData(WaycrossN);highchart.series[0].update({name:"Waycross Judical Circuit"},true);highchart.setTitle({text: "Waycross Circuit Commitments 09-13"});$('#headline').html(Waycross.headline ); $('#chatter').html(Waycross.chatter);}
        if (d.id == "Western") {highchart.series[0].setData(WesternN);highchart.series[0].update({name:"Western Judical Circuit"},true);highchart.setTitle({text: "Western Circuit Commitments 09-13"});$('#headline').html(Western.headline ); $('#chatter').html(Western.chatter);}
               
          });

        // Create the boundary lines between counties
        d3.json("ga.json",function(error,ga){
        chart.data.counties = topojson.feature(ga,ga.objects.counties);
    
        svg.append('path')
            .datum(topojson.mesh(ga, ga.objects.counties, function(a, b) { return a.properties.NAME_2 !== b.properties.NAME_2;}))
            .attr('d', path)
            .attr('class', 'county-boundary');

        // Create the boundary lines between circuits
        svg.append("path")
            .datum(topojson.mesh(circuit, circuit.objects.Circuits07, function(a, b) { return a.id !== b.id;}))
            .attr("d", path)
            .attr("class", "subunit-boundary");
        });

        //try to have names of circuits on the map
        /*
        svg.append("path")
           .datum(topojson.feature(circuit, circuit.objects.Circuits07))
           .attr("d",path)
           .attr("class","place");
   

        
        svg.selectAll(".place-label")
            .data(topojson.feature(circuit, circuit.objects.Circuits07).features)
            .enter().append("text")
            .attr("class", "place-label")
            .attr("transform", function(d) { return "translate(" + projection(d.arcs.trim()) + ")"; })
            .attr("dy", ".35em")
            .text(function(d) { return d.id; });
        */

        ///adding legend to the map
          var legend = svg.selectAll("g.legend")
          .data(ext_color_domain)
          .enter().append("g")
          .attr("class", "legend");

          var ls_w = 20, ls_h = 20;

          legend.append("rect")
          .attr("x", 470)
          .attr("y", function(d, i){ return 125 + (i*ls_h) - 2*ls_h;})
          .attr("width", ls_w)
          .attr("height", ls_h)
          .style("fill", function(d, i) { return color(d); })
          .style("opacity", 0.8);

          legend.append("text")
          .attr("x", 500)
          .attr("y", function(d, i){ return 125 + (i*ls_h) - ls_h - 4;})
          .text(function(d, i){ return legend_labels[i]; });

        // Create the info with charts and data
        info.header = svg
            .append('text')
            .attr('y', 35)
            .attr('x', 350)
            .attr('class', 'info header')
            .text(info.title);
      /*
        info.years = svg
            .append('text')
            .attr('y', 725)
            .attr('x', 600)
            .attr('class', 'info years')
            .text('2009 - 2013');
      */
        info.percentage = svg
            .append('text')
            .attr('y', 53)
            .attr('x', 350)
            .attr('class', 'info totalCost')
            .text('Percentage of Change: 0.0%');


        // Initialize some of the highlevel data by calling the "mouseout" function
        hover(null,false);
        //chartline(null,false);

    });
});



var hover = function(data, bHover) {
    console.log("using the hover function")

    var totalCost = 0,
        avgCost = 0,
        avgDailyCost = 0;
    //shows the decrease or increase percentage of each circuit    
    var percentage = 0 ;

    var formatter = d3.format(".00000000%"); 

    // A simple formatter to round and add commas to numbers
    var formatNumber = function(val) {
        val = Math.round(val);

        val = val
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        return val;
    };

    if (bHover) {
        // When hovering over a county, show the county specific data

        info.title = data.id.trim() + " Circuit";
        info.header.text(info.title);

        // Update figures
        if (data.commitments) {
            percentage = d3.sum(data.commitments,function(dd){
                //console.log("dd.change" + dd.Change);
                return dd.Change;
              })
        }


        info.percentage.text('Percentage of Change: ' + formatter(percentage));
        //info.avgCost.text('Average Cost per Disaster: $' + avgCost);
    } else {
        // When not hovering over a county, show the overall Georgia data

        info.title = 'Georgia';
        info.header.text(info.title);

        // Update figures 
        percentage = -0.149;
        totalCost = formatNumber(totalCost/3);
        avgCost = formatNumber(avgCost);

        info.percentage.text('Percentage of Change: ' + formatter(percentage));
        
    }
};

var chartline = function (circuitname,boolean){

      if (boolean){

        //info.title = "linechart" + data.id.trim();
        //info.linechart.text(info.title);
        
        console.log("the circuitname" + circuitname);
       
        var dataset;

        if (circuitname == "Alapaha") dataset = Alapaha;
        if (circuitname == "Alcovy") dataset = Alcovy;
        if (circuitname == "Appalachian") dataset = Appalachian;
        if (circuitname == "Atlanta") dataset = Atlanta;
        if (circuitname == "Atlantic") dataset = Atlantic;
        if (circuitname == "Augusta") dataset = Augusta;
        if (circuitname == "Bell Forsyth") dataset = Bell_Forsyth;
        if (circuitname == "Blue Ridge") dataset = Blue_Ridge;
        if (circuitname == "Brunswick") dataset = Brunswick;
        if (circuitname == "Chattahoochee") dataset = Chattahoochee;
        if (circuitname == "Cherokee") dataset = Cherokee;
        if (circuitname == "Clayton") dataset = Clayton;
        if (circuitname == "Cobb") dataset = Cobb;
        if (circuitname == "Conasauga") dataset = Conasauga;
        if (circuitname == "Cordele") dataset = Cordele;
        if (circuitname == "Coweta") dataset = Coweta;
        if (circuitname == "Dougherty") dataset = Dougherty;
        if (circuitname == "Douglas") dataset = Douglas;
        if (circuitname == "Dublin") dataset = Dublin;
        if (circuitname == "Eastern") dataset = Eastern;
        if (circuitname == "Enotah") dataset = Enotah;
        if (circuitname == "Flint") dataset = Flint;
        if (circuitname == "Griffin") dataset = Griffin;
        if (circuitname == "Gwinnett") dataset = Gwinnett;
        if (circuitname == "Houston") dataset = Houston;
        if (circuitname == "Lookout Mountain") dataset = Lookout_Mountain;
        if (circuitname == "Macon") dataset = Macon;
        if (circuitname == "Middle") dataset = Middle;
        if (circuitname == "Mountain") dataset = Mountain;
        if (circuitname == "Northeastern") dataset = Northeastern;
        if (circuitname == "Northern") dataset = Northern;
        if (circuitname == "Ocmulgee") dataset = Ocmulgee;
        if (circuitname == "Oconee") dataset = Oconee;
        if (circuitname == "Ogeechee") dataset = Ogeechee;
        if (circuitname == "Pataula") dataset = Pataula;
        if (circuitname == "Paulding") dataset = Paulding;
        if (circuitname == "Piedmont") dataset = Piedmont;
        if (circuitname == "Rockdale") dataset = Rockdale;
        if (circuitname == "Rome") dataset = Rome;
        if (circuitname == "South Georgia") dataset = South_Georgia;
        if (circuitname == "Southern") dataset = Southern;
        if (circuitname == "Southwestern") dataset = Southwestern;
        if (circuitname == "Stone Mountain") dataset = Stone_Mountain;
        if (circuitname == "Tallapoosa") dataset = Tallapoosa;
        if (circuitname == "Tifton") dataset = Tifton;
        if (circuitname == "Toombs") dataset = Toombs;
        if (circuitname == "Towaliga") dataset = Towaliga;
        if (circuitname == "Waycross") dataset = Waycross;
        if (circuitname == "Western") dataset = Western;
        if (circuitname == "Unknown") dataset = Unknown;





        console.log("the dataset after" + dataset);
        
        


        var lineChartData = {
          labels : ["2009","2010","2011","2012","2013"],
          datasets :[
          {
          fillColor : "#99CCFF",
          strokeColor : "rgba(220,220,220,1)",
          pointColor : "rgba(220,220,220,1)",
          pointStrokeColor : "#fff",
          data : dataset,
          },
          ]}
        
        var lineOptions = {
          responsive: true,
          ///Boolean - Whether grid lines are shown across the chart
          scaleShowGridLines : true,

          //String - Colour of the grid lines
          scaleGridLineColor : "rgba(0,0,0,.05)",

          //Number - Width of the grid lines
          scaleGridLineWidth : 1,

          //Boolean - Whether the line is curved between points
          bezierCurve : true,

          //Number - Tension of the bezier curve between points
          bezierCurveTension : 0.4,

          //Boolean - Whether to show a dot for each point
          pointDot : true,

          //Number - Radius of each point dot in pixels
          pointDotRadius : 4,

          //Number - Pixel width of point dot stroke
          pointDotStrokeWidth : 1,

          //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
          pointHitDetectionRadius : 20,

          //Boolean - Whether to show a stroke for datasets
          datasetStroke : true,

          //Number - Pixel width of dataset stroke
          datasetStrokeWidth : 2,

          //Boolean - Whether to fill the dataset with a colour
          datasetFill : true,

          //String - A legend template
          legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",

          showTooltips: true,

          // Array - Array of string names to attach tooltip events
          tooltipEvents: ["mousemove", "touchstart", "touchmove"],

          // String - Tooltip background colour
          tooltipFillColor: "rgba(0,0,0,0.8)",

          // String - Tooltip label font declaration for the scale label
          tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

          // Number - Tooltip label font size in pixels
          tooltipFontSize: 14,

          // String - Tooltip font weight style
          tooltipFontStyle: "normal",

          // String - Tooltip label font colour
          tooltipFontColor: "#fff",

          // String - Tooltip title font declaration for the scale label
          tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

          // Number - Tooltip title font size in pixels
          tooltipTitleFontSize: 14,

          // String - Tooltip title font weight style
          tooltipTitleFontStyle: "bold",

          // String - Tooltip title font colour
          tooltipTitleFontColor: "#fff",

          // Number - pixel width of padding around tooltip text
          tooltipYPadding: 6,

          // Number - pixel width of padding around tooltip text
          tooltipXPadding: 6,

          // Number - Size of the caret on the tooltip
          tooltipCaretSize: 8,

          // Number - Pixel radius of the tooltip border
          tooltipCornerRadius: 6,

          // Number - Pixel offset from point x to tooltip edge
          tooltipXOffset: 10,

          // String - Template string for single tooltips
          tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

          // String - Template string for single tooltips
          multiTooltipTemplate: "<%= value %>"

        }
        



         var canvas = document.getElementById("circuitchart");
         canvas.width = 650;
         canvas.height = 450;

         //var myline = new Chart(canvas.getContext("2d")).Line(lineChartData,lineOptions);
         //var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Line(lineChartData);


      } else {
        info.title = "Georgia";
        

        var lineChartData = {
          labels : ["2009","2010","2011","2012","2013"],
          datasets :[
          {
          fillColor : "#99CCFF",
          strokeColor : "rgba(220,220,220,1)",
          pointColor : "rgba(220,220,220,1)",
          pointStrokeColor : "#fff",
          
          data : [21638,21279,20478,19115,18424]
          },
          ]};

        var canvas = document.getElementById("circuitchart");
         canvas.width = 650;
         canvas.height = 450;  
        
        var myline = new Chart(canvas.getContext("2d")).Line(lineChartData);
          




      }
};
      var drugdata = {
          labels: ["2010", "2011", "2012", "2013"],
          datasets: [
              {
                  label: "Cocaine",
                  fillColor: "rgba(220,220,220,0.2)",
                  strokeColor: "rgba(220,220,220,1)",
                  pointColor: "rgba(220,220,220,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(220,220,220,1)",
                  data: [10281, 9806, 9185, 8385]
              },
              {
                  label: "Methamphetamine",
                  fillColor: "rgba(151,187,205,0.2)",
                  strokeColor: "rgba(151,187,205,1)",
                  pointColor: "rgba(151,187,205,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(151,187,205,1)",
                  data: [4550, 5232, 6101, 8026]
              },
              {
                  label: "African American",
                  fillColor: "rgba(220,220,220,0.2)",
                  strokeColor: "rgba(220,220,220,1)",
                  pointColor: "rgba(220,220,220,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(220,220,220,1)",
                  data: [12757, 12151, 11209, 10660]
              },
              {
                  label: "white",
                  fillColor: "rgba(151,187,205,0.2)",
                  strokeColor: "rgba(151,187,205,1)",
                  pointColor: "rgba(151,187,205,1)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgba(151,187,205,1)",
                  data: [7476, 7373, 7064, 7106]
              }

          ]
      };

       var canvas = document.getElementById("drugchart");
         canvas.width = 650;
         canvas.height = 450;  

       var myline = new Chart(canvas.getContext("2d")).Line(drugdata);