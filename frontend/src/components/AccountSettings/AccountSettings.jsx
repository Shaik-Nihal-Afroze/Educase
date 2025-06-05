import React, { useContext } from 'react';
import { useUser } from '../../context/UserContext';
import './AccountSettings.css';

const AccountPage = () => {
  const { user } = useUser();


  return (
    <div className="account-card">
      <h3 className='account-setting'>Account Settings</h3>
      <div className="account-header">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile" />
        <div>
          <p className="account-name">{user?.name}</p>
          <p className="account-email">{user?.email}</p>
        </div>
      </div>
      <p className="account-bio">
        Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
      </p>
    </div>
  );
};

export default AccountPage;
