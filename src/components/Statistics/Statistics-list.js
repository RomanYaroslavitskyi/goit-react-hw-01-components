import PropTypes from 'prop-types';
import { getRandomHexColor } from './random-color';
import s from './Statistics.module.css';
import '../Utils.css'

export default function StatisticsList({ items }) {
  return (
    <ul className={s.statList}>
      {items.map(({ id, label, percentage }) => {
        return (
          <li
            className={s.item}
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
}

StatisticsList.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
}

