import Link from "next/link";

export default function Section10({ classList }: any) {
    return (
        <>
            {/*=====TEAM AREA START=======*/}
            <div className={`team1 sp overflow-hidden ${classList}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto text-center">
                            <div className="heading1">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={800}>
                                    Our Team
                                </span>
                                <h2 className="text-anime-style-3">Get to Know Our Professionals</h2>
                                <div className="space16" />
                                <p data-aos="fade-up" data-aos-duration={700}>
                                    We take pride in fostering a collaborative environment where innovation <br />
                                    thrives and clients receive personalized attention at every step
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="team1-box overlay-anim" data-aos="zoom-in-up" data-aos-duration={700}>
                                <div className="image">
                                    <img src="assets/img/team/team1-img1.png" alt="" />
                                </div>
                                <div className="heading-area">
                                    <div className="heading1">
                                        <h4>
                                            <Link href="#">Sameer Rizvi</Link>
                                        </h4>
                                        <p>Senior Consultant</p>
                                    </div>
                                    <div className="icons">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team1-box overlay-anim" data-aos="zoom-in-up" data-aos-duration={900}>
                                <div className="image">
                                    <img src="assets/img/team/team1-img2.png" alt="" />
                                </div>
                                <div className="heading-area">
                                    <div className="heading1">
                                        <h4>
                                            <Link href="#">Arshin Kulkarni</Link>
                                        </h4>
                                        <p>VP, Finance</p>
                                    </div>
                                    <div className="icons">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team1-box overlay-anim" data-aos="zoom-in-up" data-aos-duration={1100}>
                                <div className="image">
                                    <img src="assets/img/team/team1-img1.png" alt="" />
                                </div>
                                <div className="heading-area">
                                    <div className="heading1">
                                        <h4>
                                            <Link href="#">Rachin Ravindra</Link>
                                        </h4>
                                        <p>Senior Consultant</p>
                                    </div>
                                    <div className="icons">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====TEAM AREA END=======*/}
        </>
    );
}
