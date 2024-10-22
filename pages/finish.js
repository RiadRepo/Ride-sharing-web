import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";

export default function finish() {
  return (
    <>
      <NavBar />
      <div className='text-center py-5'>
        <h1>Thanks! Have A Nice Day</h1>
        <img src='/image/thanks.jpg' alt='Loading...' height={500} width={700} />
        {/* <Button variant='danger' className='w-75 mb-2' onClick={handleEndTrip}>
        Home
      </Button> */}
      </div>
      <Footer />
    </>

  );
}
