import React from "react";

const FriendListItem = ({ avatar, name, isOnline, id }) => (

    <li className="item" key={id}>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
    </li>    
        
);


// FriendListItem.defaultProps = {
//     avatar: 'нет аватара'
// }

export default FriendListItem;

// <li key={id}>
    //     <h3>{name}</h3>
    //     <p>{isOnline}</p>
    //     <img src={avatar} alt={name} width="48" />

    // </li>