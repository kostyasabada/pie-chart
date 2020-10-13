import React from 'react';
import PropTypes from 'prop-types';
import './Chart2.scss';
import { Svg } from '../Svg/Svg';

const Chart2 = ({ items }) => {
  const filteredItems = items.filter((item) => item.title && item.amount);
  let angle = 90;
  const amountSum = filteredItems.reduce((sum, current) => sum + +current.amount, 0);
  return (
    <>
      {filteredItems.length > 0 ? (
        <section className="container">
          {filteredItems.map((item) => {
            angle = (angle + (item.amount / amountSum) * 360) % 360;
            return (
              <Svg
                key={item.id}
                item={item}
                amountSum={amountSum}
                angle={angle}
              />
            );
          })}
        </section>

      ) : (
        <h2 className="no-data">No data</h2>
      )}
    </>
  );
};

Chart2.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Chart2;
