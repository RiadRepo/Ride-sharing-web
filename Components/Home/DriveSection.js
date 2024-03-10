import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function DriveSection() {
  return (
    <div className='bg-white py-5'>
      <Container>
        <Row className='py-5'>
          <Col xl={5} md={12}>
            <Image
              src='/image/Drive.jpg' // Update the path to use forward slashes
              width={500}
              height={500}
              alt='Coming Soon'
              className='rounded-4'
            />
          </Col>
          <Col xl={7} md={12}>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='p-5 pt-2'>
                <h1
                  className='text-black  pb-3 fw-bold'
                  style={{ fontSize: "4.5rem" }}
                >
                  Drive when you want, make what you need
                </h1>
                <p className='text-black ' style={{ fontSize: "1.5rem" }}>
                  Make money on your schedule with deliveries or rides—or both.
                  You can use your own car or choose a rental through Uber.
                </p>
                <Button variant='dark' className=''>
                  Get Started
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
