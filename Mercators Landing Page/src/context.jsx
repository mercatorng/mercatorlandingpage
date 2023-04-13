import React, { useState, useContext , useRef} from 'react'
import emailjs from '@emailjs/browser';

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


const sendEmail = (e) => {
    e.preventDefault();
  console.log(name);
    if (name && email && message) {
    setOpenMessage(true)
    setName("")
    setEmail("")
    setMessage("")
    emailjs.sendForm('service_h5inqlr', 'template_pv6rrrd', form.current, 'jAsy_egLMBP-u_NF4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    
  };


    return <AppContext.Provider value={{modalOpen, openModal, closeModal, menuClick, openMessage,name,email, message, changeEmail, changeMessage, changeName, sendEmail, form, messageClose}}>
       {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
  };