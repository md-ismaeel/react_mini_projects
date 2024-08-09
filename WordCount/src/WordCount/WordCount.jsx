import { useState, useEffect } from "react";

export const WordCount = () => {

    const safeParseJSON = (key, defaultValue) => {
        try {
            const savedValue = localStorage.getItem(key);
            return savedValue ? JSON.parse(savedValue) : defaultValue;
        } catch (error) {
            return defaultValue;
        }
    };

    const [text, setText] = useState(() => safeParseJSON("text", ""));
    const [words, setWords] = useState(() => safeParseJSON("words", 0));
    const [chars, setChars] = useState(() => safeParseJSON("chars", 0));
    const [paras, setParas] = useState(() => safeParseJSON("paras", 0));

    function handleClick() {
        let word = text.split(/\s+/).filter((word) => word !== "").length;
        let character = text.length;
        let para = text.split("\n").filter((line) => line.trim() !== "").length;

        setWords(word);
        setChars(character);
        setParas(para);
    }

    function handleClear() {
        setText("");
        setWords(0);
        setChars(0);
        setParas(0);
        localStorage.clear();
    }

    useEffect(() => {

        localStorage.setItem("text", JSON.stringify(text));
        localStorage.setItem("words", JSON.stringify(words));
        localStorage.setItem("chars", JSON.stringify(chars));
        localStorage.setItem("paras", JSON.stringify(paras));

    }, [text, words, chars, paras]);

    return (
        <section className="w-full h-screen flex justify-center items-center">
            <div className="w-[70%] h-[350px] flex flex-col border-2 rounded-md py-4 px-6">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    id="textarea"
                    name="textarea"
                    className="w-full border-[1.4px] border-blue-500 rounded-md h-[250px] px-5 py-2 placeholder:text-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-700"
                    placeholder="Enter your text here...."
                />

                <div className="w-full flex justify-between items-center mt-5 px-2">

                    <p>Words: <span>{words}</span></p>
                    <p>Chars: <span>{chars}</span></p>
                    <p>Paras: <span>{paras}</span></p>
                    <button
                        onClick={handleClick}
                        className="w-[70px] h-[35px] border-none bg-[#007bff] text-white rounded-md hover:bg-[#0056b3] hover:scale-[1.05] focus:outline-none focus:shadow-[0_0_0_2px_rgba(0,123,255,0.5)] active:bg-[#004085] active:scale-[0.98] active:shadow-inner transition duration-150 ease-in-out"
                    >
                        Count
                    </button>

                    <button
                        onClick={handleClear}
                        className="w-[70px] h-[35px] border-none bg-[#007bff] text-white rounded-md hover:bg-[#0056b3] hover:scale-[1.05] focus:outline-none focus:shadow-[0_0_0_2px_rgba(0,123,255,0.5)] active:bg-[#004085] active:scale-[0.98] active:shadow-inner transition duration-150 ease-in-out"
                    >
                        Clear
                    </button>

                </div>
            </div>
        </section>
    );
};

