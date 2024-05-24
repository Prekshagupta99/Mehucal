import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Cards/Cards.css';
const Cards = (props) => {
  return (
    <Card className="card-item">
      <Card.Img variant="top" src={props.image} className="card-image" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Cards;
