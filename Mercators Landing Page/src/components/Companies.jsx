import React from 'react'
import { customers } from '../data'


const Companies = () => {
  return (
    // companies
    <section  >
     {/* companies-center  */}
     <div className='py-24' data-aos="fade-down"
    data-aos-duration="2000">
        {/* text  */}
        <article>
    <h1 className='text-center xs:text-[1.5rem] smax:text-[2rem] uppercase font-700'> They Believe In Us</h1>
    <p className='text-greyText text-center mt-5 max-w-[20rem] mx-auto text-[1.1rem]'> Companies that have worked with us and trust in us.</p>
    </article>
       {/* comapnies  */}
       <article className='flex flex-col smax:flex-row smax:gap-x-2 md:gap-x-5 lg:gap-x-7 extraLg:gap-x-9  items-center justify-center' >
         {customers.map(function (list) {
            const{id, company} = list
            return <div key={id} className='mt-8 '> 
               <img src={company} alt="company-img" />
            </div>
         })}
       </article>
     </div>
     {/* end of companies-center  */}
    </section>
  )
}

export default Companies
