import { BannerCategory } from '../BannerCategory';
import ListCategory from '../ListCategory';
import styles from './Category.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export function Category() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('row')}>
          <ListCategory />
          <BannerCategory />
        </div>
      </div>
    </div>
  );
}
