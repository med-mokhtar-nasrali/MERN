import React from 'react'
import '../assets/style/MainContent.css'
import Advertisement from '../components/Advertisement'

const MainContent = () => {
  return (
    <>
    <div className='maincontent'>
      <div className='yellow'>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <Advertisement/>
    </div>
    </>
  )
}

export default MainContent