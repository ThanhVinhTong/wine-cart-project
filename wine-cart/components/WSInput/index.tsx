'use client';
import React, { forwardRef, useRef } from 'react';
import classNames from 'classnames/bind';
import style from './input.module.scss';
import { useImperativeHandle } from 'react';
import { FieldError } from 'react-hook-form';
const cx = classNames.bind(style);

interface InputProps {
  errors?: FieldError;
  isMultiline?: boolean;
  placeholder?: string;
  className?: string;
  type?: string;
  password?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const WSInput = forwardRef((props: InputProps, ref) => {
  const { placeholder, errors, isMultiline = false, className = '', type, handleChange, password, ...rest } = props;

  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);
  const onChange = (event: any) => {
    handleChange?.(event);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
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
          <input
            ref={inputRef}
            placeholder={placeholder ?? 'placeholder'}
            className={errors ? cx('input-errors', props.className) : cx('input')}
            type={props.type}
            onChange={onChange}
            {...rest}
          />
        )}
      </div>
      <p className={cx('message')}>{errors ? errors.message : null}</p>
    </div>
  );
});
