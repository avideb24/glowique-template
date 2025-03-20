

const GoogleMap = () => {
    return (
        <div className="order-2 lg:order-1 w-full h-80 md:h-[800px] pb-10 md:pb-20">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9189656037843!2d90.36410407417323!3d23.785899787414763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fe221a1c4f76abd%3A0x47256058e807551a!2sVida%20Technology!5e0!3m2!1sen!2sbd!4v1739702981200!5m2!1sen!2sbd"
                className="w-full h-full rounded-lg shadow-md"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
