import { useState } from "react"
import Thumbnail from "./Thumbnail"

const Selector = (props) => {
    // hold category and subcategory in state
    // const [category, setCategory] = useState('')
        // const [subcategory, setSubcategory] = useState('')
    // // hold current thumbnails in state
    const [thumbnails, setThumbnails] = useState([])

    // function that sets cat
    // const catState = (e) => {
    //     console.log(e.target.innerText)
    //     setCategory(e.target.innerText)
    // }
    // fucntion that sets sub

    // map furniture onto child components
    const loadThumbs = (e) => {
        // filter by cat and TO DO: sub
        let filteredFurniture = props.furniture.filter((f) => f.category.includes(e.target.innerText.toLowerCase()))

        // map filtered list onto children
        let thumbs = filteredFurniture.map(f => {
            return <Thumbnail item={f} key={f._id} paintImage={props.paintImage}/>
        })
        setThumbnails(thumbs)
    }
   
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
          {thumbnails}
        </div>
    )   
}

export default Selector