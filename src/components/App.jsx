
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import Friendlist from "./FriendList/Friendlist";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

  
export const App = () => {
  return (
    <>
      <Profile />
      <Statistics />
      <ul className="friend-list"><Friendlist/> </ul>
      <TransactionHistory/>

      </>
  );
};
