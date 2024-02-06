import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Cards.css"

function Cards() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/intro-1662064407.webp"
      />
      <Card.Body>
        <Card.Title className="title">Burger Time</Card.Title>
        <Card.Text>
          Burger is what we need
        </Card.Text>
        <Button variant="primary">Buy now</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
