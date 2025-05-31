import type { FC } from 'react';

interface UserShape {
  name: string;
  age: number;
  isStudent: boolean;
}
const User: FC<UserShape> = ({ name, age, isStudent }: UserShape) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Is Student: {isStudent ? 'Yes' : 'No'}</h2>
    </div>
  );
};
export default User;
