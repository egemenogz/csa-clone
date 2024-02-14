import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

export default function Signup() {
  const [validated, setValidated] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      event.preventDefault();
    }
    setValidated(true);
  };

  const btnNavigate = () => {
    console.log("navigating")
    window.location.href="./log-in";
  };

  const styles = {
    backgroundColor: "grey",
    border: "none",
  };

  return (
    <div
      className="signup"
      style={{
        maxWidth: "1320px",
        margin: "3rem auto",
      }}
    >
      <Container
        style={{
          padding: "7.8rem",
        }}
      >
        <Row>
          <Col lg={3}>
            <ul style={{ listStyle: "none", fontSize: "1rem" }}>
              <li>
                <a style={{ display: "flex" }}>
                  <span>Accounter Information</span>
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={9}>
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
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" placeholder="State" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="text" placeholder="Zip" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
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
              <Button style={{ marginRight: "1rem" }} type="submit">
                Submit form
              </Button>
              <Button
                type="submit"
                style={btnDisabled ? styles : { background: "primary" }}
                disabled={btnDisabled}
                onClick={btnNavigate}
              >
                to Log in
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
