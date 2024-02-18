// Import necessary dependencies from 'next/link'
// import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer bg-dark'>


      <div className='py-4 border-top border-light'>
        <div className='container custom-container flex-lg-row'>
          <div className='copyright-paragraph order-lg-1'>
            &copy;<span>{currentYear}</span> Ride Share. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
