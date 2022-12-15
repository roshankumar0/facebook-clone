import React from 'react'

export default function UserInfo({ Icon, Plus, UserIcon ,Add}) {
    return (
        <div className='cursor-pointer'>
            <Icon className={` ${UserIcon && ' h-full w-full text-gray-300 ml-3'} ${Add && 'text-white bg-blue-600 border-4	border-white mb-5 rounded-full w-11 h-11'} `} />
            <p>{Plus}</p>
        </div>
    )
}
