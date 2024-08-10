import React from 'react';

export const Form = ({ type, title, required = false, name, value, onChange, placeholder }) => {

    return (
        <div className="w-full flex flex-col gap-3">
            <label htmlFor={name} className="text-slate-500 text-lg font-semibold">
                {title}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="p-3 rounded-md border border-gray-300 bg-white text-gray-700 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   transition duration-200 ease-in-out"
            />
        </div>
    );
};