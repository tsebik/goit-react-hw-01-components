import PropTypes from 'prop-types';
import css from 'components/Friends/Friends.module.css'

const FriendListItem = ({ status, avatar, name }) => {

	return <li className={css.item}>
		<span
                className={css.status}
                style={{
                  backgroundColor: status ? '#3cb371' : '#ff0000',
                }}
              ></span>
  		<img className={css.avatar} src={avatar} alt="User avatar" width="48" />
		<p className={css.name}>{name}</p>
</li>
}

FriendListItem.propTypes = {
	status: PropTypes.bool.isRequired,
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
}

export default FriendListItem;