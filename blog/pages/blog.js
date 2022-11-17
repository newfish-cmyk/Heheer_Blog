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
            <div className="article_list">
                {myList.map((item) => {
                    return (
                        <div key={item.id}
                            className="list_item 
                            bg-white w-10/12 m-4 p-4 h-28 rounded-lg flex-row">
                            {/* <Link href={{pathname:'/detailed'}}> */}
                            <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                                <div className="title text-xl mb-2">{item.title}</div>
                                <div className="brief text-sm">{item.brief}</div>
                            </Link>
                        </div>
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