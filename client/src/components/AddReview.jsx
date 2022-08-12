import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

export const AddReview = () => {
  let nombre = useRef("");
  let descripcion = useRef("");
  const url = `${process.env.REACT_APP_BACKEND_URL}/add-review`;

  const saveReview = (e) => {
    e.preventDefault();
    try {
      axios.post(url, {
        nombre: nombre.current.value,
        descripcion: descripcion.current.value,
      });
      alert("Published review");
    } catch (e) {
      alert("Error");
    }
  };

  return (
    <div className="container">
      <Helmet>
        <title>Add Review | MyMovieReview - V1</title>
      </Helmet>
      <form className="row g-3" onSubmit={(e) => saveReview(e)}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Movie Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            ref={nombre}
            placeholder="The Avengers"
            required
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            ref={descripcion}
            required
          ></textarea>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};
