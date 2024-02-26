"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ImageStackProps, StackProps } from '../types'

const Stack: React.FC<StackProps> = ({ image, handleImageChange }) => {

    const [imageStack, setImageSTack] = useState<ImageStackProps[]>(image)

    useEffect(() => {

        const intervalId = setInterval(() => {
            const images = [...imageStack]
            images.unshift(images.pop() as any)
            setImageSTack(images)
        }, 5000)

        return () => clearInterval(intervalId)
    },[imageStack])
    return (
        <div className="stack w-[250px] h-[250px] mb-5 mx-auto max-[426px]:w-[400px] max-[426px]:h-[400px] max-[376px]:w-[300px] max-[376px]:h-[300px] max-sm:w-[250px] max-sm:h-[250px]">
            {
                imageStack.map((item: any, index: number) => (
                    <Image
                        key={index}
                        alt='image'
                        src={item.image}
                        width={500}
                        height={500}
                        quality={80}
                        loading='lazy'
                        placeholder='blur'
                        className='w-full h-full rounded-lg object-cover'
                        onClick={() => handleImageChange(item.image)}
                    />
                ))
            }
        </div>
    )
}

export default Stack