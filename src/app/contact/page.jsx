import GoogleMap from '@/components/page-comp/contact/google-map';
import PageTop from '@/components/reusuable/page-top';
import { MapPin, Phone, Mail } from 'lucide-react';
import { metadataConfig } from "@/config/metadataConfig";

export const metadata = metadataConfig.contact;


const ContactPage = () => {

    const contactCards = [
        {
            id: 1,
            title: 'Office',
            Icon: <MapPin />,
            texts: ['236/5/A, South Prierbag, Amtola Bazar, Mirpur, Dhaka-1216']
        },
        {
            id: 2,
            title: 'E-mail',
            Icon: <Mail />,
            texts: ['info@vida.com.bd', 'support@vida.com.bd ']
        },
        {
            id: 3,
            title: 'Phone',
            Icon: <Phone />,
            texts: ['+8801641443111',]
        },
    ];

    return (
        <div>
            <div className='container'>
                <PageTop title='Contact Us' description="We're here to help and guide you. Please let us know." />

                {/* contact cards */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 py-7 md:py-20'>
                    {
                        contactCards?.map((item, idx) =>
                            <div key={item?.id} className={`${idx % 2 ? "bg-slate-200" : "bg-slate-100"} text-dark p-5 md:p-10 text-center rounded-sm`}>
                                <h3 className='flex justify-center items-center gap-2 text-xl md:text-2xl font-semibold pb-3'>
                                    {item?.Icon}
                                    {item?.title}
                                </h3>
                                {
                                    item?.texts?.map((item, idx) =>
                                        <p key={idx}>{item}</p>
                                    )
                                }
                            </div>
                        )
                    }
                </div>

                {/* get in touch */}
                <GoogleMap />
            </div>
        </div>
    );
};

export default ContactPage;