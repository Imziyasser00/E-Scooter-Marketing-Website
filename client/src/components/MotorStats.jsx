import React from 'react'
import MotorScooter from '../assets/motor-scooter.png'

const MotorStats = () => {
  return (
    <div className='w-full mt-24'>
        <div>
            <h1 className='w-full text-center text-primary font-extrabold text-3xl md:text-4xl'>
                High Efficiency Motor
            </h1>
            <p className='w-4/5 text-center mx-auto mt-5 text-primary text-lg font-medium'>
                More torque for powerful riding with 22% maximum hill climbing capability.
            </p>
        </div>
        <div className='w-full'>
            <img src={MotorScooter} alt='scooter motor infos' className='w-full mx-auto'/>
        </div>
    </div>
  )
}

export default MotorStats
