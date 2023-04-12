import React from 'react'
import { TeamBoard } from '../data'
import Socials from './Socials'
import ring from "../images/ring.svg"

const OurTeam = () => {
  return (
    <div className='mt-[11rem] smd:mt-[15rem] ' id='Team' data-aos="fade-right"
    data-aos-duration="2000" >
        {/* team-center  */}
        <div className='text-center'>
            {/* header  */}
     <article>
      <h1 className='text-3xl sms:text-4xl font-700'>Our Creative Team</h1>
      <p className='text-greyText mt-4 px-5 smd:max-w-[29rem] sms:max-w-[33rem] smax:max-w-[40rem] mx-auto '>Our team is made up of seasoned financial and payment technology professionals that have deployed solutions at the highest levels in the Nigerian Financial and Payments Industry.</p>
      </article>
      </div>

      {/* team-members  */}
       <article className='lg:pl-12 text-center mt-8 flex flex-col lg:flex-row items-center justify-center md:grid md:grid-cols-2 md:max-w-[800px] lg:max-w-[992px] md:mx-auto extraLg:grid-cols-3 extraLg:max-w-[1100px] large:max-w-[1200px] large:mx-auto  '>
        {TeamBoard.map(function (person) {
            const{id, name, position, image, url} = person
          return  <div key={id} className='p-8 mt-12 mb-8 bg-white shadow-md w-[90%] rounded-lg max-w-[480px] extraLg:max-w-[430px]' >
            <div className='relative mx-auto'>
            <img src={ring} alt=" " className='relative mx-auto'/>
             <div className='absolute inset w-[13rem] '>
              <img src={image} alt="person-image" className='mx-auto  '  />
             </div>
             </div>
             {/* rounded-full ring-4 ring-dashed ring-offset-8 ring-[#5956E9]  */}
              {/* info  */}
             <div className='mt-16'>
              <h1 className='text-2xl sms:text-2xl font-700'>{name}</h1>
              <h3 className='mt-3'>{position}</h3>
              {/* socials  */}
             </div>
             {/* end of info  */}
            <Socials url={url}/>
            </div>
        })}

       </article>
      {/* end of team center  */}
    </div>
  )
}

export default OurTeam
