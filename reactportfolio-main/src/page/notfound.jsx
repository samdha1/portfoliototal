import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <section className="section text-center">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you requested does not exist.</p>
      <Link to="/home" className="btn-primary">Return Home</Link>
    </section>
  );
};

export default Notfound;