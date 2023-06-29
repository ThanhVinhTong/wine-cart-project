'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './BannerCategory.module.scss';
import classNames from 'classnames/bind';

import dataBanner from './DataBannerCategory';
import Link from 'next/link';
import { WSButton } from '@/components';

const cx = classNames.bind(styles);

export function BannerCategory() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    appendDots: (dots: any) => {
      return <ul>{dots}</ul>;
    },
  };
  return (
    <div className={cx('banner')}>
      <div className={cx('menu-banner')}>
        <ul>
          <li>
            <Link href="/">Daily Deals</Link>
          </li>
          <li>
            <Link href="/">Top Seller</Link>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li>
            <Link href="/">New Arrivals</Link>
          </li>
          <li>
            <Link href="/">WishList</Link>
          </li>
        </ul>
      </div>
      <div className={cx('slider-banner')}>
        <Slider {...settings} className={cx('slick-slider')}>
          {dataBanner.map((value, index) => {
            return (
              <div className={cx('container')} key={index}>
                <div className={cx('content')}>
                  <h1 className={cx('title')}>{value.title}</h1>
                  <span>up to {value.discount}</span>
                  <p className={cx('description')}>{value.description}</p>
                  <WSButton href="/products" buttonType="round">
                    Shop now
                  </WSButton>
                </div>
                <div className={cx('img-banner')}>
                  <img src={value.image} alt="" />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
