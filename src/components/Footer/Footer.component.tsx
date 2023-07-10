import { Container, Row, Col } from "react-bootstrap";
import "../../assets/styles/Footer.style.css";
const Footer = () => {
  return (
    <footer className="bg-dark text-light">
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
