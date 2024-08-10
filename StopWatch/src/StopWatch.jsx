import React, { useState, useEffect, useRef } from 'react';

export const StopWatch = () => {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const startTimeRef = useRef(0);
    const timerRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            startTimeRef.current = Date.now() - elapsedTime;
            timerRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        } else {
            clearInterval(timerRef.current);
        }

        return () => clearInterval(timerRef.current);
    }, [isRunning, elapsedTime]);

    const start = () => {
        if (!isRunning) {
            setIsRunning(true);
        }
    };

    const stop = () => {
        if (isRunning) {
            setIsRunning(false);
        }
    };

    const reset = () => {
        clearInterval(timerRef.current);
        setElapsedTime(0);
        setIsRunning(false);
    };

    const formatTime = (time) => {
        const hours = String(Math.floor(time / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((time / (1000 * 60)) % 60)).padStart(2, '0');
        const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, '0');
        const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, '0');

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    };

    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
            <div className="text-5xl mb-6 p-4 border-2 border-teal-400 rounded-lg bg-gray-700">
                {formatTime(elapsedTime)}
            </div>
            <div className="flex space-x-4">
                <button
                    className={`px-4 py-2 text-lg font-semibold text-gray-800 bg-teal-400 rounded hover:bg-teal-300 transition ${isRunning ? 'cursor-not-allowed opacity-50' : ''}`}
                    onClick={start}
                    disabled={isRunning}
                >
                    Start
                </button>
                <button
                    className={`px-4 py-2 text-lg font-semibold text-gray-800 bg-teal-400 rounded hover:bg-teal-300 transition ${!isRunning ? 'cursor-not-allowed opacity-50' : ''}`}
                    onClick={stop}
                    disabled={!isRunning}
                >
                    Stop
                </button>
                <button
                    className={`px-4 py-2 text-lg font-semibold text-gray-800 bg-teal-400 rounded hover:bg-teal-300 transition ${elapsedTime === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
                    onClick={reset}
                    disabled={elapsedTime === 0}
                >
                    Reset
                </button>
            </div>
        </section>
    );
};