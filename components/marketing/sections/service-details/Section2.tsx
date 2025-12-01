import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*=====SERVICE AREA START=======*/}
            <div className="service1 service-page-service pb120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading1">
                                <h2>View More Servicve</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="service1-box">
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
                                        <p>Whether you're looking for temporary staffing, direct hire placements, </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service1-box active">
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
                                        <p>Whether you're looking for temporary staffing, direct hire placements, </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service1-box">
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
                                        <p>Whether you're looking for temporary staffing, direct hire placements, </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====SERVICE AREA END=======*/}
        </>
    );
}
