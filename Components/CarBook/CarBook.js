import { DestinationContext } from "@/context/DestinationContext";
import { SourceContext } from "@/context/SourceContext";
import dynamic from "next/dynamic";
import { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CarListOptions from "./CarListOptions";
import InputItem from "./InputItem";

const GooglemapSection = dynamic(
  () => import("../Googlemap/GooglemapSection"), // Replace with the actual path to your GoogleMap component
  { ssr: false }
);
// import GooglemapSection from "../Googlemap/GooglemapSection";

export default function CarBook() {
  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);
  const [distance, setDistance] = useState();
  const calculatedDistance = () => {
    const dist = google.maps.geometry.spherical.computeDistanceBetween(
      { lat: source.lat, lng: source.lng },
      { lat: destination.lat, lng: destination.lng }
    );
    setDistance(dist * 0.000621374);
  };
  console.log(distance);
  return (
    <Container>
      <Row>
        <Col md={5} className='border p-4'>
          <div>
            <h4 className='fw-bold'>Get a ride</h4>
            <div className='mb-3'>
              <InputItem type='source' />
            </div>
            <div>
              <InputItem type='destination' />
            </div>

            <div>{distance ? <CarListOptions /> : null}</div>
          </div>
        </Col>
        <Col md={7} className='border  p-4'>
          <GooglemapSection />
        </Col>
      </Row>
    </Container>
  );
}
