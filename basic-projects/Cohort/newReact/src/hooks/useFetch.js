import { useState, useEffect } from 'react';

const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Http error! Status: ' + res.status);
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
        setError(null);
      })
      .catch((err) => {
        setError(err.message || 'Something went wrong');
      });
  });

  return { data, error };
};

export default useFetch;
