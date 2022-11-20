import React from "react";
import Header from "../components/Header";

export default function Home() {

  return (
    <>
      <title>Heheer's blog</title>
      <Header />
      <div className="font-mono text-gray-200 font-black flex-column m-auto pt-32 text-4xl w-8/12 sm:w-1/2 ">
        <p className="pb-12">Hi, there! 👋 </p>
        <p>I'm heheer, a front-end beginner.</p>
      </div>
    </>
  );
}
