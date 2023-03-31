import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './new.module.css';

export function TopBanner(props: any) {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div className="container">
          <a
            className="navbar-brand"
            asp-area=""
            asp-controller="Home"
            asp-action="Index"
          >
            The Joel Hilton Film Collection
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
            <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                <a className="nav-link text-dark">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark">Podcasts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark">Movie Entry</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark">My Library</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">{props.Title}</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              {props.SubTitle}
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
