import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h3>opps! this page dosn't exist</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
