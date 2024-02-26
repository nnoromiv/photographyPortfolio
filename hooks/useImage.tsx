"use client"

import { useState } from 'react'
import { NINE } from '../assets'
import { StaticImageData } from 'next/image'

const useImage = () => {
    const [image, setImage] = useState(NINE)

    const handleImageChange = ( img: StaticImageData) => {
        setImage(img)
    }
  return {
    image, handleImageChange
  }
}

export default useImage