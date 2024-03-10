import Footer from '@/Components/Footer'
import NavBar from '@/Components/NavBar'
import VehicleOption from '@/Components/SelectVehicle/VehicleOption'
import React from 'react'
import { Container } from 'react-bootstrap'

export default function index() {
    return (
        <>
            <NavBar />
            <div className='bg-white'>
                <Container>
                    <VehicleOption />

                </Container>
            </div>

            <Footer />
        </>

    )
}
