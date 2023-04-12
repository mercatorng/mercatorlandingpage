import React from 'react'
import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {FaPinterest} from "react-icons/fa"
import {FaTimes} from "react-icons/fa"
import { Link } from 'react-scroll'
import { useGlobalContext } from '../context'



const Modal = () => {
    const{modalOpen, closeModal, menuClick} = useGlobalContext()
  return (
    // modal 
    <aside className={modalOpen ? 'w-[100%] h-[100%] transitioni fixed z-20 bg-white ' : 'w-[100%] h-[100%] fixed translate-x-[-100%] transitioni  z-20 bg-white ' }>
        {/* modal-center  */}
       <div className=' p-16'>
        <button className='focus:outline-none' onClick={closeModal}>
        <article className='mb-20'>
        <FaTimes className='text-5xl text-pryPurpule absolute top-8 right-12 cursor-pointer'/>
        </article>
        </button>
        {/* modal-links  */}
        <article className='flex flex-col space-y-8 '>
        <Link to = "Home" className='cursor-pointer hover:text-pryPurpule hover:ml-7 w-[100%] transition' spy={true}
                smooth={true}
                offset={-200} onClick={menuClick}>
          <h1 className='text-2xl smd:text-3xl'>Home</h1>
        </Link>
        <Link to = "About" className='cursor-pointer  hover:text-pryPurpule hover:ml-7 transition' smooth={true} offset={-150} onClick={menuClick}>
          <h1 className='text-2xl smd:text-3xl'>About Mercator</h1>
        </Link>
        <Link to = "Companies" className='cursor-pointer  hover:text-pryPurpule hover:ml-7 transition' spy={true}
                smooth={true}
                 onClick={menuClick}>
          <h1 className='text-2xl smd:text-3xl'>Our Companies</h1>
        </Link>
        <Link to = "Team" className='cursor-pointer  hover:text-pryPurpule hover:ml-7 transition' spy={true}
                smooth={true}
                offset={-50} onClick={menuClick}>
          <h1 className='text-2xl smd:text-3xl'>Team</h1>
        </Link>
        </article>
        {/* end of modal-links  */}
          {/* socials  */}
          <div className='flex gap-x-5 justify-self-end mt-24 items-center justify-center' >
              <button className='focus:outline-none'>
              <FaFacebookF className='text-2xl hover:text-pryPurpule'/>
              </button>
               
                <button className='focus:outline-none'>
              <AiOutlineTwitter className='text-2xl hover:text-pryPurpule'/>
              </button>
                
                <button className='focus:outline-none'>
              <AiFillLinkedin className='text-2xl hover:text-pryPurpule'/>
              </button>
              
                <button className='focus:outline-none'>
              <FaPinterest className='text-2xl hover:text-pryPurpule'/>
              </button>
            </div>
       </div>
       {/* end of modal-center */}
    </aside>
  )
}

export default Modal
