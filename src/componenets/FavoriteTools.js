import React from 'react'
import wp from '../assets/wordpress.png';
import za from '../assets/zapier.png';
import slk from '../assets/slack.png';
import wtsp from '../assets/whatsapp.png'; 
import msngr from '../assets/messenger.png';
import shpy from '../assets/shopify.png';
const FavoriteTools = () => {
  return (
    <div className='my-28 max-w-[1640px] w-full ' >
      <h1 className='text-2xl md:text-3xl font-bold lg:text-4xl text-center mb-8'>Chatbase integrates with your <br /> favorite tools</h1>
     <div className='lg:mx-[250px] grid grid-cols-2 md:grid-cols-3 md:mx-14 lg:grid-cols-3'>
       
     <img src={wp} alt="/"
        className='h-[100px] w-[160px] px-2 lg:w-[250px] lg:h-[100px]' />
        <img src={za} alt="/"
        className='h-[100px] w-[160px] px-2 lg:w-[250px] lg:h-[100px]' />
        <img src={slk} alt="/"
        className='h-[100px] w-[160px] px-2 lg:w-[250px] lg:h-[100px]' />
        <img src={wtsp} alt="/"
        className='h-[100px] w-[160px] px-2 lg:w-[250px] lg:h-[100px]' />
        <img src={msngr} alt="/"
        className='h-[80px] w-[160px] px-2 lg:w-[250px] lg:h-[100px]' />
        <img src={shpy} alt="/"
        className='h-[80px] w-[160px] px-2 lg:w-[250px] lg:h-[100px]' />
        </div>
     </div>
  )
}

export default FavoriteTools
