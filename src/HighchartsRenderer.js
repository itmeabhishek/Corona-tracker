import Highcharts from 'highcharts';
 const HighChartsRender = (id, data) => {
    // console.log("Inside Charts ", data);
    const chart = Highcharts.chart(id, {
        chart: {
            type: 'column',
            backgroundColor: "rgba(255, 255, 255, 0)",
             plotBackgroundColor: null
        },
        plotOptions: {
            series: {
              dataLabels: {
                enabled: true,
                color: "#FFFFFFD9",
                border: "none",
              }
            }
          },
        title: {
            text: "chart",
            align: 'left',
            style:{
                color: '#FFFFFF80',
                fontFamily: 'ROBOTO',
                fontSize: '2.5vh'
            }
        },
        yAxis: {
            tickLength: 0,
            gridLineWidth:0,
            labels:{
                enabled: false
            },
            title: false
        },
       
        xAxis: {
            categories:["active","confirmed","deceased","recovered"],
            crosshair: false,
            tickLength: 0,
            labels:{
                rotation: 0,
                style:{
                    textOverflow: "none",
                    fontSize: '1.5vh',
                    color: '#FFFFFFA6'
                }
            },
            
        },  
        series: [{
    
            data:[...data],
            showInLegend: false
    
        }],
        dataLabels: {
            enabled: true,
            verticalAlign: 'top',
            y: -20,
            overflow: "none",
            
        },
        
        credits: {
            enabled: false
        }
    });
    return chart;
}
export default HighChartsRender;