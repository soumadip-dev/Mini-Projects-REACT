import { useEffect, useState } from 'react';

// Interface for User
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const UserList = () => {
  const [user, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('Http error! Status: ' + res.status);
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.log(error);
        setError(error instanceof Error ? error.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold  mb-8 text-center">User List</h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-100"></div>
          </div>
        ) : (
          <div className="space-y-6">
            {error ? (
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {user.map(u => (
                  <div
                    key={u.id}
                    className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="px-4 py-5 sm:p-6">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">{u.name}</h3>
                      <div className="mt-4 space-y-2">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Username:</span> {u.username}
                        </p>
                        <p className="text-sm text-gray-600 truncate">
                          <span className="font-medium">Email:</span> {u.email}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Phone:</span> {u.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default UserList;
