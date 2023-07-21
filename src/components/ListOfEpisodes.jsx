import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const ListOfEpisodes = ({ id }) => {
  const { data, loading, error } = useFetch(
    `https://kitsu.io/api/edge/anime/${id}/episodes`
  );

  if (!data) return null;

  //console.log(data.data);

  return (
    <ul className="flex flex-col gap-4 bg-slate-50 py-4">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data.data.map((episode) => {
        const { thumbnail, canonicalTitle } = episode.attributes;

        return (
          <li key={episode.id}>
            <Link
              to="/episodes"
              className="flex items-center gap-4 border-[#00000048] border-b-2 border-t-2"
            >
              <div className=" h-20 w-20">
                <img
                  className="h-full object-cover"
                  src={thumbnail.original}
                  alt=""
                />
              </div>
              <p className="flex h-full  w-[60%] py-1 text-sm">
                {canonicalTitle}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ListOfEpisodes;
