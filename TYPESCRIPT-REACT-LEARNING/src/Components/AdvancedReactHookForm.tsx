import { useForm, type SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { Input } from './ui/input';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  completeLocation: string;
}

const AdvancedReactHookForm = () => {
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
      <h2 className="text-2xl font-semibold mb-6 text-center">Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex flex-col">
          <label htmlFor="firstName" className="mb-1 font-medium text-gray-700">
            First Name
          </label>
          <Input
            type="text"
            id="firstName"
            {...register('firstName', { required: 'First name is required' })}
          ></Input>
          {errors.firstName && (
            <span className="text-sm text-red-600 mt-1">{errors.firstName.message}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastName" className="mb-1 font-medium text-gray-700">
            Last Name
          </label>
          <Input
            type="text"
            id="lastName"
            {...register('lastName', { required: 'Last name is required' })}
          ></Input>
          {errors.lastName && (
            <span className="text-sm text-red-600 mt-1">{errors.lastName.message}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium text-gray-700">
            Email
          </label>
          <Input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required' })}
          ></Input>
          {errors.email && (
            <span className="text-sm text-red-600 mt-1">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="city" className="mb-1 font-medium text-gray-700">
            City
          </label>
          <Input
            type="text"
            id="city"
            {...register('city', { required: 'City is required' })}
          ></Input>
          {errors.city && <span className="text-sm text-red-600 mt-1">{errors.city.message}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="state" className="mb-1 font-medium text-gray-700">
            State
          </label>
          <Input
            type="text"
            id="state"
            {...register('state', { required: 'State is required' })}
          ></Input>
          {errors.state && (
            <span className="text-sm text-red-600 mt-1">{errors.state.message}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="zip" className="mb-1 font-medium text-gray-700">
            Zip
          </label>
          <Input type="text" id="zip" {...register('zip', { required: 'Zip is required' })}></Input>
          {errors.zip && <span className="text-sm text-red-600 mt-1">{errors.zip.message}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="country" className="mb-1 font-medium text-gray-700">
            Country
          </label>
          <Input
            type="text"
            id="country"
            {...register('country', { required: 'Country is required' })}
          ></Input>
          {errors.country && (
            <span className="text-sm text-red-600 mt-1">{errors.country.message}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="completeLocation" className="mb-1 font-medium text-gray-700">
            Complete Location
          </label>
          <Input
            type="text"
            id="completeLocation"
            {...register('completeLocation', {
              required: 'Complete Location is required',
            })}
          ></Input>
          {errors.completeLocation && (
            <span className="text-sm text-red-600 mt-1">{errors.completeLocation.message}</span>
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
export default AdvancedReactHookForm;
