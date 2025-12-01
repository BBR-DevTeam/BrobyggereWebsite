import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*===== CTA AREA START =======*/}
            <div className="cta">
                <div className="container">
                    <div className="row cta-border align-items-center">
                        <div className="col-lg-6">
                            <div className="heading1-w">
                                <h2>Ready to Power up your Savings and Reliability?</h2>
                                <div className="space16" />
                                <p>
                                    Feel free to customize this paragraph to better reflect the <br /> specific services offered by your IT solution &amp; the unique
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="subscribe-area">
                                <form action="#">
                                    <input type="email" placeholder="Email Address" />
                                    <div className="button">
                                        <button type="submit" className="theme-btn1">
                                            Subscribe Now
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== CTA AREA START =======*/}
        </>
    );
}
