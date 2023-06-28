import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export function HeaderTop() {
  return (
    <div className="flex justify-center bg-orange-brown h-11 ">
      <div className="w-default-width">
        <div className="flex items-center justify-between">
          <ul className="flex list-none h-11 items-center text-white">
            <li className="items-center p-space hover:text-eHover duration-300 transition-all ease-in-out">
              <Link href="/">
                <FontAwesomeIcon icon={faFacebookF as IconProp} className="h-5 w-5" />
              </Link>
            </li>
            <li className="items-center p-space hover:text-eHover duration-300 transition-all ease-in-out ">
              <Link href="/">
                <FontAwesomeIcon icon={faTwitter as IconProp} className="h-5 w-5" />
              </Link>
            </li>
            <li className="items-center p-space hover:text-eHover duration-300 transition-all ease-in-out ">
              <Link href="/">
                <FontAwesomeIcon icon={faInstagram as IconProp} className="h-5 w-5" />
              </Link>
            </li>
          </ul>
          <ul className="flex list-none h-11 items-center  text-white">
            <li className="hover:text-eHover pr-3 font-semibold duration-300 transition-all ease-in-out  ">
              <Link href="/signin">Sign In</Link>
            </li>
            <li className="hover:text-eHover items-center font-semibold duration-300 transition-all ease-in-out ">
              <Link href="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
