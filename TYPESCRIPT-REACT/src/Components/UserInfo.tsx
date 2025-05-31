import { type Info } from '../types';

type UserInfoProp = {
  user: Info;
};

const UserInfo = ({ user: { name, email, id } }: UserInfoProp) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>{name}</p>
      <p>{email}</p>
      <p>{id}</p>
    </div>
  );
};

export default UserInfo;
