import { useState } from 'react';

export const Gallery = () => {
    const [imgData, setImgData] = useState(null);

    const images = [
        'https://imgs.search.brave.com/bAdI7a7qnuuOIJphttt3DfbzLnCU7ZDMtnkejXq6UII/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMDkz/OC81NDk5L2kvNDUw/L2RlcG9zaXRwaG90/b3NfNTQ5OTg2MTMt/c3RvY2stcGhvdG8t/Z2luZ2VyLWNhdC5q/cGc',
        'https://imgs.search.brave.com/YzG9FgYN5qLWsiYyJ4dUEvxav9e98dBH0loR8YPRA1E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/ODc3NTY1L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtYnJvd24tY2F0/LWFnYWluc3QtYS1n/cmF5LWJhY2tncm91/bmQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWlGcFFNSzlF/aTIzVm9XcExLa2Zh/TFVtdXN5Y3VaWllV/OWtWMjNzT2F6YzQ9',
        'https://imgs.search.brave.com/lZtf1S7JKFcaZs2lhxTpAtaJzTk_V35Xt8ys4htuVBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBvc2VzLXBl/cmZlY3RseS5qcGc_/d2lkdGg9MTAwMCZm/b3JtYXQ9cGpwZyZl/eGlmPTAmaXB0Yz0w',
        'https://imgs.search.brave.com/t6Nv0DwxoIACRxxtX2h7yt31ux5SCXHWgHVpoGh1diw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzM2Lzk5LzIy/LzM2MF9GXzIzNjk5/MjI4M19zTk94Q1ZR/ZUZMZDVwZHFhS0do/OERSR01aeTdQNFhL/bS5qcGc',
    ];

    function setImage(item) {
        setImgData(item);
    }

    return (
        <>
            <section className="w-full h-auto flex flex-col justify-start items-center mt-2">
                <div>
                    <h1 className='mb-2 text-lg font-semibold'>Click on An image!!</h1>
                </div>
                <div className='flex justify-center items-center gap-4 w-11/12 min-h-[100px] flex-wrap mt-4'>
                    {images.map((item, index) => (
                        <div
                            key={index}
                            className='w-full max-w-[250px] h-[200px] border-2 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105'
                        >
                            <img
                                src={item}
                                alt='img'
                                onClick={() => setImage(item)}
                                className='w-full h-full object-cover cursor-pointer'
                            />
                        </div>
                    ))}
                </div>

                {imgData && (
                    <div className="mt-4 mb-4 flex flex-col justify-center items-center">
                        <h1 className='text-xl font-semibold mt-5 mb-1'>Selected image</h1>
                        <div className='w-full max-w-[350px] border-2 border-gray-300 rounded-lg overflow-hidden'>
                            <img src={imgData} className='w-full h-full rounded-md object-cover' />
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};
