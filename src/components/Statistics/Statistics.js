import PropTypes from 'prop-types';
import s from'./Statistics.module.css';

export default function Statistics({ title, children }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
};
