import React, {useState} from 'react';
import 'antd/dist/antd.css'
import { Button, Card, Input, Spin, message } from 'antd'
import axios from 'axios'
import servicePath from '../config/apiUrl';
import { useNavigate } from 'react-router-dom'

function Login(){
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const checkLogin = ()=>{
        setIsLoading(true)
        if(!userName){
            message.error('用户名不能为空')
            setTimeout(()=>{
                setIsLoading(false)
            },300)
            return false
        }else if(!password){
            message.error('密码不能为空')
            setTimeout(()=>{
                setIsLoading(false)
            },300)
            return false
        }
        let dataProps = {
            'userName':userName,
            'password':password
        }
        axios({
            method: 'post',
            url: servicePath.checkLogin,
            data: dataProps,
            withCredentials: true
        }).then(
            res=>{
                setIsLoading(false)
                if(res.data.data==='登录成功') {
                    localStorage.setItem('openId', res.data.openId)
                    navigate('./index')
                }else{
                    message.error('用户名或密码错误')
                }
            }
        )
        setTimeout(()=>{
            setIsLoading(false)
        },500)
    }

    return (
        <div className='login'>
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="Heheer Blog" bordered={true} style={{width:400}}>
                    <Input
                        id="userName"
                        size="large"
                        placeholder='Enter your userName'
                        onChange={(e)=>{setUserName(e.target.value)}}
                    />
                    <br/><br/>
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder='Enter your password'
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <br/><br/>
                    <Button type='primary' size='large' block onClick={checkLogin} >Login</Button>
                </Card>
            </Spin>
        </div>
    )
}
export default Login