import React from 'react';
import {Avatar} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmojiIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import ChatBubble from './ChatBubble';

function Conversation() {
    return (
        <div className="conversation__container">
            <div className="conversation__header">
                <div className="conversation__header__profil">
                    <Avatar  src="/static/prof2.jpg"  />
                    <h4 className="h4__name">Hamza Limami</h4>
                </div>
                <div className="conversation__header__icons">
                    <SearchIcon className="__icon" fontSize="medium"/>
                    <MoreVertIcon className="__icon" fontSize="medium"/>
                </div>
            </div>
            <div className="conversation__scrollContainer">
                <ChatBubble left />
                <ChatBubble />
                <ChatBubble left />
                <ChatBubble />
                <ChatBubble left />
                <ChatBubble />
                <ChatBubble left />
                <ChatBubble />
                <ChatBubble left />
                <ChatBubble />
                <ChatBubble left />
                <ChatBubble left />
            </div>
            <div className="conversation__chatInputContainer">
                <EmojiIcon className="__icon" />
                <AttachFileIcon className="__icon __attachIcon" />
                <input type="text" name="chat_messge" id="chat_messge" 
                    placeholder="Type a message"
                    className="input__text"
                />
                <MicIcon className="__icon" />
            </div>
        </div>
    )
}

export default Conversation
