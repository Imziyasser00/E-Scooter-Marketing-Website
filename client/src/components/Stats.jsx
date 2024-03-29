import React from 'react'




const Stats = () => {

    const statsData = [{
        value : "105",
        unit : "lbs",
        label : "Net Weight"
    },
    {
        value : "26",
        unit : "mph",
        label : "Top Speed"
    },
    {
        value : "38",
        unit : "miles",
        label : "Max Range"
    },
    {
        value : "89",
        unit : "nm",
        label : "Max Torques"
    },
    {
        value : "22%",
        unit : "slope",
        label : "Hill Climbing"
    },
    {
        value : "2X",
        unit : "",
        label : "Hydralic Disc"
    }
]

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full gap-1 items-center justify-center mt-24'>
        {
            statsData.map((item,index) => (
                <div key={index} className='flex bg-primary text-white flex-col justify-center rounded-xl items-center border-2 shadow-xl px-10 gap-2 py-8'>
            <div className='flex items-end justify-center gap-2'>
                <span className=' font-extrabold text-3xl'>{item.value}</span>
                <span className=' font-extrabold'>{item.unit}</span>
            </div>
            <div className='w-full text-sm'>
                {item.label}
            </div>
        </div>
            ))
        }
    </div>
  )
}

export default Stats
