import React from 'react'




const Stats = () => {

  return (
    <div className='flex w-full gap-14 items-center justify-center mt-24'>
        <div className='flex flex-col justify-center rounded-xl items-center shadow-xl px-10 gap-2 py-8'>
            <div className='flex items-end justify-center gap-2'>
                <span className='text-primary font-extrabold text-3xl'>105</span>
                <span className='text-primary font-extrabold'> lbs</span>
            </div>
            <div className='w-full text-sm'>
                Net Weight
            </div>
        </div>
        <div className='flex flex-col justify-center rounded-xl items-center shadow-xl px-10 gap-2 py-8'>
            <div className='flex items-end justify-center gap-2'>
                <span className='text-primary font-extrabold text-3xl'>26</span>
                <span className='text-primary font-extrabold'> mph</span>
            </div>
            <div className='w-full text-sm'>
                Top Speed
            </div>
        </div>
        <div className='flex flex-col justify-center rounded-xl items-center shadow-xl px-10 gap-2 py-8'>
            <div className='flex items-end justify-center gap-2'>
                <span className='text-primary font-extrabold text-3xl'>38</span>
                <span className='text-primary font-extrabold'> miles</span>
            </div>
            <div className='w-full text-sm'>
                Ma Range
            </div>
        </div>
        <div className='flex flex-col justify-center rounded-xl items-center shadow-xl px-10 gap-2 py-8'>
            <div className='flex items-end justify-center gap-2'>
                <span className='text-primary font-extrabold text-3xl'>22%</span>
                <span className='text-primary font-etralarge'> slope</span>
            </div>
            <div className='w-full text-sm'>
                Hill Climbing
            </div>
        </div>
        <div className='flex flex-col justify-center rounded-xl items-center shadow-xl px-10 gap-2 py-8'>
            <div>
                <span className='text-primary font-extrabold text-3xl'>2</span>
                <span className='font-large'>X</span>
            </div>
            <div className='w-full text-sm'>
                Hydralic Disc Brakes
            </div>
        </div>
    </div>
  )
}

export default Stats
