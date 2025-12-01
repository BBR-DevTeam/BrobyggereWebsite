"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let percent = scrollTop / scrollHeight;
            percent = Math.min(Math.max(percent, 0), 1);
            const progressValue = percent * 307.919;
            setProgress(progressValue);
            setIsVisible(scrollTop > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={`progress-wrap ${isVisible ? "active-progress opacity-1" : "opacity-0"}`} onClick={scrollToTop}>
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    style={{
                        transition: "stroke-dashoffset 300ms linear",
                        strokeDasharray: "307.919px",
                        strokeDashoffset: `${307.919 - Math.round(progress)}px`,
                    }}
                />
            </svg>
        </div>
    );
}
