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
    // TO DO: Array of canvas images
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

    useEffect(() => loadFurniture(), [])
   

    // function: Thumbnail.onClick: paintImage on Canvas
    const paintImage = (obj) => {
        console.log("obj: ", obj)
        // map e.target onto CanvasImage.js
        // push new Canvas Image into state
        // TO DO: debug: new images replaces most recent 
            //unless a category button is pressed in betwenn
        let newArray = [...canvasImages, <CanvasImage url={obj.image} height={obj.dimensions[0]} width={obj.dimensions[1]}/>]
        setCanvasImages(newArray)
    }


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
                {canvasImages}
				</Layer>
			</Stage>
            <Selector furniture={furniture} paintImage={paintImage}/>
        </>
    )
}

export default Editor