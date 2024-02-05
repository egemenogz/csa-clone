import "react-bootstrap";
import "./InfoCsa.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function InfoCsa() {
  return (
    <section
      style={{
        display: "flex",
        textAlign: "center",
        justifyItems: "center",
        margin: "2rem auto",
      }}
    >
      <Container>
        <Row className="title my-5">
          <h2
            className="title"
            style={{ color: "#175fa6", fontSize: "2rem", fontWeight: "700" }}
          >
            Why CarrefourSA Export?
          </h2>
          <p2
            className="subtitle"
            style={{
              fontSize: "1.25rem",
              maxWidth: "856px",
              margin: "0 auto",
              color: "#666",
            }}
          >
            As the longest-established retail and purchasing organization in
            Turkey, we find the most suitable products for our customers; and
            act as the single and right contact point for hundreds of suppliers
            and brands.
          </p2>
        </Row>
        <Row>
          <Col md={3}>
            <div className="stats">
              <div className="stats-icon">
                <img
                  src="https://www.carrefoursaexport.com///uploads/icon/c20a464b-7c3e-4e82-aaac-f0291a61cc80yuzlerce-urun-secenegi.svg"
                  alt="yuzlerce urun secenegi"
                />
              </div>
              <h4 className="stats-title">Hundreds of products</h4>
              <p className="stats-description">
                Direct access to a wide range of products from local and
                international producers
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="stats">
              <div className="stats-icon">
                <img
                  src="https://www.carrefoursaexport.com///uploads/icon/332d08f8-b6ec-4866-a0d6-e2f9d1517fb2isinizi-gelistirecek-firsatlar.svg"
                  alt="yuzlerce urun secenegi"
                />
              </div>
              <h4 className="stats-title">
                Opportunities to expand our business
              </h4>
              <p className="stats-description">
                Distribution rights for Carrefour branded products and
                private-label product development
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="stats">
              <div className="stats-icon">
                <img
                  src="https://www.carrefoursaexport.com///uploads/icon/69b7c68d-9906-4cb3-a7eb-60ff4fc8a1a8esnek-siparis-imkani.svg"
                  alt="Flexible ordering options"
                />
              </div>
              <h4 className="stats-title">Flexible ordering options</h4>
              <p className="stats-description">
                Flexible sales without minimum order quantity requirement
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="stats">
              <div className="stats-icon">
                <img
                  src="https://www.carrefoursaexport.com///uploads/icon/382cedd7-a72a-4212-acbe-4b6ec5200c85carrefoursa-kalite-gunvencesi.svg"
                  alt="CarrefourSA Quality Assurance"
                />
              </div>
              <h4 className="stats-title">CarrefourSA Quality Assurance</h4>
              <p className="stats-description">
                Possibility of audit by independent auditors upon request
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
