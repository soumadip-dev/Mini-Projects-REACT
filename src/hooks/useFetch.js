import { useEffect, useReducer } from 'react';

const useFetch = (url, options) => {
  const initialState = {
    error: null,
    data: [],
  };

  const reducer = (state, { type, result }) => {
    switch (type) {
      case 'SUCCESS':
        return { data: result, error: null };
      case 'ERROR':
        return { data: [], error: 'Problem fetching data' };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Http error! Status: ' + res.status);
        }
        return res.json();
      })
      .then(json => {
        dispatch({
          type: 'SUCCESS',
          result: json,
        });
      })
      .catch(() => {
        dispatch({
          type: 'ERROR',
          result: [],
        });
      });
  }, [url, options]);

  return { data: state.data, error: state.error };
};

export default useFetch;
