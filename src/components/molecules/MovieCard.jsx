import { Link } from "react-router-dom";

export default function MovieCard({ id, title, poster, year }) {
  return (
    <Link to={`/movie/${id}`}>
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition cursor-pointer ">
        <img src={poster} className="w-full h-64 object-cover" />

        <div className="p-4">
          <h3 className="font-bold text-white">{title}</h3>
          <p className="text-gray-400 text-sm">{year}</p>
        </div>
      </div>
    </Link>
  );
}
