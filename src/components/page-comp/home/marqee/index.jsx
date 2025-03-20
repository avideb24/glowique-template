import { BsFlower1 } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import "./index.css";


const Marqee = () => {

    const items = [
        { id: 1, title: "REVITALIZE", icon: <BsFlower1 /> },
        { id: 2, title: "BLOSSOM", icon: <IoSunnyOutline /> },
        { id: 3, title: "REVITALIZE", icon: <BsFlower1 /> },
        { id: 4, title: "BLOSSOM", icon: <IoSunnyOutline /> },
        { id: 5, title: "REVITALIZE", icon: <BsFlower1 /> },
        { id: 6, title: "BLOSSOM", icon: <IoSunnyOutline /> },
        { id: 7, title: "REVITALIZE", icon: <BsFlower1 /> },
        { id: 8, title: "BLOSSOM", icon: <IoSunnyOutline /> },
        { id: 9, title: "REVITALIZE", icon: <BsFlower1 /> },
        { id: 10, title: "BLOSSOM", icon: <IoSunnyOutline /> },
        { id: 11, title: "REVITALIZE", icon: <BsFlower1 /> },
        { id: 12, title: "BLOSSOM", icon: <IoSunnyOutline /> },
        { id: 13, title: "REVITALIZE", icon: <BsFlower1 /> },
        { id: 14, title: "BLOSSOM", icon: <IoSunnyOutline /> },
        { id: 15, title: "REVITALIZE", icon: <BsFlower1 /> },
        { id: 16, title: "BLOSSOM", icon: <IoSunnyOutline /> },
    ]

    return (
        <div className="overflow-hidden whitespace-nowrap relative w-full bg-gray-100 py-3">
            <div className="flex gap-8 md:gap-20 animate-marquee">
                {/* Duplicate items twice for smooth looping */}
                {[...items, ...items, ...items, ...items].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 min-w-max">
                        <p className="text-2xl md:text-5xl">{item.icon}</p>
                        <h4 className="text-base md:text-xl font-semibold">{item.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marqee;