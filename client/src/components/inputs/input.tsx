import React,{useState} from 'react'

type Props={
    type?:string,
    placeholder ?:string,
    className ?:string,
    value ?:string,
    onChange ?:React.ChangeEventHandler<HTMLInputElement>
}
function Input({type,placeholder,className,value,onChange}:Props) {
  return (
    <input type={type} placeholder={placeholder} className={className} value={value} onChange={onChange} />
  )
}

export default Input