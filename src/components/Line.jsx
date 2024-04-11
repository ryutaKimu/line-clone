import React, { useEffect, useState } from 'react'
import SignOut from './SignOut'
import { db,auth } from '../fireBase'
import {deleteDoc,doc} from "firebase/firestore"
import SendMessage from './SendMessage';
import { Menu, MenuItem } from '@mui/material';

export default function Line() {
    const [messages,setMessages] = useState([]);
    const [anchorEl,setAncholEl] = useState(null);
    const [selectedMessageId, setSelectedMessageId] = useState(null);
    useEffect(()=>{
      db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot)=>{
          setMessages(snapshot.docs.map((doc)=>{
            return { id: doc.id, ...doc.data() };
          }))
      });
    },[]);

    const handleClickMenu = (event,messageId)=>{
      setAncholEl(event.currentTarget);
      setSelectedMessageId(messageId);
    }

    const handleCloseMenu = ()=>{
      setAncholEl(null);
      setSelectedMessageId(null);
    }

    const handleDeleteMessage = ()=>{
      if(selectedMessageId){
        deleteDoc(doc(db, "messages", selectedMessageId))
          
      }
      handleCloseMenu();  
     
    }

  return (
    <div>
        {console.log(messages)}
      <SignOut/>
      <div className="msgs">
        {messages.map(({id,text,photoURL,uid})=>(
            <div>
                <div key={id} 
                className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}
                onContextMenu={(e)=>handleClickMenu(e,id)}
                >
                  <img src={photoURL} alt='aa' />
                  <p>{text}</p>
                </div>
            </div>
        ))}
        <Menu 
        id='message-menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}>

          <MenuItem onClick={handleDeleteMessage}>削除</MenuItem>

        </Menu>
      </div>
      <SendMessage/>
    </div>
  )
}
