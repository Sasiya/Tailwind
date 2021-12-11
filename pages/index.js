/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
// import styles from '../styles/Home.module.css'
export default function Home() {
  console.log("object");
  return (
    <div className="px-8 mt-10">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar onClick={() => alert("ss")} />

      {/* <NavBar /> */}
      {/* <div className="p-6 w-1/3 md:w-1/2 lg:w-full mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 ">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12"
            src="/images/test.jpeg"
            // alt="ChitChat Logo"
          />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div> */}
      <button onClick={() => alert("hello world")}>Hello Application</button>

      <div className="max-w-md py-4 px-8 bg-white shadow-2xl rounded-lg my-20 py-5">
        <div>
          <text className="text-gray-800 text-lg font-semibold uppercase">
            Order Statistics
          </text>
          <div className="flex items-center justify-between flex-wrap mt-4">
            <div className="w-28">
              <p className="font-semibold">1,500,500</p>
              <p className="text-gray-500 text-xs text-gray-400 mt-1">
                Number of orders
              </p>
            </div>
            <div className="w-28">
              <p className="font-semibold">1,500,430</p>
              <p className="text-gray-500 text-xs mt-1">Delivered Orders</p>
            </div>
            <div className="w-28" />
          </div>
          <div className="flex items-center justify-between flex-wrap mt-7">
            <div className="w-28">
              <p className="font-semibold">1</p>
              <p className="text-gray-500 text-xs text-gray-400 mt-1">
                Refunded Orders
              </p>
            </div>
            <div className="w-28">
              <p className="font-semibold">15</p>
              <p className="text-gray-500 text-xs mt-1">Returned Orders</p>
            </div>
            <div className="w-28">
              <p className="font-semibold">20</p>
              <p className="text-gray-500 text-xs mt-1">Cancelled Orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
