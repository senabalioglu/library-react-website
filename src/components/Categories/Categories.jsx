import { useEffect, useState } from "react";
import "./Categories.css";

function Categories() {
  const [categoriesData, setCategoriesData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

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

  return (
    <>
      <div className="category-list">
        {categoriesData.map((category) => (
          <div key={category.id} className="category-container">
            <h3 className="category-text">{category.categoryName}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default Categories;
