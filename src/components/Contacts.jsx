import React from 'react'
import {Avatar} from "@material-ui/core";
import ChatMessage from "./ChatMessage";
import {ArrowBack as ArrowBackIcon,
       Search as SearchIcon,
       DonutLarge as DonutLargeIcon,
       MoreVert as MoreVertIcon,
       Chat as ChatIcon,
} from '@material-ui/icons';
import {useApplicationContext} from "../data/context";
import {selectContact} from "../data/actions";

function Contacts() {
    const [searchKey,setSearchKey] = React.useState("");
    const [selectedContact,setSelectedContact] = React.useState("");
    const [state,dispatch] = useApplicationContext();
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
                    <div className="__icon__container __icon__search">
                        <SearchIcon className="__icon "/>
                    </div>
                    <div className="__icon__container __icon__arrow">
                        <ArrowBackIcon className="__icon "/> 
                    </div>
                    <input type="text" name="search__contacts" id="search_contacts"
                        onChange={(e)=> setSearchKey(e.target.value)}
                        value={searchKey}
                        className="input__text "
                        placeholder="Search or start new chat"
                    />
                </div>
            </div>
            <div className="contacts__list">
                {
                    searchKey ?
                    state.contacts.filter(c => (`${c.name.first} ${c.name.last}`.toLocaleUpperCase().includes(searchKey.toLocaleUpperCase())))
                                   .map(c =><ChatMessage key={c.login.uuid} onClick={()=>{selectContact(c.login.uuid,dispatch)}} selected={c.login.uuid === state.selectedContact.login.uuid} picture={c.picture.medium} name={`${c.name.first} ${c.name.last}`} message={"Nice"}/>)
                    :
                    state.contacts.map(c =><ChatMessage key={c.login.uuid} onClick={()=>{selectContact(c.login.uuid,dispatch)}} selected={c.login.uuid === state.selectedContact.login.uuid} picture={c.picture.medium} name={`${c.name.first} ${c.name.last}`} message={"Nice"}/>)
                }
            </div>
        </div>
    )
}

export default Contacts
