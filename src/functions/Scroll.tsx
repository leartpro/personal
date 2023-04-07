import React from "react";
import * as punycode from "punycode";

export default function scrollToAnchor(event: React.MouseEvent, anchorId: string) {
    event.preventDefault();
    const element = document.getElementById(anchorId);
    if (element) {
        element.scrollIntoView({behavior: "smooth", block: "start"});
    }
}