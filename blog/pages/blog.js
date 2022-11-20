import React, { useState } from "react";
import Link from "next/link";
import axios from 'axios'

import Header from "../components/Header";
import servicePath from "../config/apiUrl";

const Blog = (list) => {

    const [myList, setMyList] = useState(list.data)

    return (
        <div className="blog">
            <title>BLOG</title>
            <Header />
            <div className="article_list pt-4">
                {myList.map((item) => {
                    return (
                        <Link  key={item.id} href={{pathname:'/detailed',query:{id:item.id}}} 
                        className="list_item w-10/12 m-4 p-4 h-36 rounded-lg flex-row font-mono">
                            <div className="title text-2xl mb-2 ml-2 mt-1">{item.title}</div>
                            <div className="brief m-2">{item.brief}</div>
                            <div className="time m-2">{item.time}</div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

Blog.getInitialProps = async () => {
    const promise = new Promise((resolve)=>{
        axios(servicePath.getArticleList).then(
            (res)=>{
                resolve(res.data)
            }
        )
    })

    return await promise
}

export default Blog