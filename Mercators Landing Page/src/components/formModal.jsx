import React , {useEffect}from 'react'
import {IoMdCheckmarkCircleOutline} from "react-icons/io"
import { useGlobalContext } from '../context'


const FormModal = () => {
    const {openMessage, messageClose} = useGlobalContext() 
    useEffect(() => {
        const timeOut = setTimeout(function () {
          messageClose();
        }, 4000);
        return () => {
          clearTimeout(timeOut);
        };
      }, [messageClose]);
  return (
    <div className= { openMessage ?' w-screen bgModal h-screen z-50 fixed bg-white flex flex-col items-center justify-center' : ' w-screen hidden bgModal h-screen z-50 fixed bg-white flex flex-col items-center justify-center'}>
          {/* modal-center  */}
          <div className='bg-white p-20 md:p-28   '>
        <IoMdCheckmarkCircleOutline className='text-pryPurpule text-[3rem] lg:text-[5rem] mx-auto'/>
        <h1 className='mt-4 text-xl lg:text-[1.5rem]'> Message Sent Successfully!</h1>
        </div>
    </div>
  )
}

export default FormModal
