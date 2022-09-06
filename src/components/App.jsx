import ProfileList from './ProfileList/ProfileList'
import user from '../user';

const App = () => {
  return (
    <div>
      <ProfileList item={user}/>
    </div>
  );
};

export default App;
