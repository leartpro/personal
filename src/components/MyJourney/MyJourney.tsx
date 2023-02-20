import React from 'react';
import JourneyGraph from "./JourneyGraph";

//TODO: Warning: validateDOMNesting(...): <p> cannot appear as a descendant of <p>.
const MyJourney = () => {

    return (
        <section id={"my-journey"}>
            <h1>MyJourney</h1>
            <JourneyGraph/>
        </section>
    );
}

export default MyJourney;