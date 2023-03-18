import React from 'react';
import {Gitgraph, Orientation, templateExtend, TemplateName} from "@gitgraph/react";


function EducationGraph() {
    const colors = ["gray", "green", "gold", "dodgerblue", "steelblue", "slateblue", "blueviolet", "darkmagenta", "darkslateblue", "navy", "indigo"]

    function getCustomHeaderStyle(index: number) {
        return {
            color: colors[index + 3],
            strokeColor: 'transparent',
            bgColor: 'transparent',
            font: 'bold 20pt serif',
            borderRadius: 0,
            pointerWidth: 0,
        }
    }

    function getCustomSubHeaderStyle(index: number) {
        return {
            color: colors[index + 3],
            strokeColor: 'transparent',
            bgColor: 'transparent',
            font: 'bold italic 16pt serif',
            borderRadius: 0,
            pointerWidth: 0,
        }
    }

    let options = {
        orientation: Orientation.VerticalReverse,
        template: templateExtend("metro" as TemplateName, {
            colors: colors,
            branch: {
                label: {
                    display: false,
                },
            },
            commit: {
                message: {
                    displayAuthor: false,
                    displayHash: false
                }
            },
        })
    };
    return (
        <Gitgraph options={options}>
            {
                gitgraph => {
                    let master = gitgraph.branch("master").commit("");
                    let release = gitgraph.branch({name: 'release', from: master,}).commit("");
                    let develop = gitgraph.branch({name: 'develop', from: master,}).commit("");
                }
            }
        </Gitgraph>
    );
}

export default React.memo(EducationGraph);
