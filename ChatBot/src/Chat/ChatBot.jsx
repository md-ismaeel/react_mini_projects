import { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

export const ChatBot = () => {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [generatingAnswer, setGeneratingAnswer] = useState(false);

    const apiKey = import.meta.env.VITE_API_KEY_GENERATIVE_AI_GEMINI;

    const generateAnswer = async (e) => {
        e.preventDefault();

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
        const requestBody = {
            contents: [{ parts: [{ text: question }] }],
        };

        try {
            setGeneratingAnswer(true);
            const response = await axios.post(url, requestBody, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            // console.log("Response", response);
            setAnswer(response.data.candidates[0].content.parts[0].text);
        } catch (err) {
            console.log("Error occurred while fetching", err);
        } finally {
            setGeneratingAnswer(false);
        }
    };

    return (

        <>
            <section className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen p-4 flex flex-col justify-center items-center">
                <form
                    onSubmit={generateAnswer}
                    className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center rounded-lg shadow-lg bg-white py-8 px-6 transition-transform duration-300 transform hover:scale-105"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-500 mb-6">Chat AI</h1>

                    <textarea
                        required
                        className="border border-gray-300 rounded-md w-full my-3 p-4 transition-all duration-300 focus:border-blue-400 focus:shadow-lg resize-none min-h-[100px]"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Ask anything"
                    ></textarea>

                    <button
                        type="submit"
                        className={`bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-all duration-300 ${generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        disabled={generatingAnswer}
                    >
                        {generatingAnswer ? "Generating..." : "Generate Answer"}
                    </button>

                </form>

                {answer && (
                    <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mt-6 rounded-lg bg-white shadow-lg transition-transform duration-300 transform hover:scale-105">
                        <ReactMarkdown className="p-6 text-left">{answer}</ReactMarkdown>
                    </div>
                )}

            </section>
        </>

    );
};
