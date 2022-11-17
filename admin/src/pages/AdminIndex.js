import React, { useState, useEffect } from "react";

import { marked } from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import { Row, Col, Input, DatePicker, Button, message, List } from 'antd'
import axios from 'axios'
import servicePath from "../config/apiUrl";
import {useNavigate} from 'react-router-dom'
import {EditOutlined,DeleteOutlined} from '@ant-design/icons'

const { TextArea } = Input

export default function Adminindex() {
    marked.setOptions({
        renderer: new marked.Renderer(), 
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

    const [articleContent, setArticleContent] = useState('')
    const [markdownContent, setMarkdownContent] = useState('')
    const [articleId, setArticleId] = useState(0)
    const [articleTitle, setArticleTitle] = useState('')
    const [showData, setShowDate] = useState()
    const [list, setList] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        getList()
    },[])

    const changeContent = (e) => {
        setArticleContent(e.target.value)
        let html=marked(e.target.value)
        setMarkdownContent(html)
    }

    const saveArticle = () => {
        if(!articleTitle){
            message.error('文章标题不能为空')
            return false
        }else if(!articleContent){
            message.error('文章内容不能为空')
            return false
        }else if(!showData){
            message.error('发布日期不能为空')
            return false
        }
        let dataProps = {}
        dataProps.title = articleTitle
        dataProps.content = articleContent
        let datetext = showData.toString().replace('-','/')
        dataProps.addTime = (new Date(datetext).getTime())/1000
        console.log(dataProps)
        if(articleId===0){
            axios({
                method:'post',
                url:servicePath.addArticle,
                data:dataProps,
                withCredentials: true
            }).then(
                res=>{
                    setArticleId(res.data.insertId)
                    console.log(res)
                    if(res.data.data === '没有登录'){
                        localStorage.removeItem('openId')
                        navigate('/')
                    }else if(res.data.isSuccess){
                        message.success('文章发布成功')
                        getList()
                    }else{
                        message.error('文章发布失败');
                    }
                }
            )
        }
    }

    const getList = () => {
        axios({
            method:'get',
            url: servicePath.getArticleList,
            withCredentials: true,
        }).then(
            res=>{
                setList(res.data.list)
            }
        )
    }

    const delArticle = (id) => {
        axios(servicePath.delArticle+id,{withCredentials: true})
        .then(
            res=>{
                message.success('文章删除成功')
                getList()
            }
        )
    }

    const getArticleById = (id) => {
        axios(servicePath.getArticleById+id,
            {
                withCredentials:true,
                header:{ 'Access-Control-Allow-Origin':'*' }
            }).then(
                res=>{
                    setArticleId(res.data.data[0].id)
                    setArticleTitle(res.data.data[0].title)
                    setArticleContent(res.data.data[0].content)
                    let html=marked(res.data.data[0].content)
                    setMarkdownContent(html)
                    setShowDate(res.data.data[0].addTime) 
                }
            )
    }

    return (
        <div>
            <Row gutter={5}>
                
                <Col span={18}>
                    <Row gutter={10} >
                        <Col span={20}>
                            <Input 
                                value={articleTitle}
                                onChange={e=>{setArticleTitle(e.target.value)}}
                                placeholder="博客标题" 
                                size="large" />
                        </Col>
                        <Col span={4}>
                            <div className="date-select">
                                <DatePicker
                                    // value={moment(showDate)}
                                    onChange={(date,dateString)=>setShowDate(dateString)} 
                                    placeholder="发布日期"
                                    size="large"  
                                />
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    
                    <Row gutter={10} >
                        
                        <Col span={12}>
                        <TextArea
                            value={articleContent} 
                            className="markdown-content" 
                            rows= {35} 
                            onChange={changeContent} 
                            placeholder="文章内容"
                            />
                        </Col>
        
                        <Col span={12}>
                            <div 
                                className="show-html"
                                dangerouslySetInnerHTML = {{__html:markdownContent}} 
                                >
        
                            </div>
        
                        </Col>
                    </Row>  
                </Col>
        
                
                <Col span={6}>
                    <Row>
                        <Col span={24}>
                                {/* <Button  size="large">暂存文章</Button>&nbsp; */}
                                <Button type="primary" size="large" onClick={saveArticle}>发布文章</Button>
                                <br/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col span={24}>
                                <div className='article-list'>
                                <List
                                        itemLayout="vertical"
                                        dataSource={list}
                                        renderItem={item => (
                                            <List.Item>
                                                <Row>
                                                    <Col span={20}>
                                                        {item.title}
                                                    </Col>
                                                    <Col span={4}>
                                                        <Row>
                                                            <div ></div>
                                                            <EditOutlined onClick={()=>{getArticleById(item.id)}}/> &nbsp;
                                                            <DeleteOutlined onClick={()=>{delArticle(item.id)}}/>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </List.Item>
                                        )}
                                    />
                                </div>
                        </Col>
                    </Row>
                    
                </Col>
        
            </Row>
        </div>
    )
}

