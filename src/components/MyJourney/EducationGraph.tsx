import React from 'react';
import ReactApexChart from "react-apexcharts";
import {ApexOptions} from "apexcharts";


function EducationGraph() {

    const labes: string[] = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6']

    const series = [{
        data: [
            {
                x: 'Internships',
                y: [
                    new Date('2019-02-27').getTime(),
                    new Date('2019-03-04').getTime()
                ],
                fillColor: '#008FFB',
            },
            {
                x: 'School',
                y: [
                    new Date('2019-03-04').getTime(),
                    new Date('2019-03-08').getTime()
                ],
                fillColor: '#00E396'
            },
            {
                x: 'Projects',
                y: [
                    new Date('2019-03-07').getTime(),
                    new Date('2019-03-10').getTime()
                ],
                fillColor: '#775DD0'
            },
            {
                x: 'Competitions',
                y: [
                    new Date('2019-03-08').getTime(),
                    new Date('2019-03-12').getTime()
                ],
                fillColor: '#FEB019'
            }
        ]
    }]

    const options: ApexOptions = {
        chart: {
            height: 350,
            type: 'rangeBar'
        },
        plotOptions: {
            bar: {
                horizontal: true,
                distributed: true,
                dataLabels: {
                    hideOverflowingLabels: false
                }
            }
        },
        dataLabels: {
            enabled: true,
            textAnchor: 'start',
            formatter: function (val, opt) {
                return labes[opt.dataPointIndex]
            },
            style: {
                colors: ['#f3f4f5', '#fff']
            }
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            show: false
        },
        title: {
            text: 'My Education',
            align: 'center'
        },
        grid: {
            row: {
                colors: ['#f3f4f5', '#fff'],
                opacity: 1
            }
        }
    }

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="rangeBar"
            height={350}
        />
    );
}

export default React.memo(EducationGraph);
