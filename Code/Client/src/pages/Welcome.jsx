import HeaderMenu from "../components/header/HeaderMenu";
import NewsLetter from "../components/UI/newsletter/NewsLetter";
import CategoryMenu from "../components/category/CategoryMenu";
import Welcoming from "../components/UI/Welcoming/Welcoming";
const Welcome = () => {
  return (
    <>
      <Welcoming />
      <HeaderMenu />
      <NewsLetter />
      <CategoryMenu catName={"React"} />
      <CategoryMenu catName={"Calculus "} />
      <CategoryMenu catName={" Physics 101"} />
    </>
  );
};
export default Welcome;
