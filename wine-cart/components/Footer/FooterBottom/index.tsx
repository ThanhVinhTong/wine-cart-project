'use client';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faSquareTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import styles from './FooterBottom.module.scss';
import classNames from 'classnames/bind';
// import { Button } from '@/components';
const cx = classNames.bind(styles);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export function FooterBottom() {
  return (
    <footer className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('container-top')}>
          <div className={cx('logo')}>
            <img src="../../../../../images/Logo2.png" alt="" />
          </div>
          <div className={cx('get-app')}>
            <Link href="/">
              <img src="../../../../../images/app/android.png" alt="" />
            </Link>
            <Link href="/">
              <img src="../../../../../images/app/ios.png" alt="" />
            </Link>
          </div>
        </div>
        <div className={cx('container-middle')}>
          <div className={cx('row')}>
            <div className={cx('information')}>
              <h5>Information</h5>
              <ul>
                <Link href="/" className={cx('link')}>
                  <FontAwesomeIcon icon={faChevronRight as IconProp} />
                  Home Page
                </Link>
                <Link href="/" className={cx('link')}>
                  <FontAwesomeIcon icon={faChevronRight as IconProp} />
                  Why Choose Us
                </Link>
                <Link href="/" className={cx('link')}>
                  <FontAwesomeIcon icon={faChevronRight as IconProp} />
                  Product
                </Link>
                <Link href="/" className={cx('link')}>
                  <FontAwesomeIcon icon={faChevronRight as IconProp} />
                  Contact Us
                </Link>
                <Link href="/" className={cx('link')}>
                  <FontAwesomeIcon icon={faChevronRight as IconProp} />
                  Blog
                </Link>
              </ul>
            </div>
            <div className={cx('policy')}>
              <h5>Policy</h5>
              <ul>
                <Link href="/" className={cx('link')}>
                  <FontAwesomeIcon icon={faChevronRight as IconProp} />
                  Privacy Policy
                </Link>
                <Link href="/" className={cx('link')}>
                  <FontAwesomeIcon icon={faChevronRight as IconProp} />
                  Refund Policy
                </Link>
                <Link href="/" className={cx('link')}>
                  <FontAwesomeIcon icon={faChevronRight as IconProp} />
                  Cookie Policy
                </Link>
                <Link href="/" className={cx('link')}>
                  <FontAwesomeIcon icon={faChevronRight as IconProp} />
                  Terms & Conditions
                </Link>
              </ul>
            </div>
            <div className={cx('contact-support')}>
              <h5>Contact Support</h5>
              <ul>
                <li>
                  <p>Call Buy:</p>
                  <span>1800.1060</span>
                </li>
                <li>
                  <p>Complain:</p>
                  <span>1800.1062</span>
                </li>
                <li>
                  <p>Guarantee:</p>
                  <span>1800.1064</span>
                </li>
              </ul>
            </div>
            <div className={cx('social-media')}>
              <h5>Social-Media</h5>
              <ul className="flex items-center">
                <Link href="/">
                  <FontAwesomeIcon icon={faSquareFacebook as IconProp} beatFade className={cx('facebook')} />
                </Link>
                <Link href="/">
                  <FontAwesomeIcon icon={faSquareTwitter as IconProp} beatFade className={cx('twitter')} />
                </Link>
                <Link href="/">
                  <FontAwesomeIcon icon={faInstagram as IconProp} beatFade className={cx('instagram')} />
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className={cx('copy-right')}>
          <p>
            Copyright © 2023 &nbsp;
            <Link href="/" className={cx('your-website')}>
              YourWebsite
            </Link>
            &nbsp; All Rights Reserved.
          </p>
          {/* <Button handleClick={scrollToTop} className={cx('back-to-top')}>
            <span className="whitespace-nowrap">Back To Top</span>
            <FontAwesomeIcon icon={faChevronUp as IconProp} />
          </Button> */}
        </div>
      </div>
    </footer>
  );
}
