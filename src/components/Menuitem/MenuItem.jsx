import React from 'react';

import './MenuItem.css';

const MenuItem = ({ price, tags, title }) => (
  <div className='app__menuItem'>
    <div className="app__menuItem-header">
      <h2>{title}</h2>
      <div />
      <h4>{price}</h4>
    </div>
    <p>{tags}</p>

  </div>
);

export default MenuItem;
