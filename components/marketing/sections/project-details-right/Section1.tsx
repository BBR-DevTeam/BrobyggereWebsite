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
                                        <h2>Demonstrating Our Expertise </h2>
                                        <div className="space16" />
                                        <p>Welcome to our Projects section, where we showcase the successful placements &amp; projects that demonstrate our expertise and track record of delivering results. Each project featured here represents a partnership between our agency</p>
                                        <div className="space30" />
                                        <h3>Placements Transformative Partnerships</h3>
                                        <div className="space16" />
                                        <p>From executive-level placements to specialized skill sets, our projects highlight the diverse range of industries and roles we've successfully filled.</p>
                                        <div className="space30" />
                                        <h3>Project Portfolio Our Proud Achievements</h3>
                                        <div className="space16" />
                                        <p>Sharing these success stories, we aim to provide insight process, expertise,&amp; commitment to excellence. Explore our Projects section to learn more about the impactful partnerships we've forged and the results we've achieved.</p>
                                        <div className="space16" />
                                        <p>Step into our Projects section, where the stories of our successful placements come to life. Each project featured here represents a collaborative journey between</p>
                                        <div className="space30" />
                                        <h3>Showcasing Our Work</h3>
                                        <div className="space16" />
                                        <p> From executive-level placements shaping the direction of companies to specialized skill sets driving innovation in diverse industries, our projects span a spectrum </p>
                                        <div className="space16" />
                                        <p>Through meticulous candidate selection, tailored recruitment strategies, and a deep understanding of our clients' needs, we've consistently delivered exceptional results.</p>
                                    </div>
                                </article>
                                <article>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="space30" />
                                            <div className="image">
                                                <img src="assets/img/service/service-details-img2.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="space30" />
                                            <div className="project-details-list">
                                                <ul>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Facers voluptatum meatus, volutes.
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Habitant seeped corrupts fuse culpa.
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Tempore Atenean debits, Atenean.
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Quisqueya venerates fringillid bland.
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Bibendum corrupts quake chillum.
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Habitant seeped corrupts fuse culpa.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space10" />
                                    <div className="porgress-line-all">
                                        <div className="progress-line">
                                            <h6>Consulting</h6>
                                            <div id="progress1" data-init="true" />
                                        </div>
                                        <div className="progress-line">
                                            <h6>Marketing</h6>
                                            <div id="progress2" data-init="true" />
                                        </div>
                                    </div>
                                    <div className="space30" />
                                    <div className="heading1">
                                        <h3>Driving Business Growth</h3>
                                        <div className="space16" />
                                        <p>These case studies serve as testament to our expertise, dedication, and unwavering commitment to excellence. Dive into our Projects section to discover </p>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="details-sidebar">
                                <div className="details-box2">
                                    <h3>Search</h3>
                                    <div className="space10" />
                                    <div className="search-area">
                                        <form action="#">
                                            <input type="search" placeholder="Search..." />
                                            <button>
                                                <i className="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="details-box2">
                                    <h3>Our Tags</h3>
                                    <div className="space10" />
                                    <ul className="tags">
                                        <li>
                                            <Link href="#">Staffing</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Creative</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Design</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Art</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Development</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Image</Link>
                                        </li>
                                        <li>
                                            <Link href="#">People</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Tech</Link>
                                        </li>
                                        <li>
                                            <Link href="#">3D Images</Link>
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
                                    <h3>Get A Free Quote</h3>
                                    <div className="space10" />
                                    <div className="form">
                                        <form action="#">
                                            <input type="text" placeholder="Your Name" />
                                            <input type="email" placeholder="Email Address" />
                                            <input type="number" placeholder="Phone Number" />
                                            <textarea placeholder="Your Message" rows={3} defaultValue={""} />
                                            <div className="space10" />
                                            <button className="theme-btn1">
                                                Submit Now
                                                <span>
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </button>
                                        </form>
                                    </div>
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
