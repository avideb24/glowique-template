"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star } from "lucide-react";
import Image from "next/image";


const Testimonial = () => {

    const testimonials = [
        {
            id: 1,
            name: "Sybil Sharp",
            review:
                "Fantastic shop! Great selection, fair prices, and friendly staff. Highly recommended. The quality of the products is exceptional, and the prices are very reasonable!",
            rating: 5,
            product: {
                name: "Contrasting sheepskin sweatshirt",
                price: "$60.00",
                image: "https://i.ibb.co.com/60gxgqQN/Sed3e1115812a44c4a0133abc1cf75591f.jpg",
            },
            image: "https://i.ibb.co.com/Z6THGNhx/c.webp",
        },
        {
            id: 2,
            name: "Mark G.",
            review:
                "I absolutely love this shop! The products are high-quality and the customer service is excellent. I always leave with exactly what I need and a smile on my face.",
            rating: 5,
            product: {
                name: "Contrasting sheepskin sweatshirt",
                price: "$60.00",
                image: "https://i.ibb.co.com/60gxgqQN/Sed3e1115812a44c4a0133abc1cf75591f.jpg",
            },
            image: "https://i.ibb.co.com/Z6THGNhx/c.webp",
        },
    ];

    return (
        <section className="container">
            <h2 className="section-heading">Customer Say!</h2>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                // pagination={{ clickable: true }}
                // navigation
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                {testimonials?.map((testimonial) => (
                    <SwiperSlide key={testimonial?.id} className="flex justify-center">
                        <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center bg-white shadow-md overflow-hidden">
                            <div className="w-full max-h-64">
                                <Image src={testimonial?.image} className="w-full h-full object-cover" width={400} height={400} alt={testimonial?.name} />
                            </div>
                            <div className="p-6 w-full md: col-span-2">
                                <div className="flex mb-2">
                                    {Array.from({ length: testimonial?.rating }).map((_, index) => (
                                        <Star key={index} size={18} className="text-yellow-500" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-3">{testimonial.review}</p>
                                <h4 className="font-bold">{testimonial.name}</h4>
                                <hr className="my-3" />
                                <div className="flex items-center gap-2">
                                    <img
                                        src={testimonial.product.image}
                                        alt={testimonial.product.name}
                                        className="w-12 h-12 object-cover rounded"
                                    />
                                    <div>
                                        <h5 className="text-sm">{testimonial.product.name}</h5>
                                        <p className="text-sm font-semibold">{testimonial.product.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonial;
