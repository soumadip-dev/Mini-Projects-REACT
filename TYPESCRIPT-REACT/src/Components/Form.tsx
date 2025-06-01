import { useRef, useState, type FormEvent } from 'react';

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
    <>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input type="text" placeholder="Enter your name" ref={name} style={inputStyle} />
        <input type="email" placeholder="Enter your email" ref={email} style={inputStyle} />
        <input
          type="password"
          placeholder="Enter your password"
          ref={password}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>

      <section style={sectionStyle}>
        <h2>Submitted Data</h2>
        <p>
          <strong>Name:</strong> {submittedData.name}
        </p>
        <p>
          <strong>Email:</strong> {submittedData.email}
        </p>
        <p>
          <strong>Password:</strong> {submittedData.password}
        </p>
      </section>
    </>
  );
};

export default Form;

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  maxWidth: '300px',
  margin: '20px auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
};

const inputStyle: React.CSSProperties = {
  padding: '8px',
  fontSize: '14px',
};

const buttonStyle: React.CSSProperties = {
  padding: '10px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const sectionStyle: React.CSSProperties = {
  maxWidth: '300px',
  margin: '0 auto',
  textAlign: 'left',
};
