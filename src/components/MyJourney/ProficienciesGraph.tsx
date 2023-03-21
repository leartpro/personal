import React from 'react';
import ReactApexChart from "react-apexcharts";
import {ApexOptions} from "apexcharts";


function ProficienciesGraph() {

    const series = [
        {
            data: [
                {
                    x: 'Java',
                    y: 218
                },
                {
                    x: 'C++',
                    y: 149
                },
                {
                    x: 'Figma',
                    y: 184
                },
                {
                    x: 'Git',
                    y: 55
                },
                {
                    x: 'Miro',
                    y: 84
                },
                {
                    x: 'Jetbrains IDE',
                    y: 31
                },
                {
                    x: 'Github',
                    y: 70
                },
                {
                    x: 'Unity',
                    y: 30
                },
                {
                    x: 'Linux',
                    y: 44
                },
                {
                    x: 'Terminal',
                    y: 68
                },
                {
                    x: 'GUI',
                    y: 28
                },
                {
                    x: 'SQL',
                    y: 19
                },
                {
                    x: 'Latex',
                    y: 29
                }
            ]
        }
    ]

    const options: ApexOptions = {
        legend: {
            show: false
        },
        chart: {
            height: 350,
            type: 'treemap'
        },
        title: {
            text: 'My Proficiencies',
            align: 'center'
        },
        colors: [
            '#3B93A5',
            '#F7B844',
            '#ADD8C7',
            '#EC3C65',
            '#CDD7B6',
            '#C1F666',
            '#D43F97',
            '#1E5D8C',
            '#421243',
            '#7F94B0',
            '#EF6537',
            '#C0ADDB'
        ],
        plotOptions: {
            treemap: {
                distributed: true,
                enableShades: false
            }
        }
    }

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="treemap"
            height={350}
        />
    );
}

export default React.memo(ProficienciesGraph);
