'use client';
import classNames from 'classnames/bind';
import style from './CartsLeft.module.scss';
// import { WSCheckbox, Button, ListCarts } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { DataCarts } from '../DataCarts';
import { useState } from 'react';
import { WSCheckbox } from '@/components/WSCheckBox';
import { WSButton } from '@/components/WSButton';
import { ListCarts } from '../ListCarts';

const cx = classNames.bind(style);

export function CartsLeft() {
  const [checkedState, setCheckedState] = useState(new Array(DataCarts.length).fill(false));
  console.log(checkedState);

  const [total, setTotal] = useState(0);
  const updateTotal = (checkboxValues: any) => {
    const totalPrice = checkboxValues.reduce((sum: any, currentState: any, index: any) => {
      if (currentState === true) {
        return sum + DataCarts[index].price;
      }
      return sum;
    }, 0);

    setTotal(totalPrice);
  };
  const handleOnChange = (position: any) => {
    const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));

    setCheckedState(updatedCheckedState);
    //update total
    updateTotal(updatedCheckedState);
  };
  const handleSelectAll = (event: any) => {
    //filled all checkboxes' states with `Check All` value
    const updatedCheckedState = new Array(DataCarts.length).fill(event.target.checked);

    setCheckedState(updatedCheckedState);
    //update total
    updateTotal(updatedCheckedState);
  };
  return (
    <div className={cx('left')}>
      <div className={cx('list-header')}>
        <div className={cx('list-header-container')}>
          <div className={cx('list-header-main')}>
            <WSCheckbox
              type="checkbox"
              label="Select All"
              handleChange={handleSelectAll}
              isChecked={checkedState.every((value) => value === true)}
            />
            <WSButton className="flex flex-row justify-end items-center">
              <FontAwesomeIcon icon={faTrashCan as IconProp} className="items-center text-[20px] pr-2" />
              Delete
            </WSButton>
          </div>
        </div>
      </div>
      <ListCarts />
    </div>
  );
}
