import Link from "next/link";

export default function Section7() {
    return (
        <>
            {/*=====WORK AREA START=======*/}
            <div className="work1 sp overflow-hidden" id="work">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="work-img reveal overlay-anim">
                                <img src="assets/img/work/work1-image.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading1 work1-heading">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    Recruitment Technologies
                                </span>
                                <h2 className="text-anime-style-3">Solving Recruitment Using Technology</h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={900}>
                                    Whether you're seeking temporary assignments, placements, or executive-level positions, our curated
                                </p>
                                <div className="space10" />
                                <div className="" data-aos="fade-left" data-aos-duration={900}>
                                    <div className="work1-box">
                                        <div className="">
                                            <div className="icon">
                                                <img src="assets/img/icons/work1-icon1.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="heading1">
                                            <h4>
                                                <Link href="/service-details">Sourcing the Best</Link>
                                            </h4>
                                            <p>Stay tuned for regular updates and valuable insights from our team of staffing experts.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="" data-aos="fade-left" data-aos-duration={700}>
                                    <div className="work1-box">
                                        <div className="">
                                            <div className="icon">
                                                <img src="assets/img/icons/work1-icon2.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="heading1">
                                            <h4>
                                                <Link href="/service-details">Volume Hiring</Link>
                                            </h4>
                                            <p>Remember to keep your blog content informative, engaging, and relevant to your target audience</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="" data-aos="fade-left" data-aos-duration={1100}>
                                    <div className="work1-box">
                                        <div className="">
                                            <div className="icon">
                                                <img src="assets/img/icons/work1-icon3.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="heading1">
                                            <h4>
                                                <Link href="/service-details">Partners in Team Building</Link>
                                            </h4>
                                            <p>This will help drive traffic to your website &amp; establish your agency as a trusted authority</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====WORK AREA END=======*/}
        </>
    );
}
