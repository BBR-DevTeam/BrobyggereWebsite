import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*=====OUR MISSION AREA START=======*/}
            <div className="mission sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto text-center">
                            <div className="heading1">
                                <span className="span">Our Mission</span>
                                <h2>Success Our Guiding Mission</h2>
                                <div className="space16" />
                                <p> We believe that by connecting talented professionals with leading companies, we can create opportunities for growth, innovation</p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-box">
                                <div className="icon">
                                    <img src="assets/img/icons/mission-icon1.png" alt="" />
                                </div>
                                <div className="heading1">
                                    <h5>
                                        <Link href="#">Connecting Talent Opportunity</Link>
                                    </h5>
                                    <div className="space16" />
                                    <p>With a focus integrity, collaboration, and personalized service, we strive</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-box">
                                <div className="icon">
                                    <img src="assets/img/icons/mission-icon2.png" alt="" />
                                </div>
                                <div className="heading1">
                                    <h5>
                                        <Link href="#">Careers, Elevating Businesses</Link>
                                    </h5>
                                    <div className="space16" />
                                    <p>Our commitment excellence guides everything we do ,understanding </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-box">
                                <div className="icon">
                                    <img src="assets/img/icons/mission-icon1.png" alt="" />
                                </div>
                                <div className="heading1">
                                    <h5>
                                        <Link href="#"> Driving Success Together</Link>
                                    </h5>
                                    <div className="space16" />
                                    <p> DWe believe that connecting talented professionals leading companies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====OUR MISSION AREA END=======*/}
        </>
    );
}
