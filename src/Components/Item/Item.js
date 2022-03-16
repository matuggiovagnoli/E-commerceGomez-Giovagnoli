import React from 'react'
import {Card,Button} from "react-bootstrap"

function Item({nombre,talla,color,marca,tipo,img}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{nombre}</Card.Title>
      <Card.Text>
        <ul>
          <li>{marca}</li>
          <li>{tipo}</li>
          <li>{talla}</li>
          <li>{color}</li>
        </ul>
      </Card.Text>
      <Button variant="primary">Detalles</Button>
    </Card.Body>
  </Card>
  )
}

export default Item