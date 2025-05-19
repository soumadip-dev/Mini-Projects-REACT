import React from 'react';
import useFetch from './hooks/useFetch';

const App = () => {
  const url = 'https://api.freeapi.app/api/v1/public/randomusers/';
  const options = { method: 'GET', headers: { accept: 'application/json' } };

  const { data, error } = useFetch(url, options);

  if (!data) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</div>
    );
  }

  return (
    <div
      style={{
        maxWidth: '960px',
        margin: '2rem auto',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Hello World</h1>
      <p style={{ textAlign: 'center', fontWeight: '600', color: '#34495e' }}>
        User List:
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
          padding: '1rem',
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#fafafa',
          boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
        }}
      >
        {data?.data?.data.map((user) => (
          <div
            key={user.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '1rem',
              textAlign: 'center',
              boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
              backgroundColor: '#fff',
            }}
          >
            <img
              src={user.picture.large}
              alt="User profile"
              style={{
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '0.75rem',
              }}
            />
            <p
              style={{
                fontWeight: '700',
                fontSize: '1.1rem',
                marginBottom: '0.25rem',
                color: '#2c3e50',
              }}
            >
              {`${user.name.title} ${user.name.first} ${user.name.last}`}
            </p>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#7f8c8d',
                wordBreak: 'break-word',
              }}
            >
              {user.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
