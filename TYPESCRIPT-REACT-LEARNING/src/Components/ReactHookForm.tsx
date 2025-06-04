import { useForm, type SubmitHandler } from 'react-hook-form';
import { Input } from './ui/input';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const ReactHookForm = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async data => {
    setSuccessMessage(null);
    const res = await fetch('https://getform.io/f/bmdmkgpa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || 'Something went wrong');
    setSuccessMessage('Message sent successfully!');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium text-gray-700">
            Name
          </label>
          <Input type="text" id="name" {...register('name', { required: 'Name is required' })} />
          {errors.name && <span className="text-sm text-red-600 mt-1">{errors.name.message}</span>}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium text-gray-700">
            Email
          </label>
          <Input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && (
            <span className="text-sm text-red-600 mt-1">{errors.email.message}</span>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 font-medium text-gray-700">
            Password
          </label>
          <Input
            type="password"
            id="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
            })}
          />
          {errors.password && (
            <span className="text-sm text-red-600 mt-1">{errors.password.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-4 btn btn-info  text-white font-semibold rounded-xl hover:btn-secondary transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>

        {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}
      </form>
    </div>
  );
};

export default ReactHookForm;

// register: used to connect input fields to the form
// handleSubmit: is a function used to handle form submission
// formState: contains information about the form state, such as errors and isSubmitting
// errors: contains validation errors for the form fields
// isSubmitting: indicates whether the form is currently submitting
