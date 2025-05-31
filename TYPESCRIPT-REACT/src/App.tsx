import AdminInfo from './Components/AdminInfo';
import UserInfo from './Components/UserInfo';
import { type Info, type AdminInfoList } from './types';

function App() {
  const user: Info = {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
  };

  const admin: AdminInfoList = {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    role: 'admin',
    lastLogin: new Date(),
  };
  return (
    <>
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </>
  );
}

export default App;
