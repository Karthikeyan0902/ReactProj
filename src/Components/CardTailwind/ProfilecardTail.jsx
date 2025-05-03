import React from 'react';

const ProfileCardTail = ({ header, title, content, footer }) => { 
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <header className="bg-blue-500 text-white text-center py-4 text-xl font-semibold">
        {header}
      </header>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{content}</p>
      </div>
      <footer className="bg-gray-100 text-center p-2 text-sm text-gray-600">
        {footer}
      </footer>
    </div>
  );
};

export default ProfileCardTail; 
