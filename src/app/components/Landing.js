import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';

const Landing = (props) => ( 
  <div>
    <Link to="/new">
      <Chip label="New" />
    </Link>
    <Link to="/open">
      <Chip label="Open" />
    </Link>
  </div>
);

export default Landing;
