import CategoryMenu from "../components/category/CategoryMenu";
import CategoriesCard from "../components/UI/CategoriesCards/CategoriesCard";
const Categories = () => {
  return (
    <>
      <CategoriesCard />
      <CategoryMenu catName={"React"} />
      <CategoryMenu catName={"Calculus "} />
      <CategoriesCard />
      <CategoryMenu catName={" Physics 101"} />
    </>
  );
};
export default Categories;
