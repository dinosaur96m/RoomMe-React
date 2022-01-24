import { useState } from "react"
import {ButtonGroup, Button} from "react-bootstrap"
import Thumbnail from "./Thumbnail"

const Selector = (props) => {
    //hold current thumbnails in state
    const [thumbnails, setThumbnails] = useState([])

    // filter furniture props according to Buttons
    const loadThumbs = (e) => {
        // filter by category 
        let filteredFurniture = props.furniture.filter((f) => f.category.includes(e.target.innerText.toLowerCase()))
        setThumbnails(filteredFurniture)
    }

    // map filtered list onto children
    const thumbs = thumbnails.map(f => {
        return <Thumbnail item={f} key={f._id} paintImage={props.paintImage}/>
    })
   
    const categoryButtons = [
        <Button variant="outline-info"onClick={loadThumbs} key={"Kitchen"}>Kitchen</Button>,
        <Button variant="outline-info"onClick={loadThumbs} key={"Office"}>Office</Button>,
        <Button variant="outline-info"onClick={loadThumbs} key={"Living"}>Living</Button>,
        <Button variant="outline-info"onClick={loadThumbs} key={"Bedroom"}>Bedroom</Button>,
        <Button variant="outline-info"onClick={loadThumbs} key={"Dining"}>Dining</Button>,
        <Button variant="outline-info"onClick={loadThumbs} key={"Art"}>Art</Button>
    ]

    return(
        <div>
            <h3>Furniture Selection</h3>
            <div>
                <ButtonGroup>
                    {categoryButtons}
                </ButtonGroup>
            </div>
            {thumbs}
        </div>
    )   
}

export default Selector