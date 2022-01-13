import { useState } from "react"
import Thumbnail from "./Thumbnail"

const Selector = (props) => {
    //hold current thumbnails in state
    const [thumbnails, setThumbnails] = useState([])

    // filter furniture props according to buttons
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
        <button onClick={loadThumbs} key={"Kitchen"}>Kitchen</button>,
        <button onClick={loadThumbs} key={"Office"}>Office</button>,
        <button onClick={loadThumbs} key={"Living"}>Living</button>,
        <button onClick={loadThumbs} key={"Bedroom"}>Bedroom</button>,
        <button onClick={loadThumbs} key={"Dining"}>Dining</button>,
        <button onClick={loadThumbs} key={"Art"}>Art</button>
    ]

    return(
        <div>
            <h3>Furniture Selection</h3>
            <div>
                {categoryButtons}
            </div>
            {thumbs}
        </div>
    )   
}

export default Selector