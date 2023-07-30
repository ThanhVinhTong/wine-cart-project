import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './HeaderMiddle.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
export function HeaderMiddle2() {
  return (
    <div className={cx('header-middle')}>
      <div className={cx('container')}>
        <nav className={cx('navbar')}>
          <Link href="/">
            <img src="../../../../images/bidouno.png" alt="" />
          </Link>
          {/* <div className={cx('input-search')}>
            <div className={cx('cates')}>
              <span>All Categories</span>
              <div className={cx('submenu')}>
                <div className={cx('drop-scroll')}>
                  <label>Bottles</label>
                  <label>Engine Service</label>
                  <label>Lights</label>
                  <label>Vintage</label>
                  <label>Red Wine</label>
                  <label>Auto Bike Service</label>
                  <label>Electrical Works</label>
                </div>
              </div>
            </div>
            <div className={cx('input')}>
              <input className={cx('form-input')} type="text" placeholder="Look for Crafted Wine, Auto Bottles" />
              <button className={cx('search')} type="submit">
                <FontAwesomeIcon icon={faSearch as IconProp} />
              </button>
            </div>
          </div> */}
          <div className={cx('controls')}>
            <Link href="/cart" className={cx('your-cart')}>
              <FontAwesomeIcon icon={faShoppingCart as IconProp} />
              <div className={cx('content-cart')}>
                <span>0 items</span>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
