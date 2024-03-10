import Image from "next/image";

export default function WhyDriverWithRideShare() {
    return (
        <section
            className='py-5 bg-light d-flex justify-content-center '
        // style={{
        //   minHeight: "100vh",
        //   backgroundImage: `url('/image/hero-1.webp')`, // Replace 'path/to/your/image.jpg' with the actual path to your image
        //   backgroundSize: "cover", // Adjust the background size as needed
        //   backgroundPosition: "center", // Adjust the background position as needed
        // }}
        >
            <div className='container text-center'>
                <h1 className=' font-bolder mt-3 mb-4 text-black' style={{ fontSize: '5rem' }}>
                    Why drive with Ride Share
                </h1>
                <Image
                    src='/image/DriveView.jpg' // Update the path to use forward slashes
                    width={1000}
                    height={500}
                    alt='Coming Soon'
                    className='rounded-4 mb-5'
                />
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-body'>
                                <h3 className='card-title text-2xl fw-bold mb-4'>
                                    Set your own hours
                                </h3>
                                <p className='card-text custom-text'>
                                    You decide when and how often you drive.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-body'>
                                <h3 className='card-title text-2xl fw-bold mb-4'>
                                    Get paid fast
                                </h3>
                                <p className='card-text custom-text'>
                                    Choose how and when you want to cash out.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-body'>
                                <h3 className='card-title text-2xl fw-bold mb-4'>
                                    Get support at every turn
                                </h3>
                                <p className='card-text custom-text'>
                                    If you have questions, you can reach us anytime.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
