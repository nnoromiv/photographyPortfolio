import { StaticImageData } from "next/image"

export interface ProviderProps {
    children: string | React.ReactNode | React.JSX.Element| React.JSX.Element[]
}

export interface LineProps {
    styles: string
}

export interface ImageStackProp {
    handleImageChange: (img: StaticImageData) => void
}

export type ImageStackProps = {
    image: StaticImageData
}

export interface StackProps {
    image: ImageStackProps[]
    handleImageChange: (img: StaticImageData) => void
}