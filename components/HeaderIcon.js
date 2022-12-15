import React from 'react'

export default function HeaderIcon({ Icon ,active}) {
    return (
        <div className='md:px-8 md:py-4  cursor-pointer md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-600 	transition ease-in-out delay-150 hover:-translate-y-1  '>
            <Icon  className={`h-7 w-7 text-gray-500 hover:text-blue-500 border-b-4	hover:border-blue-600 ${active && 'text-blue-500 border-b-4	border-blue-600	'} `}/>

        </div>
    )
}
