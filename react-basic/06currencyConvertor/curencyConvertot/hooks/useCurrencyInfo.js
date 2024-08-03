import {useEffect,useState} from "react"
function useCurrencyInfo(currency){
  const [data, setData] = useState({}) // if failed, usestate will loop around empty object
        useEffect(()=>{
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res)=>res.json())
            .then((res)=>setData(res[currency]))
            console.log(data)
    },[currency]) // effect should be triggered every currency changed
    return data
}
export default useCurrencyInfo;