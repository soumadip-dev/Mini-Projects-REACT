import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
  const navContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    padding: '16px 0',
    backgroundColor: '#007bff',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '600',
    padding: '8px 12px',
    borderRadius: '6px',
    transition: 'background-color 0.3s ease',
  };

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <nav style={navContainerStyle}>
      {[
        {to: '/', label: 'Home'},
        { to: '/counter', label: 'Counter' },
        { to: '/todo', label: 'Todo' },
        { to: '/meals', label: 'Meals' },
        { to: '/profile', label: 'Profiles' },
        { to: '/form', label: 'Contact Form' },
      ].map(({ to, label }, idx) => (
        <Link
          key={to}
          to={to}
          style={{
            ...linkStyle,
            backgroundColor: hoveredIndex === idx ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
          }}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Navber;
