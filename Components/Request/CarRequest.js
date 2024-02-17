import { useState } from "react";
import { Button } from "react-bootstrap";

export default function CarRequest({ request }) {
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleRequestClick = () => {
    // Set the selected request when clicked
    setSelectedRequest(request);
  };

  const handleConfirm = () => {
    // Handle confirmation logic here
    console.log("Confirmed:", selectedRequest);
  };

  const handleCancel = () => {
    // Handle cancellation logic here
    console.log("Cancelled:", selectedRequest);
  };

  return (
    <div className="container border">
      <div className="m-3"
      >
        <div >
          <p>Name: {request.flatData.userName}</p>
          <p>Fare: {request.flatData.fare} Tk</p>
          {/* <p>Distance: {request.flatData.distance}</p> */}
          <p>Location:<span className="fw-bold">{request.flatData.sourceName}</span> to <span className="fw-bold">{request.flatData.destinationName}</span> </p>
        </div>
        <div >
          <Button className="mx-2" onClick={handleConfirm}>Confirm</Button>
          <Button className="mx-2" variant="danger" onClick={handleCancel}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}
