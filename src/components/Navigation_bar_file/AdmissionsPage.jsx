import React from 'react';
import './AdmissionsPage.css';

const AdmissionsPage = () => {
    // Sample fee structure data
    const feeDetails = [
        { class: "Nursery - KG", admissionFee: "₹5,000", tuitionFee: "₹2,500/month" },
        { class: "Class 1 - 5", admissionFee: "₹8,000", tuitionFee: "₹3,000/month" },
        { class: "Class 6 - 8", admissionFee: "₹10,000", tuitionFee: "₹3,500/month" },
        { class: "Class 9 - 10", admissionFee: "₹12,000", tuitionFee: "₹4,000/month" },
        { class: "Class 11 - 12", admissionFee: "₹15,000", tuitionFee: "₹5,000/month" },
    ];

    // Rules and Regulations
    const rules = [
        "Admission fees are non-refundable.",
        "Students must submit all required documents (Birth Certificate, Transfer Certificate, etc.) during admission.",
        "Fee payments should be made on time. Late payments will incur a penalty of ₹50/day.",
        "School reserves the right to cancel admission for non-compliance with school policies.",
        "Uniforms and books are not included in the tuition fees.",
        "Parents are required to attend Parent-Teacher Meetings as scheduled.",
        "Students must follow the code of conduct as outlined in the school handbook.",
    ];

    return (
        <div className="admissions-page">
            <div className="admissions-header">
                <h1>Admissions</h1>
                <p>Welcome to our school! Below are the details about the admission process, fees, and important rules to be followed.</p>
            </div>

            {/* Fee Structure Section */}
            <div className="fee-structure">
                <h2>Fee Structure</h2>
                <table className="fee-table">
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Admission Fee</th>
                            <th>Tuition Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feeDetails.map((fee, index) => (
                            <tr key={index}>
                                <td>{fee.class}</td>
                                <td>{fee.admissionFee}</td>
                                <td>{fee.tuitionFee}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Rules and Regulations Section */}
            <div className="rules-section">
                <h2>Rules & Regulations</h2>
                <ul>
                    {rules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdmissionsPage;
