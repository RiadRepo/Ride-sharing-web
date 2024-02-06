import { Col, Container, Row } from "react-bootstrap";
import InputItem from "./InputItem";

export default function CarBook() {
  // const { source, setSource } = useContext(SourceContext);
  // const { destination, setDestination } = useContext(DestinationContext);

  return (
    <Container>
      <Row>
        <Col md={5} className='border'>
          <div>
            <h4>Get a ride</h4>
            <InputItem type='source' />
            <InputItem type='destination' />
          </div>
        </Col>
        <Col md={7} className='border'>
          Map
        </Col>
      </Row>
    </Container>
  );
}
