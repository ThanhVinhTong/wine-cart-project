'use client';
import classNames from 'classnames/bind';
import style from './SignIn.module.scss';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { WSButton, WSInput, validationReview } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const cx = classNames.bind(style);

export function SignIn() {
  const schema = validationReview;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (values: any) => {
    console.log('value', values);
    reset();
  };
  return (
    <div className={cx('section')}>
      <div className={cx('container')}>
        <div className={cx('wrapper')}>
          <div className={cx('img')}>
            <div className={cx('inner')}>
              <FontAwesomeIcon icon={faWineGlass as IconProp} className={cx('icon')} />
              <h2 className="text-white text-[48px]">Hello World</h2>
              <p className="mt-[30px] mb-[30px] text-white">Welcome to the world of wine </p>
            </div>
          </div>
          <div className={cx('auth-form')}>
            <h2 className={cx('title')}>Sign In</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className={cx('form-input')}>
                <WSInput placeholder="Email" {...register('email')} errors={errors.email} />
                <WSInput type="password" placeholder="password" {...register('password')} errors={errors.password} />
                <WSButton buttonType="brown">Sign Up</WSButton>
                <p className={cx('have-account')}>
                  Don't have an account? {''}
                  <WSButton href="/signup" className={cx('sign-in')}>
                    Sign Upppppppp
                  </WSButton>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
