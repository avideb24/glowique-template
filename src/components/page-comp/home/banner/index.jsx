"use client";

import Image from 'next/image';
import bannerBg1 from "@/assets/images/banner-bg1.jpg";
import bannerBg2 from "@/assets/images/banner-bg2.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Link from 'next/link';

const Banner = () => {
    const sliderData = [
        {
            id: 1,
            href: "/",
            upText: "UP TO 50% OFF",
            title: "Advance Science of Care That Uplifts and Inspires",
            text: "Specially priced diamond studs and tennis bracelets. These timeless pieces make the perfect gift at the perfect price.",
            image: bannerBg1,
        },
        {
            id: 2,
            href: "/",
            upText: "COLLECTION Glowique",
            title: "Your Skin's Best Solution for Every Concern",
            text: "Bring your love to life with a handcrafted design that perfectly suits your relationship, budget, and style.",
            image: bannerBg2,
        },
    ];

    return (
        <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            effect='fade'
            fadeEffect={{ crossFade: true }}
            speed={1000}
            loop
            className="w-full"
        >
            {sliderData.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div
                        className="w-full h-[300px] md:h-[600px] lg:h-[700px] lg:py-52 flex items-center justify-center bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${slide.image.src})` }}
                    >
                        {/* overlay */}
                        <div className='absolute w-full h-full bg-dark z-0 opacity-60 md:opacity-20'></div>
                        <div className='container'>
                            <div className={`relative z-10 px-4 flex flex-col md:flex-row items-center justify-between gap-8 ${slide.id % 2 !== 0 ? 'md:flex-row-reverse' : ''} `}>
                                {/* Content */}
                                <div className="w-full md:w-1/2 text-white text-left">
                                    <p className="uppercase text-xs mb-2 md:text-sm md:font-semibold tracking-widest">{slide.upText}</p>
                                    <h2 className="text-xl md:text-5xl font-bold md:mt-2">{slide.title}</h2>
                                    <p className="mt-4 text-sm md:text-xl">{slide.text}</p>
                                    <div className="mt-6 flex gap-4 justify-start">
                                        <Link href={slide.href} className='button'>
                                            Shop Now
                                        </Link>
                                        <Link href={slide.href} className='button-outline'>
                                            Explore
                                        </Link>
                                    </div>
                                </div>
                                {/* Empty div for spacing on even slides */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;
