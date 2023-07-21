import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import ListOfEpisodes from "../components/ListOfEpisodes";

const SeriePage = () => {
  const { id } = useParams();
  const [readMore, setReadMore] = useState(true);
  console.log(readMore);
  const navigate = useNavigate();

  const { data, loading, error } = useFetch(
    `https://kitsu.io/api/edge/anime/${id}`
  );

  if (!data) return null;
  //console.log(data);

  const { canonicalTitle, posterImage, ageRating, description, status } =
    data.data.attributes;

  let age = ageRating ? ageRating : "All age";
  let ageColor = ageRating ? "bg-[#faa3a3]" : "";
  let readToggle = readMore ? "h-56" : "h-auto";
  let isFinishied = status === "finished" ? "bg-[#dd1d16]" : "bg-[#10b618]";

  return (
    <section className="relative">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <button onClick={() => navigate(-1)}>Volver</button>
      <div className="relative bg-slate-500">
        <img src={posterImage.original} alt="" />
        <div className="absolute flex justify-center left-0 bottom-0 w-full ">
          <p
            className={`block w-24 text-white ${isFinishied}
        py-1 px-2 text-center`}
          >
            {status}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-start mt-3">
        <h1 className="font-bold text-xl w-4/5">{data && canonicalTitle}</h1>
        <span className={`${ageColor} p-1 px-2`}>{age}</span>
      </div>
      <div className="mt-3">
        <h3 className="font-semibold">Synopsis</h3>
        <div className={`${readToggle} overflow-y-hidden `}>
          <p>{description}</p>
        </div>
        <button
          onClick={() => setReadMore(!readMore)}
          className="text-[#30631b]"
        >
          Read more...
        </button>
      </div>

      <div>
        <h2 className="mt-4 mb-2 text-xl font-semibold">Episodes</h2>
        <ListOfEpisodes id={id} />
      </div>
    </section>
  );
};

export default SeriePage;
