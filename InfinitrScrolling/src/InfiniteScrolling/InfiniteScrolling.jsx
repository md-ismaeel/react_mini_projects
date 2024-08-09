// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Loader } from "../Components/Loader";

// export const InfiniteScrolling = () => {
//     const [data, setData] = useState([]);
//     console.log("data", data);

//     const [page, setPage] = useState(1);
//     const [isLoading, setIsLoading] = useState(false);

//     const fetchData = async () => {
//         setIsLoading(true);
//         console.log('Fetching data for page:', page);
//         const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`;
//         try {
//             const response = await axios(url);
//             console.log("response", response.data);
//             setData((prevData) => [...prevData, ...response.data]);
//             setIsLoading(false);
//         } catch (error) {
//             console.error('Fetching Error:', error);
//             setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [page]);

//     const handleScrolling = () => {
//         console.log('Scrolling detected');
//         const scrollHeight = document.documentElement.scrollHeight;
//         const scrollTop = document.documentElement.scrollTop;
//         const clientHeight = document.documentElement.clientHeight;

//         console.log('scrollHeight', scrollHeight);
//         console.log('scrollTop', scrollTop);
//         console.log('clientHeight', clientHeight);

//         if (clientHeight + scrollTop + 1 >= scrollHeight && !isLoading) {
//             setPage((prevPage) => prevPage + 1);
//         }
//     };

//     useEffect(() => {

//         window.addEventListener('scroll', handleScrolling);

//         return () => window.removeEventListener('scroll', handleScrolling);

//     }, [isLoading]);

//     return (
//         <>
//             <div className="w-[100%] h-auto flex flex-col justify-center items-center">
//                 {data.map((item) => (
//                     <li key={item.id} className=" w-[90%] h-[100px] flex justify-between items-center list-none border-2 rounded-md px-2 mt-5">
//                         <h1 className='w-[70%] text-lg font-semibold'>{item.title}</h1>
//                         <div className="w-[25%] h-[80px]">
//                             <img src={item.url} alt={item.title} className="w-[100%] h-[100%] rounded-md" />
//                         </div>
//                     </li>
//                 ))}
//             </div>
//             {isLoading && (
//                 <div className="w-full text-center mt-10">
//                     <Loader />
//                 </div>
//             )}
//         </>
//     );
// };

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader } from "../Components/Loader";

export const InfiniteScrolling = () => {
    const [data, setData] = useState([]);
    // console.log("data", data);

    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        console.log('Fetching data for page:', page);

        try {
            const response = await axios(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
            // console.log("response", response.data);

            setData((prevData) => [...prevData, ...response.data]);
            setIsLoading(false);
        } catch (error) {
            console.error('Fetching Error:', error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    const handleScrolling = () => {
        console.log('Scrolling detected');
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        console.log('scrollHeight', scrollHeight);
        console.log('scrollTop', scrollTop);
        console.log('clientHeight', clientHeight);

        if (clientHeight + scrollTop + 1 >= scrollHeight && !isLoading) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrolling);
        return () => window.removeEventListener('scroll', handleScrolling);
    }, [isLoading]);

    return (
        <>
            <div className="w-[100%] h-auto flex flex-col justify-center items-center">
                {data.map((item) => (
                    <li key={`${item.id}-${item.pageNumber}`} className=" w-[90%] h-[100px] flex justify-between items-center list-none border-2 rounded-md px-2 mt-5 mb-4">
                        <h1 className='w-[70%] text-lg font-semibold'>{item.title}</h1>
                        <div className="w-[25%] h-[90%]">
                            <img src={item.url} alt={item.title} className="w-[100%] h-[100%] object-cover rounded-md" />
                        </div>
                    </li>
                ))}
            </div>
            {isLoading && (
                <div className="w-full text-center mt-10 mb-5">
                    <Loader />
                </div>
            )}
        </>
    );
};