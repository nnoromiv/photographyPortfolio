"use client"

import React from 'react'
import Stack from './Stack'
import { ALL_STACKS } from '../constants'
import { ImageStackProp } from '../types'


const ImageStack:React.FC<ImageStackProp> = ({ handleImageChange }) => {
    return (
        <div className='mt-12 -ml-[30%] grid grid-cols-3 gap-y-28 max-[1025px]:grid-cols-2 max-[1025px]:mt-16 max-[769px]:mx-[10%] max-[769px]:-mt-[40%] max-[426px]:-mt-10 max-[426px]:grid-cols-1 max-[426px]:mx-[3%] max-[376px]:mx-[10%] max-[321px]:mx-1 '>
            {
                ALL_STACKS.map((item:any, index: number) => (
                    <Stack key={index} image={item} handleImageChange={handleImageChange} />
                ))
            }
        </div>
    )
}

export default ImageStack