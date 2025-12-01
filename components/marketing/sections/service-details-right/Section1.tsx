import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====SERVICE DETAILS START=======*/}
            <div className="service-details-all sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="service-details-area right-padding">
                                <article>
                                    <div className="heading1">
                                        <div className="image">
                                            <img src="assets/img/service/service-details-img1.png" alt="" />
                                        </div>
                                        <div className="space30" />
                                        <h2>HR Consulting &amp; Staffing </h2>
                                        <div className="space16" />
                                        <p>Our HR consulting and staffing support services provide guidance and expertise in areas such as compliance, workforce planning, and talent management, helping you optimize your staffing strategy for long-term success.</p>
                                        <div className="space30" />
                                        <h3>HR compliance and talent management</h3>
                                        <div className="space16" />
                                        <p>Our candidate screening services utilize rigorous screening processes and assessments to ensure that only the most qualified candidates are presented for your consideration.</p>
                                        <div className="space30" />
                                        <h3>Talent to drive your organization's success</h3>
                                        <div className="space16" />
                                        <p>Our industry-specific recruitment services leverage our deep understanding of your industry to source and place candidates with the specialized skills and experience</p>
                                        <div className="space16" />
                                        <p>Our contract staffing solutions provide skilled professionals for short-term projects or specific assignments, allowing you to scale your workforce efficiently.</p>
                                    </div>
                                </article>
                                <div className="space30" />
                                <article>
                                    <div className="heading1">
                                        <h3>Need to fill a position quickly</h3>
                                        <div className="space16" />
                                        <p>Our temp-to-hire programs offer the flexibility to assess candidates on the job before making a permanent hiring decision, minimizing risk &amp; ensuring a cultural fit.</p>
                                        <div className="space16" />
                                        <p>Our executive search services specialize in identifying and attracting top-level executives and leadership talent to drive your organization's success and growth.</p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    <img src="assets/img/service/service-details-img2.png" alt="" />
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>Our direct hire solutions streamline the recruitment process, delivering qualified candidates directly to your organization</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    <img src="assets/img/service/service-details-img3.png" alt="" />
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>Our temporary staffing services provide flexible workforce solutions to meet short-term staffing needs, whether for seasonal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <div className="space20" />
                                <div className="faq-all-area">
                                    <div className="accordion accordion1 accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item active">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    Looking for top talent for permanent roles?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">With our deep industry knowledge and expertise, we excel at identifying top talent, ensuring a seamless recruitment process tailored </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    Require specialized skills for short-term projects?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">With our deep industry knowledge and expertise, we excel at identifying top talent, ensuring a seamless recruitment process tailored </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                    Concerned about cultural fit when hiring?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">With our deep industry knowledge and expertise, we excel at identifying top talent, ensuring a seamless recruitment process tailored </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                    Unsure which staffing solution is right for you?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">With our deep industry knowledge and expertise, we excel at identifying top talent, ensuring a seamless recruitment process tailored </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="details-sidebar">
                                <div className="details-box3">
                                    <h3>Our Services</h3>
                                    <div className="space10" />
                                    <ul className="service-list">
                                        <li>
                                            <Link href="/service-details">
                                                HR Consulting &amp; Staffing
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                Screening Services
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                Specific Recruitment
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                Direct Hire Solutions
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                Recruitment Expertise
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="details-box-call">
                                    <h3>If You Need Any Help Contact With Us</h3>
                                    <div className="space10" />
                                    <Link href="tel:+917052101786" className="call-btn">
                                        <img src="assets/img/icons/details-call.png" alt="" /> +91 705 2101 786
                                    </Link>
                                </div>
                                <div className="details-box2">
                                    <h3>Download Brochure</h3>
                                    <p>Join us on this journey as we share our expertise, ignite conversations</p>
                                    <div className="space10" />
                                    <Link href="#" className="download-btn1">
                                        <img src="assets/img/icons/download-icon.png" alt="" /> Pdf Download
                                    </Link>
                                    <Link href="#" className="download-btn2">
                                        <img src="assets/img/icons/download-icon.png" alt="" /> Pdf Download
                                    </Link>
                                </div>
                                <div className="details-box2">
                                    <h3>Follow Us</h3>
                                    <div className="space10" />
                                    <ul className="icons">
                                        <li>
                                            <Link href="#">
                                                <i className="fa-brands fa-facebook-f" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="fa-brands fa-x-twitter" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="fa-brands fa-linkedin-in" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="fa-brands fa-instagram" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====SERVICE DETAILS END=======*/}
        </>
    );
}
