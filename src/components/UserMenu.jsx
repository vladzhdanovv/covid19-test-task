import React from 'react';
import Avatar from './UI/Avatar';

const UserMenu = () => {
    return (
        <div className={'d-flex align-items-center'}>
                            <span>
                                User Menu
                            </span>
            &nbsp;
            <Avatar
                size={35}
                src="https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg"
            />
        </div>
    );
}

export default UserMenu;
