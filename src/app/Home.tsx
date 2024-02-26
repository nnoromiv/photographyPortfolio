"use client"

import React from 'react'
import Image from 'next/image'
import { ImageStack, NavBar } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { useImage } from '../../hooks'

const Home = () => {
  const {image, handleImageChange} = useImage()
  return (
    <main className='h-full overflow-x-hidden bg-whiteRabbit dark:bg-base-200'>
      <NavBar />
      <div className='h-[100vh] w-full flex flex-row max-[769px]:flex-col'>
        <div className='w-[50%] max-[1024px]:w-[60%] max-[769px]:w-full '>
          <Image
            alt='image'
            src={image}
            width={500}
            height={500}
            priority={true}
            quality={80}
            placeholder='blur'
            className='w-full h-full object-cover'
          />

          <h2 className='absolute bottom-5 px-3 text-8xl font-extrabold text-grey exploringText max-[769px]:hidden '>Exploring</h2>

        </div>
        
        <div className='bg-whiteRabbit w-[50%] max-[1024px]:w-[40%] max-[769px]:w-full dark:bg-base-200 h-fit'>

          <ImageStack handleImageChange={handleImageChange} />

          <div className='absolute flex gap-10 bottom-5 right-0 pr-5 z-10'>
            <FontAwesomeIcon icon={faInstagram} className=' w-[50px] h-[50px] text-grey dark:text-whiteRabbit cursor-pointer' />
            <FontAwesomeIcon icon={faXTwitter} className=' w-[50px] h-[50px] text-grey dark:text-whiteRabbit cursor-pointer' />
            <FontAwesomeIcon icon={faLinkedin} className=' w-[50px] h-[50px] text-grey dark:text-whiteRabbit cursor-pointer' />
          </div>

        </div>

      </div>

    </main>
  )
}

export default Home