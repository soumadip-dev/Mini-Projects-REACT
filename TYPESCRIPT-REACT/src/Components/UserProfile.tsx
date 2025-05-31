import { useState } from 'react';

type User = {
  name: string;
  age: number;
};
const UserProfile = () => {
  const [user, setuser] = useState<User>({
    name: '',
    age: 0,
  });
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>

      <input
        type="text"
        value={user.name}
        placeholder="Enter your name"
        onChange={e => setuser({ ...user, name: e.target.value })}
      />
      <input
        type="number"
        value={user.age}
        placeholder="Enter your age"
        onChange={e => setuser({ ...user, age: Number(e.target.value) })}
      />
    </div>
  );
};
export default UserProfile;
