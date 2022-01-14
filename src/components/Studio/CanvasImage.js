import { useState} from "react";
import useImage from "use-image";
import { Image } from "react-konva";

const CanvasImage = (props) => {

    const [image] = useImage(props.url);
    // const [x] = useState(props.x)
    // const [y] = useState(props.y)
    // const [height, setHeight] = useState(props.height)
    // const [width, setWidth] = useState(props.width)
    // const [selected, setSelected] = useState(false)
    // const [isDragging, setIsDragging] = useState(false)
        // useEffect(() => {
        //     setHeight(props.height)
        //     setWidth(props.width)
        // })
    console.log("ci props: ", props)
        // across socket
        // const trackImage = (target) => {
        //         console.log(`tracking ${props.imageIndex}th image`)
        //        props.updateXy(target.x, target.y, imageIndex)
        // }
       

        // const enlarge = () => {
        //     setWidth(width + 20)
        //     setHeight(height + 20)
        // }
        // const shrink = () => {
        //     setWidth(width - 20)
        //     setHeight(height - 20)
        // }

        return (
                <Image 
                    image={image}
                    x={props.x}
					y={props.y}
                    height={props.height}
                    width={props.width}
					draggable
                    // add ternary to opacity
                    // opacity={selected ? .5 : 1}
					// fill={isDragging ? 'green' : 'black'}
					// onDragStart={(e) => }
                    onDragMove={e => props.updateXy(e.target.x(), e.target.y(), props.imageIndex) }
					onDragEnd={e => {
						// setIsDragging(false)
                        props.updateXy(e.target.x(), e.target.y(), props.imageIndex)
						// props.setX(e.target.x())
						// props.setY(e.target.y())
                    }}
                    // onClick={shrink}    
                    // onDblTap={enlarge}
                />
            )
}

export default CanvasImage