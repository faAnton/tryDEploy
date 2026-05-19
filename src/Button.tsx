
type PropsType = {
    title: string
    onClick?: ()=>void
}


export function Button({title, onClick}: PropsType) {
    return <button onClick={onClick}>{title}</button> 
}
