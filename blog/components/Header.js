import React from "react";

export default function Header() {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <ul className="header flex font-mono text-l sm:text-2xl">
        <li className="items ml-8 my-4">
          <a href="/">HOME</a>
        </li>
        <li className="items ml-8 my-4">
          <a href="/blog">BLOG</a>
        </li>
        <li className="items ml-8 my-4">
          <a href="/projects">PROJECTS</a>
        </li>
        {/* <li className="items ml-8 my-4">
          <a href="/photos">PHOTOS</a>
        </li> */}
        <li className="items ml-8 my-4">
          <a href="#">LOGIN</a>
        </li>
      </ul>
    </div>
    
  );
}
