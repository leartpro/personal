import React from "react";

function scrollToAnchor(event: React.MouseEvent, anchorId: string) {
    event.preventDefault();
    const element = document.getElementById(anchorId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}


function Header() {
    return (
        <div className="sticky-bar">
            <nav>
                <ul>
                    <li><a href="#home" onClick={(event) => scrollToAnchor(event, "home")}>Home</a></li>
                    <li><a href="#about" onClick={(event) => scrollToAnchor(event, "about")}>About</a></li>
                    <li><a href="#my-journey" onClick={(event) => scrollToAnchor(event, "my-journey")}>My-Journey</a></li>
                    <li><a href="#blog" onClick={(event) => scrollToAnchor(event, "blog")}>Blog</a></li>
                    <li><a href="#contact" onClick={(event) => scrollToAnchor(event, "contact")}>Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;

