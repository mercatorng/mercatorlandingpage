import React, { useRef } from 'react'
import { useGlobalContext } from '../context';

const ContactUs = () => {
  const { email, name, message, changeEmail, changeName, changeMessage, sendEmail, form  } = useGlobalContext()
  

 
  return (
    <div className='hero '>
      {/* contact-center  */}
      <div className='text-center py-28 '  data-aos="fade-up"
    data-aos-duration="2000">
        {/* heading  */}
     <h1 className='uppercase text-2xl sms:text-3xl text-white font-700 contact '>contact us</h1>
     <p className='text-white mt-4 p-5 max-w-[28rem] sms:max-w-[33rem] mx-auto'>We are available anyday, anytime, feel free to reach out to us. You
can drop a message, we will respond as soon as possible.
Fill the form to drop a message with us.</p>

    {/* form-center  */}
    <form className='mt-5 ' ref={form} onSubmit={sendEmail} >
        {/* input  */}
       <div>
      <input type="text" name='user_email' value={email} onChange={changeEmail} placeholder='Email address' className='w-[80%] max-w-[600px] p-[.35rem] pl-5 rounded-md focus:outline-none' />
       </div>
        {/* input  */}
       <div className='mt-2'>
      <input type="text" name='from_name' value={name} onChange={changeName} placeholder='Full Name' className='w-[80%] max-w-[600px] p-[.35rem] pl-5 rounded-md focus:outline-none' />
       </div>
        {/* input  */}
       <div className='mt-2'>
      <input type="text" name='message' value={message} onChange={changeMessage} placeholder='Message' className='w-[80%] max-w-[600px] p-[.35rem] pl-5 rounded-md pb-40 focus:outline-none' />
       </div>
     
      {/* submit button  */}
       <button className='mt-6 bg-btnColor rounded-md px-6 py-2'>
          <p className='text-white  '>Submit</p>
       </button>
    </form>
    {/* end of form center  */}
      </div>
    </div>
  )
}

export default ContactUs
