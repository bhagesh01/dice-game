
const Rolldice = ({currentDice , rollDice}) => {
  

  return (
    <div>
      <div className='flex items-center justify-center h-fit mt-10'>
      <img src={`./../public/images/dice/dice_${currentDice}.png`} alt="dice_1" className='cursor-pointer' onClick={rollDice}/>
    </div>
      <p className='text-3xl font-semibold'>click on the dice to roll.</p>
    </div>
  )
}

export default Rolldice;