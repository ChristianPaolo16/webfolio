import React from "react";

export default function BackToTop() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    return (
        <button>
            <div id="backToTop" onClick={handleClick}>
                <div></div>
            </div>
        </button>
    );
}