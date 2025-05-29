import Input from '../../components/Input';
import './Price.css';

const Price = () => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input type="radio" value="" name="test2" />
        <span className="checkmark"></span>All
      </label>
      <Input value={4999} title="₹0 - ₹4,999" name="test2" />
      <Input value={9999} title="₹5,000 - ₹9,999" name="test2" />
      <Input value={14999} title="₹10,000 - ₹14,999" name="test2" />
      <Input value={17000} title="Over ₹15,000" name="test2" />
    </div>
  );
};

export default Price;
