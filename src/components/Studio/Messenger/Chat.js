import { useEffect, useState } from "react"
import { w3cwebsocket as W3CWebSocket } from "websocket"
import 'antd/dist/antd.css' 
import { Card, Input, Avatar, Typography } from "antd"

const { Search } = Input
const client = new W3CWebSocket('ws://localhost:8500')

const Chat = () => {

    // initialize state
    const [userName, setUserName] = useState('')
    const [isLoggedIn, setIsLogged] = useState(false)

    const onButtonClicked = (value) => {
        console.log("sending mssg: ", value)
        client.send(JSON.stringify({
            type: "message",
            msg: value
        }))
    }
    
    useEffect(() => {
        client.onopen = () => {
            console.log('Websocket Client Connected')
        }
        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data)
            console.log('got response! ', dataFromServer)
        }
    }, [])
    return(
        <div id="chatbox">
            <h2>Chatbox</h2>
            <button onClick={() => onButtonClicked("Hello!")}>Send Message</button>
        </div>
    )
}

export default Chat