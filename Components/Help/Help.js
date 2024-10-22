import { Container, Row, Col, Card } from 'react-bootstrap';

const HelpPage = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '90vh' }}>
      <Container fluid className="text-center p-5" style={{ backgroundImage: 'url(/your-background-image.jpg)', backgroundSize: 'cover' }}>
        <h1>Welcome to Ride Share Support</h1>
        <p>
          We’re here to help. Looking for customer service contact information? Explore support resources below to find the best way to reach out about your issue.
        </p>
        <Row className="justify-content-center mt-4">
          {cardsData.map((card, idx) => (
            <Col xs={12} md={6} lg={3} className="mb-3" key={idx}>
              <Card className="h-100">
                <Card.Body className="d-flex flex-column align-items-center">
                  <i className={`bi ${card.icon}`} style={{ fontSize: '3rem' }}></i>
                  <Card.Title className="mt-3">{card.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

const cardsData = [
  { title: 'Riders', icon: 'bi-car-front' },
  { title: 'Driving & Delivering', icon: 'bi-car-front-fill' },
  { title: 'Percel', icon: 'bi-bag' },
  { title: 'Merchants & Restaurants', icon: 'bi-shop-window' },
  { title: 'Bikes & Scooters', icon: 'bi-bicycle' },
  { title: 'Business', icon: 'bi-briefcase' },
  { title: 'Freight', icon: 'bi-truck' },
];

export default HelpPage;
