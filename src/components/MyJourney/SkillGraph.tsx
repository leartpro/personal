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
            enabled: true
        },
        plotOptions: {
            radar: {
                size: 140,
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
            size: 4,
            colors: ['#fff'],
            strokeWidth: 2,
        },
        title: {
            text: 'My Skills',
            align: 'center'
        },
        tooltip: {
            y: {
                formatter: function (val: any) {
                    return val
                }
            }
        },
        xaxis: {
            categories: ['algorithmic', 'database', 'testing', 'communication', 'version control', 'networking', 'multithreading']
        },
        yaxis: {
            tickAmount: 7,
            labels: {
                formatter: function (val: any, i: number) {
                    if (i % 2 === 0) {
                        return val
                    } else {
                        return ''
                    }
                }
            }
        }
    };

    const series = [{
        name: 'Series 1',
        data: [100, 60, 40, 50, 80, 80, 70],
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
