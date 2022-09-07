import cartImag from "./images/video-image.jpg";
import "./CSS/Cart.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
  const id = useSelector((state) => state.user.id);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [number, setNumber] = useState(1);
  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    axios
      .get(`http://127.0.0.1:8000/api/cart/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCart(res.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [id, number]);
  const deleteHandler = (courseId) => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    axios
      .delete(`http://127.0.0.1:8000/api/cart/${courseId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setIsLoading(false);
      });
    setNumber(number + 1);
  };
  return (
    <div className="cart-container">
      <div className="cart-detail">
        <div className="container">
          <div className="content">
            <h1>Cart</h1>
            <div className="products">
              {isLoading ? (
                <div
                  className="spinner-border text-warning ms-5"
                  role="status"
                ></div>
              ) : (
                cart.map((item) => {
                  return (
                    <div className="product" key={item.cart_id}>
                      <Link
                        className="text-center"
                        to={`/course/${item.course_id}`}
                      >
                        <img
                          src={`http://localhost:8000/img/course/${item.course_image}`}
                          alt=""
                          className="item-image"
                        />
                      </Link>
                      <h2 className="fs-3">{item.course_name}</h2>
                      <div className="actions">
                        <p>$5.00</p>
                        <button onClick={() => deleteHandler(item.cart_id)}>
                          <i className="bi bi-trash"></i> Delete
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="output">
              {cart.length != 0 && (
                <>
                  <p className="price-final">${5 * cart.length}.00</p>
                  <Link to="/checkout" className="checkout">
                    Proceed to checkout
                  </Link>
                </>
              )}

              <Link to="/" className="continue">
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
