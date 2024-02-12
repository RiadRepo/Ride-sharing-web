import Image from 'next/image'
import React from 'react'

export default function CarListItem({ car, distance }) {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image src={car?.image} width={100} height={100} />
                    <div >
                        <h5 className='mx-2'>{car?.name}</h5>
                        <p className='mx-2'>{car?.desc}</p>

                    </div>
                </div>
                <div>
                    <h6 className='mx-2'>Tk. {(car?.amount * distance).toFixed(2)}</h6>
                </div>
            </div>


        </div>
    )
}
