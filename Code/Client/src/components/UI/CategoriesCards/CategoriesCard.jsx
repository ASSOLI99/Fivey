import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoriesCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([""]);
  useEffect(() => {
    setIsLoading(true);
    axios.get("http://127.0.0.1:8000/api/categoriesCards").then((res) => {
      setCategories(res.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <div className="CategoriesCards my-5">
      <Container>
        {isLoading ? (
          <div className="spinner-border text-warning ms-5" role="status"></div>
        ) : (
          <Row>
            {categories.map((category, index) => {
              return (
                <Col
                  key={index}
                  className="col-6 col-sm-4 col-md-3 d-flex justify-content-center align-items-center text-white p-2"
                >
                  <Link
                    to={`/categories/${category.name}`}
                    className="text-decoration-none btn btn-warning"
                  >
                    {category.name}
                  </Link>
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </div>
  );
};
export default CategoriesCard;
