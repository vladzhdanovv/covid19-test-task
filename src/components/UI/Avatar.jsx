import React from "react";

const avatarStyles = {
    boxShadow: '0 0 3px black',
    borderRadius: '50%',
    padding: '3px',
    margin: '3px'
};
const Avatar = ({src, size = 30, ...props}) => {
    return (
        <img
            style={avatarStyles}
            src={src}
            alt="user avatar"
            width={size}
            height={size}
        />
    )
}

export default Avatar;
