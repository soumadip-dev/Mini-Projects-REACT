const Input = ({ title, value, name }) => {
  return (
    <label className="sidebar-label-container">
      <input type="radio" value={value} name={name} />
      <span className="checkmark"></span>
      {title}
    </label>
  );
};
export default Input;
