import { useFetch } from "../hooks/useFetch";
import CardSerie from "./CardSerie";

const ListOfSeries = () => {
  const { data, loading, error } = useFetch(
    "https://kitsu.io/api/edge/trending/anime"
  );

  if (!data) return null;

  const series = data.data;

  return (
    <ul className="grid grid-cols-fluid gap-3 place-items-center">
      {loading && <p>Loading...</p>}
      {data &&
        series?.map((serie) => <CardSerie serie={serie} key={serie.id} />)}
    </ul>
  );
};

export default ListOfSeries;
