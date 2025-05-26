import useFetch from '../hooks/useFetch';

const Profiles = () => {
  const url = 'https://api.freeapi.app/api/v1/public/randomusers/';

  const { data, error, loading } = useFetch(url);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading profiles...</p>;

  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>;

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>User Profiles</h1>
      <p style={subHeadingStyle}>Fetched from Free API</p>
      <div style={gridStyle}>
        {data?.data?.data.map(user => (
          <div key={user.id} style={cardStyle}>
            <img src={user.picture.large} alt="User profile" style={imageStyle} />
            <p style={nameStyle}>{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
            <p style={emailStyle}>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profiles;

// Styles
const containerStyle = {
  maxWidth: '1080px',
  margin: '0 auto',
  padding: '40px 20px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f5f6fa',
  minHeight: '100vh',
};

const headingStyle = {
  textAlign: 'center',
  color: '#2c3e50',
  fontSize: '2rem',
  marginBottom: '10px',
};

const subHeadingStyle = {
  textAlign: 'center',
  color: '#34495e',
  fontWeight: '500',
  marginBottom: '30px',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
  gap: '20px',
};

const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  padding: '20px',
  textAlign: 'center',
  transition: 'transform 0.2s ease',
};

const imageStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginBottom: '16px',
};

const nameStyle = {
  fontSize: '1.1rem',
  fontWeight: '600',
  color: '#2c3e50',
  marginBottom: '8px',
};

const emailStyle = {
  fontSize: '0.9rem',
  color: '#7f8c8d',
  wordBreak: 'break-word',
};
