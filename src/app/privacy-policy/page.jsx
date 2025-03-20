import PageTop from '@/components/reusuable/page-top';
import React from 'react';
import { metadataConfig } from "@/config/metadataConfig";

export const metadata = metadataConfig.privacyPolicy;


const PrivacyPolicyPage = () => {
    return (
        <div className='pb-10 md:pb-20'>
            <div className="container">

                <PageTop title="Privacy Policy" />

                <p className="my-4">Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our services.</p>

                <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
                <p className="mb-4">We collect information you provide to us, such as your name, email address, and other details necessary to improve your experience on our platform.</p>

                <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
                <p className="mb-4">We use your information to provide and improve our services, communicate with you, and ensure security and compliance with legal obligations.</p>

                <h2 className="text-2xl font-semibold mt-6">3. Sharing Your Information</h2>
                <p className="mb-4">We do not sell or share your personal information with third parties except as required by law or to provide necessary services.</p>

                <h2 className="text-2xl font-semibold mt-6">4. Security</h2>
                <p className="mb-4">We take appropriate security measures to protect your personal data from unauthorized access, alteration, or disclosure.</p>

                <h2 className="text-2xl font-semibold mt-6">5. Your Rights</h2>
                <p className="mb-4">You have the right to access, update, or delete your personal information. If you have any concerns, please contact us.</p>

                <h2 className="text-2xl font-semibold mt-6">6. Changes to This Policy</h2>
                <p className="mb-4">We reserve the right to update this Privacy Policy at any time. Continued use of our services after changes indicates acceptance of the updated policy.</p>

                <h2 className="text-2xl font-semibold mt-6">7. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
