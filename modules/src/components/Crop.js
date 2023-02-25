import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Crop = ({ cropData }) => {
  return (
    <>
      {cropData.map((curElem) => {
        // const { id, name, category, image, description } = curElem;
        return (
          <>
            <div key={curElem.id}>
              <Container fluid>
                <Row>
                  <Col lg={3}>
                    <div>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={curElem.image} />
                        <Card.Body>
                          <Card.Title>{curElem.name}</Card.Title>
                          <h3>{curElem.id}</h3>
                          <h3>{curElem.category}</h3>
                          <h3>{curElem.price}</h3>
                          <Card.Text>{curElem.description}</Card.Text>
                          <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Crop;
