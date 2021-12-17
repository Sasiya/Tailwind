/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import react, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import StaticsCard from "../components/StaticsCard";
import TestCard from "../components/TestCard";

// import styles from "../styles/Home.module.css";
export default function Home() {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar onClick={() => alert("ss")} />
      <div className="px-16 pt-4">
        <div className="lg:flex justify-between z-0 w-full">
          <StaticsCard />
          <TestCard />
        </div>
        <div className="w-full bg-white shadow-inner z-10 mt-5 rounded-lg h-[550px] block p-7 mb-6">
          <div className="flex border-2 w-2/6 h-10 align-middle justify-between flex-wrap items-center px-3 text-base text-[#3C3C3C]">
            <button
              onClick={() => setSelectedTab(1)}
              className={selectedTab === 1 ? "text-[#566EE6] font-bold" : null}
            >
              Today's Orders
            </button>
            <button
              onClick={() => setSelectedTab(2)}
              className={selectedTab === 2 ? "text-[#566EE6] font-bold" : null}
            >
              Tommorow's Orders
            </button>
            <button
              onClick={() => setSelectedTab(3)}
              className={selectedTab === 3 ? "text-[#566EE6] font-bold" : null}
            >
              Custom Orders
            </button>
          </div>
          <div className="lg:w-full h-44 border-2 mt-8">s</div>
        </div>
      </div>
    </div>
  );
}
