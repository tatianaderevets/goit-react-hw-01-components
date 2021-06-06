import React from "react";
import PropTypes from 'prop-types';
import styles from "./Statistics.module.css";


const Statistics = ({stats,title}) => {
    return (
        <section className="statistics">
{title && <h2 className="title">{title}</h2>}
            <ul className={styles.StatisticsList}>
                {stats.map(({ id, label, percentage }) => (
                    <li className={styles.StatisticsItem} key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
                </li>
                ))}
  </ul>
        </section>
    )
}

Statistics.defaultProps = {
    title: ''
};


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage : PropTypes.number.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired
    ).isRequired,
};


export default Statistics;