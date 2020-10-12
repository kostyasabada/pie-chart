import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './AddForm.scss';

const AddForm = ({
  item,
  items,
  setItems,
  setFreePosition,
  setLastPosition,
}) => {
  const { title: propTitle, amount: propAmount } = item;
  const [title, setTitle] = useState(propTitle);
  const [amount, setAmount] = useState(propAmount);

  useEffect(() => {
    if (title && amount) {
      setItems((prevItems) => prevItems.map((any) => {
        if (any.id === item.id) {
          return {
            ...any,
            title,
            amount,
          };
        }
        return any;
      }));
    }
  }, [title, amount, setItems, item.id]);

  const deleteItem = useCallback(() => {
    if (items.length > 1) {
      setItems((prevItems) => prevItems.filter((any) => any.id !== item.id));
    } else {
      setLastPosition(true);
      setTimeout(() => {
        setLastPosition(false);
      }, 1500);
    }
  }, [item.id, items.length, setItems, setLastPosition]);

  return (
    <li>
      <label htmlFor={`${item.id}Position`}>Position:</label>
      <input
        className="addform__input"
        type="text"
        id={`${item.id}Position`}
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
          setFreePosition(false);
        }}
      />
      <label htmlFor={`${item.id}Amount`}>Amount:</label>
      <input
        className="addform__input"
        type="text"
        id={`${item.id}Amount`}
        value={amount}
        onChange={(event) => {
          setAmount(event.target.value.replace(/[^\d.]/g, ''));
          setFreePosition(false);
        }}
      />
      <button
        className="addform__delete-button"
        type="button"
        onClick={deleteItem}
      >
        X
      </button>
    </li>
  );
};

AddForm.propTypes = {
  item: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired,
  setFreePosition: PropTypes.func.isRequired,
  setLastPosition: PropTypes.func.isRequired,
};

export default AddForm;
