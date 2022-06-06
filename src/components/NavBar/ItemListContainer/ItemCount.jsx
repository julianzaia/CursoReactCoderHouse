import React, { useState } from "react"; // importación del Hook useState
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




function Counter() {
	const [ counter, setCount ] = useState(0);

	// counter = valor del estado
    // setCount = método para actualizar el estado
	// parámetro = valor inicial del estado (0)

	return (

		<Card style={{ width: '18rem' }}>
	    
        <Card.Body>
			
			
			
			<Button variant="outline-primary" onClick={ () => setCount(counter + 1)}>+1</Button>
			
			<Button variant="primary">Add to Cart</Button>
			<Button variant="outline-primary" onClick={ () => setCount(counter - 1)}>-1</Button>
			<span><p>Has elegitido { counter } productos </p></span>
		</Card.Body>
          
      
		</Card>	
	
    );
}

export default Counter;