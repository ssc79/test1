$(function () {

    var gaugeOptions = {

        chart: {
            type: 'solidgauge'
        },

        title: null,
        
        pane: {
            center: ['50%', '85%'],
            size: '120%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: 'silver',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 20,
            stops: [
                [0, '#55BF3B'], // green
                [0.3, '#DDDF0D'], // yellow
                [0.5, '#DF5353'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            showFirstLabel: true,
            showLastLabel: true,
            title: {
                y: -85
            },
            labels: {
                y: 16
            }
        },
        credits: {
            enabled: false
        },
    
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };

    // Gemeinde
    $('#container-gemeinde').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            title: {
                text: var_gdenamk,
                style: { "fontSize": "28px" }
            }
        },
        
        series: [{
            name: var_gdenamk,
            data: [var_gde_freq_anz],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:26px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                '<span style="font-size:12px;color:silver"' + 
                '><span>Einbrüche pro<br/>' + ' 1' + "'" + '000 Einwohner</span></span></div>'
            }
        }]

    }));
        
    // Kanton
    $('#container-kanton').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            title: {
                text: "Kt. " + var_ktname,
                style: { "fontSize": "28px" }
            }
        },
        series: [{
            name: var_ktname,
            data: [var_kant_freq_anz],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:26px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                '<span style="font-size:12px;color:silver"' + 
                '><span>Einbrüche pro<br/>' + ' 1' + "'" + '000 Einwohner</span></span></div>'
            }
        }]

    }));
    
        // Schweiz
    $('#container-schweiz').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            title: {
                text: "Schweiz",
                style: { "fontSize": "28px" }
            }
        },
        series: [{
            name: "Schweiz",
            data: [var_swiss_freq_anz],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:26px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                '<span style="font-size:12px;color:silver"' + 
                '><span>Einbrüche pro<br/>' + ' 1' + "'" + '000 Einwohner</span></span></div>'
            }
        }]

    }));


});


// Backgroundcolor
Highcharts.theme = {
   chart: {
      backgroundColor: null
   }
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);