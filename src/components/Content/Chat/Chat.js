import React, {useState} from 'react'
import styles from './Chat.module.css'
import virvel from '../../../Icons/DefaultChatImage.svg'
// RCE CSS
import 'react-chat-elements/dist/main.css'
// MessageBox component
import { MessageBox, ChatList, ChatItem, MessageList, Input, Button } from 'react-chat-elements'

function Chat() {
    let listOfChats = [
        {
            // avatar: 'https://avatars.githubusercontent.com/u/82896272?v=4',
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

    let chatMessages = [];

    let testBotMessages = [
        {
            position: 'right',
            type: 'text',
            text: 'And that\'s only the first part! Come and look in here.',
            date: new Date(),
        },
        {
            position: 'left',
            type: 'text',
            text: 'Whirr! Whirr!',
            date: new Date(),
        },
        {
            position: 'right',
            type: 'text',
            text: 'I think you\'ll find this present a valuable addition to our modern lifestyle!',
            date: new Date(),
        },
        {
            position: 'right',
            type: 'text',
            text: 'They\'re "Techno Trousers". Ex-NASA. Fantastic for walkies!',
            date: new Date(),
        },
    ]

    let adamMessages = [
        {
            position: 'right',
            type: 'text',
            text: 'And that\'s only the first part! Come and look in here.',
            date: new Date(),
        }
    ]
    
    let chatMap = new Map()
    chatMap.set('TestBot', testBotMessages)
    chatMap.set('Adam', adamMessages)

    const [showMessages, setShowMessages] = useState(false)
    const [showList, setShowList] = useState(true)

    const openMessages = (person) => {
        setShowMessages(true)
        chatMessages = chatMap.get(person.title)
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
            <div >
                <button onClick = {cancel}>
                    Go back
                </button>
                <MessageList
                    className = 'messages'
                    lockable = {true}
                    toBottomHeight = {'100%'}
                    dataSource = {chatMessages}
                />
                <Input
                    classname='messages-input'
                    placeholder="Type here..."
                    multiline={true}
                    rightButtons={
                        <Button
                            color='white'
                            backgroundColor='black'
                            text='Send'/>
                    }
                />
            </div>
        )
    }
    return (
        <div className='chatscreen'>
            {chatScreen}
        </div>
    )
}

export default Chat
