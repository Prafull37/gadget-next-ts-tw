import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function SocialSection() {
  return (
    <div className="flex">
      <Link href={'https://instagram.com'} className="mx-2">
        <FaInstagram size={'1rem'} />
      </Link>
      <Link href="https//twitter.com" className="mx-2">
        <FaXTwitter size={'1rem'} />
      </Link>
      <Link href="https://facebook.com" className="mx-2">
        <FaFacebook size={'1rem'} />
      </Link>
      <Link href="https://youtube.com" className="mx-2">
        <FaYoutube size={'1rem'} />
      </Link>
    </div>
  );
}
