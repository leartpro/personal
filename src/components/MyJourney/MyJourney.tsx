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
                        .commit("Make it fast")
                        .commit({
                            subject: 'Commit with a body',
                            body: <p style={{marginLeft: 400}}>"Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.",</p>
                        });

                    develop.merge(aFeature);
                    develop.commit("Prepare v1");

                    master.merge(develop).tag("v1.0.0");
                }}
            </Gitgraph>
        </section>
    );
}

export default MyJourney;