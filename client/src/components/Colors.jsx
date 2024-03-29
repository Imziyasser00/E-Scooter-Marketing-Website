import React from 'react'
import ColorsBg from '../assets/color-bg.png'
import Red from '../assets/red.png'
import Green from '../assets/green.png'
import Black from '../assets/black.png'
import Blue from '../assets/blue.png'

const Colors = () => {
  return (
    <div className="w-full mt-24">
        <div>
            <h1 className="w-full text-center text-primary font-extrabold text-3xl md:text-4xl">
                Colors
            </h1>
            <p className="w-4/5 text-center mx-auto mt-5 text-primary text-lg font-medium">
                Checkout our products colors.
            </p>
        </div>
        <div className='w-full mt-8 relative'>
            <img src={ColorsBg} alt='colors-bg'/>
            <div className='grid grid-cols-2 md:grid-cols-4 -mt-24'>
                <img src={Blue} alt='blue scooter' />
                <img src={Green} alt='green scooter'/>
                <img src={Red} alt='red scooter'/>
                <img src={Black} alt='black scooter'/>
            </div>
            
        </div>
    </div>
  )
}

export default Colors
