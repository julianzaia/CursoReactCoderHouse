
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function ItemListContainer({name, imgSrc, price, stock, currency, ...props}){
  return(
	    <Card style={{ width: '18rem' }}>
	    <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Precio {currency} {price}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Stock:  {stock}</Card.Subtitle>
        
        <Card.Text>
        
        
        </Card.Text>
        
          
        </Card.Body>
          
      
      </Card>
      
             
	)
}

export default ItemListContainer;