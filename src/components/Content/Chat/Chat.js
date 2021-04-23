import React from 'react'
import styles from './Chat.module.css'
// RCE CSS
import 'react-chat-elements/dist/main.css'
// MessageBox component
import { MessageBox, ChatList, ChatItem, MessageList } from 'react-chat-elements'

function Chat() {
    let listOfChats = [
        {
            avatar: 'https://avatars.githubusercontent.com/u/82896272?v=4',
            title: 'TestBot',
            subtitle: 'How are you?',
            date: new Date(),
        },
        {
            avatar: 'https://avatars.githubusercontent.com/u/82896272?v=4',
            title: 'Adam',
            subtitle: 'Progress has been made',
            date: new Date(2021, 1, 1, 16, 10)
        },
    ];
    return (
        <div className={styles.Chat}>
            <ChatList 
                className = 'chat list'
                dataSource = {listOfChats}
                onClick = {(props) => 
                    alert(props.title)
                }
            />
        </div>
    )
}

export default Chat
