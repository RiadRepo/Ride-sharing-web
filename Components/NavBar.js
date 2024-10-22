import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar({ register }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  useEffect(() => {
    const checkLoggedIn = () => {
      const token = sessionStorage.getItem("Token");
      setIsLoggedIn(!!token);
    };

    checkLoggedIn();
  }, []);

  const logout = () => {
    // Remove items from sessionStorage and localStorage
    sessionStorage.removeItem("Token");
    localStorage.removeItem("userEmail"); // Assuming user email is stored in localStorage as 'userEmail'

    router.push("/login");
  };

  return (
    <Navbar
      bg='dark'
      variant='dark'
      expand='lg'
      className='bg-black border-bottom'
    >
      <Container>
        <Navbar.Brand href='/' className='d-flex align-items-center'>
          <p className=' text-center py-2 fw-bolder text-2xl'>{"Ride Share"}</p>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto'>
            <Nav.Link href='/select-vehicle' className='text-white'>
              Ride
            </Nav.Link>
            <Nav.Link href='/drive' className='text-white'>
              Drive
            </Nav.Link>
            <Nav.Link href='/help' className='text-white hover:underline'>
              Help
            </Nav.Link>
          </Nav>

          <Nav className='ml-auto'>
            {isLoggedIn ? (
              <>
                <Nav.Link
                  href='/user-profile'
                  className='text-white border rounded-5'
                >
                  User Profile
                </Nav.Link>

                <button
                  onClick={logout}
                  type='button'
                  className='btn btn-outline-light rounded-pill mr-2'
                >
                  Log Out
                </button>
              </>
            ) : (
              <Nav.Link href='/login' className='text-white border rounded-5'>
                Log In
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
