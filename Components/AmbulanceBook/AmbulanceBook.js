import { DestinationContext } from "@/context/DestinationContext";
import { SourceContext } from "@/context/SourceContext";
import dynamic from "next/dynamic";
import { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AmbulanceListOptions from "../AmbulanceBook/AmbulanceListOptions";
import InputItem from "../AmbulanceBook/InputItem";
import Button from "react-bootstrap/Button";

const GooglemapSection = dynamic(
    () => import("../Googlemap/GooglemapSection"), // Replace with the actual path to your GoogleMap component
    { ssr: false }
);
// import GooglemapSection from "../Googlemap/GooglemapSection";

export default function AmbulanceBook() {
    const { source, setSource } = useContext(SourceContext);
    const { destination, setDestination } = useContext(DestinationContext);
    const [distance, setDistance] = useState();
    // console.log(source)
    const calculatedDistance = () => {
        const dist = google.maps.geometry.spherical.computeDistanceBetween(
            { lat: source.lat, lng: source.lng },
            { lat: destination.lat, lng: destination.lng }
        );

        setDistance(dist * 0.000621374);
    };
    // console.log(distance);
    return (
        <Container>
            <Row className="mt-5">
                <Col md={5} className='border p-4'>
                    <div>
                        <h4 className='fw-bold'>Always the ride you want</h4>
                        <div className='mb-3'>
                            <InputItem type='source' />
                        </div>
                        <div>
                            <InputItem type='destination' />
                        </div>
                        <Button className="my-3" variant="dark" onClick={() => calculatedDistance()}>Search</Button>

                        <div>{distance ? <AmbulanceListOptions distance={distance} /> : null}</div>
                    </div>
                </Col>
                <Col md={7} className='border  p-4'>
                    <GooglemapSection />
                </Col>
            </Row>
        </Container>
    );
}
