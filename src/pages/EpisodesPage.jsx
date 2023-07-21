import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const EpisodesPage = () => {
  const { id } = useParams();
  console.log(id);
  const { data, loading, error } = useFetch(
    `https://kitsu.io/api/edge/episodes/${id}`
  );

  if (!data) return null;
  console.log(data);

  return (
    <section>
      <div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <p>pagina episodio</p>
    </section>
  );
};

export default EpisodesPage;
