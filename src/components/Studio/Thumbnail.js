
const Thumbnail = (props) => {
    return (
        <div>
            <img style={{height: 80}} src={props.item.image} onClick={() => props.paintImage(props.item)}></img>
        </div>
    )
}

export default Thumbnail