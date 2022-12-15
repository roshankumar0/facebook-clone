import React from 'react'

export default function Sidebar({ Icon, Icons }) {
    return (
        <div className='flex cursor-pointer'>
            <Icon className='h-10 w-10 text-gray-300 ml-3'/>
            <span className='ml-4'>{Icons}</span>
        </div>
    )
}
