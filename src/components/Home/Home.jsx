import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import AddForm from '../AddForm/AddForm';
import './Home.scss';

const Home = ({ items, setItems, randomColor }) => {
  const [freePosition, setFreePosition] = useState(false);
  const [lastPosition, setLastPosition] = useState(false);

  const addPosition = useCallback(() => {
    if (items.every((any) => any.title && any.amount)) {
      setItems((previtems) => [
        ...previtems,
        {
          title: '',
          amount: '',
          id: randomColor(),
        },
      ]);
    } else {
      setFreePosition(true);
    }
  }, [items, randomColor, setItems]);

  return (
    <>
      <ul>
        {items.map((item) => (
          <AddForm
            key={item.id}
            item={item}
            items={items}
            setItems={setItems}
            setFreePosition={setFreePosition}
            setLastPosition={setLastPosition}
          />
        ))}
      </ul>
      {lastPosition && (
      <p className="error">You can not delete last position</p>
      )}

      <button
        className="add-position"
        type="button"
        onClick={addPosition}
      >
        Add position
      </button>
      {freePosition && (
        <p className="error">You have free position</p>
      )}
    </>
  );
};

Home.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  setItems: PropTypes.func.isRequired,
  randomColor: PropTypes.func.isRequired,
};

export default Home;
