'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import DataNew from './DataNew';

import styles from './NewArrivals.module.scss';
import classNames from 'classnames/bind';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Slider from 'react-slick';
import Link from 'next/link';
import { WSButton } from '@/components';

const cx = classNames.bind(styles);

const SampleNextArrow = (props: any) => {
  const { onClick } = props;
  if (props.currentSlide === props.slideCount - 3) {
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
  slidesToShow: 3,
  rows: 1,
  slidesPerRow: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
export function NewArrivals() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('title')}>
          <h4>New Arrivals</h4>
        </div>
        <Slider className={cx('slick-slider')} {...settings}>
          {DataNew.map((value, index) => {
            if (value.babel) {
              return (
                <div className={cx('arrivals')} key={index}>
                  <div className={cx('arrivals-babel')}>
                    <FontAwesomeIcon icon={faStar as IconProp} className={cx('star')} />
                    <span>{value.babel}</span>
                  </div>
                  <div className={cx('arrivals-top')}>
                    <a href="/products">
                      <img src={value.image} alt="" width={250} />
                    </a>
                  </div>
                  <div className={cx('arrival-body')}>
                    <h5 className={cx('arrival-title')}>{value.title}</h5>
                    <div className={cx('price')}>
                      <span>{value.price}</span>
                    </div>
                    <p>{value.description}</p>
                  </div>
                  <div className={cx('arrivals-footer')}>
                    <div className={cx('btn')}>
                      <WSButton href="/products" buttonType="add">
                        Add To Cart
                      </WSButton>
                      <WSButton href="/products" buttonType="view">
                        Quick View
                      </WSButton>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className={cx('arrivals')} key={index}>
                  <div className={cx('arrivals-discount')}>
                    <span>{value.babelSale}</span>
                  </div>
                  <div className={cx('arrivals-top')}>
                    <Link href="/products" className={cx('img-arrival')}>
                      <img src={value.image} alt="" width={250} />
                    </Link>
                  </div>
                  <div className={cx('arrival-body')}>
                    <h5 className={cx('arrival-title')}>{value.title}</h5>
                    <div className={cx('price')}>
                      <span>{value.priceNew}</span>
                      <span>{value.priceOld}</span>
                    </div>
                    <p>{value.description}</p>
                  </div>
                  <div className={cx('arrivals-footer')}>
                    <div className={cx('btn')}>
                      <WSButton href="/products" buttonType="add">
                        Add To Cart
                      </WSButton>
                      <WSButton href="/products" buttonType="view">
                        Quick View
                      </WSButton>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </Slider>
      </div>
    </div>
  );
}
