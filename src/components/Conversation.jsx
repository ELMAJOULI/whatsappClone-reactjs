import React from 'react';
import {Avatar} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmojiIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import ChatBubble from './ChatBubble';
import EmojiPicker from 'emoji-picker-react';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import {useApplicationContext} from "../data/context";

function Conversation() {
        const [isEmojiOpen,setIsEmojiOpen] = React.useState(false);
        const [isUploadOpen,setIsUploadOpen] = React.useState(false);
        const [message,setMessage] = React.useState("");
        const [messageList,setMessageList] = React.useState([]);
        const inputMessageRef = React.useRef(null);
        const MessageListRef = React.useRef(null);
        const [{selectedContact},dispatch] = useApplicationContext();

        React.useEffect(()=>{
            inputMessageRef.current.value = message
            MessageListRef.current.scrollTop = MessageListRef.current.scrollHeight;
        },[message])
        const sendMessage = ()=> {
            setMessageList(prev => [...prev,message]);
            setMessage("");
            inputMessageRef.current.value = ""
        }
    return (
        <div className="conversation__container">
            <div className="conversation__header">
                <div className="conversation__header__profil">
                    <Avatar  src={selectedContact.picture.medium}  />
                    <h4 className="h4__name">{`${selectedContact.name.first} ${selectedContact.name.last}`}</h4>
                </div>
                <div className="conversation__header__icons">
                    <SearchIcon className="__icon" />
                    <MoreVertIcon className="__icon" />
                </div>
            </div>
            <div ref={MessageListRef} className="conversation__scrollContainer">
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
                {
                    messageList.map(m => <ChatBubble messge={m} time={`${new Date().getHours()}:${new Date().getSeconds()}`}/>)
                }
            </div>
            <div className="conversation__chatInputContainer">
                {
                    isEmojiOpen &&
                <div onClick={()=>{ setIsEmojiOpen(false)}}>
                    <CloseIcon className="__icon" />
                </div>
                }
                <div onClick={()=>{ setIsEmojiOpen(true)}}>
                    <EmojiIcon className="__icon"/>
                </div>
                <div onClick={()=>{ setIsUploadOpen(!isUploadOpen)}}>
                    <AttachFileIcon className="__icon __attachIcon" />
                </div>
                <input type="text" name="chat_messge" id="chat_messge" 
                    placeholder="Type a message"
                    className="input__text"
                    onChange={(e)=>{setMessage(e.target.value)}}
                    ref={inputMessageRef}
                    onKeyDown={(e)=> {
                        e.keyCode === 13 && sendMessage() 
                    }}
                />
                {
                    message?(<div onClick={sendMessage}><SendIcon className="__icon"/></div>) : (<div><MicIcon className="__icon"/></div>)
                }
            </div>
            {
                isEmojiOpen && 
                <EmojiPicker  onEmojiClick={(e,{emoji})=> { setMessage(message+emoji); }}disableSearchBar={true} native={true} preload={true} pickerStyle={{
                    width:'100%',
                    backgroundColor:"#2a2f32",
                    color:"#ffff",
                    boxShadow:"none",
                    borderColor:"#2a2f32",
                    position:"absolute",
                    top:"100%",
                }}
                 className="conversation__emojiPicker"/>
            }
            {
                isUploadOpen &&
                (
                  <div className="conversation__container__uploadPicker">
                      <label className="child"></label>
                      <label className="child" htmlFor="file-image">
                          <input hidden type="file" name="image" id="file-image" style={{height:"0px",width:"0px"}}/>
                      </label>
                      <label htmlFor="file-file" className="child">
                          <input hidden type="file" name="file" id="file-file" style={{height:"0px",width:"0px"}}/>
                      </label>
                      <label className="child"></label>
                  </div>
                )
            }
        </div>
    )
}

export default Conversation
