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

    // function: map furniture onto baby components
        // filter by cat and sub
    const loadThumbs = (e) => {
        let filteredFurniture = props.furniture.filter((f) => f.category.includes(e.target.innerText.toLowerCase()))
        console.log('ff: ', filteredFurniture)

        // TO DO: why is thumbs undefined??
        let thumbs = filteredFurniture.map(f => {
            <Thumbnail item={f}/>
        })
        console.log('thumbs: ', thumbs)
        setThumbnails(thumbs)
    }
   

    // function: populate canvas with clicked item
    const categoryButtons = [
        <button onClick={loadThumbs}>Kitchen</button>,
        <button onClick={loadThumbs}>Office</button>,
        <button onClick={loadThumbs}>Living</button>,
        <button onClick={loadThumbs}>Bedroom</button>,
        <button onClick={loadThumbs}>Dining</button>,
        <button onClick={loadThumbs}>Art</button>
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