//Create Card component to create a card for each meme
// Path: meme-app/src/components/Card.tsx

import { Card } from "react-bootstrap";

type meme = {
    url : string,
    name : string,
    description : string,
}

export const  MemeCard = ({ url, name, description }: meme) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}