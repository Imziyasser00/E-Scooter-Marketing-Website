import React from 'react'
import InfoScooter from '../assets/info-scooter.png'
import InfoIcon from '../assets/info-icon.png'

const ProductInfo = () => {

  const info = [
  "Lightweight aircraft grade aluminium frame",
  "Car grade lithium battery",
  "Self-balanced",
  "Plug n play",
  "Quick release adapter",
  "RFID key card",
]

  return (
    <div className='w-full mt-20'>
      <div>
        <h1 className='w-full text-center text-primary font-extrabold text-3xl md:text-4xl'>
          Product Information
        </h1>
        <p className='w-4/5 text-center mx-auto mt-5 text-primary text-lg font-medium'>
          Our Scooter has following unique design and technology features:
        </p>
      </div>
      <div className='mt-6 flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2'>
          <img src={InfoScooter} alt='info scooter' className='w-full lg:w-full md:w-4/5'/>
        </div>
        <div className='w-full lg:w-1/2 flex flex-col items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 ml-12 lg:grid-cols-1'>
        {info.map((item,index) => (
          <div className='flex gap-2 items-center' key={index}>
            <img src={InfoIcon} alt='info icon'/>
            <p>
              {item}
            </p>
          </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
