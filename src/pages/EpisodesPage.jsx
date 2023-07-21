import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Link, useNavigate, useParams } from "react-router-dom";

const EpisodesPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    `https://kitsu.io/api/edge/episodes/${id}`
  );

  if (!data) return null;
  console.log(data);

  const { thumbnail, canonicalTitle, synopsis, airdate } = data.data.attributes;

  return (
    <section>
      <div>
        <button onClick={() => navigate(-1)}>Volver</button>
        <div>
          <img src={thumbnail.original} alt="" />
        </div>
        <div>
          <h3 className="flex justify-between mt-5 mb-1">
            Synopsis <span>{airdate}</span>
          </h3>
          <p>{synopsis}</p>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default EpisodesPage;
