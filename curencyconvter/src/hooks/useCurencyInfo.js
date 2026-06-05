import { useEffect,useState } from "react";

function useCurencyInfo(currency="inr"){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2026.6.2/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res) => setData(res[currency]))
    
        
    },[currency])
   
    
    return data
}

export default useCurencyInfo;