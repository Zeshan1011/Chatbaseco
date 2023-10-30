import React from 'react'
import logo from '../assets/logo-Chatbase.png'
const Sidebar = () => {
    return (
        <div className='max-w-[1640px] w-[full] hidden lg:block m-[20px] '>
            <div className=' fixed right-4 bottom-0 hover:cursor-pointer'>
                <img src={logo} alt="/"
                    className='rounded-full h-[40px] w-[40px] mt-[20px] lg:ml-[20px] my-4 ' />
            </div>
        </div>
    )
}

export default Sidebar;


