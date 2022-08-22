import PropTypes from "prop-types";
import s from'./Profile.module.css';
import '../Utils.css';


export default function Profile(props) {
  const { src, location, tag, userName, followers, views, likes } = props;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={src} alt={userName} className={s.avatar} width="150" />
        <p className={s.name}>{userName}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>Followers : </span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views : </span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes : </span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  src: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
};
