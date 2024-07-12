import React from 'react'
import { MdCancel } from "react-icons/md";

const Rules = ({hideRules}) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='bg-red-100 w-fit p-5 text-left mt-10 w-[500px] '>
      <div className='flex justify-between'>
      <h1 className='mb-5 text-4xl font-bold'>How to play dice game.</h1>
      <MdCancel className='cursor-pointer text-2xl' onClick={hideRules}/>
      </div>
      <p className='text-xl mt-2'>Select any number</p>
      <p className='text-xl mt-2'>Click on the dice.</p>
      <p className='text-xl mt-2'>after clicking on the dice if your selected number is equal to dice number , you will get same point as dice </p>
      <p className='text-xl mt-2'>if you get wrong guess then  2 point will be deducted </p>
    </div>
    </div>
  )
}

export default Rules;