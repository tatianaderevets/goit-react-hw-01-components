import React from "react";
import FriendListItem from "./FriendListItem";
import PropTypes from 'prop-types';
import defaultImage from "./default.jpg";
console.log(defaultImage);

const FriendList = ({ friends }) => {
    console.log(friends);
    return (
        <ul>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                        id={id}
                    />
               ) 
            })}
            
        </ul>
    );
    
};




FriendList.defaultProps = {
  avatar:defaultImage,
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired
    }).isRequired
    ).isRequired,
};

export default FriendList;

