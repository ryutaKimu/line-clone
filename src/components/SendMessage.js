import React, { useState } from 'react'
import { db,auth } from '../fireBase';
import firebase from "firebase/compat/app";
import { Input } from '@mui/material';
import SendIcon from "@mui/icons-material/Send"

export default function SendMessage() {
    const [message,setMessage] = useState();

    const sendMessage = (e)=>{
      e.preventDefault();

      const {uid,photoURL} = auth.currentUser;

      db.collection("messages").add({
        text: message,
        photoURL,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setMessage("");
    }
  return (
    <div>
        <form onSubmit={sendMessage}>
            <div className='sendMsg'>
            <Input placeholder='メッセージを入力してください'
             type='text' 
             onChange={(e)=>setMessage(e.target.value)} value={message}
             style={{
                width: "78%",
                fontSize: "15px",
                fontWeight: "550",
                marginLeft: "5px",
                marginBottom: "-3px",
              }}
              />
               <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} onClick={sendMessage}/>
            </div>
        </form>
      
    </div>
  )
}
