import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div>
      <h2>Page 404</h2>
      <p>Page does not exist</p>
      Return to <Link to="/home">Home Page</Link>
    </div>
  );
};

export default Page404;
