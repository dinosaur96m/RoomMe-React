import { Stage, Layer} from 'react-konva';
import { useEffect } from 'react';
// import children
import Selector from './Selector';
import CanvasImage from './CanvasImage';
import { Container, Row, Col } from 'react-bootstrap';



const Editor = (props) => {

    // useEffect(() => {}, [props.canvasImages])
    // map canvasImage objs onto components
    let populatedImages = []
    
    // map if props is new length
    if (props.canvasImages) {
        props.canvasImages.forEach(i => {
            // console.log("i", i)
            // console.log("i.image", i.image)
            // console.log("i.dimensions[0]", i.dimensions[0])
            // console.log("i.dimensions[i]", i.dimensions[1])
            populatedImages.push(<CanvasImage url={i.image} height={i.dimensions[0]} width={i.dimensions[1]} x={i.x} y={i.y} imageIndex={i.imageIndex} updateXy={props.updateXy} /> )
        }) 
    } else {
        
    }
    // if props is previous length

    return (
        <Container>
            <Row>
            <Col></Col>
            <Col>
                <Stage width={600} height={600}>
                    <Layer>
                    {populatedImages}
                    </Layer>
                </Stage>
            </Col>
            <Col>
                <Selector furniture={props.furniture} paintImage={props.paintImage}/>
            </Col>
            </Row>
        </Container>
    )
}

export default Editor