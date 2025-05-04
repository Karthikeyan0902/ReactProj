import React from 'react';
import Sidebar from '../Components/SideBar';
// Import only one version at a time:
import ProfileCardTail from '../Components/CardTailwind/ProfilecardTail';
import ProfileCardModule from '../Components/CardModule/ProfileCardModule';
import ProfileCard from '../Components/CardStyleComponents/ProfileCard';

const ProfilePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">My Profile Page</h1>
      
      <ProfileCardTail
        header="John Doe"
        title="Frontend Developer"
        content="Loves building with React and Tailwind."
        footer="Contact: john@example.com"
      /> <br />
      <ProfileCardModule
        header="John Doe"
        title="Frontend Developer"
        content="Loves building with React and Tailwind."
        footer="Contact: john@example.com"
      /> <br />
      <ProfileCard
        header="Karthi"
        title="Frontend Developer"
        content="Loves building with React and Tailwind."
        footer="Contact: john@example.com"
      />
      <Sidebar/>
    </div>
  );
};

export default ProfilePage;
