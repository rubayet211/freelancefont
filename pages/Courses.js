import React, { useEffect, useState } from 'react'
import Card from './Card'
import Slider from "react-slick";
import axios from 'axios';

const Courses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  };

  const [projects, setProjects] = useState([]);
  useEffect(()=>{
    const getProjects = async ()=>{
      const resData = await axios.get("http://localhost:3000/clients/projects");
      console.log(resData.data);
      setProjects(resData.data);
    }
    getProjects();
  },[]);

  return (
    <div className='w-full bg-[#E9F8F3B2] py-32'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <div className='py-4'>
              <h1 className='py-3 text-3xl font-bold'>Most Popular <span className='text-[#20B486]'>Projects</span></h1>
              <p className='text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident.</p>
            </div>
            
            <Slider {...settings} className='px-5'>
              {projects.map((project,i)=>
                <div key={i}>
                  <Card course={project} />
                </div> ) }
            </Slider>
            
        </div>

    </div>
  )
}

export default Courses