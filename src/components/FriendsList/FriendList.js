import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import '../Utils.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ avatar, id, name, isOnline }) => {
        const classColor = isOnline ? s.status__green : s.status__red;
        return (
          <li className={s.item} key={id}>
            <span className={`${classColor}`}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
