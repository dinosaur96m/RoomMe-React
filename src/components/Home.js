import {useState} from 'react'
import { Stage, Layer, Text } from 'react-konva';

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)
	const [x, setX] = useState(50)
	const [y, setY] = useState(50)
	const [isDragging, setIsDragging] = useState(false)
	return (
		<>
			<h2>Home Page</h2>
			 <Stage width={window.innerWidth} height={window.innerHeight}>
				<Layer>
				<Text
					text="Draggable Text"
					x={x}
					y={y}
					draggable
					fill={isDragging ? 'green' : 'black'}
					onDragStart={() => {
						setIsDragging(true)
					}}
					onDragEnd={e => {
						setIsDragging(false)
						setX(e.target.x())
						setY(e.target.y())
					}}
				/>
				</Layer>
			</Stage>
		</>
	)
}

export default Home
