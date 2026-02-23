'use client';

import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DataSlider from './DataSlide';
import Image from 'next/image';

const cx = classNames.bind(styles);
const SampleNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className={cx('control-btn')} onClick={onClick}>
      <button className={cx('next')}>
        <FontAwesomeIcon icon={faArrowRight as IconProp} />
      </button>
    </div>
  );
};
const SamplePrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className={cx('control-btn')} onClick={onClick}>
      <button className={cx('prev')}>
        <FontAwesomeIcon icon={faArrowLeft as IconProp} />
      </button>
    </div>
  );
};
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export function SliderBanner() {
  return (
    <div className={cx('home-slide')}>
      <div className={cx('container')}>
        <Slider {...settings} className={cx('slick-slider')}>
          {DataSlider.map((value, index) => {
            return (
              <div className={cx('box-slider')} key={index}>
                <Image src={value.image} alt="Banner wine slide" width={1200} height={520} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
