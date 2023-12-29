import React from 'react';
import  {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-[#20B486] font-medium'>Freelance Your Way</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'> Work With <span className='text-[#20B486]'>5000+</span> Freelancers
                    from <span  className='text-[#20B486]'>All 
                    Over The World</span>
                </h1>
                <p className='py-2 text-lg text-gray-600'>What service are you looking for?</p>
                
                <form className='bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between'>
                    <input 
                        className='bg-white'
                        type="text"
                        placeholder='Search for freelancers'
                    />
                    <button>
                        <AiOutlineSearch 
                            size={20}
                            className="icon"
                            style={{color:'#000'}}

                        />

                    </button>
                </form>
            </div>
            
            <img src={"/heroImg.png"} className="md:order-last  order-first" />



        </div>
        

    </div>
  )
}

export default Hero