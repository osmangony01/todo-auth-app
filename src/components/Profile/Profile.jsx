import React from 'react';
import Navbar from './Navbar/Navbar';
import TaskList from './TaskList/TaskList';

const Profile = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <TaskList></TaskList>
            </div>
        </div>
    );
};

export default Profile;