import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const url = 'https://api.freeapi.app/api/v1/public/randomusers/';
  const options = { method: 'GET', headers: { accept: 'application/json' } };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // check the response
        setData(data.data.data); // adjust based on actual structure
      })
      .catch(() => setData([]));
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
      <p>User List:</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1rem',
          padding: '1rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          backgroundColor: '#f5f5f5',
        }}
      >
        {data?.map((user) => (
          <div
            key={user.email}
            style={{
              flex: '0 1 250px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '5px',
              textAlign: 'center',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={user?.picture?.large}
              alt="User profile"
              style={{ width: '100px', borderRadius: '50%' }}
            />
            <p>
              <strong>
                {`${user.name.title} ${user.name.first} ${user.name.last}`}
              </strong>
            </p>
            <p
              style={{
                padding: '5px',
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
