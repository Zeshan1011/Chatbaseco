import React from 'react'
import heroSection from '../assets/HeroSectionImg.png';
const Hero = () => {
    return (
        <div className='max-w-[1640px] md:flex lg:flex '> 
            <div className=' mt-[100px] lg:ml-[250px] '>
                {/* Left side of the hero section */}

                <h1 className='text-5xl mx-2 my-6 lg:text-8xl font-extrabold  lg:w-[646px] text-slate-900'>Custom ChatGPT <br /> for <span className='text-[#ee4c8f]'>your data</span> </h1>
                <p className='mx-2 my-2 lg:w-[600px] text-lg'>Just connect your data sources and get a ChatGPT-like chatbot for your data. Then add it as a widget to your website or chat with it through our integrations or API.</p>
                <div className='mt-[30px]'>
                    <a href="https://www.chatbase.co/auth/signup">
                <button className='my-6  mx-2 h-[60px] w-[200px] border rounded-lg text-white font-bold px-2 bg-gradient-to-l from-[#d23579] to-[#6450e5]'>Build Your Chatbot &rarr;</button>
                </a>
                <p className='text-gray-500 mx-2 px-2'>no credit card required</p>
            </div>
            </div>
            
            <div className=' pt-[20px] '>
                {/* Right side of the hero section */}
                <img src={heroSection} alt="/" 
                className='hidden md:block lg:block md:h-[400px] md:w-[700px]   lg:h-[700px] lg:w-[700px] '/>
                {/* <img src={imgformid} alt="/"
                className=' hidden w-[600px]' /> */}

            </div>
        </div>
    )
}

export default Hero


// import React from 'react';
// import heroSection from '../assets/HeroSectionImg.png';

// const Hero = () => {
//     return (
//         <div className='max-w-[1640px] md:flex lg:flex'>
//             <div className='mt-[100px] lg:ml-[5vw] md:w-full lg:w-[50%]'>
//                 {/* Left side of the hero section */}
//                 <h1 className='text-5xl mx-2 my-6 lg:text-8xl font-extrabold lg:w-[646px] text-slate-900'>
//                     Custom ChatGPT <br /> for <span className='text-[#ee4c8f]'>your data</span>
//                 </h1>
//                 <p className='mx-2 my-2 lg:w-[80%] md:w-full text-lg'>
//                     Just connect your data sources and get a ChatGPT-like chatbot for your data.
//                     Then add it as a widget to your website or chat with it through our integrations or API.
//                 </p>
//                 <div className='mt-[30px]'>
//                     <a href="https://www.chatbase.co/auth/signup">
//                         <button className='my-6 mx-2 h-[60px] w-[200px] border rounded-lg text-white font-bold px-2 bg-gradient-to-l from-[#d23579] to-[#6450e5]'>
//                             Build Your Chatbot &rarr;
//                         </button>
//                     </a>
//                     <p className='text-gray-500 mx-2 px-2'>no credit card required</p>
//                 </div>
//             </div>

//             <div className='pt-[20px]'>
//                 {/* Right side of the hero section */}
//                 <img
//                     src={heroSection}
//                     alt="/"
//                     className='block mx-auto md:hidden lg:hidden h-[300px] w-full object-cover'
//                 />
//                 <img
//                     src={heroSection}
//                     alt="/"
//                     className='hidden md:block lg:block mx-auto h-[400px] w-[80%] lg:w-[700px] xl:w-[800px] 2xl:w-[1000px] mb-4'
//                 />
//             </div>
//         </div>
//     );
// }

// export default Hero;


