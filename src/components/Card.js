import React from 'react';
import { Content } from 'react-bulma-components';

import './Card.css'


export default ({ name, color, index }) => {
  return (
    <Content className={`has-background-${color} card left${index}`}>
      {name}
    </Content>
  );
};
