import "./profile.css"
import PropTypes from 'prop-types';

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={user.avatar}
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{user.username}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>

      <ul className="stats">
        <li className="item">
          <span className="label">Followers</span>
          <span className="quantity">{user.stats.followers}</span>
        </li>
        <li className="item">
          <span className="label">Views</span>
          <span className="quantity">{user.stats.views}</span>
        </li>
        <li className="item">
          <span className="label">Likes</span>
          <span className="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </div>)
};

Profile.propTypes = {
  user: PropTypes.object,
  
    }

export default Profile;