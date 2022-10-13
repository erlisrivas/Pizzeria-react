import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import "../index.css"

import Context from '../Context'
import { useNavigate } from "react-router-dom";
import React, { useContext } from 'react'


const Galeria = () => {
    const{lista, addtoCard} = useContext (Context);
    const Navigate = useNavigate ();
  return (
    <div className="row m-5 align-items-center justify-content-center">
        {lista.map((pizza) => (
        <Col className="col-12 col-md-6 col-lg-3 m-4"key ={pizza.id}>
        <Card  style={{ width: '20rem' }}>
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body>
        <       Card.Title> <h4>Pizza {pizza.name}</h4></Card.Title>
                <hr/>
                <Card.Text>
                <b>Ingredientes:</b>
                <ul>
                 {pizza.ingredients.map((ingredientes, i) =>
                 <li key={i}>
                     🍕{ingredientes}
                 </li>
                 )}
                </ul>
                </Card.Text>
                <h2 className="text-center text-dark pb-3">
                     $ {pizza.price.toLocaleString("es-Cl")}
                </h2>
                <div className ="d-flex justify-content-around mb-4">
                <Button 
                variant="primary"
                to={`pizza/${pizza.id}`}
                onClick = {() => Navigate(`pizza/${pizza.id}`)}
                >Ver mas 👀</Button>
                <Button 
                variant="danger"
                onClick = {() => addtoCard(pizza)}
                >Añadir 🛒</Button>
                </div>
            </Card.Body>
         </Card>
         </Col>
        )       
        )}
  </div>
  )
}

export default Galeria