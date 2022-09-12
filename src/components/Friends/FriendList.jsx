import PropTypes from 'prop-types';
import FriendListItem from "components/Friends/FriendListItem";

const FriendList = ({friends}) => {
	return <ul className="friend-list">
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