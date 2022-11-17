import React from "react";

export default function Header() {
    return (
        <ul className="header flex font-mono text-2xl">
            <li className="items ml-8 my-4"><a href="/">HOME</a></li>
            <li className="items ml-8 my-4"><a href="/blog">BLOG</a></li>
            <li className="items ml-8 my-4"><a href="#">PROJECTS</a></li>
            <li className="items ml-8 my-4"><a href="#">PHOTOS</a></li>
            <li className="items ml-8 my-4"><a href="#">LOGIN</a></li>
        </ul>
    )
}