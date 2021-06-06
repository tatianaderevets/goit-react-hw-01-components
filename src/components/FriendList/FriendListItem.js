import React from "react";
import defaultImage from "./default.jpg";
import PropTypes from 'prop-types';
import styles from "./FriendListItem.module.css"

console.log(defaultImage);



const FriendListItem = ({ avatar, name, isOnline, id }) => (

    <li className={styles.FriendListItem} key={id}>
        <span className={isOnline ? styles.Online : styles.Offline}></span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
    </li>    
        
);


// FriendListItem.defaultProps = {
//     avatar: 'нет аватара'
// }

FriendListItem.defaultProps = {
  avatar:defaultImage,
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
};


export default FriendListItem;
