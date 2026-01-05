import { useState } from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie, onDelete, onUpdate }) {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(movie.title);
  const [genre, setGenre] = useState(movie.genre);

  const handleSave = () => {
    const updatedMovie = {
      ...movie,
      title: title,
      genre: genre,
    };

    onUpdate(updatedMovie);
    setIsEdit(false);
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md p-4">
      {!isEdit ? (
        <>
          <Link to={`/movie/${movie.id}`}>
            <h3 className="font-bold text-white hover:text-red-400 cursor-pointer">
              {movie.title}
            </h3>
          </Link>

          <p className="text-gray-400 text-sm">{movie.genre}</p>

          <div className="flex gap-2 mt-3">
            <button
              onClick={() => setIsEdit(true)}
              className="bg-yellow-500 px-3 py-1 rounded text-sm"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(movie.id)}
              className="bg-red-600 px-3 py-1 rounded text-sm"
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            className="w-full p-2 rounded text-black mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="w-full p-2 rounded text-black mb-2"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />

          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="bg-green-600 px-3 py-1 rounded text-sm"
            >
              Save
            </button>

            <button
              onClick={() => setIsEdit(false)}
              className="bg-gray-500 px-3 py-1 rounded text-sm"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
}
