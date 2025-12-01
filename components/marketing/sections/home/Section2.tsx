"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
};

export default function Section2({ backgroundColor }: { backgroundColor: string }) {
    return (
        <>
            {/*=====HERO SLIDER AREA END=======*/}
            <div className={`hero1-slider ${!backgroundColor ? "" : backgroundColor}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper {...swiperOptions}>
                                <SwiperSlide>
                                    <img src="assets/img/logo/slider-logo1.png" alt="recrute" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="assets/img/logo/slider-logo2.png" alt="recrute" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="assets/img/logo/slider-logo3.png" alt="recrute" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="assets/img/logo/slider-logo4.png" alt="recrute" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="assets/img/logo/slider-logo5.png" alt="recrute" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="assets/img/logo/slider-logo6.png" alt="recrute" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="assets/img/logo/slider-logo7.png" alt="recrute" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="assets/img/logo/slider-logo1.png" alt="recrute" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="assets/img/logo/slider-logo2.png" alt="recrute" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="assets/img/logo/slider-logo3.png" alt="recrute" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="assets/img/logo/slider-logo4.png" alt="recrute" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="assets/img/logo/slider-logo5.png" alt="recrute" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="assets/img/logo/slider-logo6.png" alt="recrute" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="assets/img/logo/slider-logo7.png" alt="recrute" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====HERO SLIDER AREA END=======*/}
        </>
    );
}
