import "./friendlist.css"
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    
    const elements = friends.map(friend =>
        <li key={friend.id} className="item-friend">
            <span className={friend.isOnline === true ? "online" : "offline"}></span>
            <img className="avatar-friend" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name-friend">{friend.name}</p>
        </li>
    )
    return (<ul className="friend-list">{elements}</ul>)
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,

    }))
    
};


export default FriendList;
