import React from 'react';

const Header = ({ title = "To do list App" }) => {
  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
    </div>
  );
};

export default Header;

