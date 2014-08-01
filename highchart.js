 $(function circuithighchart(circuitname) {


        $(document).ready(function () {
           
           highchart = new Highcharts.Chart({



            chart: {
                type: 'area',
                renderTo: 'highchart',
                style:{
                    fontFamily:'serif'
                }
            },
            title: {
                text: 'The State of Georgia Prison Commitments 09-13'
            },

            xAxis: {
                allowDecimals: false,
                labels: {
                    formatter: function() {
                        return this.value; // clean, unformatted number for year
                    }
                }
            },
            yAxis: {
                title: {
                    text: "Prison commitments"
                },
                labels: {
                    formatter: function() {
                        return this.value / 1000 +'k';
                    }
                }
            },
            tooltip: {
                pointFormat: '{series.name} circuit prison commitments: <b>{point.y:,.0f}</b><br/>'
            },
            plotOptions: {
                area: {
                    pointStart: 2009,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'Georgia State',
                data: [21638,21279,20478,19115,18424]
            }]
           });
        });
    });