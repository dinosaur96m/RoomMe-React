import { useEffect, useState } from "react"
// import { w3cwebsocket as W3CWebSocket } from "websocket"
import 'antd/dist/antd.css' 
import { Card, Input, Avatar, Typography } from "antd"

const { Search } = Input
const { Text } = Typography
const { Meta } = Card
// const client = new W3CWebSocket('ws://localhost:8500')

const Chat = (props) => {
    // initialize state
        // add userName from auth
    const [userName, setUserName] = useState(props.user.email)
    // const [isLoggedIn, setIsLogged] = useState(true)
    const [messages, setMessages] = useState([])
    const [textboxVal, setTextboxVal] = useState('')

    const onButtonClicked = (value) => {
        console.log("sending mssg: ", value)
        props.client.send(JSON.stringify({
            type: "message",
            msg: value,
            user: userName
        }))
        setTextboxVal('')
    }
    

    props.client.onopen = () => {
        console.log('Chat.js Connected to Websocket')
    }
    props.client.onmessage = (message) => {
        const dataFromServer = JSON.parse(message.data)
        console.log('got response! ', dataFromServer)
        if (dataFromServer.type === "message") {
            setMessages([
                ...messages,
                {
                    msg: dataFromServer.msg,
                    user: dataFromServer.user
                }
            ])
        }
    }

    const displayedMessages = []
    messages.forEach(msg => {
        displayedMessages.push(<Card key={msg.msg} style={{width: 300, margin: '16px 4px 0px 4px', alignSelf: userName === msg.user ? 'right' : 'left'}}>
            <Meta
                avatar={
                    <Avatar style={{color: '#5c8aff' , backgroundColor: userName === msg.user ?'#174dd4' : '#cfd5e6' }}>{msg.user[0].toUpperCase()}</Avatar>
                }
                title={msg.user}
                description={msg.msg}
            />
        </Card>
        )
    })

    
    return(
        <div id="chatbox">
            <Text type="secondary" style={{fontSize: '36px'}}>RoomMe Chat</Text>
            <div>
                {displayedMessages}
            </div>
            <div id="text-input">
                <Search
                    placeholder="type messages here"
                    enterButton="Send"
                    value={textboxVal}
                    size="large"
                    onChange={e => setTextboxVal(e.target.value)}
                    onSearch={value => onButtonClicked(value)}
                />
            </div>
        </div>
    )
}

export default Chat