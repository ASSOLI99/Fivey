import { Link } from "react-router-dom";
import "./CategoryHead.css";
const CategoryHead = (props) => {
  return (
    <div className=" d-flex align-items-center my-4 ">
      <p className="my-0 fs-4 category-link">
        Featured Courses in{" "}
        <Link
          to={`/categories/${props.catName}`}
          className="text-decoration-none"
        >
          {`${props.catName}`}
        </Link>
      </p>
    </div>
  );
};
export default CategoryHead;
