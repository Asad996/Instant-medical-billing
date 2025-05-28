import React from 'react';
import logo1 from "../assets/Favicon/authorize.png";
import logo2 from "../assets/Favicon/user.png";
import logo3 from "../assets/Favicon/claim.png";
import logo4 from "../assets/Favicon/payment-system.png";
import logo5 from "../assets/Favicon/follow-up.png";
import logo6 from "../assets/Favicon/expenses.png";

const featureData = [
    {
        icon: logo1,
        title: 'Patient Preauthorization',
        description: 'With our RCM billing services, you will get prior authorization from the insurance to perform a procedure and get reimbursement accordingly.'
    },
    {
        icon: logo2,
        title: 'Eligibility & Benefits Verification',
        description: 'Our medical billing experts perform patient eligibility & benefits verification to confirm insurance coverage for complete reimbursements.'
    },
    {
        icon: logo3,
        title: 'Claim Submission',
        description: 'Enable a 99% claim success ratio with Instant Billing clean claim submission process. Our coding and billing experts ensure your claims get paid accurately'
    }
    ,
    {
        icon: logo3,
        title: 'Payment Posting',
        description: 'Our experts proactively perform insurance payment posting and patient payments in medical billing software to streamline the practice cash flow'
    }
    ,
    {
        icon: logo3,
        title: 'A/R Follow-Up & Denial Management',
        description: 'We continuously perform follow-ups for effective denial management to keep track of your A/R to improve the collections rate.'
    }
    ,
    {
        icon: logo3,
        title: 'Medical Billing Audit',
        description: 'Insant medical billing audit helps you track and improve the claim processing and payment posting to maximize your practice revenue.'
    }
];

const Qualities = () => {
    return (
        <div className="py-10 px-6 md:px-12 bg-white text-center pt-28">
            <h2 className="text-3xl md:text-4xl font-bold text-[#7BAB0A] mb-4">
                Instant Medical Billing Transforming Medical Billing Services for Small Practices
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-10">
                Instant Medical Billing is the leading medical billing services company that delivers a reliable, swift, and reasonable pricing model to ensure that your practice gets the maximum reimbursement possible. We are a team of certified professional billers and coders covering every aspect of RCM billing services with utmost accuracy and efficiency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {featureData.map((item, index) => (
                    <div key={index} className=" bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center space-y-4">
                        <div className="flex justify-center">
                            <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Qualities;
