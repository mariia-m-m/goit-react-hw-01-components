import style from "./statistics.module.css";
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  
  const elements = stats.map(stat =>
    
    <li key={stat.id} className={style.item}>
    <span className={style.label}>{stat.label}</span>
    <span className={style.percentage}>{stat.percentage}</span>
    </li>)

  return(
  <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.statList}>
      {elements}
       </ul>
      </section>
  )
}

Statistics.propTypes = {
 stats: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        label:PropTypes.string.isRequired,
 })),
  title:PropTypes.string.isRequired,
};

export default Statistics;