import React from "react"
import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"


export function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/KaiLegend56")
    //     .then((res)=>(
    //         res.json()
    //     ))
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[]) getting data within calling an component
     

    return (
        <div className="text-center m-4 bg-gray-500 text-white p-4 tect-3xl">
            Github Omar followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width="300px"/>
        </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/KaiLegend56")
    return response.json()
}