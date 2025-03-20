import bgImage from "@/assets/images/hero-bg.jpg";


const Hero = () => {
    return (
        <section
            className="relative py-16 md:py-44 flex items-center bg-cover bg-center px-6 md:px-16" style={{ backgroundImage: `url(${bgImage.src})` }}>
            <div className="container">
                <div className="bg-white p-6 md:p-10 max-w-xl text-center md:text-left">
                    <h4 className="text-xs uppercase tracking-widest text-gray-500">Glowique Collection</h4>
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mt-2 leading-tight">
                        Personalized Formulas <br /> Tailored Just For You.
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Our formulas are carefully crafted to work best for you, with only the essential ingredients needed for great results.
                    </p>
                    <button className="mt-6 button">
                        SHOP NOW
                    </button>
                </div>
            </div>
        </section>
    );
}


export default Hero;
