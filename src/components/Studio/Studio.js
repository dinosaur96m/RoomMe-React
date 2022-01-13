import { useEffect, useState } from "react"
import Editor from "./Editor"
import Chat from "./Messenger/Chat"
import 'bootstrap/dist/css/bootstrap.min.css'

const Studio = () => {

   

    return (
        <>
            <h1>This Is The Studio-Environment View</h1>
            <Editor/>
            <Chat/>
        </>

    )
}

export default Studio