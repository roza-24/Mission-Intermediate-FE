import { useState } from "react";

export default function AddMovieForm({ movies, setMovies }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const handleAddMovie = () => {
    if (!title || !genre || !year) return;

    const newMovie = {
      id: Date.now(),
      title,
      genre,
      year,
    };

    setMovies([...movies, newMovie]); // 🔥 ADD DATA
    setTitle("");
    setGenre("");
    setYear("");
  };

  return (
    <div className="bg-white/10 p-4 rounded-xl mb-6">
      <h2 className="font-semibold mb-3">➕ Add Movie</h2>

      <input
        className="w-full p-2 mb-2 rounded text-black"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="w-full p-2 mb-2 rounded text-black"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />

      <input
        className="w-full p-2 mb-2 rounded text-black"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <button
        onClick={handleAddMovie}
        className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
      >
        Add Movie
      </button>
    </div>
  );
}
