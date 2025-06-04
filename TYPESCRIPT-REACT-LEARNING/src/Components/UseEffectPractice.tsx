import { useState, useEffect } from 'react';

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const UseEffectPractice = () => {
  const [data, setData] = useState<TodoType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/2');
        const data: TodoType = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {data ? (
        <div>
          <h1>{data!.title}</h1>
          <p>{data!.completed ? 'Completed' : 'Not completed'}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
export default UseEffectPractice;
