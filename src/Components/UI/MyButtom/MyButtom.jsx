import React from 'react'
import style from './MyButtom.module.css'

const MyButtom = ({children, type, ...props}) => {
  return (
    <button
    className={style.btn}
    type={type}
    {...props}
    >
      {children}
      </button>
  )
}

export default MyButtom


{/* <MyButtom children='Add' type='text'/> */}