import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function CarRequest({ request }) {
  console.log(request);
  const router = useRouter();
  const [selectedRequest, setSelectedRequest] = useState(null);
  let status;
  const handleRequestClick = () => {
    // Set the selected request when clicked
    setSelectedRequest(request);
  };

  const handleConfirm = async () => {
    // Handle confirmation logic here
    status = {
      id: request.id,
      isPending: true,
    };
    try {
      const response = await fetch("/api/accept-ride", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      });

      if (!response.ok) {
        throw new Error("Failed to save data");
      } else if (response.status == 200) {
        router.push("/drive/driving-mode");
      }
    } catch (error) {
      console.error("Error saving data:", error.message);
    }

    console.log("Confirmed:", selectedRequest);
    // router.push("/drive/driving-mode");
  };

  const handleCancel = () => {
    // Handle cancellation logic here
    console.log("Cancelled:", selectedRequest);
  };

  return (
    <div className='container border '>
      <div className='m-3'>
        <div>
          <p>Name: {request.flatData.userName}</p>
          <p>Fare: {request.flatData.fare} Tk</p>
          {/* <p>Distance: {request.flatData.distance}</p> */}
          <p>
            Location:
            <span className='fw-bold'>
              {request.flatData.sourceName}
            </span> to{" "}
            <span className='fw-bold'>{request.flatData.destinationName}</span>{" "}
          </p>
        </div>
        <div>
          <Button className='mx-2' onClick={handleConfirm}>
            Confirm
          </Button>
          <Button className='mx-2' variant='danger' onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
