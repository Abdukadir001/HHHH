import React from 'react'
import './Header.scss'
import Card from '../Card/Card'
import Title from '../Title/Title'
const Header = () => {
  return (
    <>
   
    <div className="wrap">
     <Card title="Велосипед" photo="/card-1.jpg"/>
     <Card  title="Мотоцикл" photo="/card-2.jpg" />
     <Card  title="Самокат"  photo="/card-3.webp"/>
     <Card  title="" photo="https://i.gifer.com/MPiJ.gif"/>
    </div>
    </>
  )
}

export default Header