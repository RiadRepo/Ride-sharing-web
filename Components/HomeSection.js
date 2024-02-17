export default function HomeSection() {
  return (
    <section
      className='py-5 bg-light d-flex justify-content-center '
      style={{
        minHeight: "100vh",
        backgroundImage: `url('/image/hero-1.webp')`, // Replace 'path/to/your/image.jpg' with the actual path to your image
        backgroundSize: "cover", // Adjust the background size as needed
        backgroundPosition: "center", // Adjust the background position as needed
      }}
    >
      <div className='container text-center'>
        <h1 className=' font-bolder mt-3 mb-4 text-white' style={{ fontSize: '5rem' }}>
          Welcome to Ride Share
        </h1>
        <p className='custom-text-1 mb-5 fw-bolder'>
          Your trusted partner for safe and convenient rides.
        </p>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
          <div className='col'>
            <div className='card'>
              <div className='card-body'>
                <h3 className='card-title text-2xl fw-bold mb-4'>
                  Book a Ride
                </h3>
                <p className='card-text custom-text'>
                  Easily book a ride with just a few clicks. We provide reliable
                  and comfortable transportation.
                </p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <div className='card-body'>
                <h3 className='card-title text-2xl fw-bold mb-4'>
                  Track Your Ride
                </h3>
                <p className='card-text custom-text'>
                  Track your ride in real-time. Know exactly when your driver
                  will arrive and reach your destination.
                </p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <div className='card-body'>
                <h3 className='card-title text-2xl fw-bold mb-4'>
                  Affordable Rates
                </h3>
                <p className='card-text custom-text'>
                  Enjoy affordable rates for your rides. No hidden fees,
                  transparent pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
