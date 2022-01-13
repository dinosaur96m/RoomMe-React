import { useEffect, useState } from "react"
import { w3cwebsocket as W3CWebSocket } from "websocket"
import 'antd/dist/antd.css' 
import { Card, Input, Avatar, Typography } from "antd"

const { Search } = Input
const {Text} = Typography
const client = new W3CWebSocket('ws://localhost:8500')

const Chat = () => {

    // initialize state
        // add userName from auth
    const [userName, setUserName] = useState('bingo')
    const [isLoggedIn, setIsLogged] = useState(true)
    const [messages, setMessages] = useState([])
    const [textboxVal, setTextboxVal] = useState('')

    const onButtonClicked = (value) => {
        console.log("sending mssg: ", value)
        client.send(JSON.stringify({
            type: "message",
            msg: value,
            user: userName
        }))
    }
    
   
    client.onopen = () => {
        console.log('Websocket Client Connected')
    }
    client.onmessage = (message) => {
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
   

    
    return(
        <div id="chatbox">
            <Text type="secondary" style={{fontSize: '36px'}}>RoomMe Chat</Text>
            <button onClick={() => onButtonClicked("Hello!")}>Send Message</button>
            {messages.map(msg => <p>message: {msg.msg} user: {msg.user}</p>)}
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