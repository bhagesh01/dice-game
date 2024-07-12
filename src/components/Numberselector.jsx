import styled from "styled-components"

const Numberselector = ({setError , error, setSelectedNumber , selectedNumber}) => {

   const arrNumber = [1,2,3,4,5,6]
  
  const numberSelectorHandler = (value)=>{
    setSelectedNumber(value)
    setError("")
  }


  return (
    <div>
      <p className="text-red-600 text-right text-2xl mb-3">{error}</p>
      <div className='flex gap-5'>
      {
        arrNumber.map(function(value){
          return <Box key={value} onClick={()=>{numberSelectorHandler(value)}} isSelected = {value == selectedNumber}
            >{value}</Box>
        })
      }
    </div>
    <div className='md:text-right'>
      <p className='text-4xl font-bold mt-4'>Select Number</p>
    </div>
    </div>
    
  )
}

export default Numberselector;

const Box = styled.div`
  height: 4rem;
  width: 4rem;
  display: grid;
  place-items: center;
  border: 2px solid black;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
  color: black;
  background-color: ${(props)=>(props.isSelected ? "black":"white")};
  color: ${(props)=>(!props.isSelected ? "black":"white")};
  

`