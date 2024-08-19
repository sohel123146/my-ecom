import React from 'react'
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Trusted from '../components/Trusted';

const About = () => {
  const data = {
    name:"CODECRAFTS ECOMMERCE"
  }
  return (
    <>
    <HeroSection MyData = { data } />
    <Services/>
    <Trusted/>
    </>
  )
}

export default About