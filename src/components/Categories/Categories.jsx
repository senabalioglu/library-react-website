import { useEffect, useState } from "react";
import "./Categories.css";

function Categories() {
  const [categoriesData, setCategoriesData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const [visible, setVisible] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [subCategoriesListData, setSubCategoriesListData] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/Library/categories`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCategoriesData(data);
        } else {
          console.warn("API array dönmedi:", data);
          setCategoriesData([]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const toggleSCVisible = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setVisible(!visible);
    console.log("is visible?", { visible });
  };

  const selectedCategory = categoriesData.find(
    (category) => category.id === selectedCategoryId
  );

  useEffect(() => {
    if (!selectedCategory) return;

    if (
      selectedCategory.subCategories &&
      selectedCategory.subCategories.length > 0
    ) {
      setSubCategoriesListData(selectedCategory.subCategories);
    } else {
      fetch(
        `${apiUrl}/Library/categories/subCategories?categoryLink=${selectedCategory.externalId}`
      )
        .then((resp) => resp.json())
        .then((data) => setSubCategoriesListData(data))
        .catch((err) => console.log(err));
    }
  }, [selectedCategory]);

  return (
    <>
      <div className="category-list">
        {categoriesData.map((category) => (
          <div
            onClick={() => toggleSCVisible(category.id)}
            key={category.id}
            className="category-container"
          >
            <h3 className="category-text">{category.categoryName}</h3>
          </div>
        ))}
      </div>
      {visible && (
        <div className="sub-categories-list">
          {subCategoriesListData.map((sc, index) => (
            <div className="category-container" key={index}>
              <h3 className="category-text">
                {
                  typeof sc === "string"
                    ? sc.split("p")[1]?.trim()
                    : sc.subCategoryName
                }
              </h3>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Categories;
