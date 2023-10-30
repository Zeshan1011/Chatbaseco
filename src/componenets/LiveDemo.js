import React from 'react';
import logo from '../assets/logo-Chatbase.png';
import { FaRegCircle } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';

const LiveDemo = () => {
    const list = ['What is Chatbase?', 'How do I add data to my chatbot?', 'Is there a free plan?', 'What are some use cases?', 'Can I Deploy the chatbot on my custom domain?'];

    return (
        <div className='mt-[100px] px-3 w-full max-w-[1640px] flex flex-col justify-center items-center'>
            <div className='text-center'>
                <h1 className='text-2xl lg:text-4xl font-bold my-6'>Live Demo</h1>
                <p className='my-2 mx-8'>This chatbot was trained on a document explaining <span className='font-bold'>Chatbase</span></p>
                <p className='my-2 mx-8'>You can embed a widget like this on any page on your website!</p>
            </div>

            <div className='max-w-[900px] w-full px-6 border border-gray-200 overflow-auto'>
                <div className='flex justify-between border-b-2'>
                    <div className='flex'>
                        <img src={logo} alt="/" className='rounded-full h-[40px] w-[40px] mt-[20px] lg:ml-[0px] my-4' />
                        <div className='mt-[20px] lg:ml-[15px]'>
                            <p className='font-bold text-lg mx-3 text-gray-900'>Chatbase</p>
                        </div>
                    </div>
                    <div className='mt-[30px] lg:mr-[30px] hover:cursor-pointer'>
                        <FaRegCircle size={30} />
                    </div>
                </div>

                <div className='lg:mx-2 my-4 w-full md:w-[500px] lg:w-[540px]'>
                    <p className='bg-gray-200 rounded-lg px-2 h-[70px] pt-[20px] text-lg'>👋 Hi! I am ChatbaseAI, ask me anything about Chatbase!</p>
                </div>

                <div className='lg:mx-2 my-4 w-full md:w-[500px] lg:w-[540px]'>
                    <p className='bg-gray-200 rounded-lg px-2 h-[70px] pt-[20px] text-lg'>By the way, you can create a chatbot like me for your website! 😮</p>
                </div>

                {/* horizontal scroll bar */}
                <div className='overflow-scroll mx-auto mt-[250px] w-max'>
                    <ul className='flex gap-4 '>
                        {list.map((item) => (
                            <li key={item} className='px-4 py-2 bg-gray-200 rounded-lg hover:cursor-pointer hover:bg-slate-400'>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className='flex justify-between ml-2 mr-4'>
                    <input type="text" className='lg:w-[800px] h-[40px]' />
                    <MdSend size={30} />
                </div>
            </div>
        </div>
    );
}

export default LiveDemo;
