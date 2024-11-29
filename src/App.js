
import React from 'react';
import Input from './components/input';
import useCurrencyInfo from './hooks/currencyinfo';
function App() {

  const [inpData , setInpData] = React.useState({fromAmount:0 , from:"usd" , to:"inr" , toAmount:0})
  const {fromAmount , toAmount , from , to} = inpData

  // const [convertedAm , setConvertedAmount] = React.useState(0)
  
  const apiData = useCurrencyInfo(from)

  const arr = Object.keys(apiData)

  const arrOfData = arr.map((ele , index)=>{
    return <option key={index}>{ele}</option>
  })
  
  console.log(apiData[to])


  function handleChange(e){
      setInpData((prev)=>{
          return{
            ...prev,
            [e.target.name] : e.target.value
          }
      })
  }

  console.log(inpData);
  
  function convert(){
      let con = fromAmount * apiData[to];
      setInpData((prev)=>{
        return{
          ...prev,
          toAmount : con
        }
      })
  }

  function swap(){
      setInpData((prev)=>{
        return{
          fromAmount : toAmount,
          from : to,
          toAmount : fromAmount,
          to: from
        }
      })
  }
  return (

    <div className='flex flex-col w-full h-screen justify-center items-center'>

      <div className='flex flex-col bg-black p-24 rounded-3xl justify-center items-center'>
      <Input
        className="mb-5"
        label = "From"
        amount = {fromAmount}
        inpChange = {handleChange}
        options = {arrOfData}
        boxNames = "fromAmount"
        default = {from}
        name= "from"
        
        />


        <button className='bg-blue-400 p-2 rounded-full mb-5' onClick={swap}>

        <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/swap.png" alt="swap"/>
        </button>


      <Input
        className="mb-5"
        label = "To"
        amount = {toAmount}
        options = {arrOfData}
        inpChange = {handleChange}
        default = {to}
        boxNames = "toAmount"
        name = "to"
        />

        <button className='bg-blue-400 w-24 p-2 rounded-3xl text-lg'
                onClick={convert}> 
          Convert
        </button>     
      </div>
      
    </div>
);
}

export default App;
