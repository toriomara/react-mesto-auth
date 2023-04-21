import React from 'react';

export const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>
        © {new Date().getFullYear()} Mesto Russia
      </p>
    </footer>
  );
};
