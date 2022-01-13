import { useEffect, useState } from "react"
import { w3cwebsocket as W3CWebSocket } from "websocket"
// import packages and variables
import 'bootstrap/dist/css/bootstrap.min.css'
import apiUrl from '../../apiConfig'
import axios from 'axios'
// import children
import Editor from "./Editor"
import Chat from "./Messenger/Chat"

// instantiate websocket
const client = new W3CWebSocket('ws://localhost:8500')

const Studio = (props) => {

    //// state ////
    // initialize chat state
        // TO DO: add userName from auth
    const [userName] = useState(props.user.email)
    const [messages, setMessages] = useState([])
    const [textboxVal, setTextboxVal] = useState('')
    // initialize Editior state
    const [furniture, setFurniture] = useState([])
    const [canvasImages, setCanvasImages] = useState([])

    //// get all furniture from the database ////
    const loadFurniture = () => {
        return axios({
            method: 'GET',
            url: apiUrl + '/furniture',
        })
        .then((response) => {
            console.log(response)
            setFurniture(response.data.furnitures)
        })
        .catch((err) => console.log(err))
    }
    useEffect(() => loadFurniture(), [])

    //// editor funcitons ////
    // function: send clicked thumbnail to all clients 
    // to save in state: canvasImages
    const paintImage = (obj) => {
        console.log("obj: ", obj)
        // let newArray = [...canvasImages, obj]
        client.send(JSON.stringify({
            type: "canvasImageAdded",
            imageObj: obj
        }))
    }

    //// chat functions ////
    const onSend = (value) => {
        console.log("sending mssg: ", value)
        client.send(JSON.stringify({
            type: "message",
            msg: value,
            user: userName
        }))
        setTextboxVal('')
    }
    
    //// websocket handlers ////
    client.onopen = () => {
        console.log('Studio.js Connected to Websocket')
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
        } else if (dataFromServer.type === "canvasImageAdded") {
            console.log('img obj from db: ', dataFromServer.imageObj)
            setCanvasImages([...canvasImages, 
                {
                    image: dataFromServer.imageObj.image,
                    dimensions: dataFromServer.imageObj.dimensions
                }])
        }
    }

    return (
        <>
            <h1>This Is The Studio-Environment View</h1>
            <Editor client={client} canvasImages={canvasImages} furniture={furniture} paintImage={paintImage}/>
            <Chat userName={userName} messages={messages} textboxVal={textboxVal} setTextboxVal={setTextboxVal} onSend={onSend}/>
        </>
    )
}

export default Studio