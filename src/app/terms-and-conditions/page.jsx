import PageTop from '@/components/reusuable/page-top';
import { metadataConfig } from "@/config/metadataConfig";

export const metadata = metadataConfig.termsAndCondition;


const TermsAndConditionPage = () => {
    return (
        <div className='pb-10 md:pb-20'>
            <div className="container">

                <PageTop title="Terms and Conditions" />

                <p className="my-4">Welcome to our platform. By accessing or using our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>

                <h2 className="text-2xl font-semibold mt-6">1. Use of Services</h2>
                <p className="mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms and Conditions. You must not use our services in any way that could harm, disable, overburden, or impair the platform.</p>

                <h2 className="text-2xl font-semibold mt-6">2. User Accounts</h2>
                <p className="mb-4">To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities under your account.</p>

                <h2 className="text-2xl font-semibold mt-6">3. Intellectual Property</h2>
                <p className="mb-4">All content, including text, graphics, logos, and software, is the property of the platform and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without permission.</p>

                <h2 className="text-2xl font-semibold mt-6">4. Termination</h2>
                <p className="mb-4">We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for conduct that we determine to be in violation of these Terms and Conditions.</p>

                <h2 className="text-2xl font-semibold mt-6">5. Limitation of Liability</h2>
                <p className="mb-4">We are not responsible for any damages that may result from the use of our services. Our platform is provided on an "as is" and "as available" basis without warranties of any kind.</p>

                <h2 className="text-2xl font-semibold mt-6">6. Changes to Terms</h2>
                <p className="mb-4">We reserve the right to modify or update these Terms and Conditions at any time. Continued use of our services after any changes constitutes acceptance of the new terms.</p>

                <h2 className="text-2xl font-semibold mt-6">7. Contact Information</h2>
                <p>If you have any questions about these Terms and Conditions, please contact us.</p>
            </div>
        </div>
    );
};

export default TermsAndConditionPage;
