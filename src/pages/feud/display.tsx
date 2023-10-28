import Head from "next/head";
import React, { useState } from "react";
import { parseBody } from "next/dist/server/api-utils/node";
import FeudDisplay from "components/feudDisplay";

export async function getServerSideProps(context) {
    let data = null;
  
    if (context.req.method === "POST") {
      const body = await parseBody(context.req, '1mb');
      console.log("Retrieve");
      console.log(body);
      
      const prompt = body.prompt;

        const ans1: string = body.ans1;
        const num1: number = +body.num1;

        const ans2: string = body.ans2;
        const num2: number = +body.num2;

        const ans3: string = body.ans3;
        const num3: number = +body.num3;

        const ans4: string = body.ans4;
        const num4: number = +body.num4;

        const ans5: string = body.ans5;
        const num5: number = +body.num5;

        const ans6: string = body.ans6;
        const num6: number = +body.num6;

        const ans7: string = body.ans7;
        const num7: number = +body.num7;

        const ans8: string = body.ans8;
        const num8: number = +body.num8;

        const ansDic = [
            {text:ans1, points:num1},
            {text:ans2, points:num2},
            {text:ans3, points:num3},
            {text:ans4, points:num4},
            {text:ans5, points:num5},
            {text:ans6, points:num6},
            {text:ans7, points:num7},
            {text:ans8, points:num8}];

        const obj = {"prompt":prompt,"answers":ansDic};

      data = obj;
    }
  
    return { props: { data }};
  }

 export default function Home({ data }) {
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
                {data.prompt}
            </h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
                
            {data.answers.map(answer => {
                  return (
                    <FeudDisplay answer={answer.text}
                    points={answer.points} />
                  );
                })}
            </div>
            <a href="/feud" className="submitFeud">New Round</a>
        </div>
        </main>
    </>
);
}
