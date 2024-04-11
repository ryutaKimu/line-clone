import { Button } from '@mui/material'
import React from 'react'
import firebase from "firebase/compat/app";
import { auth } from '../fireBase';

export default function SignIn() {
    const signInWithGoogle = ()=>{
       const provider =  new firebase.auth.GoogleAuthProvider();
       auth.signInWithPopup(provider);
    }
  return (
    <div>
        <Button onClick={signInWithGoogle}>Googleでログインする</Button>
    </div>
  )
}
