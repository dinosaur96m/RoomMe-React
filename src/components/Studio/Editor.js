import { Stage, Layer} from 'react-konva';
// import children
import Selector from './Selector';
import CanvasImage from './CanvasImage';
import { Container, Row, Col } from 'react-bootstrap';



const Editor = (props) => {

    // map canvasImage objs onto components
    let populatedImages = []
    
    // map if props is new length
    if (props.canvasImages) {
        props.canvasImages.forEach(i => {
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
            <Col sm={4}>
                <Selector furniture={props.furniture} paintImage={props.paintImage}/>
            </Col>
            </Row>
        </Container>
    )
}

export default Editor