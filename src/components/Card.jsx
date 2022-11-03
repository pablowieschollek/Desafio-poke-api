import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CardPoke = ({ pokemon }) => {
  console.log(pokemon);
  if (pokemon) {
    const { name, stats, types, sprites } = pokemon;

    return (
      <div className="pokeinfo">
        <Card
          border="secondary"
          className="pokecard"
          style={{ width: "18rem" }}
        >
          <Card.Img
            className="p-4"
            variant="top"
            src={sprites.other.dream_world.front_default}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              {types.map((type) => (
                <p key={type.type.name}>{type.type.name}</p>
              ))}
            </ListGroup.Item>
            <ListGroup.Item>
              {stats.map((stat) => (
                <p>
                  {stat.stat.name} : {stat.base_stat}
                </p>
              ))}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
  }
};
export default CardPoke;