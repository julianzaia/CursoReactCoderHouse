
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ItemListContainer({name, imgSrc, price,currency, ...props}){
  return(
	    <Card style={{ width: '18rem' }}>
	    <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {currency} {price}
        </Card.Text>
        <Button variant="success">Add to Cart</Button>
        </Card.Body>
      </Card>
	)
}

export default ItemListContainer;