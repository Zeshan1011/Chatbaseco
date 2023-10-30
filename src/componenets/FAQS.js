import React from 'react'
import QnA from './QnA';
import  {faq}  from '../data';

const FAQS = () => {
    const { array } = faq; 
    return (
        <div className='max-w-[1640px] w-full my-28'>
            <h1 className='text-center text-2xl font-bold lg:text-4xl my-16'>Frequently asked questions</h1>
            <div className='flex justify-between mx-2'>
                <div>
                    {/* accordians List*/}
                    <div className='flex flex-col  gap-y-4 lg:mx-36 '>
                        {array.map((arrays, idx) => {
                            return <QnA arrays={arrays} key={idx} />
                        })}</div>
                </div>

            </div>
        </div>

    );
}

export default FAQS;

