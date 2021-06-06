import React from "react";
import PropTypes from 'prop-types';
import styles from './Profile.module.css'


const Profile = ({data: {name, tag, location, avatar, stats:{followers, likes, views}}}) => (
    <div className={styles.Profile}>
        
            <img
                src={avatar}
                alt="Аватар пользователя"
                className="avatar"
        />
        <ul className={styles.ProfileInfoList}>
            <li className={styles.ProfileInfoText}>{name}</li>
            <li className={styles.ProfileInfoText}>@{tag}</li>
            <li className={styles.ProfileInfoText}>{location}</li>
        </ul>

        <ul className={styles.ProfileStatisticList}>
            <li>
                <span className="label">Followers:</span>
                <span className={styles.ProfileStatistic}>{followers}</span>
            </li>
            <li>
                <span className="label">Views:</span>
                <span className={styles.ProfileStatistic}>{views}</span>
            </li>
            <li>
                <span className="label">Likes:</span>
                <span className={styles.ProfileStatistic}>{likes}</span>
            </li>
        </ul>
    </div>
);


Profile.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats:PropTypes.shape({
            followers:PropTypes.number.isRequired,
            likes:PropTypes.number.isRequired,
            views:PropTypes.number.isRequired,
        }).isRequired,

    }).isRequired,
};
export default Profile;
