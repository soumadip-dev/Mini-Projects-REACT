import Input from '../../components/Input';
import './Colors.css';
const Colors = () => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colors</h2>
        <label className="sidebar-label-container">
          <input type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
        <Input value="black" title="Black" name="test1" color="black" />

        <Input value="blue" title="Blue" name="test1" color="blue" />

        <Input value="red" title="Red" name="test1" color="red" />

        <Input value="green" title="Green" name="test1" color="green" />

        <label className="sidebar-label-container">
          <input type="radio" value="" name="test2" />
          <span className="checkmark"></span>White
        </label>
      </div>
    </>
  );
};
export default Colors;
