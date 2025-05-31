const User = ({ name, age, isStudent }: { name: string; age: number; isStudent: boolean }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Is Student: {isStudent ? 'Yes' : 'No'}</h2>
    </div>
  );
};
export default User;
