import style from"./profile.module.css"
import PropTypes from 'prop-types';

const Profile = ({ user }) => {
  return (
    <div className= {style.profile}>
      <div className={style.description}>
        <img
          src={user.avatar}
          alt="User avatar"
          className={style.avatar}
        />
        <p className={style.name}>{user.username}</p>
        <p className={style.tag}>@{user.tag}</p>
        <p className={style.location}>{user.location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.item}>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{user.stats.followers}</span>
        </li>
        <li className={style.item}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{user.stats.views}</span>
        </li>
        <li className={style.item}>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>)
};

Profile.propTypes = {
  user: PropTypes.object,
  
    }

export default Profile;