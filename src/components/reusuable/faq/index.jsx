'use client';

import { Collapse } from "antd";
import { Minus, Plus } from "lucide-react";


const FAQ = () => {

    const items = [
        {
            key: '1',
            label: <h3 className="text-primary font-semibold text-base md:text-xl">01. What services do you offer?</h3>,
            children: <p className="text-dark dark:text-white text-sm">We provide a range of services, including software development, website development, mobile app development, e-commerce solutions, and SaaS development. Our solutions are tailored to meet your business needs.</p>,
        },
        {
            key: '2',
            label: <h3 className="text-primary font-semibold text-base md:text-xl">02. How do you ensure the security of the software?</h3>,
            children: <p className="text-dark dark:text-white text-sm">We follow industry best practices, including data encryption, secure authentication, and regular security audits, ensuring your software remains protected against vulnerabilities.</p>,
        },
        {
            key: '3',
            label: <h3 className="text-primary font-semibold text-base md:text-xl">03. Do you provide post-launch support and maintenance?</h3>,
            children: <p className="text-dark dark:text-white text-sm">Yes, we offer ongoing support and maintenance, including bug fixes, updates, and performance enhancements to ensure your software remains efficient and up to date.</p>,
        },
        {
            key: '4',
            label: <h3 className="text-primary font-semibold text-base md:text-xl">04. How long does it take to develop a software solution?</h3>,
            children: <p className="text-dark dark:text-white text-sm">Project timelines vary based on complexity and requirements. However, we emphasize fast processing and on-time delivery, ensuring quality without delays.</p>,
        },
        {
            key: '5',
            label: <h3 className="text-primary font-semibold text-base md:text-xl">05. How much does software development cost?</h3>,
            children: <p className="text-dark dark:text-white text-sm">Our pricing is reasonable and flexible based on project scope, features, and complexity. We provide the best deals without compromising quality.</p>,
        },
        {
            key: '6',
            label: <h3 className="text-primary font-semibold text-base md:text-xl">06. Can you develop both iOS and Android apps?</h3>,
            children: <p className="text-dark dark:text-white text-sm">Yes, we specialize in cross-platform mobile app development for both iOS and Android to ensure a wider reach and seamless user experience.</p>,
        },
        {
            key: '7',
            label: <h3 className="text-primary font-semibold text-base md:text-xl">07. Why should we choose your company?</h3>,
            children: <p className="text-dark dark:text-white text-sm">We are a trusted company offering cost-effective solutions, reasonable pricing, and round-the-clock support, ensuring timely and high-quality project completion.</p>,
        },
    ];
    
    return (
        <>
            <div className="container">
                <h2 className="section-heading mb-5">Frequently Asked Questions</h2>
                {/* faq */}
                <div className="max-w-4xl mx-auto">
                    <Collapse accordion items={items} expandIcon={({ isActive }) => (
                        isActive ? <Plus color="#4265a9" /> : <Minus color="#4265a9" />
                    )} expandIconPosition={'end'} defaultActiveKey={1} className="bg-white dark:bg-dark" />
                </div>
            </div>
        </>
    );
};

export default FAQ;