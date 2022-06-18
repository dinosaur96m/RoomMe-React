import { useRef } from "react";
import useImage from "use-image";
import { Konva, Image } from "react-konva";

const CanvasImage = (props) => {

    const [image] = useImage(props.url)
    const imgRef = useRef(null)
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

    // animate image to render according to props
    const animateMotion = (node) => {
        node.to({
            x: props.x,
            y: props.y
        })
    }
    
    // functions to grow / shrink images 
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
            ref={imgRef}
            height={props.height}
            width={props.width}
            draggable
            // add ternary to opacity
            // opacity={selected ? .5 : 1}
            // fill={isDragging ? 'green' : 'black'}
            // onDragStart={(e) => }
            onDragMove={e => {
                props.updateXy(e.target.x(), e.target.y(), props.imageIndex) 
                } 
            }
            onDragEnd={e => {
                props.updateXy(e.target.x(), e.target.y(), props.imageIndex)
                // animateMotion(e.target)
            }}
                // onClick={shrink}    
                // onDblTap={enlarge}
            />
        )
}

export default CanvasImage