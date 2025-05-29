import { AiFillStar } from 'react-icons/ai';
import './Products.css';
import { BsFillBagHeartFill } from 'react-icons/bs';
const Products = () => {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="Shoe"
            className="card-img"
          />
          <div className="crad-details">
            <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>₹16,499</del> 11,499
              </div>
              <div className="bag">
                <BsFillBagHeartFill />
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
};
export default Products;
