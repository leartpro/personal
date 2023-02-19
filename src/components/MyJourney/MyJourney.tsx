import React from 'react';
const { Gitgraph } = require("@gitgraph/react");

const MyJourney = () => {
    return (
        <section id={"my-journey"}>
            <h1>MyJourney</h1>
            <Gitgraph>
                {(gitgraph : any) => {
                    // Simulate git commands with Gitgraph API.
                    const master = gitgraph.branch("master");
                    master.commit("Initial commit");

                    const develop = master.branch("develop");
                    develop.commit("Add TypeScript");

                    const aFeature = develop.branch("a-feature");
                    aFeature
                        .commit("Make it work")
                        .commit("Make it right")
                        .commit("Make it fast");

                    develop.merge(aFeature);
                    develop.commit("Prepare v1");

                    master.merge(develop).tag("v1.0.0");
                }}
            </Gitgraph>
        </section>
    );
}

export default MyJourney;