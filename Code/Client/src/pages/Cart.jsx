import cartImag from "./images/video-image.jpg";
import "./CSS/Cart.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-detail">
        <div className="container">
          <div className="content">
            <h1>Cart</h1>
            <div className="products">
              <div className="product">
                <img src={cartImag} alt="" />
                <h2>The Word and Programers</h2>
                <div className="actions">
                  <p>$5.00</p>
                  <button>
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </div>
              </div>
              <div className="product">
                <img src={cartImag} alt="" />
                <h2>The Word and Programers</h2>
                <div className="actions">
                  <p>$5.00</p>
                  <button>
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </div>
              </div>
              <div className="product">
                <img src={cartImag} alt="" />
                <h2>The Word and Programers</h2>
                <div className="actions">
                  <p>$5.00</p>
                  <button>
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="output">
              <p className="price-final">$15.00</p>
              <a href="../checkout/index.html" className="checkout">
                {" "}
                Proceed to checkout
              </a>
              <a href="../course/all-courses/index.html" className="continue">
                Continue shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
