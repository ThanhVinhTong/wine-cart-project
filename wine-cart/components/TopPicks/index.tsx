'use client'
import Slider from 'react-slick';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './TopPicks.module.scss';
import classNames from 'classnames/bind';

import DataTopPicks from './DataTopPick';
import Link from 'next/link';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const cx = classNames.bind(styles);

const SampleNextArrow = (props: any) => {
  const { onClick } = props;
  if (props.currentSlide === props.slideCount - 2) {
    return (
      <div className={cx('control-btn-hidden')} onClick={onClick}>
        <button className={cx('next-hidden')}>
          <FontAwesomeIcon icon={faArrowRight as IconProp} className={cx('hidden-next')} />
        </button>
      </div>
    );
  }
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
  if (props.currentSlide === 0) {
    return (
      <div className={cx('control-btn-hidden')} onClick={onClick}>
        <button className={cx('prev-hidden')}>
          <FontAwesomeIcon icon={faArrowLeft as IconProp} className={cx('hidden-prev')} />
        </button>
      </div>
    );
  }
  return (
    <div className={cx('control-btn')} onClick={onClick}>
      <button className={cx('prev')}>
        <FontAwesomeIcon icon={faArrowLeft as IconProp} />
      </button>
    </div>
  );
};

const settings = {
  infinite: false,
  autoplay: false,
  slidesToShow: 2,
  rows: 2,
  slidesPerRow: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
export function TopPick() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('title')}>
          <h4>Top Pick</h4>
        </div>
        <Slider className={cx('slick-slider')} {...settings}>
          {DataTopPicks.map((value, index) => (
            <div className={cx('content')} key={index}>
              <div className={cx('product-img')}>
                <img src={value.image} alt="" />
              </div>
              <div className={cx('product-body')}>
                <div className={cx('top-shopping')}>
                  <img src={value.babel} alt="" />
                  <div className={cx('border')}>{value.icon}</div>
                </div>
                <h5 className={cx('product-title')}>
                  <Link href="/products">{value.link}</Link>
                </h5>
                <div className={cx('product-price')}>
                  <span>{value.price}</span>
                </div>
                <p className={cx('description')}>{value.description}</p>
              </div>
            </div>
          ))}
        </Slider>
        {/* <div className={cx('carousel-main')}>
          <Carousel cols={2} rows={2} gap={10} arrowLeft={SamplePrevArrow} arrowRight={SampleNextArrow}>
            {DataTopPicks.map((value, index) => (
              <Carousel.Item key={index} className={cx('arrow')}>
                <div className={cx('content')}>
                  <div className={cx('product-img')}>
                    <img src={value.image} alt="" />
                  </div>
                  <div className={cx('product-body')}>
                    <div className={cx('top-shopping')}>
                      <img src={value.babel} alt="" />
                      <div className={cx('border')}>{value.icon}</div>
                    </div>
                    <h5 className={cx('product-title')}>
                      <Link>{value.link}</Link>
                    </h5>
                    <div className={cx('product-price')}>
                      <span>{value.price}</span>
                    </div>
                    <p className={cx('description')}>{value.description}</p>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div> */}
      </div>
    </div>
  );
}


