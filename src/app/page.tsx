import React from 'react'
import Navbar from './(group)/press/component/navbar'
import Hero from './(group)/press/component/hero'
import Navbar2 from './(group)/press/component/navbar2'
import Hero1 from './(group)/press/component/hero1'
import Hero2 from './(group)/press/component/hero2'
import Content from './(group)/press/component/content'

const Home = () => {
  return (
    <div>
      
      <Navbar2/>
      
      <Navbar/>
      <Hero/>
      <Hero1/>
      <Content/>
      <Hero2/>
    </div>
  )
}

export default Home