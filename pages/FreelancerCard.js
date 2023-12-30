import React from 'react'

const FreelancerCard = ({course}) => {

  return (
    <div className='z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2 '>
        <img src={course.image} 
                className="h-40 w-full object-cover"
        
        />
        <div className='p-5 border border-b'>
            <h1 className='py-2 truncate'>{course.name}</h1>
        </div>
        <h3 className='p-5 text-xl'>{course.hourlyRate}</h3>

        {/* <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
            {course.}
        </div> */}
    </div>
  )
}

export default FreelancerCard