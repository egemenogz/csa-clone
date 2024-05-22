import "./ContentHome.css";
import AllCatePic from "../../assets/AllCatePic.jpg";
import csaDummy from "../../assets/carrefour-dummy.jpeg";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ContentHome() {
  return (
    <>
      <div className="container">
        <Container>
          <div className="title-category">
            <h3>All Categories</h3>
            <a href="/all%categories">
              see all
            </a>
          </div>

          <Row md={12} className="category-col">
            <Col mb={3}>
              <img src={AllCatePic} />
            </Col>
            <Col mb={9}>
              <Row>
                <Card style={{ width: "16rem", marginRight: "2rem" }}>
                  <img src={csaDummy} alt="..." />
                  <Card.Body>
                    <Card.Title>Product Title</Card.Title>
                    <Card.Text>
                      <p>Quantity of pallets </p>
                      <p>Quantity of boxex</p>
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: "16rem" }}>
                  <img src={csaDummy} alt="..." />
                  <Card.Body>
                    <Card.Title>Product Title</Card.Title>
                    <Card.Text style={{}}>
                      <p>Quantity of pallets </p>
                      <p>Quantity of boxex</p>
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
