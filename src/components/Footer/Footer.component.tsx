import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <h5>Footer App</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
