import React from 'react'
import { Line } from './Line'
import ModeSwitch from '@/app/ModeSwitcher'

const NavBar = () => {
  return (
    <nav className='flex flex-row px-10 absolute w-full mt-3 z-20 max-[426px]:px-3 items-center'>
        <div className='flex flex-row justify-around items-center w-1/2 max-[769px]:w-full text-white dark:text-black'>
            <h1 className=' text-2xl max-[426px]:text-xl'>Photo Dean Studio</h1>
            <h2 className=' text-xl max-[426px]:hidden'>Photographs</h2>
            <ModeSwitch />
            <Line styles={'w-[90%] h-[2px] bg-white dark:bg-black'}/>
        </div>
    </nav>
  )
}

export default NavBar