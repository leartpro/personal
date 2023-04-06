import React from 'react';
import ReactApexChart from "react-apexcharts";
import {ApexOptions} from "apexcharts";


function EducationGraph() {

    const labes: string[] = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test11', 'test12']

    const series = [{
        data: [
            {
                x: 'School',
                y: [
                    new Date('2011-02-27').getTime(),
                    new Date('2015-03-04').getTime()
                ],
                fillColor: '#008FFB'
            },
            {
                x: 'School',
                y: [
                    new Date('2016-02-27').getTime(),
                    new Date('2023-03-04').getTime()
                ],
                fillColor: '#008FFB'
            },
            {
                x: 'Internships',
                y: [
                    new Date('2018-03-04').getTime(),
                    new Date('2018-03-08').getTime()
                ],
                fillColor: '#00E396'
            },
            {
                x: 'Internships',
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
                    new Date('2022-01-08').getTime(),
                    new Date('2022-03-12').getTime()
                ],
                fillColor: '#FEB019'
            },
            {
                x: 'Competitions',
                y: [
                    new Date('2023-01-01').getTime(),
                    new Date('2023-03-12').getTime()
                ],
                fillColor: '#FEB019'
            }
        ]
    }
    ]

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
