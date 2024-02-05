import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className='d-flex justify-content-center'>
      <Image
        src='/image/comingsoon.png' // Update the path to use forward slashes
        width={500}
        height={500}
        alt='Coming Soon'
      />
    </div>
  );
}
