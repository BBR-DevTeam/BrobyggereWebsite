import Link from "next/link";

export default function Section11() {
    return (
        <>
            {/*=====BLOG AREA START=======*/}
            <div className="blog1 sp overflow-hidden" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading1">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={800}>
                                    Our Blog
                                </span>
                                <h2 className="text-anime-style-3">Flash Your Source for Industry Updates</h2>
                                <div className="space16" />
                                <p data-aos="fade-up" data-aos-duration={800}>
                                    Our blog serves as a valuable resource for both job seekers and employers, offering insightful <br />
                                    articles, industry trends, and expert tips on everything from resume
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="blog1-box overlay-anim" data-aos="zoom-in-up" data-aos-duration={800}>
                                <div className="image">
                                    <img src="assets/img/blog/blog1-img1.png" alt="" />
                                </div>
                                <div className="heading-area">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date.png" alt="" /> Apl 2,2025
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user.png" alt="" /> By Ethan Smith
                                        </Link>
                                    </div>
                                    <div className="heading1">
                                        <h4>
                                            <Link href="/blog-details">Get the Scoop: Our Latest News &amp; Announcements</Link>
                                        </h4>
                                        <div className="space16" />
                                        <p>Whether you're looking to navigate your career path or enhance</p>
                                        <div className="blog1-border" />
                                        <Link href="/blog-details" className="learn">
                                            Learn More
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="blog1-box overlay-anim" data-aos="zoom-in-up" data-aos-duration={900}>
                                <div className="image">
                                    <img src="assets/img/blog/blog1-img2.png" alt="" />
                                </div>
                                <div className="heading-area">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date.png" alt="" /> Apl 2,2025
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user.png" alt="" /> By Ethan Smith
                                        </Link>
                                    </div>
                                    <div className="heading1">
                                        <h4>
                                            <Link href="/blog-details">Industry Insights: Latest News &amp; Developments</Link>
                                        </h4>
                                        <div className="space16" />
                                        <p>Our blog serves as a valuable resource for both job seekers and employers</p>
                                        <div className="blog1-border" />
                                        <Link href="/blog-details" className="learn">
                                            Learn More
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
            </div>
            {/*=====BLOG AREA END=======*/}
        </>
    );
}
