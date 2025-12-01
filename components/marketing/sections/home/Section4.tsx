import Link from "next/link";

export default function Section4() {
    return (
        <>
            {/*=====SERVICE AREA START=======*/}
            <div className="service1 sp overflow-hidden" id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading1-w">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    Our Service
                                </span>
                                <h2 className="text-anime-style-3">Tailored Solutions for Your Hiring Needs</h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={800}>
                                    With our proven track record and commitment to excellence, we're here to support your <br />
                                    organization's growth and help you achieve your hiring goals.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="service1-box" data-aos="zoom-in-up" data-aos-duration={700}>
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service1-img1.png" alt="" />
                                </div>
                                <div className="hover-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/service1-icon1.png" alt="" />
                                    </div>
                                    <div className="space16" />
                                    <div className="heading1-w">
                                        <h4>
                                            <Link href="/service-details">Executive Search Services</Link>
                                        </h4>
                                        <div className="space16" />
                                        <p>Whether you're looking for temporary staffing, direct hire placements,</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service1-box active" data-aos="zoom-in-up" data-aos-duration={900}>
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service1-img2.png" alt="" />
                                </div>
                                <div className="hover-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/service1-icon2.png" alt="" />
                                    </div>
                                    <div className="space16" />
                                    <div className="heading1-w">
                                        <h4>
                                            <Link href="/service-details">HR Consulting &amp; Staffing</Link>
                                        </h4>
                                        <div className="space16" />
                                        <p>Whether you're looking for temporary staffing, direct hire placements,</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service1-box" data-aos="zoom-in-up" data-aos-duration={1100}>
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service1-img3.png" alt="" />
                                </div>
                                <div className="hover-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/service1-icon3.png" alt="" />
                                    </div>
                                    <div className="space16" />
                                    <div className="heading1-w">
                                        <h4>
                                            <Link href="/service-details">Temporary Staffing Services</Link>
                                        </h4>
                                        <div className="space16" />
                                        <p>Whether you're looking for temporary staffing, direct hire placements,</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space50" />
                        <div className="col-lg-12">
                            <div className="text-center" data-aos="zoom-in-up" data-aos-duration={700}>
                                <Link className="theme-btn3" href="/service">
                                    Let’s get started
                                    <span>
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====SERVICE AREA END=======*/}
        </>
    );
}
