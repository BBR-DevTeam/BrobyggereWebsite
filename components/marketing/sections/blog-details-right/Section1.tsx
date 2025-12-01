"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

export default function Section1() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="Y8XpQpW5OVY" onClose={() => setIsOpen(false)} />

            {/*=====SERVICE DETAILS START=======*/}
            <div className="service-details-all sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details-all right-padding">
                                <article>
                                    <div className="blog-details-box">
                                        <div className="image">
                                            <img src="assets/img/blog/blog-details-img1.png" alt="" />
                                        </div>
                                        <ul className="users">
                                            <li>
                                                <img className="author" src="assets/img/blog/blog-details-othor.png" alt="" /> <Link href="#">Alex Robartson</Link>
                                            </li>
                                            <li>
                                                <img src="assets/img/icons/blog-details-icon1.png" alt="" /> <Link href="#"> 8/05/2025</Link>
                                            </li>
                                            <li>
                                                <img src="assets/img/icons/blog-details-icon2.png" alt="" /> <Link href="#"> Staffing Agency</Link>
                                            </li>
                                            <li>
                                                <img src="assets/img/icons/blog-details-icon3.png" alt="" /> <Link href="#"> 2 Comments</Link>
                                            </li>
                                        </ul>
                                        <div className="space10" />
                                        <div className="heading1">
                                            <h2>Talent Chronicles: Stories from the Hiring Frontline</h2>
                                            <div className="space16" />
                                            <p>Welcome to our blog, where we share valuable insights, tips, and industry news to empower both clients and candidates in the world of staffing and recruitment we believe that knowledge is power, and our blog serves as a platform to provide </p>
                                            <div className="space16" />
                                            <p>Whether you're a hiring manager seeking strategies to streamline your recruitment process or a job seeker looking for career advice and interview tips, our blog has something for everyone. Stay tuned for regular updates and expert insights </p>
                                        </div>
                                    </div>
                                </article>
                                <div className="space10" />
                                <div className="blog-details-border" />
                                <div className="space20" />
                                <article>
                                    <div className="blog-details-box">
                                        <div className="image">
                                            <img src="assets/img/blog/blog-details-img2.png" alt="" />
                                        </div>
                                        <div className="space30" />
                                        <div className="heading1">
                                            <h3>Recruit ology Tips &amp; Trends for Hiring Success</h3>
                                            <div className="space16" />
                                            <p>Welcome to our blog, where we share valuable insights, tips, and industry news to empower both clients and candidates in the world of staffing and recruitment we believe that knowledge is power, and our blog serves as a platform to provide </p>
                                            <div className="space16" />
                                            <p>Whether you're a hiring manager seeking strategies to streamline your recruitment process or a job seeker looking for career advice and interview tips, our blog has something for everyone. Stay tuned for regular updates and expert insights </p>
                                        </div>
                                        <div className="space30" />
                                        <div className="project-details-list">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <i className="fa-solid fa-check" />
                                                    </span>
                                                    Looking for top talent for permanent roles
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-solid fa-check" />
                                                    </span>
                                                    Concerned about cultural fit when hiring
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-solid fa-check" />
                                                    </span>
                                                    Require specialized skills for short-term projects
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-solid fa-check" />
                                                    </span>
                                                    Seeking executive-level talent to drive your organization's success
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                                <div className="after-box-details">
                                    <div className="heading1">
                                        <p>Our blog is your go-to resource for the latest trends, best practices, and expert advice in the staffing industry. From articles on optimizing your hiring process and navigating employment law changes to career development</p>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="space30" />
                                        <div className="video-details-area">
                                            <div className="image">
                                                <img src="assets/img/blog/blog-details-video-img.png" alt="" />
                                            </div>
                                            <div className="video-buttton play-btn">
                                                <Link href="#" onClick={() => setIsOpen(true)} id="play-video play-btn" className="video-play-button">
                                                    <span />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="space30" />
                                        <div className="heading1">
                                            <h3>Unleash Your Business </h3>
                                            <div className="space16" />
                                            <p>We're committed to not providing exceptional staffing solutions but also empowering our clients &amp; candidates</p>
                                            <div className="space20" />
                                            <div className="project-details-list">
                                                <ul>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Staffing solution is right for you
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Skills for short-term projects
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Need to fill a position quickly
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tags-icons">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="details-tags">
                                                <ul>
                                                    <li className="text">Post Tags:</li>
                                                    <li>
                                                        <Link href="#">Staffing agency</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Business</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="details-icons">
                                                <ul>
                                                    <li className="text">Post Tags:</li>
                                                    <li>
                                                        <Link href="#">
                                                            <i className="fa-brands fa-x-twitter" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <i className="fa-brands fa-facebook-f" />
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
                                <div className="blog-details-border" />
                                <div className="heading1">
                                    <h3 />
                                    <h3>Blog Comments (2)</h3>
                                </div>
                                <div className="blog-details-commnet-boxs">
                                    <div className="commnet-box">
                                        <div className="top-area">
                                            <div className="author-area">
                                                <div className="image">
                                                    <img src="assets/img/blog/comment-img1.png" alt="" />
                                                </div>
                                                <div className="heading">
                                                    <h5>
                                                        <Link href="#">Matthew Larson</Link>
                                                    </h5>
                                                    <p>8/01/2023</p>
                                                </div>
                                            </div>
                                            <Link href="#" className="reply-btn">
                                                <span>
                                                    <i className="fa-solid fa-reply" />
                                                </span>
                                                Reply
                                            </Link>
                                        </div>
                                        <div className="space16" />
                                        <div className="heading1">
                                            <p>Wow, I'm really impressed by the depth of content in the blog section. It's clear that Recrute values not only connecting clients with top talent but also empowering them with knowledge and resources.</p>
                                        </div>
                                    </div>
                                    <div className="commnet-box commnet-box2">
                                        <div className="top-area">
                                            <div className="author-area">
                                                <div className="image">
                                                    <img src="assets/img/blog/comment-img2.png" alt="" />
                                                </div>
                                                <div className="heading">
                                                    <h5>
                                                        <Link href="#">Sergio Daugherty</Link>
                                                    </h5>
                                                    <p>8/01/2023</p>
                                                </div>
                                            </div>
                                            <Link href="#" className="reply-btn">
                                                <span>
                                                    <i className="fa-solid fa-reply" />
                                                </span>
                                                Reply
                                            </Link>
                                        </div>
                                        <div className="space16" />
                                        <div className="heading1">
                                            <p>The blog covers a wide range of topics, from industry trends to practical advice for both employers and job seekers. I especially appreciate how the team at rectute provides actionable insights that can make</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space30" />
                                <div className="details-contact-form">
                                    <div className="heading1">
                                        <h3>Leave a Reply</h3>
                                        <div className="space16" />
                                        <p>Real difference in navigating the complexities of hiring and career development. Keep up the fantastic work</p>
                                    </div>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="single-input">
                                                    <input type="text" placeholder="First Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="single-input">
                                                    <input type="text" placeholder="Last Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="single-input">
                                                    <input type="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="single-input">
                                                    <input type="number" placeholder="Phone" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="single-input">
                                                    <input type="text" placeholder="Subject" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="single-input">
                                                    <textarea name="" id="" rows={4} placeholder="Message" defaultValue={""} />
                                                </div>
                                                <div className="space30" />
                                                <div className="button">
                                                    <button className="theme-btn1" type="submit">
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
                        <div className="col-lg-4">
                            <div className="details-sidebar">
                                <div className="details-box2 search">
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
                                    <h3>Categories</h3>
                                    <div className="space10" />
                                    <ul className="service-list">
                                        <li>
                                            <Link href="/service-details">
                                                Talent Chronicles Stories
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                Navigating Professional
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                Recruitology Recruitment
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                The Staffing Scoop
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                Stories of Success
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="details-box2">
                                    <h3>Recent Posts</h3>
                                    <div className="space10" />
                                    <ul className="recent-posts">
                                        <div className="single-recent-post">
                                            <div className="">
                                                <div className="image">
                                                    <img src="assets/img/blog/recent-post1.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="heading">
                                                <Link href="#" className="date">
                                                    <img src="assets/img/icons/recent-date.png" alt="" /> 20 Apr, 2025
                                                </Link>
                                                <h5>
                                                    <Link href="/blog-details">The Staffing Strategist Your Guide to Talent</Link>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="single-recent-post">
                                            <div className="">
                                                <div className="image">
                                                    <img src="assets/img/blog/recent-post2.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="heading">
                                                <Link href="#" className="date">
                                                    <img src="assets/img/icons/recent-date.png" alt="" /> 20 Apr, 2025
                                                </Link>
                                                <h5>
                                                    <Link href="/blog-details">HR Insights Unlocking the Secrets Staffing</Link>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="single-recent-post">
                                            <div className="">
                                                <div className="image">
                                                    <img src="assets/img/blog/recent-post3.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="heading">
                                                <Link href="#" className="date">
                                                    <img src="assets/img/icons/recent-date.png" alt="" /> 20 Apr, 2025
                                                </Link>
                                                <h5>
                                                    <Link href="/blog-details">Recruitology 101 Tips and Trends for Hiring</Link>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="single-recent-post">
                                            <div className="">
                                                <div className="image">
                                                    <img src="assets/img/blog/recent-post4.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="heading">
                                                <Link href="#" className="date">
                                                    <img src="assets/img/icons/recent-date.png" alt="" /> 20 Apr, 2025
                                                </Link>
                                                <h5>
                                                    <Link href="/blog-details">Career Navigating Your Professional Path</Link>
                                                </h5>
                                            </div>
                                        </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====SERVICE DETAILS END=======*/}
        </>
    );
}
