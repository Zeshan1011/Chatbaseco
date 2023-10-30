import React from 'react'
import img1 from '../assets/img-1.jpg';
import img2 from '../assets/img-2.jpg';
import img3 from '../assets/img-3.png';
import img4 from '../assets/img-4.jpg';
import img5 from '../assets/img-5.jpg'
import { AiOutlineTwitter } from 'react-icons/ai';
const PeopleReview = () => {
  return (
    <div className='max-w-[1640px] w-full  my-28'>
      <h1 className='font-bold text-3xl lg:text-4xl text-center my-16'> What people say about  Chatbase</h1>

      <div className='my-[20px]  md:flex lg:flex justify-center  gap-8'>
        <div className='w-[310px] my-1 lg:h-[170px] border mx-11 rounded-xl shadow-lg'>
          <AiOutlineTwitter
            className='ml-[270px] mt-[20px]'
            size={25} />
          <p className='ml-8 my-2'>“This is awesome”</p>
          <div className='flex gap-4'>
            <div>
              <img src={img1} alt="/"
                className='rounded-full w-[30px] h-[30px] ml-6' />
            </div>
            <div>
              Jacob Andreou
            </div>
          </div>
          <div>
            <p className='text-gray-400 ml-16 lg:my-2'>SVP @ Snap</p>
          </div>

        </div>

        <div className='hidden lg:block w-[550px] h-[250px] border rounded-xl'>
          <AiOutlineTwitter
            className='ml-[500px] mt-[20px]'
            size={25} />
          <p className='ml-8 my-2 border-b-2 font-bold'>“For anyone on the fence - in the 2 hours since this tweet I've tested, set up and gone live on three separate websites with Chatbase. Still need to do some light tweaking of the base prompt but very happy with the results.”</p>
          <div className='flex gap-4'>
            <div>
              <img src={img2} alt="/"
                className='rounded-full w-[30px] h-[30px] ml-6' />
            </div>
            <div>
              Ian Whiscombe
            </div>
          </div>
          <div>
            <p className='text-gray-400 lg:ml-16'>Founder @StockBuddy</p>
          </div>

        </div>

        <div className=' w-[310px] my-1 lg:h-[190px] border mx-11  rounded-xl lg:rounded-lg shadow-lg'>
          {/* <AiOutlineTwitter
            className='ml-[200px] mt-[20px]'
            size={25} /> */}
          <p className='ml-8 mt-8'>“Website embed works like a charm even with non-English content!”</p>
          <div className='flex gap-4'>
            <div>
              <img src={img3} alt="/"
                className='rounded-full  w-[30px] h-[30px] ml-6 my-3' />
            </div>
            <div className='mt-4'>
              Bence
            </div>
          </div>
          <div>
            <p className='text-gray-400 ml-16'>Designer @Nortal</p>
          </div>

        </div>
      </div>


      <div className='md:flex md:justify-center gap-4 my-8'>
        <div className='w-[310px] my-[20px] h-[190px] border mx-11 rounded-xl lg:rounded-lg shadow-lg'>
          <AiOutlineTwitter
            className='ml-[250px] mt-[20px]'
            size={25} />
          <p className='ml-8 my-2'>“Another overpowered project built with the OP Stack”</p>
          <div className='flex gap-4'>
            <div>
              <img src={img4} alt="/"
                className='rounded-full w-[30px] h-[30px] ml-6' />
            </div>
            <div>
              Greg Kogan
            </div>
          </div>
          <div>
            <p className='text-gray-400 ml-16 lg:my-2'>VP @pinecone</p>
          </div>

        </div>

        <div className='w-[310px] my-[20px] lg:h-[190px] border mx-11 rounded-xl lg:rounded-lg shadow-lg'>
          <AiOutlineTwitter
            className='ml-[250px] mt-[20px]'
            size={25} />
          <p className='ml-8 my-2'>“This is awesome, thanks for building it!”</p>
          <div className='flex gap-4'>
            <div>
              <img src={img5} alt="/"
                className='rounded-full w-[30px] h-[30px] ml-6' />
            </div>
            <div>
              Logan.GPT
            </div>
          </div>
          <div>
            <p className='text-gray-400 ml-16 lg:my-2'>Dev Rel @OpenAI</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PeopleReview;

