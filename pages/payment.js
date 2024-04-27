import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

export default function payment() {
  const router = useRouter(); // Initialize history object

  const handleEndTrip = () => {
    // Handle the end trip action
    // For example, navigate to the finish page
    router.push("/finish"); // Replace "/finish" with the route to your finish page
  };
  return (
    <div className='text-center py-5'>
      <h1>Payment</h1>
      <img src='/image/payment.jpg' alt='Loading...' height={500} width={500} />
      <Button variant='danger' className='w-75 mb-2' onClick={handleEndTrip}>
        Done
      </Button>
    </div>
  );
}
