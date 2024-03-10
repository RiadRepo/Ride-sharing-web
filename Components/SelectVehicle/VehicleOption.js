import React from 'react';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';

const VehicleOption = () => {
    return (
        <div style={{ minHeight: '600px' }} >
            <div className='my-5 py-5'>
                <Row>
                    <Col className='border text-center p-4'>
                        <Link href='/services'>
                            <Image
                                src='/image/car-ride.jpg' // Update the path to use forward slashes
                                width={200}
                                height={200}
                                alt='Coming Soon'
                                className='rounded-4'
                            />

                            <h2>Car</h2>

                        </Link>
                    </Col>
                    <Col className='text-center p-4 border'>
                        <Link href='/bike'>
                            <Image
                                src='/image/bike.jpg' // Update the path to use forward slashes
                                width={200}
                                height={200}
                                alt='Coming Soon'
                                className='rounded-4'
                            />
                            <h2>Bike</h2>

                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center p-4 border'>
                        <Link href='/cng'>
                            <Image
                                src='/image/cng.jpg' // Update the path to use forward slashes
                                width={200}
                                height={200}
                                alt='Coming Soon'
                                className='rounded-4'
                            />
                            <h2>CNG</h2>

                        </Link>
                    </Col>
                    <Col className='text-center p-4 border'>
                        <Link href='/ambulance'>
                            <Image
                                src='/image/ambulance.jpg' // Update the path to use forward slashes
                                width={200}
                                height={200}
                                alt='Coming Soon'
                                className='rounded-4'
                            />

                            <h2>Ambulance</h2>

                        </Link>
                    </Col>
                </Row>
            </div>

        </div>
    );
};

export default VehicleOption;
