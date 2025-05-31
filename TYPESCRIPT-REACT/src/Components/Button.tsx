interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled: boolean;
}
const Button = ({ label, onClick, disabled }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={
        disabled
          ? { cursor: 'not-allowed', opacity: 0.5, backgroundColor: 'gray', color: 'black' }
          : {
              cursor: 'pointer',
              opacity: 1,
              backgroundColor: 'blue',
              color: 'white',
            }
      }
    >
      {label}
    </button>
  );
};
export default Button;
