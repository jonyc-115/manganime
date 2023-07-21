import { useFetch } from "../hooks/useFetch";

const Categories = () => {
  const { data, loading, error } = useFetch(
    "https://kitsu.io/api/edge/categories"
  );

  if (!data) return null;

  let categories = data.data;

  //console.log(categories);

  return (
    <div>
      <ul>
        {loading && <p>Loading... </p>}
        {error && <p>{error}</p>}
        {data &&
          categories.map((category) => {
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
