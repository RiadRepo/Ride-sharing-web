import { Col, Container, Row } from "react-bootstrap";

import { useState } from "react";

export default function CarBook() {
  const [value, setValue] = useState(null);
  return (
    <div>
      <Container>
        <Row>
          <Col md={5} className='border'>
            <div>
              <h6>Get a ride</h6>
              {/* <GooglePlacesAutocomplete
                apiKey=''
                selectProps={{
                  value,
                  onChange: setValue,
                }}
              /> */}
            </div>
          </Col>
          <Col md={7} className='border'>
            Map
          </Col>
        </Row>
      </Container>
    </div>
  );
}
