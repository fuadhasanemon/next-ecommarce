import React from 'react'
import Title from './Title'

const HomeBanner = () => {
  return (
    <div className='flex flex-col items-center space-y-5'>
        <Title className='text-3xl md:text-4xl text-center uppercase font-bold'>Best clothing site</Title>
        <p className='text-center text-md text-gray/80 font-medium max-w-[480px]'>Find everything you need to look and feel your best, and shop the latest men's fashion and lifestyle products</p>
    </div>
  )
}

export default HomeBanner