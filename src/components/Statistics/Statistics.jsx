import "./statistics.css";
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  
  const elements = stats.map(stat =>
    
    <li key={stat.id} className="item-stat">
    <span className="label-stat">{stat.label}</span>
    <span className="percentage">{stat.percentage}</span>
    </li>)

  return(
  <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
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