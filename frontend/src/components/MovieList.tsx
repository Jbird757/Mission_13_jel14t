import React from 'react';
import { useState } from 'react';
import data from '../MovieData.json';

const MDS = data.MovieData;

export function MovieList() {
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
        <h3></h3>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited?</th>
            </tr>
          </thead>
          <tbody>
            {MDS.map((m: any) => (
              <tr>
                <th>{m.Title}</th>
                <th>{m.Year}</th>
                <th>{m.Director}</th>
                <th>{m.Rating}</th>
                <th>{m.Category}</th>
                <th>{m.Edited}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

// function MovieList() {

//
// }
