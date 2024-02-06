import { Col, Container, Row } from "react-bootstrap";
import InputItem from "./InputItem";
import dynamic from 'next/dynamic';

const GooglemapSection = dynamic(
  () => import("../Googlemap/GooglemapSection"), // Replace with the actual path to your GoogleMap component
  { ssr: false }
);
// import GooglemapSection from "../Googlemap/GooglemapSection";

export default function CarBook() {
  // const { source, setSource } = useContext(SourceContext);
  // const { destination, setDestination } = useContext(DestinationContext);

  return (
    <Container>
      <Row>
        <Col md={5} className='border p-4'>
          <div>
            <h4 className="fw-bold">Get a ride</h4>
            <div className="mb-3">
              <InputItem type='source' />
            </div>
            <div>
              <InputItem type='destination' />
            </div>


          </div>
        </Col>
        <Col md={7} className='border  p-4'>
          <GooglemapSection />
        </Col>
      </Row>
    </Container>
  );
}
