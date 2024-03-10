import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'
import Drive from '../Drive/Drive'

export default function DriveProfile() {
    return (
        <div className='bg-white '>
            <Container>
                <div>
                    <h2 className='text-black mb-0 pb-0 text-center'>Welcome To Drive Profile</h2>
                    <Image
                        src='/image/drive_profile.jpg' // Update the path to use forward slashes
                        width={1000}
                        height={500}
                        alt='Coming Soon'
                        className='rounded-4'
                        layout='responsive'
                    />
                    <Drive />
                </div>

            </Container>

        </div>
    )
}
