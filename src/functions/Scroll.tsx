import React from "react";

export default function scrollToAnchor(event: React.MouseEvent, anchorId: string) {
    event.preventDefault();
    const element = document.getElementById(anchorId);
    if (element) {
        element.scrollIntoView({behavior: "smooth", block: "start"});
    }
}