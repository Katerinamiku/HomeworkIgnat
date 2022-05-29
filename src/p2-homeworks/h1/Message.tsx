import React from 'react'
import s from './Message.module.css'

type MessageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}


const Message = function (props: MessageDataType) {
    return (
        <div className={s.message}>
            <img className={s.avatar} src={props.avatar} alt={'avatar'}/>
            <div className={s.bubbleMessage}>
                <div className={s.messageContent}>
                    <p className={s.nickname}>{props.name}</p>
                    <p className={s.messageText}>{props.message}</p>
                </div>
                <p className={s.time}>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
