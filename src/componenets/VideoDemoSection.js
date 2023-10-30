import React from 'react';
import vid from '../assets/producthunt-demo.mp4';
const VideoDemoSection = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center  max-w-[1640px] '>
      <h1 className='text-2xl text-center font-bold lg:text-4xl'>Video Demo</h1>
      <p className='text-sm md:mx-[100px] lg:text-lg text-center my-6'>Creating a chatbot for <span className='font-bold'>Product Hunt</span>  by crawling the website and training the AI on its content. I can then embed the chatbot on the website! 
</p>
      <video className='w-[280px] mx-10  md:w-[700px]  lg:w-[1000px] lg:h-[700px]'
                src={vid}
                autoPlay
                loop
                muted
            /> 
           

    </div>
  )
}

export default VideoDemoSection
