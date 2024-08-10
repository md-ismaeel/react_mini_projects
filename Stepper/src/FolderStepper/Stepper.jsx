import React, { useState } from 'react';
import { Form } from './Form';

export const Stepper = () => {
    const [page, setPage] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        deg: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const handlePageChange = (direction) => {
        setPage(prevPage => Math.min(Math.max(prevPage + direction, 1), 3));
    };

    const handleSubmit = () => {
        if (Object.values(data).every(Boolean)) {
            setIsSubmitted(true);
        } else {
            alert("Please fill in all fields");
        }
    };

    const renderFormPage = () => {
        const formProps = {
            onChange: handleChange,
            required: true,
        };

        switch (page) {
            case 1:
                return <Form type="text" title="Enter name" name="name" value={data.name} placeholder="Enter your name" {...formProps} />;
            case 2:
                return <Form type="email" title="Enter email" name="email" value={data.email} placeholder="Enter your email" {...formProps} />;
            case 3:
                return <Form type="text" title="Enter designation" name="deg" value={data.deg} placeholder="Enter your Designation" {...formProps} />;
            default:
                return null;
        }
    };

    return (
        <section className="w-full min-h-screen bg-gray-100 flex justify-center items-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">

                <div className="bg-slate-600 p-6">

                    <div className="flex justify-between items-center">
                        {[1, 2, 3].map(step => (
                            <span key={step} className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-lg transition-colors duration-300 ${page === step ? "bg-green-500" : "bg-slate-400"}`}>
                                {step}
                            </span>
                        ))}
                    </div>

                </div>

                <div className="p-6 space-y-6">
                    {renderFormPage()}

                    <div className="flex justify-between items-center">
                        {page > 1 && <button onClick={() => handlePageChange(-1)} className="px-4 py-2 rounded bg-slate-500 text-white hover:bg-slate-600 transition-colors duration-300">Previous</button>}
                        {page < 3 && <button onClick={() => handlePageChange(1)} className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors duration-300">Next</button>}
                        {page === 3 && <button onClick={handleSubmit} className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300">Submit</button>}
                    </div>

                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-gray-700">
                            {isSubmitted ? "Form Data Submitted" : "Data not Submitted Yet"}
                        </h2>
                    </div>

                    {isSubmitted && (
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <pre className="text-sm text-gray-700 overflow-x-auto">
                                {JSON.stringify(data, null, 2)}
                            </pre>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};