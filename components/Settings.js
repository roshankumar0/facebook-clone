import React from 'react'

export default function Settings({Icon,name}) {
  return (
    <div className=' ml-5 cursor-pointer hover:bg-gray-300 bg-gray-100  md:py-2 md:px-2 rounded-full'>
     
      <p>{name}</p>
      <Icon className={`h-7 w-7 text-gray-500 hover:text-blue-500 `} />
   
    </div>
  )
}
