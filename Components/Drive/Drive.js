import { Button } from "react-bootstrap";

export default function Drive() {
  return (
    <div
      className='d-flex align-items-center justify-content-center '
      style={{ height: "100vh" }}
    >
      <Button href='/drive/request'>Show Ride Request</Button>
    </div>
  );
}
