import React, {useState} from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { CgLoadbar } from 'react-icons/cg';

const QnA = ({arrays}) => {
  const [isOpen, setIsOpen] = useState(false)
   

  const {question, answer} = arrays;
  return (
    <>
    <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer max-w-[1640px] w-full '> 
    <div className='bg-white border ml-7 rounded-sm'>
    <div className='min-h-[80px] flex items-center justify-between px-[40px]'>
      <h6 className='h6'>{question}</h6>
      <span> {isOpen ? < CgLoadbar/> : <AiOutlinePlus/> }</span>
    </div>
    <div className={`${isOpen ? 'min-h-[120px] lg:min-h-[120px]' : 'min-h-0'} max-h-0 overflow-hidden flex justify-center transition-all px-[30px]`}>
      <div className='mt-4'>{answer}</div>
    </div>
    </div>


    </div>
    </>
  );
};

export default QnA;