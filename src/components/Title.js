import React from 'react';
import { Link } from 'react-router-dom';
import { Columns, Image } from 'react-bulma-components';

import routes from '../routes';

import name from '../components/name.png'
import turismoipe from '../components/turismoipe.svg'

export default () => (
    <Columns className='is-mobile'>
      <Columns.Column desktop={{ size: 3 }} mobile={{ size: 12 }}>
        <Link to={routes.getLink('home')}>
          <Image src={name} style={{ marginTop: '1em' }}/>
        </Link>
      </Columns.Column>
      <Columns.Column desktop={{ size: 2, offset: 7 }} className='is-hidden-mobile'>
        <span style={{ visibility: 'hidden'}}>.</span>
        <a href='https://turismoi.pe/ingresar'>
          <Image src={turismoipe} style={{ marginTop: '1em' }}/>
        </a>
      </Columns.Column>
      <Columns.Column size={12}>
        <hr style={{ margin: 0}}/>
      </Columns.Column>
    </Columns>
);
