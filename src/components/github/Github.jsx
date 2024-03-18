import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data= useLoaderData() 
  /*   const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Parag1609')
        .then(response=> response.json())
        .then(data=>{
            console.log(data);
            setdata(data)
        })
    },[]) */
  return (
    <div className='p-4 m-4 text-3xl text-center text-white bg-gray-600'>
      Github Followers: {data.followers}
      <img  src={data.avatar_url} alt="Git Profile" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Parag1609')
    return response.json()
}