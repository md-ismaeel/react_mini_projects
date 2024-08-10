import React, { useState } from 'react';
import { Form } from './Form';

export const Stepper = () => {
    const [page, setPage] = useState(Number(1));
    const [isTrue, setIsTrue] = useState(false)

    const [data, setData] = useState({
        name: "",
        email: "",
        deg: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleNext = () => {
        if (page < 3) {
            setPage(page + 1);
        }
    };

    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const handleSubmit = () => {
        setIsTrue(prev => !prev)
    }

    return (
        <>
            <section className='w-full h-screen flex justify-center items-center'>

                <div className='w-[600px] h-[400px] bg-slate-500 flex flex-col justify-center items-center'>

                    <div className='w-full flex justify-between items-center px-24'>
                        <span className={`${page === 1 && "bg-slate-600"} h-[30px] w-[30px] rounded-full bg-green-300 text-white text-center`}>{page === 1 ? page : "1"}</span>
                        <span className={`${page === 2 && "bg-slate-600"} h-[30px] w-[30px] rounded-full bg-green-300 text-white text-center`}>{page === 2 ? page : "2"}</span>
                        <span className={`${page === 3 && "bg-slate-600"} h-[30px] w-[30px] rounded-full bg-green-300 text-white text-center`}>{page === 3 ? page : "3"}</span>
                    </div>

                    <div className='w-[400px] h-[300px] flex flex-col justify-start items-start gap-3 mt-3'>
                        {page === 1 && <Form type={'text'} title={"Enter name"} required name={'name'} value={data.name} onChange={handleChange} placeholder={'Enter your name'} />}
                        {page === 2 && <Form type={'email'} title={"Enter email"} required name={'email'} value={data.email} onChange={handleChange} placeholder='Enter your email' />}
                        {page === 3 && <Form type={'text'} title={"Enter designation"} required name={'deg'} value={data.deg} onChange={handleChange} placeholder='Enter your Designation' />}

                        <div className='flex gap-4'>
                            {page > 1 && <button onClick={handlePrevious} className='px-3 py-1 rounded bg-green-600 hover:bg-green-700'>Previous</button>}
                            {page < 3 && <button onClick={handleNext} className='px-3 py-1 rounded bg-green-600 hover:bg-green-700'>Next</button>}
                            {page === 3 && <button onClick={handleSubmit} className='px-3 py-1 rounded bg-green-600 hover:bg-green-700'>Submit</button>}
                        </div>

                        <h1>{isTrue ? "From Data" : "data not Submitted Yet"}</h1>

                        {isTrue && (<div><pre>{JSON.stringify(data, null, 1)}</pre></div>)}
                    </div>
                </div>

            </section>
        </>
    );
};
