import React from 'react';
import {  Button, Image } from 'react-bulma-components';
import { Link } from 'react-router-dom';
import routes from '../routes';

import gift from './gift.png';
import './GiftButton.css';

export default ({ text = ''}) => {
  return (
    <Link to={routes.getLink(text)}>
      <Button color="info" icon="gift" fullwidth rounded className='btn-gift' >
        <Image src={gift} size={32} />
        Clic aquí.
      </Button>
    </Link>
  );
};
