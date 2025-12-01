import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*=====ABOUT AREA START=======*/}
            <div className="chosse1 sp overflow-hidden" id="choose">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2">
                            <div className="" data-aos="zoom-in-up" data-aos-duration={700}>
                                <div className="icon-box">
                                    <div className="icon">
                                        <img src="assets/img/icons/choose1-icon1.png" alt="" />
                                    </div>
                                    <div className="heading1">
                                        <h3>
                                            <span className="counter">98</span>%
                                        </h3>
                                        <div className="space10" />
                                        <p>Successful Client</p>
                                    </div>
                                </div>
                            </div>
                            <div className="" data-aos="zoom-in-up" data-aos-duration={900}>
                                <div className="icon-box">
                                    <div className="icon">
                                        <img src="assets/img/icons/choose1-icon2.png" alt="" />
                                    </div>
                                    <div className="heading1">
                                        <h3>
                                            <span className="counter">79</span>%
                                        </h3>
                                        <div className="space10" />
                                        <p>Team Advisors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="" data-aos="zoom-in-up" data-aos-duration={1200}>
                                <div className="icon-box icon-box2">
                                    <div className="icon">
                                        <img src="assets/img/icons/choose1-icon3.png" alt="" />
                                    </div>
                                    <div className="heading1">
                                        <h3>
                                            <span className="counter">12</span>+
                                        </h3>
                                        <div className="space10" />
                                        <p>Years Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="image reveal overlay-anim">
                                <img src="assets/img/others/choose1-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="heading1 choose1-heading">
                                <span className="span" data-aos="fade-left" data-aos-duration={700}>
                                    Why Choose Us
                                </span>
                                <h2 className="text-anime-style-3">Choose Excellence Elevate Your Hiring Experience</h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={900}>
                                    Our team of industry experts is dedicated to understanding your unique needs and delivering tailored solutions that propel your business forward.
                                </p>
                                <div className="space10" />
                                <div className="row" data-aos="fade-left" data-aos-duration={800}>
                                    <div className="col-lg-6">
                                        <ul className="icon-list">
                                            <li>
                                                <span>
                                                    <i className="fa-solid fa-check" />
                                                </span>
                                                Range Of Services
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="icon-list">
                                            <li>
                                                <span>
                                                    <i className="fa-solid fa-check" />
                                                </span>
                                                Professional Expertise
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="icon-list">
                                            <li>
                                                <span>
                                                    <i className="fa-solid fa-check" />
                                                </span>
                                                Online Recourses
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="icon-list">
                                            <li>
                                                <span>
                                                    <i className="fa-solid fa-check" />
                                                </span>
                                                Client Success Stories
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="space30" />
                                <div className="" data-aos="fade-left" data-aos-duration={1100}>
                                    <Link className="theme-btn1" href="/about">
                                        About US
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====ABOUT AREA END=======*/}
        </>
    );
}
