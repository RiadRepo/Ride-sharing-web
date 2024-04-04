import Image from "next/image";
import { useRouter } from "next/router";
import { Button, Col, Container, Row } from "react-bootstrap";


export default function DriveHeroSection() {
  const router = useRouter();
  const handleGetStarted = () => {
    // Navigate to the "/services" route
    router.push("/driver-login");
  };
  return (
    <div className='bg-black py-5'>
      <Container>
        <Row className='py-5'>

          <Col xl={7} md={12}>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='p-5 pt-2'>
                <h1
                  className='text-white  pb-3 fw-bold'
                  style={{ fontSize: "4.5rem" }}
                >
                  Opportunity is everywhere
                </h1>
                <p className='text-white ' style={{ fontSize: "1.5rem" }}>
                  Make the most of your time on the road on the platform with the largest network of active riders.
                </p>
                <Button variant='light' className=' ' onClick={handleGetStarted} >
                  Sign Up To Driver
                </Button>
              </div>
            </div>
          </Col>
          <Col xl={5} md={12}>
            <Image
              src='/image/DriveIncome.jpg' // Update the path to use forward slashes
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
