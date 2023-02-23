import React from "react";

import Header from "../components/Header";
// import Footer from "../components/Footer"
import Link from "next/link";

import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

export default function Projects() {
  let myMarked = require("marked");
  myMarked.setOptions({
    renderer: myMarked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });

  const project_list = [
    {
      id: 1,
      title: "Heheer_blog",
      intro: "这个博客的开源项目",
      href: "https://github.com/newfish-cmyk/Heheer_Blog",
      tech_stack:
        "· 前台：Next.js + Tailwind\n\n" +
        "· 中台：egg.js\n\n" +
        "· 后台：React + ant design",
    },
    {
      id: 2,
      title: "FrontEnd_Learning_project",
      intro: "学习前端时写的一些小项目",
      href: "https://github.com/newfish-cmyk/FrontEnd_Learning_project",
      tech_stack:
        "· HTML + CSS + JavaScript\n\n" + 
        "· React Basic & React Advanced",
    },
    {
      id: 3,
      title: "zhiyouni-miniprogram",
      intro: "参加大创写的一个微信小程序",
      href: "https://github.com/newfish-cmyk/zhiyouni-miniprogram",
      tech_stack: "· WXML + WXSS + JavaScript",
    },
  ];

  return (
    <div>
      <Header />
      <title>Heheer's PROJECTS</title>
      <div className="projects">
      <div className="project_list px-0 py-4 sm:pl-12 sm:py-8">
        {project_list.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.href}
              className="project_item font-mono flex-row mx-6 my-2 py-2 "
            >
              <div className="project_title text-2xl mb-2 ml-2 flex">
                <img src="../gear.png" className="gear mr-2"></img>
                {item.title}
              </div>
              <div className="project_intro m-2 ml-12">{item.intro}</div>
              <div
                dangerouslySetInnerHTML={{
                  __html: myMarked.marked(item.tech_stack),
                }}
                className="tech_stack leading-none ml-4"
              ></div>
            </Link>
          );
        })}
      </div>
      <div>
        <img src="../ship.svg" className="ship hidden md:flex"></img>
      </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
