import "./index.css";


const AnimatedText = ({text=""}) => {
    return (
        <div className="animated-text">
            {text.split("").map((char, index) => (
                <span key={index} className={`key key-${index + 1}`}>
                    {char}
                </span>
            ))}
        </div>
    );
};

export default AnimatedText;