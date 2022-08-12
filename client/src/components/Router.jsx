import React from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { AddReview } from "./AddReview.jsx";
import { Reviews } from "./Reviews.jsx";

export const Router = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <NavLink to="/" className="navbar-brand">
            MyMovieReviewV1
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="/" className="nav-link">
                All The Reviews
              </NavLink>
            </div>
            <div className="navbar-nav">
              <NavLink to="/add-review" className="nav-link">
                Add Public Review
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Reviews />}></Route>
        <Route path="/add-review" element={<AddReview />}></Route>
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
