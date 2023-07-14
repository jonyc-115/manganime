import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SeriePage = () => {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);

  console.log(id);

  useEffect(() => {
    fetch(`https://kitsu.io/api/edge/anime/${id}`)
      .then((res) => res.json())
      .then((json) => setSerie(json.data));
  }, [id]);

  return (
    <section>
      <h2>{serie && serie.attributes.canonicalTitle}</h2>
    </section>
  );
};

export default SeriePage;
