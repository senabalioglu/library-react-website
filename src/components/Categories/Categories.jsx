import { useEffect, useState } from "react";
import "./Categories.css";

function Categories() {
  const [categoriesData, setCategoriesData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const [visible, setVisible] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  useEffect(() => {
    fetch(`${apiUrl}/Library/categories`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCategoriesData(data);
        } else {
          console.warn("API array dönmedi:", data);
          setCategoriesData([]); // güvenlik için boş array
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const toggleSCVisible = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setVisible(!visible);
    console.log("is visible?", { visible });
  };
  return (
    <>
      <div className="category-list">
        {categoriesData.map((category) => (
          <div onClick={ () => toggleSCVisible(category.id)} key={category.id} className="category-container">
            <h3 className="category-text">{category.categoryName}</h3>
          </div>
        ))}
      </div>
      {visible && selectedCategoryId && (
      <div className="sub-categories-list">
        {categoriesData
          .find((category) => category.id === selectedCategoryId)
          ?.subCategories.map((sc, index) => (
            <div className="category-container" key={index}>
              <h3 className="category-text" >{sc.split("p")[1].trim()}</h3>
            </div>
          ))}
      </div>
    )}
    </>
  );
}

export default Categories;
