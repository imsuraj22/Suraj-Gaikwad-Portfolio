import React from 'react'
import HeroSection from '../../HeroSection'
import MySkills from '../../MySkills'
import AboutMe from '../../AboutMe'
import MyPortfolio from '../../MyPortfolio'
import ContactMe from '../../ContactMe'
import Footer from '../../Footer'
function index() {
  return (
    <div>
        <HeroSection/>
        <MySkills/>
        <AboutMe/>
        <MyPortfolio/>
        {/* <Testinomials/> */}
        <ContactMe/>
        <Footer/>
    </div>
  )
}

export default index