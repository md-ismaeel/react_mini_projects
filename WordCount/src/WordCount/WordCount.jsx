
export const WordCount = () => {

    function handleClick() {

    }
    function handleClear() {

    }

    return (
        <section className="w-full h-screen flex justify-center items-center">
            <div className="w-[70%] h-[350px] flex flex-col border-2 rounded-md py-4 px-6">

                <textarea
                    id="textarea"
                    name="textarea"
                    className="w-full border h-[250px] px-5 py-2 placeholder:text-lg text-lg"
                    placeholder="Enter your text here...."
                />

                <div className="w-full flex justify-between items-center mt-5 px-2">
                    <p>Words:<span>{ }</span></p>
                    <p>Chars:<span>{ }</span></p>
                    <p>Paras:<span>{ }</span></p>
                    <button onClick={handleClick}>Count</button>
                    <button onClick={handleClear}>Clear</button>
                </div>

            </div>
        </section>
    )
}
