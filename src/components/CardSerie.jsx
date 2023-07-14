import { Link } from "react-router-dom";

const CardSerie = ({ serie }) => {
  const { posterImage, canonicalTitle, ageRating, averageRating } =
    serie.attributes;

  return (
    <li className="relative overflow-hidden rounded-md">
      <Link to={`/serie/${serie.id}`}>
        <img src={posterImage.small} alt={canonicalTitle} />
        <div className="flex justify-between items-center px-3 absolute w-full h-16 bottom-0 left-0 bg-[#151418c7]">
          <h4 className="text-white font-semibold">{canonicalTitle}</h4>
          <h4 className="text-white">{averageRating}</h4>
        </div>
      </Link>
    </li>
  );
};

export default CardSerie;
