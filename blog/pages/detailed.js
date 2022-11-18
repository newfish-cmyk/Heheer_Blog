import React from "react";

import axios from 'axios'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

import Header from "../components/Header";
import servicePath from "../config/apiUrl";

export default function Detailed(article) {
    let myMarked = require('marked')
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
        }
    }); 

    let html = myMarked.marked(article.content) 

    return (
        <div className="detailed">
            <title>{article.title}</title>
            <Header />
            <div className="content font-mono">
                <div className="article_title text-4xl m-4 p-4">{article.title}</div>
                <div 
                    dangerouslySetInnerHTML={{__html:html}} 
                    className="article_content p-4"
                > 
                </div>
            </div>
        </div>
    )
}

Detailed.getInitialProps = async(context)=>{
    let id = context.query.id
    const promise = new Promise((resolve)=>{
        axios(servicePath.getArticleById+id).then(
            (res)=>{
                resolve(res.data.data[0])
            }
        )
    })
    return await promise
}