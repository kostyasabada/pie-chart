import React from 'react';
import PropTypes from 'prop-types';
import './Svg.scss';

export const Svg = ({
  item, amountSum, angle,
}) => {
  const itemPercent = (item.amount / amountSum) * 158;

  return (
    <>
      <svg

        width="100"
        height="100"
        className="svg_pies"
        style={{ transform: `rotate(${-angle}deg)` }}
      >
        <circle
          r="25"
          cx="50"
          cy="50"
          className="circle_pies"
          strokeDasharray={`${itemPercent} 158`}
          stroke={`#${item.id}`}
        />
      </svg>
    </>
  );
};

Svg.propTypes = {
  angle: PropTypes.number.isRequired,
  amountSum: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
};
