import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MyCard from '../Components/MyCard/MyCard'
import { useSelector } from 'react-redux'

const Store = () => {

  const {cards} = useSelector(state=>state.shop)

  return (
    <div>
    <Container fluid='xl'>
      <Row className='pt-3' lg={3}>
        {cards.map(({id, name, price, imgUrl, quantity})=>        
          <Col key={id}>
            <MyCard
              key={id}
              id={id}
              name={name}
              price={price}
              imgUrl={imgUrl}
              quantity={quantity}
            />
          </Col>
        )}
      </Row>
    </Container>
  </div>
  )
}

export default Store