import React from 'react'

export function card(src:string,title:string) {
  return (
    <div className='w-52 h-96 bg-gray-700 rounded-xl overflow-hidden'>
      <img src={src} alt={title} className='w-full h-auto'/>
      <div className="name">{title}</div>
    </div>
  )
}

