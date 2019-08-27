import React from 'react'

export default function Banner({children,title,subTitle}) {
    return (
        <div className='banner'>
            <h2>{title}</h2>
            <div></div>
            <p>{subTitle}</p>
            {children}
        </div>
    )
}
