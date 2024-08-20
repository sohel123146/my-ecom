import React from 'react'
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Trusted from '../components/Trusted';
import { useProductContext } from '../context/productcontext';

const About = () => {

  const { myName } = useProductContext() 

  const data = {
    name:"CODECRAFTS ECOMMERCE"
  }
  return (
    <>
    {myName}
    <HeroSection MyData = { data } />
    <Services/>
    <Trusted/>
    </>
  )
}

export default About