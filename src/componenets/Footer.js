import React from 'react';
import logo from '../assets/logo-Chatbase.png';
import { AiFillLinkedin } from 'react-icons/ai';
const Footer = () => {
    return (
        <div className='max-w-[1640px]  w-full mt-[200px] bg-gray-100 h-[300px]'>
            <div className='flex gap-3 pt-[30px] ml-[30px] justify-between'>
                <div className='lg:flex  gap-3'>
                    <div>
                        <img src={logo} alt="/"
                            className='w-[30px] h-[30px]' />
                    </div>
                    <div className='hidden sm:block'>
                        Chatbase
                    </div>
                </div>
                <div>
                    <a href="https://www.linkedin.com/company/chatbase-co/">
                    <AiFillLinkedin
                    className='mr-8'
                        size={30} />
                        </a>
                </div>
            </div>

            <div className='ml-8 mt-[50px] text-gray-500'>
                <a href="https://www.chatbase.co/privacy">
                <p>Privacy Policy</p>
                </a>
                <a href="https://www.chatbase.co/terms">
                <p>Terms of Services</p>
                </a>
            </div>
            <div className='my-[30px]'>
                {/* <h1 className='border-2 mx-[20px]'></h1> */}
                <hr className='mx-[40px]' />
            </div>

            <div>
                <a href="https://www.chatbase.co/auth/signin">
                <button className='border border-black rounded-md ml-[30px] p-2 font-semibold'>Contact support</button>
                </a>
            </div>
        </div>
    )
}

export default Footer;
