import { useState } from "react";

export const Tabs = () => {

    const tabsData = [
        {
            tab: "Tab 1",
            heading: "Content of Tab 1:",
            content:
                "HTML elements tell the browser how to display the content. For example, you can use HTML to create static pages with text, headings, tables, lists, images, links, and more.",
        },
        {
            tab: "Tab 2",
            heading: "Content of Tab 2:",
            content:
                "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.",
        },
        {
            tab: "Tab 3",
            heading: "Content of Tab 3:",
            content:
                "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.",
        },
    ];


    const [tabs, setTab] = useState(tabsData[0]);


    const handleSetData = (ele) => {
        setTab(ele);
    };

    return (
        <>
            <section className="w-full h-screen flex justify-center items-center">
                <div className="w-[550px] h-[250px] border-2 rounded-lg">
                    <div className="flex">
                        {tabsData &&
                            tabsData.map((ele, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSetData(ele)}
                                    className={`w-[90px] h-[45px] text-white ${tabs.tab === ele.tab ? "bg-blue-500" : "bg-teal-300"} ${ele.tab === "Tab 1" ? "rounded-tl-lg" : ""
                                        }`}>
                                    {ele.tab}
                                </button>
                            ))}
                    </div>
                    <div className="mt-2 p-4">
                        {tabs && (
                            <>
                                <h2 className="text-xl font-bold mb-2">{tabs.heading}</h2>
                                <p>{tabs.content}</p>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};
