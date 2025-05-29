import './Price.css';

const Price = () => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input type="radio" value="" name="test2" />
        <span className="checkmark"></span>All
      </label>
      <label className="sidebar-label-container">
        <input type="radio" value="" name="test2" />
        <span className="checkmark"></span>₹0 - ₹4,999
      </label>
      <label className="sidebar-label-container">
        <input type="radio" value="" name="test2" />
        <span className="checkmark"></span>₹5,000 - ₹9,999
      </label>
      <label className="sidebar-label-container">
        <input type="radio" value="" name="test2" />
        <span className="checkmark"></span>₹10,000 - ₹14,999
      </label>
      <label className="sidebar-label-container">
        <input type="radio" value="" name="test2" />
        <span className="checkmark"></span>₹15,000 - ₹17,000
      </label>
    </div>
  );
};

export default Price;
