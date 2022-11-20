import React from "react";

import Header from "../components/Header";
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
        "· 后台：React hooks + ant design",
    },
    {
      id: 2,
      title: "FrontEnd_Learning_project",
      intro: "学习前端时写的一些小项目",
      href: "https://github.com/newfish-cmyk/FrontEnd_Learning_project",
      tech_stack:
        "· HTML + CSS + JavaScript\n\n" + " · React Basic & React Advanced",
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
      <div className="project_list p-4">
        {project_list.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.href}
              className="project_item w-9/12 m-4 p-4 h-48 rounded-lg flex-row font-mono"
            >
              <div className="project_title text-2xl mb-2 ml-2 mt-1">
                {item.title}
              </div>
              <div className="project_intro m-2">{item.intro}</div>
              <div
                dangerouslySetInnerHTML={{
                  __html: myMarked.marked(item.tech_stack),
                }}
                className="tech_stack leading-none"
              ></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
