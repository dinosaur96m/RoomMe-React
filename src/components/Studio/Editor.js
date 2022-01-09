import {useState} from 'react'
import { Stage, Layer, Text, Image } from 'react-konva';
import useImage from 'use-image';

const Editor = () => {
    // Draggable Text
    const [x, setX] = useState(50)
	const [y, setY] = useState(50)
	const [isDragging, setIsDragging] = useState(false)

    // Image
    const LionImage = () => {
        const [image] = useImage('https://konvajs.org/assets/lion.png');
        const [imgX, setImgX] = useState(65)
        const [imgY, setImgY] = useState(65)
        const [isDragging, setIsDragging] = useState(false)
        return <Image 
                    image={image}
                    x={imgX}
					y={imgY}
					draggable
					// fill={isDragging ? 'green' : 'black'}
					onDragStart={() => {
						setIsDragging(true)
					}}
					onDragEnd={e => {
						setIsDragging(false)
						setImgX(e.target.x())
						setImgY(e.target.y())
                    }}
                />;
      };

    return (
        <>
        <h2> Editor.js</h2>
        <div id="toolbox">
            <h2>Tooolbox</h2>
        </div>
        <Stage width={600} height={600}>
				<Layer>
				<Text
					text="Draggable Text"
					x={x}
					y={y}
					draggable
					// fill={isDragging ? 'green' : 'black'}
					onDragStart={() => {
						setIsDragging(true)
					}}
					onDragEnd={e => {
						setIsDragging(false)
						setX(e.target.x())
						setY(e.target.y())
					}}
				/>
                <LionImage/>
				</Layer>
			</Stage>
        </>
    )
}

export default Editor