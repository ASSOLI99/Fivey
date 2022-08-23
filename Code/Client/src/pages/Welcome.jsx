import HeaderMenu from "../components/header/HeaderMenu";
import NewsLetter from "../components/UI/newsletter/NewsLetter";
import CategoryMenu from "../components/category/CategoryMenu";
import Welcoming from "../components/UI/Welcoming/Welcoming";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Welcome = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allCategory, setAllCategory] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios.get("http://127.0.0.1:8000/api/categoriesAll").then((res) => {
      console.log(res.data);
      setAllCategory(res.data);
      // console.log(res.data);
    });
  }, []);

  return (
    <>
      <Welcoming />
      <HeaderMenu />
      <NewsLetter />
      {allCategory.map((category) => {
        return (
          <CategoryMenu
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            catName={category.name}
            theId={category.id}
            key={category.name}
          />
        );
      })}

      {/* <CategoryMenu catName={allCategory[0].name} />
      <CategoryMenu catName={allCategory[0].name} /> */}
    </>
  );
};
export default Welcome;
