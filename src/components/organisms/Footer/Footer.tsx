import Link from 'next/link';
import SocialSection from './FooterComponents/SocialSection';
import { LINK_CLASS } from '@/constants/styles.constants';

export default function Footer() {
  return (
    <footer className=" flex flex-col justify-center items-center min-h-[50px] py-6 px-4">
      <h4 className="text-2xl mb-4">Gadgets..</h4>
      <div className="mb-2 w-2/3">
        Reach to our{' '}
        <Link href="mailto:gadgets@latest.com" className={LINK_CLASS}>
          Customer Support
        </Link>{' '}
        or call us at{' '}
        <Link href="tel:+911234567890" className={LINK_CLASS}>
          1234567890
        </Link>
      </div>
      <div className="my-2">
        <SocialSection />
      </div>
      <div className="text-xs my-2 border-b border-gray-400 pb-2">
        <Link href="/terms-condition" className="mx-2">
          Terms & Condition
        </Link>
        <Link href="/return-policy" className="mx-2">
          Return Policy
        </Link>
      </div>
      <div>© 2035 by Gadgets..</div>
    </footer>
  );
}
