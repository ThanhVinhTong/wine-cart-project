import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';
import { isEmpty } from 'lodash';
import { useRouter } from 'next/navigation';
const cx = classNames.bind(styles);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: unknown;
  href?: string;
  buttonType?: 'brown' | 'add' | 'view' | 'round' | 'read' | 'post' | 'sign-up' | undefined;
  handleClick?: () => void;
}

export function WSButton(props: ButtonProps) {
  const router = useRouter();
  const { to, href, children, handleClick, buttonType, ...rest } = props;
  const onClick = () => {
    if (!isEmpty(href)) {
      router.push(href ?? '/');
      return;
    }
    handleClick?.();
  };

  return (
    <button className={cx('wrapper', buttonType, props.className)} onClick={onClick}>
      {children}
    </button>
  );
}
