import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    
    return (
        <section className={styles.statistics}>
            
            {title && <h2 className={styles.title}>
                UPLOAD STATS
            </h2>}
            <ul className={styles.statlist}>
                {stats.map(({ id, label, percentage }) => (
                    <li className={styles.item} key={id}>
                        <span className={styles.label}>{label} </span>
                        <span className={styles.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
};


Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
  title: PropTypes.string,
};