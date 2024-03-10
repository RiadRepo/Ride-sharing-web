import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function TellUs() {
    return (
        <div className='bg-white py-5'>
            <Container>
                <Row className='py-5'>

                    <Col xl={7} md={12}>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='p-5 pt-2'>
                                <h1
                                    className='text-black  pb-3 fw-bold'
                                    style={{ fontSize: "4.5rem" }}
                                >
                                    Tell us where you want to go, we'll handle the rest.
                                </h1>
                                <p className='text-black ' style={{ fontSize: "1.5rem" }}>
                                    We share your request with our network of local drivers and handle payments and booking.
                                    We're also here to help if you need support, keeping a close eye on operations during peak hours.
                                </p>
                                {/* <Button variant='dark' className=''>
                                    Get Started
                                </Button> */}
                            </div>
                        </div>
                    </Col>
                    <Col xl={5} md={12}>
                        <Image
                            src='/image/Tell_us.jpg' // Update the path to use forward slashes
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
