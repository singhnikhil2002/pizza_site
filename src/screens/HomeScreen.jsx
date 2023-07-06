import React from 'react'
import AllPizza from '../pizza-data'
import { Container, Row, Col} from "react-bootstrap";
import Pizza from '../component/Pizza'

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Row>
          {AllPizza.map(pizza =>(
            <Col md={4}>
              <Pizza pizza={pizza} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default HomeScreen
