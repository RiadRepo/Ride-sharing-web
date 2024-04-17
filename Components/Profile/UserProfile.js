import { Container } from "react-bootstrap";

export default function UserProfile() {
  return (
    <Container>
      <div className='border my-5 py-5'>
        <p>Name</p>
        <p>Email</p>
        <p>Request History</p>
      </div>
    </Container>
  );
}
