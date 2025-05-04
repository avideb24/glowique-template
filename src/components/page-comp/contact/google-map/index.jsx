

const GoogleMap = () => {
    return (
        <div className="order-2 lg:order-1 w-full h-80 md:h-[800px] pb-10 md:pb-20">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57559.13018875112!2d88.64642359999999!3d25.623331200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb529bc7fc909b%3A0xd8f861ed9baf24de!2sDinajpur!5e0!3m2!1sen!2sbd!4v1746341164852!5m2!1sen!2sbd"
                className="w-full h-full rounded-lg shadow-md"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
