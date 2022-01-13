import 'antd/dist/antd.css' 
import { Card, Input, Avatar, Typography } from "antd"
const { Search } = Input
const { Text } = Typography
const { Meta } = Card

const Chat = (props) => {

    const displayedMessages = []
    props.messages.forEach(msg => {
        displayedMessages.push(<Card key={msg.msg} style={{width: 300, margin: '16px 4px 0px 4px', alignSelf: props.userName === msg.user ? 'right' : 'left'}}>
            <Meta
                avatar={
                    <Avatar style={{color: '#5c8aff' , backgroundColor: props.userName === msg.user ?'#174dd4' : '#cfd5e6' }}>{msg.user[0].toUpperCase()}</Avatar>
                }
                title={msg.user}
                description={msg.msg}
            />
        </Card>
        )
    })

    
    return(
        <div id="chatbox">
            <Text type="secondary" style={{fontSize: '36px'}}>RoomMe Chat</Text>
            <div>
                {displayedMessages}
            </div>
            <div id="text-input">
                <Search
                    placeholder="type messages here"
                    enterButton="Send"
                    value={props.textboxVal}
                    size="large"
                    onChange={e => props.setTextboxVal(e.target.value)}
                    onSearch={value => props.onSend(value)}
                />
            </div>
        </div>
    )
}

export default Chat