import React from "react";
import Header from "../components/Header";

export default function Home() {

  return (
    <>
      <title>Heheer's blog</title>
      <Header />
      <div className="font-mono text-gray-200 text-4xl font-black flex-column w-1/2 m-auto pt-32">
        <p className="pb-12">Hi, there! 👋 </p>
        <p>I'm heheer, a front-end beginner.</p>
      </div>
    </>
  );
}
