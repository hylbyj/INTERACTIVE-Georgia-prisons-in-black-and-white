$(function () {
        $('#container3').highcharts({
            chart: {
                style:{
                    fontFamily:'serif'
                }
            },

            title: {
                text: 'Cocaine vs. African American Commitments',
                x: -10,
                align:"left" //center
            },
            subtitle: {
                text: null,
                x: -20
            },
            xAxis: {
                categories: ['2002', '2003', '2004', '2005', '2006', '2007',
                    '2008', '2009', '2010', '2011', '2012', '2013'],
                plotBands: {
                color: 'rgba(68, 170, 213, .2)', // Color value
                from: '7', // Start of the plot band
                to: '12' // End of the plot band
                },    
            },
            yAxis: [{

                labels: {
                    align: 'right',
                    x: -3,
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
                },

                
                lineWidth: 2,

                title: {
                    text: 'Positive drug test'
                },
            }, {
                labels: {
                    align: 'right',
                    x: -3,
                    
                },
                title: {
                    text: 'Prison commitment',
                },
                
                
                offset: 0,
                lineWidth: 2,
                opposite: true
            }],
            tooltip: {
                crosshairs: true,
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                
                verticalAlign: 'middle',
                
                
                backgroundColor: '#FFFFFF'
            },
                        plotOptions: {
                series: {
                cursor: 'pointer',
                point:{
                events: {
                    click: function() {
                    year = this.category;
                    console.log("year" + this.category);

                    if (year == 2012){
                    chart.series[0].setData(
                        [
                    ['White',   17264],
                    ['Black',   33789],
                    {
                        name: 'Other',
                        y: 47,
                        sliced: true,
                        selected: true
                    },
                    ['Asian',    150],
                    ['Unknown',  3],
                    ['Hipanic',   2396]
                    ['Native Amercian',28]
                ]); chart.series[1].setData(
                        [
                    ['White',   2056],
                    ['Black',   1738],
                    {
                        name: 'Other',
                        y: 10,
                        sliced: true,
                        selected: true
                    },
                    ['Asian',    5],
                    ['Unknown',  0],
                    ['Hipanic',   79]
                    ['Native Amercian',5]])}

                    if(year == 2011){
                    chart.series[0].setData(
                        [
                    ['White',   15868],
                    ['Black',   31454],
                    {
                        name: 'Other',
                        y: 49,
                        sliced: true,
                        selected: true
                    },
                    ['Asian',    124],
                    ['Unknown',  0],
                    ['Hipanic',   2229]
                    ['Native Amercian',27]
                ]); chart.series[1].setData(
                        [
                    ['White',   1884],
                    ['Black',   1615],
                    {
                        name: 'Other',
                        y: 6,
                        sliced: true,
                        selected: true
                    },
                    ['Asian',    3],
                    ['Unknown',  0],
                    ['Hipanic',   77]
                    ['Native Amercian',5]])}

                    if(year == 2010){
                    chart.series[0].setData(
                        [
                    ['White',   15246],
                    ['Black',   31115],
                    {
                        name: 'Other',
                        y: 59,
                        sliced: true,
                        selected: true
                    },
                    ['Asian',    102],
                    ['Unknown',  2],
                    ['Hipanic',   2015]
                    ['Native Amercian',31]
                ]); chart.series[1].setData(
                        [
                    ['White',   1909],
                    ['Black',   1753],
                    {
                        name: 'Other',
                        y: 3,
                        sliced: true,
                        selected: true
                    },
                    ['Asian',    4],
                    ['Unknown',  0],
                    ['Hipanic',   50]
                    ['Native Amercian',2]])}  
                    if(year == 2009){
                    chart.series[0].setData(
                        [
                    ['White',   18111],
                    ['Black',   31803],
                    {
                        name: 'Asian',
                        y: 67,
                        sliced: true,
                        selected: true
                    },
                    ['Indian',    44],
                ]); chart.series[1].setData(
                        [
                    ['White',   1939],
                    ['Black',   1754],
                    {
                        name: 'Asian',
                        y: 3,
                        sliced: true,
                        selected: true
                    },
                    ['Indian',    8]
                ])}
                    if(year == 2008){
                    chart.series[0].setData(
                        [
                    ['White',   18586],
                    ['Black',   31510],
                    {
                        name: 'Asian',
                        y: 63,
                        sliced: true,
                        selected: true
                    },
                    ['Indian',    58],
                ]); chart.series[1].setData(
                        [
                    ['White',   1937],
                    ['Black',   1604],
                    {
                        name: 'Asian',
                        y: 2,
                        sliced: true,
                        selected: true
                    },
                    ['Indian',    5]
                ])}
                    if(year == 2007){
                    chart.series[0].setData(
                        [
                    ['White',   18479],
                    ['Black',   30894],
                    {
                        name: 'Asian',
                        y: 54,
                        sliced: true,
                        selected: true
                    },
                    ['Indian',    42],
                ]); chart.series[1].setData(
                        [
                    ['White',   1877],
                    ['Black',   1635],
                    {
                        name: 'Asian',
                        y: 2,
                        sliced: true,
                        selected: true
                    },
                    ['Indian',    3]
                ])}
                    if(year == 2006){
                    chart.series[0].setData(
                        [
                    ['White',   18126],
                    ['Black',   30675],
                    {
                        name: 'Asian',
                        y: 59,
                        sliced: true,
                        selected: true
                    },
                    ['Indian',    44],
                ]); chart.series[1].setData(
                        [
                    ['White',   1845],
                    ['Black',   1644],
                    {
                        name: 'Asian',
                        y: 2,
                        sliced: true,
                        selected: true
                    },
                    ['Indian',    3]
                ])}
                    if(year == 2005){
                    chart.series[0].setData(
                        [
                    ['White',   16163],
                    ['Non-White',   28460],
                ]);  chart.series[1].setData(
                        [
                    ['White',   1292],
                    ['Non-White',   1389]
                ])}
                    if(year == 2004){
                    chart.series[0].setData(
                        [
                    ['White',   16183],
                    ['Non-White',   29324],
                ]);  chart.series[1].setData(
                        [
                    ['White',   1501],
                    ['Non-White',   1615]
                ])}               
                    if(year == 2003){
                    chart.series[0].setData(
                        [
                    ['White',   15453],
                    ['Non-White',   28613],
                ]); chart.series[1].setData(
                        [
                    ['White',   1458],
                    ['Non-White',   1651]
                ])}     
                    if(year == 2002){
                    chart.series[0].setData(
                        [
                    ['White',   14712],
                    ['Non-White',   28921],
                ]); chart.series[1].setData(
                        [
                    ['White',   1330],
                    ['Non-White',   1676]
                ])}                                             
                    }
                  }
               }
           }
            },

            series: [{
                name: 'Cocaine',
                data: [20628,16148,15825,18846,20377,19598,17644,13147,10281,9806,9185,8385]
            }, {
                yAxis: 1,
                name: 'African Amercian',
                data: [10858,11853,11856,11361,12502,12411,12955,13366,12757,12151,11209,10660],
                
            }]
        });
    });

$(function () {
        $('#container4').highcharts({
            chart: {
                style:{
                    fontFamily:'serif'
                }
            },
                title: {
                text: 'Methamphetamine vs. White Commitments',
                x: -10, //center
                align:'left'
            },
            subtitle: {
                text: null,
                x: -20
            },
            xAxis: {

                categories: ['2002', '2003', '2004', '2005', '2006', '2007',
                    '2008', '2009', '2010', '2011', '2012', '2013'],
              plotBands: {
                color: 'rgba(68, 170, 213, .2)', // Color value
                from: '7', // Start of the plot band
                to: '12' // End of the plot band
                },

            },
            yAxis: [{
                labels: {
                    align: 'right',
                    x: -3,
                style: {
                    color: Highcharts.getOptions().colors[0]
                }                    

                },

                
                lineWidth: 2,
                title: {
                    text: 'Positive drug test'
                    
                },
            }, {
                labels: {
                    align: 'right',
                    x: -3,
                    
                },
                title: {
                    text: 'Prison commitment'
                },
                
                
                offset: 0,
                lineWidth: 2,
                opposite: true
            }],
            tooltip: {
                crosshairs: true,
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                
                verticalAlign: 'middle',
                
                
                backgroundColor: '#FFFFFF'
            },
                        plotOptions: {
                series: {
                cursor: 'pointer',
                point:{
                events: {
                    click: function() {
                    year = this.category;
                    console.log("year" + this.category);

                    if (year == 2012){
                    chart.series[0].setData(
                        [
                    ['White',   17264],
                    ['Black',   33789],
                    {
                        name: 'Other',
                        y: 47,
                        sliced: true,
                        selected: true
                    },
                    ['Asian',    150],
                    ['Unknown',  3],
                    ['Hipanic',   2396]
                    ['Native Amercian',28]
                ]); chart.series[1].setData(
                        [
                    ['White',   2056],
                    ['Black',   1738],
                    {
                        name: 'Other',
                        y: 10,
                        sliced: true,
                        selected: true
                    },
                    ['Asian',    5],
                    ['Unknown',  0],
                    ['Hipanic',   79]
                    ['Native Amercian',5]])}

                    if(year == 2011){
                    chart.series[0].setData(
                        [
                    ['White',   15868],
                    ['Black',   31454],
                    {
                        name: 'Other',
                        y: 49,
                        sliced: true,
                        selected: true
                    },
                    ['Asian',    124],
                    ['Unknown',  0],
                    ['Hipanic',   2229]
                    ['Native Amercian',27]
                ]); chart.series[1].setData(
                        [
                    ['White',   1884],
                    ['Black',   1615],
                    {
                        name: 'Other',
                        y: 6,
                        sliced: true,
                        selected: true
                    },
                    ['Asian',    3],
                    ['Unknown',  0],
                    ['Hipanic',   77]
                    ['Native Amercian',5]])}

                    if(year == 2010){
                    chart.series[0].setData(
                        [
                    ['White',   15246],
                    ['Black',   31115],
                    {
                        name: 'Other',
                        y: 59,
                        sliced: true,
                        selected: true
                    },
                    ['Asian',    102],
                    ['Unknown',  2],
                    ['Hipanic',   2015]
                    ['Native Amercian',31]
                ]); chart.series[1].setData(
                        [
                    ['White',   1909],
                    ['Black',   1753],
                    {
                        name: 'Other',
                        y: 3,
                        sliced: true,
                        selected: true
                    },
                    ['Asian',    4],
                    ['Unknown',  0],
                    ['Hipanic',   50]
                    ['Native Amercian',2]])}  
                    if(year == 2009){
                    chart.series[0].setData(
                        [
                    ['White',   18111],
                    ['Black',   31803],
                    {
                        name: 'Asian',
                        y: 67,
                        sliced: true,
                        selected: true
                    },
                    ['Indian',    44],
                ]); chart.series[1].setData(
                        [
                    ['White',   1939],
                    ['Black',   1754],
                    {
                        name: 'Asian',
                        y: 3,
                        sliced: true,
                        selected: true
                    },
                    ['Indian',    8]
                ])}
                    if(year == 2008){
                    chart.series[0].setData(
                        [
                    ['White',   18586],
                    ['Black',   31510],
                    {
                        name: 'Asian',
                        y: 63,
                        sliced: true,
                        selected: true
                    },
                    ['Indian',    58],
                ]); chart.series[1].setData(
                        [
                    ['White',   1937],
                    ['Black',   1604],
                    {
                        name: 'Asian',
                        y: 2,
                        sliced: true,
                        selected: true
                    },
                    ['Indian',    5]
                ])}
                    if(year == 2007){
                    chart.series[0].setData(
                        [
                    ['White',   18479],
                    ['Black',   30894],
                    {
                        name: 'Asian',
                        y: 54,
                        sliced: true,
                        selected: true
                    },
                    ['Indian',    42],
                ]); chart.series[1].setData(
                        [
                    ['White',   1877],
                    ['Black',   1635],
                    {
                        name: 'Asian',
                        y: 2,
                        sliced: true,
                        selected: true
                    },
                    ['Indian',    3]
                ])}
                    if(year == 2006){
                    chart.series[0].setData(
                        [
                    ['White',   18126],
                    ['Black',   30675],
                    {
                        name: 'Asian',
                        y: 59,
                        sliced: true,
                        selected: true
                    },
                    ['Indian',    44],
                ]); chart.series[1].setData(
                        [
                    ['White',   1845],
                    ['Black',   1644],
                    {
                        name: 'Asian',
                        y: 2,
                        sliced: true,
                        selected: true
                    },
                    ['Indian',    3]
                ])}
                    if(year == 2005){
                    chart.series[0].setData(
                        [
                    ['White',   16163],
                    ['Non-White',   28460],
                ]);  chart.series[1].setData(
                        [
                    ['White',   1292],
                    ['Non-White',   1389]
                ])}
                    if(year == 2004){
                    chart.series[0].setData(
                        [
                    ['White',   16183],
                    ['Non-White',   29324],
                ]);  chart.series[1].setData(
                        [
                    ['White',   1501],
                    ['Non-White',   1615]
                ])}               
                    if(year == 2003){
                    chart.series[0].setData(
                        [
                    ['White',   15453],
                    ['Non-White',   28613],
                ]); chart.series[1].setData(
                        [
                    ['White',   1458],
                    ['Non-White',   1651]
                ])}     
                    if(year == 2002){
                    chart.series[0].setData(
                        [
                    ['White',   14712],
                    ['Non-White',   28921],
                ]); chart.series[1].setData(
                        [
                    ['White',   1330],
                    ['Non-White',   1676]
                ])}                                             
                    }
                  }
               }
           }
            },

            series: [{
                name: 'Methamphetamine',
                data: [4680,5475,7259,9478,10563,7220,4463,4732,4550,5232,6101,8026]
            }, {
                yAxis: 1,
                name: 'White Amercian',
                data: [6442,6870,7272,7571,7903,7770,7122,7291,7476,7373,7064,7106],
                
            }]
        });
    });