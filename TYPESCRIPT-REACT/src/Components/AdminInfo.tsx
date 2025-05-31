import type { FC } from 'react';
import { type AdminInfoList } from '../types';
type AdminInfoProp = {
  admin: AdminInfoList;
};

const AdminInfo: FC<AdminInfoProp> = ({ admin }) => {
  return (
    <div>
      <h2>Admin Information</h2>
      <p>{admin.name}</p>
      <p>{admin.email}</p>
      <p>{admin.id}</p>
      <p>{admin.role}</p>
      <p>{admin.lastLogin.toLocaleString()}</p>
    </div>
  );
};
export default AdminInfo;
