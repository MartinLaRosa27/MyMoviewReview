import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const url = `${process.env.REACT_APP_BACKEND_URL}/api`;

  const getReviews = async () => {
    try {
      axios.get(url).then((res) => {
        setReviews(res.data);
      });
    } catch (e) {
      setReviews([]);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <main>
      {/* PAGE TITLE */}
      <Helmet>
        <title>MyMovieReview - V1</title>
      </Helmet>
      {/* MAIN Reviews */}
      <div className="row">
        {/* REVIEWS */}
        {reviews.length >= 1 ? (
          <div className=" bg-light p-3 border d-flex flex-wrap justify-content-center">
            {reviews.map((review) => {
              return (
                <div
                  className="card text-center w-25 mx-1 mt-1"
                  key={review.id}
                >
                  <div className="card-body">
                    <h5 className="card-title">{review.nombre}</h5>
                    <p className="card-text">{review.descripcion}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No reviews published yet</p>
        )}
      </div>
    </main>
  );
};
