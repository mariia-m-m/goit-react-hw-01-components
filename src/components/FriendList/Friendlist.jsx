import styles from "./friendlist.module.css"
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    
    const elements = friends.map(friend =>
        <li key={friend.id} className={styles.item}>
            <span className={friend.isOnline === true ? styles.online : styles.offline}></span>
            <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{friend.name}</p>
        </li>
    )
    return (<ul className={styles.friendList}>{elements}</ul>)
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
