import React, {useState} from 'react'
import styles from './Chat.module.css'
import virvel from '../../../Icons/ProfileIcon.svg'
// RCE CSS
import 'react-chat-elements/dist/main.css'
// MessageBox component
import { MessageBox, ChatList, ChatItem, MessageList, Input, Button } from 'react-chat-elements'

function Chat() {
    let listOfChats = [
        {
            avatar: virvel,
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
    
    const [showMessages, setShowMessages] = useState(false)
    const [showList, setShowList] = useState(true)

    const openMessages = (person) => {
        setShowMessages(true)
    }

    const cancel = () => {
        setShowMessages(false)
        setShowList(true)
    }

    let chatScreen = (
        <div className={styles.Chat}>
            <ChatList 
                className = 'chat list'
                dataSource = {listOfChats}
                onClick = {(person) => 
                    // alert(props.title)
                    openMessages(person)
                }
            />
        </div>
    )
    if (showMessages) {
        chatScreen = (
            <div>
                <button onClick = {cancel}>
                    Go back
                </button>
                <MessageList
                    className = 'Messages'
                    lockable = {true}
                    toBottomHeight = {'100%'}
                    dataSource = {[
                        {
                            position: 'right',
                            type: 'text',
                            text: 'Consectetur adipisicing elit',
                            date: new Date(),
                        },
                        {
                            position: 'right',
                            type: 'text',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                            date: new Date(),
                        },
                        {
                            position: 'left',
                            type: 'text',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                            date: new Date(),
                        },
                        {
                            position: 'right',
                            type: 'text',
                            text: 'Lorem ipsum dolor sit amet',
                            date: new Date(),
                        },
                    ]}
                />
            </div>
        )
    }
    return (
        <div>
            {chatScreen}
        </div>
    )
}

export default Chat
