import React from 'react';

const Companies = () => {
  return (
    <div className='w-full bg-white py-[50px]'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <h1 className='text-center text-2xl font-bold text-[#536E96]'>Trusted by over 25,000 teams around the world.</h1>
            <p className='text-center  text-[#536E96] text-xl'>Leading companies use our freelancers to help clients meet their needs.</p>
            <div className='flex justify-center py-8 md:gap-8 '>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
                  <img src={"/companyLogo1.png"}/>
                  <img src={"/companyLogo2.png"} />
                  <img src={"/companyLogo3.png"} />
                  <img src={"/companyLogo4.png"} />
                </div>
            </div>
        
        </div>

    </div>
  )
}

export default Companies