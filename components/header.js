import React from 'react'
import Image from 'next/image'
import HeaderIcon from '../components/HeaderIcon'
import Settings from '../components/Settings'
import { Calculator, Search, Home, Inbox,UserCircle,Bell } from "heroicons-react";




export default function header() {
    return (
        <>
            <div className="flex items-center sticky top-0 bg-white p-2 shadow-md justify-between">
                header
                {/* header_left */}
                <div className='flex'>
                    <Image src={'/facebook.png '} height={40} width={40} />
                    <div className='flex items-center rounded-full bg-gray-100 py-2 truncate ml-5'>
                        <Search className='h-6 ml-2 text-gray-600' />
                        <input type="text" placeholder='Search Facebook' className='outline-none bg-transparent ml-2' />

                    </div>

                </div>

                {/* header_center */}
                <div className="flex">
                    <div className='flex space-x-6'>
                        <HeaderIcon active Icon={Home} />
                        <HeaderIcon Icon={Calculator} />
                        <HeaderIcon Icon={Home} />

                    </div>
                </div>
                {/* header_right */}
                <div className='flex  space-x-6'>
                    <Settings Icon={'a'} name='Finds Friends' />
                    <Settings Icon={Inbox} />
                    <Settings Icon={Bell} />
                    <Settings Icon={Inbox} />
                    <Settings Icon={UserCircle} />

                </div>

            </div>

        </>
    )
}
