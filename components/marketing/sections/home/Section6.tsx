import Link from "next/link";

export default function Section6() {
    return (
        <>
            {/*=====PROJECT AREA START=======*/}
            <section className="project-two d-lg-block d-lg-none">
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
                                    <p>
                                        Explore our portfolio of successful projects that showcase the impact we've made <br />
                                        in connecting top talent with leading organizations. From small-scale placements
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="space60" />
                        <div className="project-two__carousel-container">
                            <div className="project-two__carousel owl-carousel owl-theme thm-owl__carousel project-style1-carousel owl-dot-style1">
                                {/*Portfolio Two Single Start*/}
                                <div className="project-two__single-box">
                                    <ul className="project-two__box project-two__box2 list-unstyled">
                                        <li className="active">
                                            <div className="project-two__box-content project-two__box-content2">
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
                                    </ul>
                                </div>
                                {/*Portfolio Two Single End*/}
                                {/*Portfolio Two Single Start*/}
                                <div className="project-two__single-box">
                                    <ul className="project-two__box project-two__box2 list-unstyled">
                                        <li className="active">
                                            <div className="project-two__box-content project-two__box-content2">
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
                                    </ul>
                                </div>
                                {/*Portfolio Two Single End*/}
                                {/*Portfolio Two Single Start*/}
                                <div className="project-two__single-box">
                                    <ul className="project-two__box project-two__box2 list-unstyled">
                                        <li className="active">
                                            <div className="project-two__box-content project-two__box-content2">
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
                                </div>
                                {/*Portfolio Two Single End*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*=====PROJECT AREA END=======*/}
        </>
    );
}
