"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";
import { useState } from "react";

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
};

export default function Section5() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <>
            {/*=====PROJECT AREA START=======*/}
            <section className="project-two d-none d-lg-block" id="project">
                <div className="project-two__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-auto text-center">
                                <div className="heading1">
                                    <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                        Our Project
                                    </span>
                                    <h2 className="text-anime-style-3">Successes A Look at Our Projects</h2>
                                    <div className="space16" />
                                    <p data-aos="fade-up" data-aos-duration={800}>
                                        Explore our portfolio of successful projects that showcase the impact we've made <br />
                                        in connecting top talent with leading organizations. From small-scale placements
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="space60" />
                        <div className="project-two__carousel-container" data-aos="fade-up" data-aos-duration={900}>
                            <Swiper {...swiperOptions} className="project-two__carousel owl-carousel owl-theme thm-owl__carousel project-style1-carousel owl-dot-style1 pb-5">
                                {/*Portfolio Two Single Start*/}
                                <SwiperSlide className="project-two__single-box">
                                    <ul className="project-two__box list-unstyled">
                                        <li className={activeIndex === 0 ? "active" : ""} onMouseEnter={() => handleMouseEnter(0)}>
                                            <div className="project-two__box-content">
                                                <div
                                                    className="single-project-two__bg"
                                                    style={{
                                                        backgroundImage: "url(assets/img/project/project1-img1.png)",
                                                    }}
                                                />
                                                <div className="img-holder-img-bg" />
                                                <div className="project-two__box-content-inner-icon">
                                                    <Link href="#" className="img-popup">
                                                        <i className="icon-next" />
                                                    </Link>
                                                </div>
                                                <div className="project-two__box-content-inner">
                                                    <div className="project-two__box-content-inner-wrapper">
                                                        <p>Staffing Service</p>
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
                                                />
                                                <div className="img-holder-img-bg" />
                                                <div className="project-two__box-content-inner-icon">
                                                    <Link href="assets/img/service/service1-img1.png" className="img-popup">
                                                        <i className="icon-next" />
                                                    </Link>
                                                </div>
                                                <div className="project-two__box-content-inner">
                                                    <div className="project-two__box-content-inner-wrapper">
                                                        <p>Staffing Service</p>
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
                                                />
                                                <div className="img-holder-img-bg" />
                                                <div className="project-two__box-content-inner-icon">
                                                    <Link href="assets/img/service/service1-img1.png" className="img-popup">
                                                        <i className="icon-next" />
                                                    </Link>
                                                </div>
                                                <div className="project-two__box-content-inner">
                                                    <div className="project-two__box-content-inner-wrapper">
                                                        <p>Staffing Service</p>
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
                                </SwiperSlide>
                                {/*Portfolio Two Single End*/}
                                {/*Portfolio Two Single Start*/}
                                <SwiperSlide className="project-two__single-box">
                                    <ul className="project-two__box list-unstyled">
                                        <li className={activeIndex === 3 ? "active" : ""} onMouseEnter={() => handleMouseEnter(3)}>
                                            <div className="project-two__box-content">
                                                <div
                                                    className="single-project-two__bg"
                                                    style={{
                                                        backgroundImage: "url(assets/img/project/project1-img1.png)",
                                                    }}
                                                />
                                                <div className="img-holder-img-bg" />
                                                <div className="project-two__box-content-inner-icon">
                                                    <Link href="#" className="img-popup">
                                                        <i className="icon-next" />
                                                    </Link>
                                                </div>
                                                <div className="project-two__box-content-inner">
                                                    <div className="project-two__box-content-inner-wrapper">
                                                        <p>Staffing Service</p>
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
                                        <li className={activeIndex === 4 ? "active" : ""} onMouseEnter={() => handleMouseEnter(4)}>
                                            <div className="project-two__box-content">
                                                <div
                                                    className="single-project-two__bg"
                                                    style={{
                                                        backgroundImage: "url(assets/img/project/project1-img2.png)",
                                                    }}
                                                />
                                                <div className="img-holder-img-bg" />
                                                <div className="project-two__box-content-inner-icon">
                                                    <Link href="assets/img/service/service1-img1.png" className="img-popup">
                                                        <i className="icon-next" />
                                                    </Link>
                                                </div>
                                                <div className="project-two__box-content-inner">
                                                    <div className="project-two__box-content-inner-wrapper">
                                                        <p>Staffing Service</p>
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
                                        <li className={activeIndex === 5 ? "active" : ""} onMouseEnter={() => handleMouseEnter(5)}>
                                            <div className="project-two__box-content">
                                                <div
                                                    className="single-project-two__bg"
                                                    style={{
                                                        backgroundImage: "url(assets/img/project/project1-img3.png)",
                                                    }}
                                                />
                                                <div className="img-holder-img-bg" />
                                                <div className="project-two__box-content-inner-icon">
                                                    <Link href="assets/img/service/service1-img1.png" className="img-popup">
                                                        <i className="icon-next" />
                                                    </Link>
                                                </div>
                                                <div className="project-two__box-content-inner">
                                                    <div className="project-two__box-content-inner-wrapper">
                                                        <p>Staffing Service</p>
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
                                </SwiperSlide>
                                {/*Portfolio Two Single End*/}
                                {/*Portfolio Two Single Start*/}
                                <SwiperSlide className="project-two__single-box">
                                    <ul className="project-two__box list-unstyled">
                                        <li className={activeIndex === 6 ? "active" : ""} onMouseEnter={() => handleMouseEnter(6)}>
                                            <div className="project-two__box-content">
                                                <div
                                                    className="single-project-two__bg"
                                                    style={{
                                                        backgroundImage: "url(assets/img/project/project1-img1.png)",
                                                    }}
                                                />
                                                <div className="img-holder-img-bg" />
                                                <div className="project-two__box-content-inner-icon">
                                                    <Link href="#" className="img-popup">
                                                        <i className="icon-next" />
                                                    </Link>
                                                </div>
                                                <div className="project-two__box-content-inner">
                                                    <div className="project-two__box-content-inner-wrapper">
                                                        <p>Staffing Service</p>
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
                                        <li className={activeIndex === 7 ? "active" : ""} onMouseEnter={() => handleMouseEnter(7)}>
                                            <div className="project-two__box-content">
                                                <div
                                                    className="single-project-two__bg"
                                                    style={{
                                                        backgroundImage: "url(assets/img/project/project1-img2.png)",
                                                    }}
                                                />
                                                <div className="img-holder-img-bg" />
                                                <div className="project-two__box-content-inner-icon">
                                                    <Link href="assets/img/service/service1-img1.png" className="img-popup">
                                                        <i className="icon-next" />
                                                    </Link>
                                                </div>
                                                <div className="project-two__box-content-inner">
                                                    <div className="project-two__box-content-inner-wrapper">
                                                        <p>Staffing Service</p>
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
                                        <li className={activeIndex === 8 ? "active" : ""} onMouseEnter={() => handleMouseEnter(8)}>
                                            <div className="project-two__box-content">
                                                <div
                                                    className="single-project-two__bg"
                                                    style={{
                                                        backgroundImage: "url(assets/img/project/project1-img3.png)",
                                                    }}
                                                />
                                                <div className="img-holder-img-bg" />
                                                <div className="project-two__box-content-inner-icon">
                                                    <Link href="assets/img/service/service1-img1.png" className="img-popup">
                                                        <i className="icon-next" />
                                                    </Link>
                                                </div>
                                                <div className="project-two__box-content-inner">
                                                    <div className="project-two__box-content-inner-wrapper">
                                                        <p>Staffing Service</p>
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
                                </SwiperSlide>
                                {/*Portfolio Two Single End*/}
                                <div className="swiper-pagination"></div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            {/*=====PROJECT AREA END=======*/}
        </>
    );
}
