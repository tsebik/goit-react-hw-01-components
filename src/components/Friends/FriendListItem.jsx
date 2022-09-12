import PropTypes from 'prop-types';

const FriendListItem = ({ status, avatar, name }) => {
	// const isOnline = true;

	return <li className="item">
		<span className="status">{status}</span>
  		<img className="avatar" src={avatar} alt="User avatar" width="48" />
		<p className="name">{name}</p>
</li>
}

FriendListItem.propTypes = {
	status: PropTypes.bool.isRequired,
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
}

export default FriendListItem;