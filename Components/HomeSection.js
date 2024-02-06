export default function HomeSection() {
  return (
    <section className='py-5 bg-light' style={{ minHeight: "100%" }}>
      <div className='container text-center'>
        <h2 className='text-4xl font-bold mb-4'>Welcome to RideShare</h2>
        <p className='custom-text mb-8'>
          Your trusted partner for safe and convenient rides.
        </p>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
          <div className='col'>
            <div className='card'>
              <div className='card-body'>
                <h3 className='card-title text-2xl font-semibold mb-4'>
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
                <h3 className='card-title text-2xl font-semibold mb-4'>
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
                <h3 className='card-title text-2xl font-semibold mb-4'>
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
