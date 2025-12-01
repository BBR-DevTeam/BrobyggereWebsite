import Link from "next/link";

export default function Section9() {
    return (
        <>
            {/*=====CONTACT AREA START=======*/}
            <div className="contact1 sp overflow-hidden" id="contact">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="heading1-w">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    Contact Us
                                </span>
                                <h2 className="text-anime-style-3">Get in Touch Let's Start the Conversation</h2>
                                <div className="space16" />
                                <p data-aos="fade-right" data-aos-duration={900}>
                                    We're here to help you find the right staffing solutions for your needs. Whether you're a company looking to hire top talent or a candidate seeking your next career opportunity,
                                </p>
                                <div className="" data-aos="fade-right" data-aos-duration={800}>
                                    <div className="contact1-box">
                                        <div className="icon">
                                            <img src="assets/img/icons/contact-icon1.png" alt="" />
                                        </div>
                                        <div className="heading">
                                            <p>Gives us a Call</p>
                                            <Link href="tel:123-456-7890">123-456-7890</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="" data-aos="fade-right" data-aos-duration={1100}>
                                    <div className="contact1-box">
                                        <div className="icon">
                                            <img src="assets/img/icons/contact-icon2.png" alt="" />
                                        </div>
                                        <div className="heading">
                                            <p>Send me Mail</p>
                                            <Link href="mailto:recrute@hotmail.com">recrute@hotmail.com</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact1-form" data-aos="zoom-out" data-aos-duration={900}>
                                <div className="heading1">
                                    <h3>Send us a Message</h3>
                                    <div className="space16" />
                                    <p>Feel free to reach out to us with any questions, inquiries, or staffing requirements you may have. Our experienced</p>
                                </div>
                                <div className="space10" />
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single-input">
                                                <input type="text" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-input">
                                                <input type="text" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-input">
                                                <input type="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-input">
                                                <input type="number" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-input">
                                                <input type="text" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-input">
                                                <textarea rows={4} placeholder="Message" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="button">
                                                <button className="theme-btn1">
                                                    Submit Now
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====CONTACT AREA END=======*/}
        </>
    );
}
