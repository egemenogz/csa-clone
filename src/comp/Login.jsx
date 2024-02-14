import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

export default function Signup() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {event.preventDefault();}
    setValidated(true);
  };

  return (
    <div
      className="signup"
      style={{
        maxWidth: "100%",
        margin: "3rem auto"
      }}
    >
      <Container
        style={{
          padding: "7.8rem",
        }}
      >
        <Row>
          <Col lg={3}>
            <img src="https://www.carrefoursaexport.com//uploads/genel-gorseller/4170e6e2-6f2c-4c4e-b7c8-749c6a4722a0carrefoursa-export-profesyonel-site-gorseller-v2-.jpg" alt="IMG" style={{height:'100%', width:'100%'}} />
          </Col>
          <Col lg={9} style={{}}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control required type="text" placeholder="First name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control required type="text" placeholder="Last name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button type="submit">Login</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
