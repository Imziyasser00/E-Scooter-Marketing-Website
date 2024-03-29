import React from 'react'
import Arrow from '../assets/arrow.svg'
import PlayVideo from '../assets/play-button.svg'
import Bg from '../assets/bg.png'
import HeroScooter from '../assets/hero-scooter.png'


const Hero = () => {
  return (
    <div className='flex h-full w-full flex-col lg:flex-row mt-16 '>
      <div className='w-full h-full lg:w-1/2 gap-16 flex flex-col mx-auto md:m-0 px-8 md:justify-start md:items-start '> 
        <div className='uppercase flex flex-col text-6xl md:text-7xl text-primary md:leading-tight'>
            Let's ride <span className='font-bold w-full'>the Future</span>
        </div>
        <div className='w-2/3 h-1 bg-primary'>
        </div>
        <div className='text-primary font-bold'>
            Simple and sleek design with users in mind.
        </div>
        <div className='w-full flex'>
            <div className='w-1/3 flex justify-center items-center md:justify-start gap-2 font-bold text-primary'>
            <a href='https://www.yassirimzi.com' className='flex items-center gap-3' target='_blank'>
                <div className='bg-primary w-12 h-12 rounded-md flex items-center justify-center'>
                    <img src={Arrow} alt='arrow-icon' />
                </div>
                    Buy Now
                </a>
            </div>
            <div className='w-2/3 mr-2 flex gap-8 justify-center items-center'>
                <div className='flex flex-col'>
                    <span>Watch our</span>
                    <span>video how</span>
                    <span>it works</span>
                </div>
                <img src={PlayVideo} alt='watch-video'/>
            </div>
        </div>
      </div>
      <div className='w-full h-full flex justify-end items-end lg:w-1/2 relative mt-32 lg:mt-0 '>
        <img src={Bg} alt='bg' className=' w-5/7  overflow-hidden'/>
        <img src={HeroScooter} alt='scooter' className='absolute right-0 w-5/7 md:w-3/4  overflow-hidden'/>
      </div>
    </div>
  )
}

export default Hero
