import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { BiCategory } from 'react-icons/bi';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import styles from './ListCategory.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function ListCategory() {
  return (
    <div className={cx('category')}>
      <div className={cx('main')}>
        <div className={cx('header')}>
          <h6>
            <BiCategory />
            Categories
          </h6>
        </div>
        <div className={cx('body')}>
          <ul>
            <li className={cx('category-bottles')}>
              <Link href="/" className={cx('hover-name')}>
                Bottles
                <FontAwesomeIcon icon={faChevronRight as IconProp} />
              </Link>
              <ul className={cx('child-bottle')}>
                <li className={cx('child')}>
                  <div className={cx('banner')}>
                    <img src="../../../../images/glass/glass1.png" alt="" />
                    <div className={cx('description')}>
                      <h6>Bottles</h6>
                      <p>Experience automobile service like never before</p>
                    </div>
                  </div>
                  <ul className={cx('name-content')}>
                    <li>
                      <Link href="/">Auto Bottles & Crafted Wine</Link>
                    </li>
                    <li>
                      <Link href="/">Wine Service</Link>
                    </li>
                    <li>
                      <Link href="/">Bike Service</Link>
                    </li>
                    <li>
                      <Link href="/">Engine Service</Link>
                    </li>
                    <li>
                      <Link href="/">Led Lights</Link>
                    </li>
                    <li>
                      <Link href="/">Battery</Link>
                    </li>
                    <li>
                      <Link href="/">Alloy Red Wine</Link>
                    </li>
                    <li>
                      <Link href="/">Smart Lock</Link>
                    </li>
                    <li>
                      <Link href="/">Vintage</Link>
                    </li>
                  </ul>
                  <ul className={cx('name-content')}>
                    <li>
                      <Link href="/">Horns</Link>
                    </li>
                    <li>
                      <Link href="/">IndicatorsParts</Link>
                    </li>
                    <li>
                      <Link href="/">Break Shoe</Link>
                    </li>
                    <li>
                      <Link href="/">Clutch</Link>
                    </li>
                    <li>
                      <Link href="/">Tubes</Link>
                    </li>
                    <li>
                      <Link href="/">Gear Box</Link>
                    </li>
                    <li>
                      <Link href="/">Led Lamps</Link>
                    </li>
                    <li>
                      <Link href="/">Petrol Pipes</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/">Lights</Link>
            </li>
            <li className={cx('category-mixed')}>
              <Link href="/" className={cx('hover-name')}>
                Mixed Wine
                <FontAwesomeIcon icon={faChevronRight as IconProp} />
              </Link>
              <ul className={cx('child-mixed')}>
                <li className={cx('child')}>
                  <div className={cx('banner')}>
                    <img src="../../../../images/glass/glass1.png" alt="" />
                    <div className={cx('description')}>
                      <h6>Bottles</h6>
                      <p>Experience automobile service like never before</p>
                    </div>
                  </div>
                  <ul className={cx('name-content')}>
                    <li>
                      <Link href="/">Auto Bottles & Crafted Wine</Link>
                    </li>
                    <li>
                      <Link href="/">Wine Service</Link>
                    </li>
                    <li>
                      <Link href="/">Bike Service</Link>
                    </li>
                    <li>
                      <Link href="/">Engine Service</Link>
                    </li>
                    <li>
                      <Link href="/">Led Lights</Link>
                    </li>
                  </ul>
                  <ul className={cx('name-content')}>
                    <li>
                      <Link href="/">Battery</Link>
                    </li>
                    <li>
                      <Link href="/">Alloy Red Wine</Link>
                    </li>
                    <li>
                      <Link href="/">Smart Lock</Link>
                    </li>
                    <li>
                      <Link href="/">Vintage</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/">Wine Service</Link>
            </li>
            <li>
              <Link href="/">Engine Service</Link>
            </li>
            <li>
              <Link href="/">Red Wine</Link>
            </li>
            <li>
              <Link href="/">Modern Bike Service</Link>
            </li>
            <li className={cx('more-category')}>
              <Link href="/" className={cx('hover-name')}>
                <div className={cx('content-left')}>
                  <FontAwesomeIcon icon={faPlus as IconProp} />
                  <p className={cx('text')}>More Categories</p>
                </div>
                <div className={cx('content-right')}>
                  <FontAwesomeIcon icon={faChevronRight as IconProp} />
                </div>
              </Link>
              <ul className={cx('child-more')}>
                <li className={cx('child')}>
                  <div className={cx('banner')}>
                    <img src="../../../../images/glass/glass1.png" alt="" />
                    <div className={cx('description')}>
                      <h6>Bottles</h6>
                      <p>Experience automobile service like never before</p>
                    </div>
                  </div>
                  <ul className={cx('name-content')}>
                    <li>
                      <Link href="/">Auto Bottles & Crafted Wine</Link>
                    </li>
                    <li>
                      <Link href="/">Wine Service</Link>
                    </li>
                    <li>
                      <Link href="/"> Bike Service</Link>
                    </li>
                    <li>
                      <Link href="/">Engine Service</Link>
                    </li>
                    <li>
                      <Link href="/">Led Lights</Link>
                    </li>
                  </ul>
                  <ul className={cx('name-content')}>
                    <li>
                      <Link href="/">Battery</Link>
                    </li>
                    <li>
                      <Link href="/">Alloy Red Wine</Link>
                    </li>
                    <li>
                      <Link href="/">Smart Lock</Link>
                    </li>
                    <li>
                      <Link href="/">Vintage</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ListCategory;
