import { Stage, Layer} from 'react-konva';
// import children
import Selector from './Selector';
import CanvasImage from './CanvasImage';

const Editor = (props) => {

    // map canvasImage objs onto components
    const populatedImages = []
    props.canvasImages.forEach(i => {
        // console.log("i", i)
        // console.log("i.image", i.image)
        // console.log("i.dimensions[0]", i.dimensions[0])
        // console.log("i.dimensions[i]", i.dimensions[1])
        populatedImages.push(<CanvasImage url={i.image} height={i.dimensions[0]} width={i.dimensions[1]} x={i.x} y={i.y} imageIndex={i.imageIndex} updateXy={props.updateXy} /> )
    })

    return (
        <>
        <h2> Editor.js</h2>
        <div id="toolbox">
            <h2>Toolbox</h2>
        </div>
        <Stage width={600} height={600}>
				<Layer>
                {populatedImages}
				</Layer>
			</Stage>
            <Selector furniture={props.furniture} paintImage={props.paintImage}/>
        </>
    )
}

export default Editor