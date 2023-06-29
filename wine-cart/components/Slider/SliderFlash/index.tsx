'use client';
import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './SliderFlash.module.scss';

import DataFlash from './DataFlash';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { WSButton } from '@/components';

const cx = classNames.bind(styles);

const settings = {
  dots: true,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  appendDots: (dots: any) => {
    return <ul>{dots}</ul>;
  },
};

export function SliderFlash() {
	return (
		<div className={cx('wrapper')}>
		<div className={cx('container')}>
			<div className={cx('row')}>
			<div className={cx('row-width')}>
				<div className={cx('flash-sale-top')}>
				<div className={cx('row')}>
					<div className={cx('content')}>
					<h3>Flash Sale</h3>
					<p>
						Quickly get these wines before the sales end!
					</p>
					<ul className={cx('timer')}>
						<li>00</li>
						<li>00</li>
						<li>00</li>
						<li>00</li>
					</ul>
					</div>
				</div>
				</div>
				<div className={cx('flash-sale-bottom')}>
				<div className={cx('row')}>
					<div className={cx('left')}>
					<div className={cx('content-left')}>
						<img
							src="../../../../../images/bottleWines/wine-bottle.png"
							alt=""
						/>
						<h5>Guaranteed Rose Wine</h5>
						<p>
							Rose wine, also known as rosé, is a type of wine that is typically made from red grape varieties. 
							It gets its characteristic pink color from limited contact with the grape skins during the winemaking process. 
							Rose wines can vary in style, ranging from dry to sweet, and they often have refreshing and fruity flavors.
						</p>
					</div>
					</div>
					<div className={cx('right')}>
					<div className={cx('home-slide')}>
						<div className={cx('container')}>
						<Slider {...settings} className={cx('slick-slider')}>
							{DataFlash.map((value, index) => {
								return (
									<div className={cx('box-slider')} key={index}>
									<div className={cx('product')}>
										<div className={cx('product-discount')}>
										<span>{value.discount}</span>
										</div>
										<div className={cx('product-image')}>
										<Link href="/products">
											<img src={value.image} alt="" />
										</Link>
										</div>
										<div className={cx('product-content')}>
										<h5 className={cx('title')}>{value.title}</h5>
										<p>{value.description}</p>
										</div>
										<div className={cx('product-footer')}>
										<div className={cx('product-price')}>
											<span>{value.priceNew}</span>
											<span>{value.priceOld}</span>
										</div>
										<WSButton href="/products" buttonType="round">
											Buy Now
										</WSButton>
										</div>
									</div>
									</div>
								);
							})}
						</Slider>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
			</div>
		</div>
		</div>
	);
}
