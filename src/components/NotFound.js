import React from 'react';
import {Link} from "react-router-dom";

const NotFound = ()=>{
  return(
    <div className="container-fluid">
      <h1 className="text-center">That Page Doesn't Exist</h1>
      <p className="text-center"><Link to="/">Return to the homepage</Link></p>
    </div>
  );
};

export default NotFound;
