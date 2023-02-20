import React from 'react';
import {Gitgraph, Orientation, templateExtend, TemplateName} from "@gitgraph/react";

function JourneyGraph() {
    let options = {
        orientation: Orientation.VerticalReverse,
        template: templateExtend("metro" as TemplateName, {
            //colors: ["gray", "blue", "turquoise", "darkgreen", "yellowgreen", "navy"],
            commit: {
                message: {
                    displayAuthor: false,
                    displayHash: false
                }
            }
        })
    };

    return (
            <Gitgraph options={options}>
                {gitgraph => {
                    const master = gitgraph.branch("master").commit("Init project");
                    master.commit("create F1 and F2");
                    let feat1 = gitgraph.branch("F1");
                    let feat2 = gitgraph.branch("F2");
                    feat1.commit("1");
                    feat2.commit("2");
                    master.commit("create RC1");
                    let release1 = gitgraph.branch("RC1");
                    release1.commit("3");
                    master.commit("create RC2");
                    let release2 = gitgraph.branch("RC2");
                    release2.commit("4");
                    master.commit("create F3");
                    let feat3 = gitgraph.branch("F3");
                    feat3.commit("5");
                    release1.merge(feat1).merge(feat2);
                    release2.merge(feat3);
                    master.merge(release1);
                    release2.merge(master);
                    master.merge(release2);
                    master.commit("6");
                }}
            </Gitgraph>
    );
}

export default React.memo(JourneyGraph);
