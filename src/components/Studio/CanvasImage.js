import { useState, useEffect } from "react";
import useImage from "use-image";
import { Image } from "react-konva";

const CanvasImage = (props) => {

    const [image] = useImage(props.url);
    const [x, setX] = useState(65)
    const [y, setY] = useState(65)
    const [height, setHeight] = useState(props.height)
    const [width, setWidth] = useState(props.width)
    // const [selected, setSelected] = useState(false)
    // const [isDragging, setIsDragging] = useState(false)
        // useEffect(() => {
        //     setHeight(props.height)
        //     setWidth(props.width)
        // })
         const enlarge = () => {
            setWidth(width + 20)
            setHeight(height + 20)
        }
        const shrink = () => {
            setWidth(width - 20)
            setHeight(height - 20)
        }
        return (
                <Image 
                    image={image}
                    x={x}
					y={y}
                    height={height}
                    width={width}
					draggable
                    // add ternary to opacity
                    // opacity={selected ? .5 : 1}
					// fill={isDragging ? 'green' : 'black'}
					// onDragStart={() => {
					// 	setIsDragging(true)
					// }}
					onDragEnd={e => {
						// setIsDragging(false)
						setX(e.target.x())
						setY(e.target.y())
                    }}
                    onClick={shrink}    
                    onDblTap={enlarge}
                />
            )
}

export default CanvasImage