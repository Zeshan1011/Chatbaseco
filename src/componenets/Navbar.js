import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='max-w-[1640px] py-5 w-full px-8 bg-transparent '>
      <div className='flex items-center justify-between'>
        {/* right side of the navbar */}
        <div className='flex items-center gap-3 hover:cursor-pointer'>
          <img
            src="https://www.chatbase.co/images/chatbase-logo.svg"
            alt="/"
            className='h-[30px] w-[30px]'
          />
          <p className='hidden sm:block hover:cursor-pointer'>Chatbase</p>
        </div>

        {/* middle of the navbar */}
        <div className='hidden lg:block text-sm font-semibold'>
          <ul className='flex gap-12 hover:cursor-pointer'>
            <li>Demo</li>
            <a href="https://affiliates.chatbase.co/signup"><li>Affiliate</li></a>
            <a href="https://www.chatbase.co/pricing"><li>Pricing</li></a>
            <a href="https://docs.chatbase.co/docs"><li>API</li></a>
            <a href="https://www.chatbase.co/guide/main"><li>Guide</li></a>
          </ul>
        </div>

        {/* right side of the navbar */}
        <div className='hidden lg:block text-sm font-semibold'>
          <div className='flex items-center gap-3'>
            <a href="https://www.chatbase.co/auth/signin">
            <p className='hover:cursor-pointer'>Log in</p>
            </a>
            <a href="https://www.chatbase.co/auth/signup">
            <button className='border rounded-md bg-[#6f44fc] text-white text-sm px-3 py-2 font-medium'>Try for Free &rarr;</button>
            </a>
          </div>
        </div>

        {/* menu button */}
        <div className='block cursor-pointer lg:hidden'>
          {toggle ? (
            <AiOutlineCloseCircle
              onClick={() => setToggle(!toggle)}
              className='mr-4 shadow-sm border rounded-full hover:text-white'
              size={30}
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className='mr-4 shadow-sm border rounded hover:text-white'
              size={30}
            />
          )}

          
           <ul className={` fixed h-full w-full md:h-[390px] bg-white top-[90px] lg:hidden
                 ${toggle ? 'left-[0]' : 'left-[-100%]'} px-8 py-8 font-bold `}>
            <li className='mb-8'>Demo</li>
            <a href="https://affiliates.chatbase.co/signup"><li className='mb-8'>Affiliate</li></a>
            <a href="https://www.chatbase.co/pricing"><li className='mb-8'>Pricing</li></a>
            <a href="https://docs.chatbase.co/docs"><li className='mb-8'>API</li></a>
            <a href="https://www.chatbase.co/guide/main"><li className='mb-8'>Guide</li></a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;