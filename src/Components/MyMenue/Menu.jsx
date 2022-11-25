import style from './Menu.module.css'
import { Link } from 'react-router-dom'
import Mybasket from '../Mybasket/Mybasket'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'


const Menu = () => {

  const {totalQuantity} = useSelector(state=>state.shop)
  const {openPanel, closePanel} = useActions()


  return (
    <nav >
      <div className={style.container}>
        <Container> 
        <div className={style.navbar}>
          <div className={style.logo}> 
            <Link className={style.logo__link} to='#'>Logo</Link> 
          </div>
          <ul className={style.menu}>
            <Link className={style.menu__item} to='/'>Home</Link>
            <Link className={style.menu__item} to='/store'>Store</Link>
            <Link className={style.menu__item} to='/about'>About</Link>
            <Mybasket
              totalQuantity={totalQuantity}
              onClick={()=>openPanel()}
            /> 
          </ul>
        </div>
        </Container>
      </div>
    </nav>
  )
}

export default Menu