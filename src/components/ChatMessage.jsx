import { Avatar } from '@material-ui/core'
import React from 'react'

function ChatMessage({picture,name,message,selected}) {
    return (
        <div className={selected ?"chatMessage__container chatMessage__container__selected" :"chatMessage__container" }>
           <div className="chatMessage__avatar">
               <Avatar src={picture}/>
           </div> 
           <div className="chatMessage__contactInfo">
               <div className="chatMessage__contactInfo__nameTime">
                   <h4 className="h4__name contact__name">{name}</h4>
                   <span className="time">11:38</span>
               </div>
               <div className="chatMessage__contactInfo__message">
                   {message}
               </div>
           </div>
        </div>
    )
}

export default ChatMessage
