
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import Menu from './Components/MyMenue/Menu'
import { ShoppingCart } from './Components/ShoppingCart'
import { useActions } from './hooks/useActions'
import MyRouter from './router/MyRouter'

const App = () => {

  const {cards} = useSelector(state=>state.shop)
  const {quantityCard} = useActions()


  useEffect(() => {
    quantityCard()
  }, [cards])


  return (
    <div> 
      <ShoppingCart/>
      <Menu/>
      <MyRouter/>
    </div>
  )
}

export default App