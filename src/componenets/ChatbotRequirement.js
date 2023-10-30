import React, { useState } from 'react'


import img2 from '../assets/AiNeedsImg2.png';
import img1 from '../assets/AINeedsImg1.png';
import img3 from '../assets/AiNeedsImg3.png';
import img4 from '../assets/AiNeedsImg4.png';
import img5 from '../assets/AiNeedsImg5.png';



const ChatbotRequirement = () => {
    const [first, setfirst] = useState(false);
    const [second, setsecond] = useState(false);
    const [third, setthird] = useState(false);
    const [fourth, setfourth] = useState(false);
    const [fifth, setfifth] = useState(false);

    const handlefirst = () => {
        setfirst(true);
        setsecond(false);
        setthird(false);
        setfourth(false);
        setfifth(false);
    }
    const handlesecond = () => {
        setfirst(false);
        setsecond(true);
        setthird(false);
        setfourth(false);
        setfifth(false);
    }
    const handlethird = () => {
        setfirst(false);
        setsecond(false);
        setthird(true);
        setfourth(false);
        setfifth(false);
    }
    const handlefourth = () => {
        setfirst(false);
        setsecond(false);
        setthird(false);
        setfourth(true);
        setfifth(false);
    }
    const handlefifth = () => {
        setfirst(false);
        setsecond(false);
        setthird(false);
        setfourth(false);
        setfifth(true);
    }

    return (
        <div className='max-w-[1640px] w-full   my-[120px]'>
            <h1 className='text-3xl mt-[120px] mb-[50px] text-center md:text-4xl lg:text-4xl font-bold text-gray-900'>Everything you need for your AI chatbot</h1>


            <div className='lg:flex  justify-center'>
                <div className='md:flex lg:block'>
                    <div onClick={handlefirst} className=' w-[270px]  lg:w-[480px]  border rounded-xl  hover:bg-gray-200 cursor-pointer border-gray-50'>
                        <h1 className='ml-3 md:pt-1 lg:ml-[30px]  lg:mt-[30px] lg:font-bold text-lg'>Customise Behavior</h1>
                        <p className='hidden lg:block lg:ml-[30px] my-[15px]'>Ensure that your Chatbot matches your brand's personality with custome interaction.</p>
                    </div>


                    <div onClick={handlesecond} className='w-[270px] lg:w-[480px] border rounded-xl hover:bg-gray-200 cursor-pointer border-gray-50'>
                        <h1 className='ml-3 md:pt-1 lg:ml-[30px]  lg:mt-[30px] lg:font-bold text-lg'>Customise Appear</h1>
                        <p className='hidden lg:block ml-[30px] my-[15px]'>Make your chatbot look like it's part of your webstie with custome colors and logos.</p>
                    </div>


                    <div onClick={handlethird} className='w-[270px]  lg:w-[480px] border rounded-xl hover:bg-gray-200 cursor-pointer border-gray-50'>
                        <h1 className='ml-3 md:pt-1 lg:ml-[30px]  lg:mt-[30px] lg:font-bold text-lg'>Collect leads</h1>
                        <p className='hidden lg:block ml-[30px] my-[15px]'>Set your Chatbot to collect leads to follow up with later.</p>
                    </div>


                    <div onClick={handlefourth} className='w-[270px] lg:w-[480px] border rounded-xl hover:bg-gray-200 cursor-pointer border-gray-50'>
                        <h1 className='ml-3 md:pt-1 lg:ml-[30px]   lg:mt-[30px] lg:font-bold text-lg'>Get notified</h1>
                        <p className='hidden lg:block ml-[30px] my-[15px]'>Get daily  emails with all conversation and leads collected by your chatbots</p>
                    </div>


                    <div onClick={handlefifth} className='md:hidden w-[270px] lg:w-[480px] border rounded-xl hover:bg-gray-200 cursor-pointer border-gray-50'>
                        <h1 className='ml-3 lg:ml-[30px]  lg:mt-[30px]  lg:font-bold text-lg'>Integrated with your tools</h1>
                        <p className='hidden lg:block ml-[30px] my-[15px]'>Connect your chatbot to your favorite tools like Zapier, Slacks, Messenger, and more</p>
                    </div>

                </div>

                <div className='mt-[20px]'>
                    {/*  Right side of the chatboot requirement section*/}
                    <img
                        src={first ? img1 : second ? img2 : third ? img3 : fourth ? img4 : fifth ? img5 : img1}
                        alt="/"
                        className='px-4 w-[300px] md:h-[550px] md:w-[900px] lg:h-[700px] lg:w-[700px] border-b-4'
                    />

                </div>
            </div>

        </div>
    )
}

export default ChatbotRequirement;


