'use client';
import DataBlog from './DataBlog';
import Link from 'next/link';

import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
import { WSButton } from '@/components';
const cx = classNames.bind(styles);

export function Blog() {
  return (
    <div className={cx('col-blog')}>
      <div className={cx('title-blog')}>
        <h4>From Out Blog</h4>
      </div>
      <div className={cx('row-blog')}>
        <div className={cx('col-post')}>
          {DataBlog.map((value, index) => (
            <div className={cx('post')} key={index}>
              <div className={cx('post-top')}>
                <Link href="/">
                  <img src={value.image} alt="" />
                </Link>
              </div>
              <div className={cx('post-bottom')}>
                <div className={cx('post-description')}>
                  <h5>{value.title}</h5>
                  <span>
                    Posted On
                    <p>{value.posted}</p>
                  </span>
                  <p className={cx('description')}>{value.description}</p>
                </div>
                <WSButton href="/" buttonType="read">
                  Read More
                </WSButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
