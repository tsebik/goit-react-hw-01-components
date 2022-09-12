import ProfileList from 'components/SocialProfile/ProfileList/ProfileList'
import Statistics from 'components/Statistics/Statistics'
import FriendList from 'components/Friends/FriendList'
import TransactionHistory from 'components/Transactions/TransactionHistory'
import user from 'path/user'
import data from 'path/data'
import friends from 'path/friends'
import transactions from 'path/transactions'

const App = () => {
  return (
    <div>
      <ProfileList item={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
   );
 };



export default App;
 