
const Thumbnail = (props) => {
    return (
        <div>
            <image style={{height: props.item.dimensions[0]}} src={props.item.image}></image>
        </div>
    )
}

export default Thumbnail