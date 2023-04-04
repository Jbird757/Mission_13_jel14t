import React from 'react';
import { useState, useEffect } from 'react';

export type Movie = {
  movieId: number;
  category: string;
  title: string;
  year: number;
  director: string;
  rating: string;
  edited: boolean;
  lentTo: string;
  notes: string;
};

export function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const rsp = await fetch('https://localhost:4000/api/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovies();
  }, []);

  const editedMovies = movieData.filter((movie) => movie.edited);
  const sortedMovies = editedMovies.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">
              Joel Hilton's Movie Collection
            </h1>
          </div>
        </div>
      </header>
      <div>
        <table className="table">
          <thead key="thead">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited?</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody key="tbody">
            {sortedMovies.map((m: any) => (
              <tr key={m.movieId}>
                <th>{m.movieId}</th>
                <th>{m.title}</th>
                <th>{m.year}</th>
                <th>{m.director}</th>
                <th>{m.rating}</th>
                <th>{m.category}</th>
                <th>{m.edited ? 'Yes' : 'No'}</th>
                <th>{m.lentTo}</th>
                <th>{m.notes}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
