'use client';
import React, { forwardRef, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import style from './input.module.scss';
import { useImperativeHandle } from 'react';
import { FieldError } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const cx = classNames.bind(style);

interface InputProps {
  errors?: FieldError;
  isMultiline?: boolean;
  placeholder?: string;
  className?: string;
  type?: string;
  password?: boolean;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const WSInput = forwardRef((props: InputProps, ref) => {
  const {
    placeholder,
    errors,
    isMultiline = false,
    className = '',
    type,
    handleChange,
    password = false,
    ...rest
  } = props;

  const [isRevealPwd, setIsRevealPwd] = useState(true);

  const inputRef = useRef(null);

  useImperativeHandle(ref, () => inputRef.current);
  const onChange = (event: any) => {
    handleChange?.(event);
  };
  // style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
  return (
    <div className="relative w-full">
      <div>
        {isMultiline ? (
          <textarea
            ref={inputRef}
            placeholder={placeholder ?? 'placeholder'}
            className={errors ? cx('input-errors', props.className) : cx('textarea')}
            style={{
              resize: 'none',
              minHeight: '200px',
              outline: 'none',
            }}
            onChange={onChange}
            {...rest}
          />
        ) : (
          <>
            <input
              ref={inputRef}
              placeholder={placeholder ?? 'placeholder'}
              className={errors ? cx('input-errors', props.className) : cx('input')}
              type={password && isRevealPwd ? 'password' : 'text'}
              onChange={onChange}
              {...rest}
            />
            {password && (
              <div className="flex items-center absolute top-[15px] right-[12px]">
                {!isRevealPwd ? (
                  <FontAwesomeIcon
                    className="text-xl"
                    icon={faEye as IconProp}
                    title="Show password"
                    onClick={() => setIsRevealPwd((prevState) => !prevState)}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="text-xl"
                    icon={faEyeSlash as IconProp}
                    title="Hide password"
                    onClick={() => setIsRevealPwd((prevState) => !prevState)}
                  />
                )}
              </div>
            )}
          </>
        )}
      </div>
      <p className={cx('message')}>{errors ? errors.message : null}</p>
    </div>
  );
});
