import { useEffect, useState } from "react"
import { w3cwebsocket as W3CWebSocket } from "websocket"
import Editor from "./Editor"
import Chat from "./Messenger/Chat"
import 'bootstrap/dist/css/bootstrap.min.css'

const client = new W3CWebSocket('ws://localhost:8500')

const Studio = (props) => {

    return (
        <>
            <h1>This Is The Studio-Environment View</h1>
            <Editor client={client}/>
            <Chat user={props.user} client={client}/>
        </>

    )
}

export default Studio