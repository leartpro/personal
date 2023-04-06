import React from 'react';
import ReactApexChart from "react-apexcharts";
import {ApexOptions} from "apexcharts";


function SkillGraph() {
    const options: ApexOptions = {
        chart: {
            height: 350,
            type: 'radar',
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            radar: {
                size: 130,
                polygons: {
                    strokeColors: '#e9e9e9',
                    fill: {
                        colors: ['#f8f8f8', '#fff']
                    }
                }
            }
        },
        colors: ['#FF4560'],
        markers: {
            size: 0
        },
        title: {
            text: 'My Skills',
            align: 'center'
        },
        xaxis: {
            categories: ['algorithmic', 'database', 'testing', 'communication', 'version control', 'networking', 'multithreading']
        },
        yaxis: {
            tickAmount: 7,
            labels: {formatter: function () {return ''}}
        }
    };

    const series = [{
        data: [90, 60, 40, 50, 80, 80, 70],
    }]

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="radar"
            height={350}
        />
    );
}

export default React.memo(SkillGraph);
