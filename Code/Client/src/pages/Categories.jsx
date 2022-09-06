import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import CategoryMenu from "../components/category/CategoryMenu";
import CategoriesCard from "../components/UI/CategoriesCards/CategoriesCard";
import Pagination from "react-js-pagination";

const Categories = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pageNumber = (value) => {
    setPage(value);
  };
  const [allCategory, setAllCategory] = useState({
    data: [],
    current_page: "",
    per_page: "",
    total: "",
  });
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/categoriesAllRand?page=${page}`)
      .then((res) => {
        console.log(res.data);
        setAllCategory(res.data);
      });
  }, [page]);
  const { data, current_page, per_page, total } = allCategory;

  return (
    <>
      {data.map((category, index) => {
        return (
          <Fragment key={category.name}>
            {index % 2 === 0 && <CategoriesCard />}

            <CategoryMenu
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              catName={category.name}
              theId={category.id}
              key={category.name}
            />
          </Fragment>
        );
      })}
      <div className="d-flex justify-content-center mt-5">
        <Pagination
          activePage={Number(current_page)}
          totalItemsCount={Number(total)}
          itemsCountPerPage={Number(per_page)}
          onChange={(pageNum) => {
            pageNumber(pageNum);
          }}
        />
      </div>
    </>
  );
};
export default Categories;
