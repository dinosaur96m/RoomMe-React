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
    // send to: Chat.js
        // TO DO: add userName from auth
    const [userName] = useState(props.user.email)
    const [messages, setMessages] = useState([])
    const [textboxVal, setTextboxVal] = useState('')
    // send to : Editior.js
    const [furniture, setFurniture] = useState([])
    const [canvasImages, setCanvasImages] = useState([])
    // send to: CanvasImage.js
    // const [x, setX] = useState(65)
    // const [y, setY] = useState(65)
    // const [height, setHeight] = useState(props.height)
    // const [width, setWidth] = useState(props.width)

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
    useEffect(() => loadFurniture(), [canvasImages])

    //// editor funcitons ////
    // function: send clicked thumbnail to all clients 
    // to save in state: canvasImages
    const paintImage = (obj) => {
        console.log("obj: ", obj)
        // let newArray = [...canvasImages, obj]
        console.log("CI Length", canvasImages.length)
        client.send(JSON.stringify({
            type: "canvasImageAdded",
            imageObj: obj,
            imageIndex: canvasImages.length,
            x: 65,
            y: 65
        }))
    }

    // function: track xy coords of a CanvasImage
    const updateXy = (x, y, idx) => {
        client.send(JSON.stringify({
            type: "trackingXy",
            index: idx,
            x: x,
            y: y,
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
            console.log("message form db: ", dataFromServer.msg)
            setMessages(() => {
                return([
                ...messages,
                {
                    msg: dataFromServer.msg,
                    user: dataFromServer.user
                }
            ])
        })
        } else if (dataFromServer.type === "canvasImageAdded") {
            console.log('img obj from db: ', dataFromServer.imageObj)
            setCanvasImages(() => {
                return([...canvasImages, 
                {
                    image: dataFromServer.imageObj.image,
                    dimensions: dataFromServer.imageObj.dimensions,
                    imageIndex: dataFromServer.imageIndex,
                    x: dataFromServer.x,
                    y: dataFromServer.y
                }
            ])
        })
        } 
        while (dataFromServer.type === "trackingXy") {
            console.log("setting canavasImages[" + dataFromServer.index + "] x,y to: " + dataFromServer.x + "," + dataFromServer.y )
            // save array of canvas Image objects
            setCanvasImages(() => {
                let canvasState = canvasImages
                // update the x and y of targeted object
                canvasState[dataFromServer.index].x = dataFromServer.x
                canvasState[dataFromServer.index].y = dataFromServer.y
                return (canvasState)
            })
        }
    }

    return (
        <>
            <h1>This Is The Studio-Environment View</h1>
            <Editor client={client} canvasImages={canvasImages} furniture={furniture} paintImage={paintImage} updateXy={updateXy}/>
            <Chat userName={userName} messages={messages} textboxVal={textboxVal} setTextboxVal={setTextboxVal} onSend={onSend}/>
        </>
    )
}

export default Studio