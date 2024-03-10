import Link from "next/link";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";

export default function Footer({ menu }) {
  // const containerStyle = {
  //   backgroundImage: 'url("/image/Footer-Image.jpeg")',
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   position: "relative",
  // };
  // const overlayStyle = {
  //     position: 'absolute',
  //     bottom: 0,
  //     left: 0,
  //     width: '100%',
  //     height: '100%',
  //     backgroundColor: 'rgba(43, 43, 43, 0.94);', // Adjust the alpha value for the desired darkness
  // };

  return (
    <footer className='footer bg-black'>
      {/* <div style={overlayStyle}> */}
      <div >
        <Container className='pt-4 pb-3 pt-lg-5 pb-lg-4'>
          <Row className='row pt-2 pt-lg-0'>
            <Col xl={3} md={3} sm={6} className='mb-2 mb-sm-4 px-1 px-sm-1'>
              {/* Content for the first column */}
              <div className='custom-paragraph pb-sm-2 footer-h text-white fw-bolder'>
                Our Location
              </div>
              <div className='footer-p text-white'>
                3 No Ishwar Das Lane, laxmibazar ,Dhaka -1100
              </div>

              <Nav
                as='ul'
                className='nav-light flex-column custom-logo-spacing'
              >
                <Nav.Item as='li' className='mt-2'>
                  <Nav.Link
                    className='nav-link-custom px-0 footer-p text-white'
                    href='tel:+8801678317801'
                  >
                    {/* <i className='fi-device-mobile icon'></i> */}
                    Hotline:01600235196
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as='li' className='mb-2'>
                  <Nav.Link
                    href='mailto:info@rideshare.com.bd'
                    className='nav-link-custom px-0 footer-p text-white'
                  >
                    {/* <i className='fi-mail icon'></i> */}
                    info@rideshare.com.bd
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col
              lg={2}
              md={3}
              sm={6}
              xl={{ offset: 1 }}
              className='mb-2 mb-sm-4 mt-2'
            >
              {/* Content for the second column */}

              <div className='custom-paragraph footer-h text-white fw-bolder'>Useful links</div>
              <ul className='list-unstyled fs-sm '>
                <li>
                  <Link href='/' className='footer-p'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href='#' className='footer-p'>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href='/services' className='footer-p'>
                    Ride
                  </Link>
                </li>
                <li>
                  <Link href='/drive' className='footer-p'>
                    Drive
                  </Link>
                </li>

              </ul>
            </Col>

            <Col lg={3} md={3} sm={6} className='mb-2 mb-sm-4 mt-2 text-center'>
              {/* Content for the third column */}

              <div className='custom-paragraph footer-h text-white fw-bolder'>About</div>
              <ul className='list-unstyled fs-sm '>
                <li>
                  <Link href='#' className='footer-p'>
                    About us
                  </Link>
                </li>
                <li>
                  <Link href='#' className='footer-p'>
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href='/terms-of-use' className='footer-p'>
                    FAQ
                  </Link>
                </li>
              </ul>
            </Col>

            <Col lg={3} className='pb-2 mb-4 mt-1 d-flex align-items-end'>
              {/* Subscription form */}
              {/* <ul className='list-unstyled'>
                            <li className='text-light mb-2 fs-5 fw-bold list-unstyled'>
                                Subscribe to our newsletter
                            </li>
                            <li className='fs-sm text-light mb-3 opacity-70 list-unstyled'>
                                Don&apos;t miss any relevant update!
                            </li>
                        </ul> */}
              <Nav.Item as='li' className='text-wrapper-footer list-unstyled '>
                <div className='footer-p text-white'>
                  Follow Us :{" "}
                  <img src='/image/Follow.svg' title='Twitter' alt='Twitter' />
                </div>

                {/* <a
                                href='https://www.facebook.com/konnectingdotscom'
                                target='_blank' // This opens the link in a new tab
                                className='social-media-link ps-0'
                            >
                                <img
                                    src='/images/social/social4.svg'
                                    title='Facebook'
                                    alt='Facebook'
                                />
                            </a>
                            <a
                                href='https://twitter.com/konnecting1217'
                                target='_blank'
                                className='social-media-link '
                            >
                                <img
                                    src='/images/social/social6.svg'
                                    title='Twitter'
                                    alt='Twitter'
                                />
                            </a>
                            <a
                                href='https://linkedin.com/company/konnectingdots'
                                target='_blank'
                                className='social-media-link '
                            >
                                <img
                                    src='/images/social/social1.svg'
                                    title='LinkedIn'
                                    alt='LinkedIn'
                                />
                            </a> */}
              </Nav.Item>
            </Col>
          </Row>
        </Container>
      </div>
      {/* </div> */}

      <div className='py-4 border-top border-light bg-green'>
        <div className='container custom-container flex-lg-row'>
          <div className='copyright-paragraph order-lg-1'>
            {/* &copy; */}© Ride Share. All rights reserved Design & Development
            by Ride Share.
          </div>
        </div>
      </div>
    </footer>
  );
}