import PropTypes from 'prop-types';
import FriendListItem from "components/Friends/FriendListItem";
import css from 'components/Friends/Friends.module.css'

const FriendList = ({friends}) => {
	return <ul className={css.friendList}>
		{friends.map(({id, avatar, isOnline,name}) => 
			<FriendListItem
					key={id}
					avatar={avatar}
					status={isOnline} 
					name={name}
				/>
		)}
			</ul>
}

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
		})
	)
}

export default FriendList;