import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const SeriePage = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch(
    `https://kitsu.io/api/edge/anime/${id}`
  );

  if (!data) return null;
  console.log(data);

  const { canonicalTitle, posterImage, ageRating, description } =
    data.data.attributes;

  let age = ageRating ? ageRating : "All age";
  let ageColor = ageRating ? "bg-[#faa3a3]" : "";

  return (
    <section className="relative">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div>
        <img src={posterImage.medium} alt="" />
      </div>
      <div className="flex justify-between items-start mt-3">
        <h1 className="font-bold text-xl w-4/5">{data && canonicalTitle}</h1>
        <span className={`${ageColor} p-1 px-2`}>{age}</span>
      </div>
      <div className="mt-3">
        <h3 className="font-semibold">Synopsis</h3>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default SeriePage;
