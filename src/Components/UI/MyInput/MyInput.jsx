import style from './MyInput.module.css'

const MyInput = ({type, ...props}) => {
  return (
    <>
      <input
        className={style.input} 
        type={type}
        {...props}
        />
    </>
  )
}

export default MyInput