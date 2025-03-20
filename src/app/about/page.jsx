import PageTop from "@/components/reusuable/page-top";
import { metadataConfig } from "@/config/metadataConfig";

export const metadata = metadataConfig.about;


const AboutPage = () => {
    return (
        <div className="container">
            <PageTop title="About Us" description="We are committed to delivering the best shopping experience." />
            <div className="container mx-auto py-10 px-5">

                {/* Company Story */}
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Our Story</h2>
                    <p className="mt-4 text-gray-600 text-sm md:text-base">
                        Founded in 2022, our e-commerce platform was built to bring high-quality products to customers at the best prices. We focus on quality, affordability, and customer satisfaction. Over the years, we have grown into a trusted online marketplace, serving thousands of happy customers worldwide.
                    </p>
                </div>

                {/* Core Values */}
                <div className="mt-16">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">Our Core Values</h2>
                    <div className="mt-6 grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 shadow-md rounded-lg">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-800">Quality</h3>
                            <p className="mt-2 text-gray-600 text-sm md:text-base">We ensure that all our products meet the highest quality standards before reaching our customers.</p>
                        </div>
                        <div className="p-6 shadow-md rounded-lg">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-800">Customer Satisfaction</h3>
                            <p className="mt-2 text-gray-600 text-sm md:text-base">Our customers are our top priority, and we strive to provide them with the best shopping experience possible.</p>
                        </div>
                        <div className="p-6 shadow-md rounded-lg">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-800">Innovation</h3>
                            <p className="mt-2 text-gray-600 text-sm md:text-base">We continuously improve our platform to provide a seamless and enjoyable shopping journey.</p>
                        </div>
                    </div>
                </div>

                {/* Customer Commitment */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Our Commitment to You</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                        We believe in offering transparent pricing, secure transactions, and a hassle-free return policy to make online shopping as smooth as possible.
                    </p>
                </div>

                {/* Future Vision */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Looking Ahead</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                        As we grow, we aim to expand our product offerings, partner with top brands, and enhance our customer support to serve you better.
                    </p>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Join Our Journey</h3>
                    <p className="mt-2 text-gray-600 pb-6 text-sm md:text-base">Experience the best in online shopping with us.</p>
                    <a href="/shop" className="button">
                        Shop Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
