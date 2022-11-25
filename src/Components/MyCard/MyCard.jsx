import { useActions } from '../../hooks/useActions'
import { formatCurrency } from '../../utilities/formatCurrency'
import ImgCard from '../ImgCard/ImgCard'
import MyButtom from '../UI/MyButtom/MyButtom'
import style from './MyCard.module.css'

const MyCard = ({id, name, price, imgUrl, quantity}) => {

  const {increaseCard, decreaseCard, removeCard, removeFromShop} = useActions()

  return (
    <div className={style.container}>
      <ImgCard
        imgUrl={imgUrl}
      />
      <div className={style.title}>
        <p>{name}</p> 
        <p>{formatCurrency(price)}</p> 
      </div>
      {quantity === 0 ? (
      <>      
        <div className={style.container__btn}>
          <MyButtom 
            style={{width: '100%'}} 
            children='Add' 
            type='text'
            onClick={()=>increaseCard(id)}
            />
        </div>
      </>
      ):(

      <>      
      <div className={style.container__btnCard}>
        <MyButtom style={{width: '45px'}} children='+' type='text' onClick={()=>increaseCard(id)}/>
        <p>{quantity} in cart</p>
        <MyButtom style={{width: '45px'}} children='-' type='text' onClick={()=>decreaseCard(id)}/>
      </div>
      <div className='d-flex justify-content-center'>
        <MyButtom 
          style={{background: 'red'}} 
          children='Remove' 
          type='text'
          onClick={()=>removeFromShop(id)}
          />
      </div>
      </>
      )
      }

    </div>
  )
}

export default MyCard