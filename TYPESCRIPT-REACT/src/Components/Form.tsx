import { useRef, useState, type FormEvent } from 'react';
import { Input } from './ui/input';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

type submittedDataType = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [submittedData, setSubmittedData] = useState<submittedDataType>({
    name: '',
    email: '',
    password: '',
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;
    setSubmittedData({ name: nameValue, email: emailValue, password: passwordValue });
  };

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto space-y-8">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Enter your name"
              ref={name}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              placeholder="Enter your email"
              ref={email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <Input
              type="password"
              placeholder="Enter your password"
              ref={password}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Submit
            </button>
          </div>
        </form>

        <Card className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 border-none">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800 mb-4">Submitted Data</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-gray-700">
              <strong className="font-semibold">Name:</strong> {submittedData.name}
            </p>
            <p className="text-gray-700">
              <strong className="font-semibold">Email:</strong> {submittedData.email}
            </p>
            <p className="text-gray-700">
              <strong className="font-semibold">Password:</strong> {submittedData.password}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Form;
