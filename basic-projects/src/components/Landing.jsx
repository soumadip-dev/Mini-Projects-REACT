import { Link } from 'react-router-dom';

const Landing = () => {
  const containerStyle = {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    background: '#f0f4f8',
    minHeight: '100vh',
  };

  const headingStyle = {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#333',
  };

  const linkStyle = {
    display: 'inline-block',
    margin: '10px',
    padding: '12px 24px',
    textDecoration: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    borderRadius: '6px',
    transition: 'background-color 0.3s ease',
  };

  const linkHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to the React Playground</h1>
      <div>
        <Link to="/counter" style={linkStyle}>
          Counter
        </Link>
        <Link to="/todo" style={linkStyle}>
          Todo
        </Link>
        <Link to="/meals" style={linkStyle}>
          Meals
        </Link>
        <Link to="/profile" style={linkStyle}>
          Profiles
        </Link>
        <Link to="/form" style={linkStyle}>
          Contact Form
        </Link>
      </div>
    </div>
  );
};

export default Landing;
