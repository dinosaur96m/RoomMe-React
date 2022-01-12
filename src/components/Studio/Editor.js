import {useState, useEffect} from 'react'
import { Stage, Layer, Text } from 'react-konva';
// import packages and variables
import apiUrl from '../../apiConfig'
import axios from 'axios'
// import children
import Selector from './Selector';
import CanvasImage from './CanvasImage';

const Editor = () => {
    // Draggable Text
    const [x, setX] = useState(50)
	const [y, setY] = useState(50)
	// const [isDragging, setIsDragging] = useState(false)
    const [furniture, setFurniture] = useState([])
    // Pass canvasImages to ImageMapper
    const [canvasImages, setCanvasImages] = useState([])

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

    //if ImgMapper eliminated
    const populatedImages = []
    canvasImages.forEach(i => {
            console.log("i", i)
            // console.log("i.image", i.image)
            // console.log("i.dimensions[0]", i.dimensions[0])
            // console.log("i.dimensions[i]", i.dimensions[1])
            populatedImages.push(<CanvasImage url={i.image} height={i.dimensions[0]} width={i.dimensions[1]}/> )
    })


    console.log("populate: ", populatedImages)    

    useEffect(() => loadFurniture(), [])
   
   

    // function: Thumbnail->onClick: paintImage on Canvas
    const paintImage = (obj) => {
        console.log("obj: ", obj)
        // map e.target onto CanvasImage.js
        // push new obj into state -> will pass as props to Image Mapper
        // let newArray = [...canvasImages, obj]
        setCanvasImages([...canvasImages, obj])
    }

    // Possible Workaround : function that updates coordinates in State rather than CanvasImage

    return (
        <>
        <h2> Editor.js</h2>
        <div id="toolbox">
            <h2>Toolbox</h2>
        </div>
        <Stage width={600} height={600}>
				<Layer>
				<Text
					text="Draggable Text"
					x={x}
					y={y}
					draggable
					// fill={isDragging ? 'green' : 'black'}
					// onDragStart={() => {
					// 	setIsDragging(true)
					// }}
					onDragEnd={e => {
						// setIsDragging(false)
						setX(e.target.x())
						setY(e.target.y())
					}}
				/>
                {populatedImages}
				</Layer>
			</Stage>
            <Selector furniture={furniture} paintImage={paintImage}/>
        </>
    )
}

export default Editor