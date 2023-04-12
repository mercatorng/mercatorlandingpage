import React from 'react'
import Hero from '../components/Hero'
import Companies from '../components/Companies'
import OwnCompanies from '../components/OwnCompanies'
import AboutMercators from '../components/AboutMercators'
import Ready from '../components/Ready'
import OurTeam from '../components/OurTeam'
import ContactUs from '../components/ContactUs'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Modal from '../components/modal'
import FormModal from '../components/formModal'


const Home = () => {
  return (
    <section>
      <FormModal/>
      <Modal/>
     <Hero/>
    <Companies/>
    <OwnCompanies/>
    <AboutMercators/>
    <Ready/>
    <OurTeam/>
    <ContactUs/>
    <Footer/>
    </section>
  )
}

export default Home
