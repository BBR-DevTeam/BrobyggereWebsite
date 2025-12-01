"use client";
import Link from "next/link";
import { useState } from "react";

export default function Section2() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };
    return (
        <>
            {/*=====PROJECT AREA START=======*/}
            <div className="project-page-area pb120 d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading1">
                                <h2>View More Projects</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space60" />
                    <div className="row">
                        <div className="project-two__single-box">
                            <ul className="project-two__box list-unstyled">
                                <li className={activeIndex === 0 ? "active" : ""} onMouseEnter={() => handleMouseEnter(0)}>
                                    <div className="project-two__box-content">
                                        <div
                                            className="single-project-two__bg"
                                            style={{
                                                backgroundImage: "url(assets/img/project/project1-img1.png)",
                                            }}
                                        ></div>
                                        <div className="img-holder-img-bg" />
                                        <div className="project-two__box-content-inner-icon">
                                            <Link href="#" className="img-popup">
                                                <i className="icon-next" />
                                            </Link>
                                        </div>
                                        <div className="project-two__box-content-inner">
                                            <div className="project-two__box-content-inner-wrapper">
                                                <p>Staffing Service </p>
                                                <h4>
                                                    <Link href="/project-details">Demonstrating Our Expertise</Link>
                                                </h4>
                                            </div>
                                            <div className="icon">
                                                <Link href="/project-details">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className={activeIndex === 1 ? "active" : ""} onMouseEnter={() => handleMouseEnter(1)}>
                                    <div className="project-two__box-content">
                                        <div
                                            className="single-project-two__bg"
                                            style={{
                                                backgroundImage: "url(assets/img/project/project1-img2.png)",
                                            }}
                                        ></div>
                                        <div className="img-holder-img-bg" />
                                        <div className="project-two__box-content-inner-icon">
                                            <Link href="assets/img/service/service1-img1.png" className="img-popup">
                                                <i className="icon-next" />
                                            </Link>
                                        </div>
                                        <div className="project-two__box-content-inner">
                                            <div className="project-two__box-content-inner-wrapper">
                                                <p>Staffing Service </p>
                                                <h4>
                                                    <Link href="/project-details">Demonstrating Our Expertise</Link>
                                                </h4>
                                            </div>
                                            <div className="icon">
                                                <Link href="/project-details">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className={activeIndex === 2 ? "active" : ""} onMouseEnter={() => handleMouseEnter(2)}>
                                    <div className="project-two__box-content">
                                        <div
                                            className="single-project-two__bg"
                                            style={{
                                                backgroundImage: "url(assets/img/project/project1-img3.png)",
                                            }}
                                        ></div>
                                        <div className="img-holder-img-bg" />
                                        <div className="project-two__box-content-inner-icon">
                                            <Link href="assets/img/service/service1-img1.png" className="img-popup">
                                                <i className="icon-next" />
                                            </Link>
                                        </div>
                                        <div className="project-two__box-content-inner">
                                            <div className="project-two__box-content-inner-wrapper">
                                                <p>Staffing Service </p>
                                                <h4>
                                                    <Link href="/project-details">Demonstrating Our Expertise</Link>
                                                </h4>
                                            </div>
                                            <div className="icon">
                                                <Link href="/project-details">
                                                    <i className="fa-solid fa-arrow-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====PROJECT AREA END=======*/}
        </>
    );
}
