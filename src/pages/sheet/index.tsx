import Head from "next/head";
import { api } from "~/utils/api";
import { useState } from "react";
import StatBlock from "components/stat";

export default function Home() {
    const hello = api.example.hello.useQuery({ text: "from tRPC" });
    const [wis, setWis] = useState(10);
    const [str, setStr] = useState(10);
    const [int, setInt] = useState(10);
    const [cha, setCha] = useState(10);
    const wisName = 'Wisdom';
    const strName = 'Strength';
    const intName = 'Intelligence';
    const chaName = 'Charisma';
    return (
    <>
        <Head>
        <title>Stat Blocks</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#5711b9] to-[#26284b]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Stat <span className="text-[hsl(280,100%,70%)]">Blocks</span>
            </h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <StatBlock name={wisName} num={wis}/>
            <StatBlock name={strName} num={str}/>
            <StatBlock name={chaName} num={cha}/>
            <StatBlock name={intName} num={int}/>
            </div>
        </div>
        </main>
    </>
);
}
