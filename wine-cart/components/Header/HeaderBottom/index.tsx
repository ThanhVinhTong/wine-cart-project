'use client';
import Link from 'next/link';

import styles from './HeaderBottom.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

interface HeaderBottomProps {}

export function HeaderBottom(props: HeaderBottomProps) {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const stickyHeader = useRef<HTMLDivElement>(null);

  // handle scroll event
  const handleScroll = (elTopOffset?: number, elHeight?: number) => {
    if (window.pageYOffset > (elTopOffset ?? 0) + (elHeight ?? 0)) {
      setSticky({ isSticky: true, offset: elHeight ?? 0 });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = stickyHeader.current?.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header?.top, header?.height);
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <div
      ref={stickyHeader}
      className={
        sticky.isSticky ? cx('wrapper', 'sticky') : cx('wrapper-header')
      }
    >
      <div className={cx('container')}>
        <ul className={cx('navbar-nav')}>
          <li>
            <Link href="/">Home Page</Link>
          </li>
          {/* <li>
            <Link href="/">Why Choose Us</Link>
          </li> */}
          <li>
            <Link href="/products">Products</Link>
          </li>
          {/* <li>
            <Link href="/">Contact Us</Link>
          </li> */}
          {/* <li>
            <Link href="/blog">Blog</Link>
          </li> */}
        </ul>
        {/* <div className={cx('menu')}>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
      </div>
    </div>
  );
}
