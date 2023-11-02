import { Link } from "react-router-dom";

export default function CardLocation({
  name,
  dimension,
  type,
  univers,
  id
}: {
  name: string;
  dimension: string;
  type: string;
  univers : string;
  id : number
}) {
  return (
    <Link to={`/dimension/${id}/${univers}`}
      className="w-1/5 shadow p-5 my-2 mx-2 rounded h-40 flex flex-col items-center justify-center"
    >
      <h2 className="text-center text-cyan-600 text-lg font-bold">{name}</h2>
      <span>
        <p className="text-lime-500">
          <strong>{type}</strong>
        </p>
      </span>
      <p className="text-center">Dimensions : {dimension} </p>
    </Link>
  );
}
