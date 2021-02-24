import React from 'react'
import {Avatar} from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchIcon from '@material-ui/icons/Search';
import ChatMessage from "./ChatMessage";

function Contacts() {
    return (
        <div className="contacts__container">
            <div className="contacts__header">
                <div className="contacts__header__profil">
                    <Avatar  src="/static/prof1.jpg"  />
                </div>
                <div className="contacts__header__icon">
                    <DonutLargeIcon className="__icon"/>
                    <ChatIcon className="__icon"/>
                    <MoreVertIcon className="__icon"/>
                </div>
            </div>
            <div className="contacts__search">
                <div className="search__container">
                    <SearchIcon className="__icon"/>
                    <input type="text" name="search__contacts" id="search_contacts"
                        className="input__text "
                        placeholder="Search or start new chat"
                    />
                </div>
            </div>
            <div className="contacts__list">
                <ChatMessage picture={"static/prof3.jpg"} name={"Najatii"} message={"Nice"}/>
                <ChatMessage selected picture={"static/prof2.jpg"} name={"Hamza Limamii"} message={"Fink a sat"}/>
                <ChatMessage picture={"static/prof4.jpg"} name={"Abdewahed"} message={"Hello you :)"}/>
                <ChatMessage picture={"static/prof5.jpg"} name={"Karim"} message={"what are you doing?"}/>
                <ChatMessage picture={"static/prof3.jpg"} name={"Yassine Bro"} message={"free tonight"}/>
            </div>
        </div>
    )
}

export default Contacts
