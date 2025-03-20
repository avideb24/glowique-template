import { RotateCcw, Truck, Headphones } from "lucide-react";


const ServiceBenefits = () => {

    const features = [
        {
            icon: <RotateCcw size={32} />,
            title: "14-Day Returns",
            description: "Risk-free shopping with easy returns.",
        },
        {
            icon: <Truck size={32} />,
            title: "Free Shipping",
            description: "No extra costs, just the price you see.",
        },
        {
            icon: <Headphones size={32} />,
            title: "24/7 Support",
            description: "24/7 support, always here just for you.",
        },
    ];


    return (
        <section className="max-w-6xl mx-auto bg-light md:bg-slate-100 px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {
                features.map((feature, idx) => (
                    <div key={idx} className="text-center flex flex-col items-center">
                        <div className="text-black">{feature?.icon}</div>
                        <h3 className="text-lg font-semibold mt-2">{feature?.title}</h3>
                        <p className="text-gray-500">{feature?.description}</p>
                    </div>
                ))
            }
        </section>
    );
};

export default ServiceBenefits;
