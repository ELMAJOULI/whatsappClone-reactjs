import React from 'react'
import DoneAllIcon from '@material-ui/icons/DoneAll';

function ChatBubble({left}) {
    return (
        <div className={left? "chatBubble __flexLeft" : "chatBubble __flexRight"}>
            <div className={left? "chatBubble__container" : "chatBubble__container __backgroundRight"}>
                <span className="__chatBubble__message __block">Hello How are you doing !?</span>
                <div className="__messageInfo">
                    <span className="__time __block">11:24</span>
                    {
                        !left &&
                        <DoneAllIcon className="__icon__small " fontSize="small" />
                    }
                </div>
            </div>
        </div>
    )
}

export default ChatBubble
