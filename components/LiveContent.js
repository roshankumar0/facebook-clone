import React from 'react'

export default function LiveContent({ Icon,Icons }) {
    return (
        <div className='flex'>
            <Icon />
            {Icons}
        </div>
    )
}
