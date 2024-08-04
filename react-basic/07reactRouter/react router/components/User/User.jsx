import React from "react"
import { useParams } from "react-router-dom"

export function User() {
    const {userId} = useParams()
    return (
        <div className="bg-red-800 flex justify-center p-4 ">
            <h2>User :{userId}</h2>
        </div>
        
    )
}