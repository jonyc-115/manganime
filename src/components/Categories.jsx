import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetch("https://kitsu.io/api/edge/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json.data));
    return () => {};
  }, []);

  return (
    <div>
      <ul>
        {categories?.map((category) => {
          console.log(category);
          const { title } = category.attributes;
          return (
            <li key={category.id}>
              <h4>{title}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
