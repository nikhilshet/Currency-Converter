import React from "react";

function useCurrencyInfo(currency){
    const [data , setData] = React.useState([])
    React.useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((data) => setData(data[currency]))
    },[currency])
    console.log(data)
    return data
}

export default useCurrencyInfo