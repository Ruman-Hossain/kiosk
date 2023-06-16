import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>&copy; {currentYear} All Rights Reserved by <Link to="https://github.com/Ruman-Hossain/">Ruman Hossain</Link></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
