'use client';
import React, { useState } from 'react';

import classNames from 'classnames/bind';
import style from './CheckBox.module.scss';

const cx = classNames.bind(style);
interface CheckBoxProps {
  isChecked?: boolean;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
  type?: string;
  score?: any;
}

export const WSCheckbox = (props: CheckBoxProps) => {
  return (
    <div className={props.className}>
      <label className={cx('checkbox-container')}>
        <input
          className={cx('inner')}
          type={props.type}
          onChange={props.handleChange}
          defaultChecked={props.isChecked}
        />
        <span className={cx('label')}>{props.label}</span>
      </label>
    </div>
  );
};
