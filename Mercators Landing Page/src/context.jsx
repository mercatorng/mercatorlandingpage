import React, { useState, useContext , useRef} from 'react'
import emailjs from '@emailjs/browser';
import axios from "axios"
const url = 'https://mercatorapiservices.com/api/Message/Send'

export const AppContext = React.createContext()

export const AppProvider = ({children})=>{
const [modalOpen, setModalOpen] = useState(false)
const [openMessage, setOpenMessage] = useState(false);
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")
const form = useRef();

const changeName = (e)=>{
        setName(e.target.value)
}
const changeEmail = (e)=>{
        setEmail(e.target.value)
}
const changeMessage = (e)=>{
        setMessage(e.target.value)
}

const openModal = ()=>{
    setModalOpen(true)
}
const closeModal = ()=>{
    setModalOpen(false)
}
const menuClick = ()=>{
    setModalOpen(false)
}
const messageClose = () => {
    setOpenMessage(false);
  };


const sendEmail = async(e) => {
    e.preventDefault();
  console.log(name);
    if (name && email && message) {
    setOpenMessage(true)
    setName("")
    setEmail("")
    setMessage("")
    try {
      const resp = await axios.post(url, {
       to: [
         "Connect@mercator.ng"
       ],
      subject: "Message From Mercator Website",
       message:`<p>name:${name}</p> <p>email:${email}</p> <p><b>message:${message}</p></b>`, 
       from: "noreply@mercator.ng",
       senderName: "Mercator",
      })
      console.log(resp.data);
   }catch(error){
    console.log(error.response);
   }
  };
}


    return <AppContext.Provider value={{modalOpen, openModal, closeModal, menuClick, openMessage,name,email, message, changeEmail, changeMessage, changeName, sendEmail, messageClose}}>
       {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
  };