import React from 'react'

const Startgame = ({toggle}) => {
  return (
    <div className='Startgame-container h-screen flex items-center max-w-5xl mx-0 my-auto ml-12 -mt-6'>
    <div>
      <img src="/images/dices.png" />
    </div>
    <div className="content">
      <h1 className='text-8xl whitespace-nowrap mb-5 font-bold'>Dice Game</h1>
      <button className='min-w-56 border-none bg-black text-white rounded-md p-3 text-xl font-medium  hover:bg-gray-900' onClick={toggle}>Play Now</button>
    </div>
  </div>
  )
}

export default Startgame;