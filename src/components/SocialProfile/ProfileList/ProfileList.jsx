
import Profile from "components/SocialProfile/Profile/Profile";
import css from 'components/SocialProfile/Profile/Profile.module.css'


const ProfileList = ({ item }) => {
	return (
		<div className={css.wrapper}>
			<Profile
        		username={item.username}
        		tag={item.tag}
        		location={item.location}
        		avatar={item.avatar}
        		followers={item.stats.followers}
        		views={item.stats.views}
        		likes={item.stats.likes}
  />
</div>
	)
}

export default ProfileList;