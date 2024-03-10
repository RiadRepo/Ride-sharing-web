import Image from "next/image";
import { useRouter } from "next/router";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function HeroSection() {
  const router = useRouter();

  const handleGetStarted = () => {
    // Navigate to the "/services" route
    router.push("/services");
  };

  return (
    <div className='bg-black py-5'>
      <Container>
        <Row className='py-5'>
          <Col xl={7} md={12}>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='p-5'>
                <h1 className='text-white pb-3' style={{ fontSize: "4.5rem" }}>
                  Go anywhere with Ride Share
                </h1>
                <p className='text-white' style={{ fontSize: "1.5rem" }}>
                  Request a ride, hop in, and go.
                </p>
                <Button variant='light' onClick={handleGetStarted}>
                  Get Started
                </Button>
              </div>
            </div>
          </Col>
          <Col xl={5} md={12}>
            <Image
              src='/image/Car.jpg' // Update the path to use forward slashes
              width={500}
              height={500}
              alt='Coming Soon'
              className='rounded-4'
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
