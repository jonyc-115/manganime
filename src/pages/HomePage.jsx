import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardSerie from "../components/CardSerie";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://kitsu.io/api/edge/trending/anime")
      .then((res) => res.json())
      .then((json) => setData(json.data));
    return () => {};
  }, []);

  return (
    <section>
      <ul className="grid grid-cols-fluid gap-3 place-items-center">
        {data?.map((serie) => (
          <CardSerie serie={serie} key={serie.id} />
        ))}
      </ul>
    </section>
  );
};

export default HomePage;
