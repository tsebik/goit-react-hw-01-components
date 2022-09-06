import Profile from "../Profile/Profile"


const ProfileList = ({ item }) => {
	return (
		<ul>
		<li>
			<Profile
        		username={item.username}
        		tag={item.tag}
        		location={item.location}
        		avatar={item.avatar}
        		followers={item.stats.followers}
        		views={item.stats.views}
        		likes={item.stats.likes}
  />
		</li>
	</ul>
	)
}

export default ProfileList;