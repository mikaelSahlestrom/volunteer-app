import React from 'react'
import styles from './Chat.module.css'
// RCE CSS
import 'react-chat-elements/dist/main.css'
// MessageBox component
import { MessageBox } from 'react-chat-elements'
import {ChatList} from 'react-chat-elements'

function Chat() {
    return (
        <div className={styles.Chat}>
            Insert some fancy chat will ya?
        </div>
    )
}

export default Chat
