import React from 'react'
import readyImg from "../images/ready-to-work.svg"
import videoIcon from "../images/Video Icon.svg"
const Ready = () => {
  return (
    <div className='hero h-96 smmd:h-[30rem] flex flex-col' >
      {/* ready-center  */}
      
      <div className='mx-auto pt-24' data-aos="fade-right"
    data-aos-duration="2000"  >
      <h1 className='text-3xl sms:text-3xl text-center font-700 text-white'>READY TO WORK WITH US</h1>
      <p className='text-center mt-8 text-white max-w-[27rem] sms:max-w-[32rem] smax:max-w-[35rem] md:max-w-[39rem] mx-auto'>At mercator studio, we build custom payments and fintech solutions that scale to billions of users. We are always looking for exceptional talents. If this defines you, we would love to have a chat with you. connect@mercator.ng</p>
      </div>
      {/* ready-img  */}
      <div className='relative translate-y-[1%] smd:translate-y-[15%]  md:translate-y-[-8%] mx-auto' data-aos="fade-right"
    data-aos-duration="2000"  > 
     <img src={readyImg} alt="ready" className='relative'  />
     <div className='flex flex-col items-center justify-center'> 
     <img src={videoIcon} alt="" className='inset' />
     </div>
      </div>
      {/* end of ready img  */}
    
   
       
      
    </div>
  )
}

export default Ready
