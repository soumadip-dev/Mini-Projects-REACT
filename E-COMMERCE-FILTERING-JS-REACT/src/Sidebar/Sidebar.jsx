import Category from './Category/Category';
import Colors from './Colors/Colors';
import Price from './Price/Price';
import './Sidebar.css';
const Sidebar = () => {
  return (
    <div>
      <Category />
      <Colors />
      <Price />
    </div>
  );
};
export default Sidebar;
