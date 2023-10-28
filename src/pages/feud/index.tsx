import Head from "next/head";
import React, { useState } from "react";

export default function Home() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const prompt = event.target.prompt.value;

        const ans1 = event.target.ans1.value;
        const num1 = event.target.num1.value;

        const ans2 = event.target.ans1.value;
        const num2 = event.target.num1.value;

        const ans3 = event.target.ans1.value;
        const num3 = event.target.num1.value;

        const ans4 = event.target.ans1.value;
        const num4 = event.target.num1.value;

        const ans5 = event.target.ans1.value;
        const num5 = event.target.num1.value;

        const ans6 = event.target.ans1.value;
        const num6 = event.target.num1.value;

        const ans7 = event.target.ans1.value;
        const num7 = event.target.num1.value;

        const ans8 = event.target.ans1.value;
        const num8 = event.target.num1.value;

        const ansDic = {ans1:num1,ans2:num2};

        const obj = {"prompt":prompt,"answers":ansDic};

        console.log("Submit");
        console.log(obj);

    }

    return (
    <>
        <Head>
        <title>Familial Conflict</title>
        <meta name="description" content="Family Feud App" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#5711b9] to-[#26284b]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                Familial Conflict
            </h1>
            <div className="formContainer">
                <form action="/feud/display" method="POST" className="feudForm">

                    <label className="feudLabel">Prompt</label>
                    <input name="prompt" type="text" className="prompt"/>

                    <label className="feudLabel">Answer 1</label>
                    <div className="feudContainer">
                        <input name="ans1" type="text" className="answer"/>
                        <input name="num1" type="number" min="0" max="100" className="points"/>
                    </div>

                    <label className="feudLabel">Answer 2</label>
                    <div className="feudContainer">
                        <input name="ans2" type="text" className="answer"/>
                        <input name="num2" type="number" min="0" max="100" className="points"/>
                    </div>

                    <label className="feudLabel">Answer 3</label>
                    <div className="feudContainer">
                        <input name="ans3" type="text" className="answer"/>
                        <input name="num3" type="number" min="0" max="100" className="points"/>
                    </div>

                    <label className="feudLabel">Answer 4</label>
                    <div className="feudContainer">
                        <input name="ans4" type="text" className="answer"/>
                        <input name="num4" type="number" min="0" max="100" className="points"/>
                    </div>

                    <label className="feudLabel">Answer 5</label>
                    <div className="feudContainer">
                        <input name="ans5" type="text" className="answer"/>
                        <input name="num5" type="number" min="0" max="100" className="points"/>
                    </div>

                    <label className="feudLabel">Answer 6</label>
                    <div className="feudContainer">
                        <input name="ans6" type="text" className="answer"/>
                        <input name="num6" type="number" min="0" max="100" className="points"/>
                    </div>

                    <label className="feudLabel">Answer 7</label>
                    <div className="feudContainer">
                        <input name="ans7" type="text" className="answer"/>
                        <input name="num7" type="number" min="0" max="100" className="points"/>
                    </div>

                    <label className="feudLabel">Answer 8</label>
                    <div className="feudContainer">
                        <input name="ans8" type="text" className="answer"/>
                        <input name="num8" type="number" min="0" max="100" className="points"/>
                    </div>

                    <button className="submitFeud" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
        </main>
    </>
);
}
