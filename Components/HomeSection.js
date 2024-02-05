export default function HomeSection() {
  return (
    <section className='py-8'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-4'>Welcome to RideShare</h2>
        <p className='text-gray-600 mb-8'>
          Your trusted partner for safe and convenient rides.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-2xl font-semibold mb-4'>Book a Ride</h3>
            <p className='text-gray-600'>
              Easily book a ride with just a few clicks. We provide reliable and
              comfortable transportation.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-2xl font-semibold mb-4'>Track Your Ride</h3>
            <p className='text-gray-600'>
              Track your ride in real-time. Know exactly when your driver will
              arrive and reach your destination.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-2xl font-semibold mb-4'>Affordable Rates</h3>
            <p className='text-gray-600'>
              Enjoy affordable rates for your rides. No hidden fees, transparent
              pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
