import { useState } from "react";
import Navbar from "../components/organisms/Navbar";
import CategoryFilter from "../components/organisms/CategoryFilter";
import MovieList from "../components/organisms/MovieList";
import { movies } from "../data/movies";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) => {
    const matchCat = category === "All" || movie.genre === category;
    const matchSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />

      <div className="pt-28 p-6">
        <SearchBar search={search} setSearch={setSearch}>
          <CategoryFilter category={category} setCategory={setCategory} />
        </SearchBar>

        <MovieList movies={filteredMovies} />
      </div>
    </div>
  );
}
