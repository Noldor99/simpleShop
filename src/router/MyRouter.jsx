import { Route, Routes } from 'react-router-dom'
import About from '../page/About'
import Home from '../page/Home'
import Store from '../page/Store'

const MyRouter = () => {
  return (
    <Routes>
      <Route  path='/' element = {<Home/>}/>
      <Route  path='/store' element = {<Store/>}/>
      <Route  path='/about' element = {<About/>}/>
  </Routes>
  )
}

export default MyRouter