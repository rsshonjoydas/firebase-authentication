/* eslint-disable no-unused-vars */
import React from 'react';
import Account from './account';
import ChangePassword from './ChangePassword';
import ProfileForm from './ProfileForm';

interface IProps {
  setOnSetting: (onSetting: boolean) => void;
}

const Settings: React.FC<IProps> = ({ setOnSetting }) => (
  <div className="p-3 rounded-md shadow">
    {/* ProfileForm */}
    <ProfileForm />
    {/* Account */}
    <Account />

    {/* Change Password */}
    <ChangePassword />

    <button
      type="button"
      className="px-4 py-2 mt-5 font-semibold tracking-wider text-white uppercase bg-gray-500 rounded-md hover:bg-gray-600"
      onClick={() => setOnSetting(false)}
    >
      Cancel
    </button>
  </div>
);

export default Settings;
