import { LineProps } from "../types"

const Line:React.FC<LineProps> = ({ styles }) => {
    return (
        <div className={` absolute bottom-0 ${styles}`}></div>
    )
}

export {
    Line
}