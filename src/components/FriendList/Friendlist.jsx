import "./friendlist.css"


const Friendlist = ({friends, avatar, name, isOnline="true" }) => {
    
    return (
    <li className="item-friend">
    <span className="online"></span>
    <img className="avatar-friend" src='' alt="User avatar" width="48" />
    <p className="name-friend">Name</p>
    </li>
    )
}

export default Friendlist;
// const fullClassName = { isOnline } ? "isOnline" : "notOnline";
//    return {friends}.map(item =>
//     {<li className="item">
//     <span className={fullClassName}></span>
//     <img className="avatar" src={avatar} alt="User avatar" width="48" />
//     <p className="name">{name}</p>
//     </li>
//     }