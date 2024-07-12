import React from 'react'

const Startgame = ({toggle}) => {
  return (
    <div className='Startgame-container h-full w-full items-center mx-0 my-auto ml-4 mt-10 md:flex'>
    <div className='h-96 w-h-96'>
      <img src="/images/dices.png"  />
    </div>
    <div className="content">
      <h1 className='text-7xl md:text-9xl whitespace-nowrap mb-5 font-bold'>Dice Game</h1>
      <button className='min-w-56 border-none bg-black text-white rounded-md p-3 text-xl font-medium  hover:bg-gray-900' onClick={toggle}>Play Now</button>
    </div>
  </div>
  )
}

export default Startgame;