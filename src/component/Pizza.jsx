import React from 'react'
import { useState } from 'react';
import { Card, Row, Col, Button} from "react-bootstrap";


const Pizza = ({pizza}) => {
  const [varient,setVariant] = useState('small');
  const [quantity,setQuantity] = useState(1);
  return (
    <>
      <Card style={{ width: '18rem', marginTop:"40px" }}>
      <Card.Img variant="top" src={pizza.image} style={{height:"200px"}}/>
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <hr />
        <Card.Text>
          <Row>
            <Col md={6}>
              <h6>Varients</h6>
              <select value={varient} onChange={(e) => setVariant(e.target.value)}>
                {pizza.varients.map((varient) =>(
                  <option>{varient}</option>
                ))}
              </select>
            </Col>
            <Col md={6}>
              <h6>Quantity</h6>
              <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                {[...Array(10).keys()].map((v,i) =>(
                  <option >{i+1}</option>
                ))}
              </select>
            </Col>
          </Row>
        </Card.Text>
            <Row>
              <Col md={6}>
                Price : {pizza.prices[0][varient] * quantity}
              </Col>
              <Col md={6}>
                <Button className="bg-warning text-white">Add to Cart</Button>
              </Col>
            </Row>
      </Card.Body>
    </Card>
    </>
  )
}

export default Pizza
