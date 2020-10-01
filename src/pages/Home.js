import React from 'react';
import { Content, Hero, Columns, Image } from 'react-bulma-components';

import GiftButton from '../components/GiftButton'

import name from '../components/name.png'


const Home = () => {
  return (
    <Content>
      <Hero size="fullheight" >
        <Hero.Body>
          <Columns>
            <Columns.Column desktop={{ size: 9 }} tablet={{ size: 8 }}>
              <Image src={name}/>
            </Columns.Column>
            <Columns.Column desktop={{ size: 3 }} table={{ size: 4 }}>
              <Columns>
                <Columns.Column size={12}>
                  <GiftButton text='Primero' />
                </Columns.Column>
                <Columns.Column size={12}>
                  <GiftButton text='Segundo' />
                </Columns.Column>
                <Columns.Column size={12}>
                  <GiftButton text='Tercero' />
                </Columns.Column>
                <Columns.Column size={12}>
                  <GiftButton text='Cuarto' />
                </Columns.Column>
              </Columns>
            </Columns.Column>
          </Columns>
        </Hero.Body>
      </Hero>
    </Content>
  );
};

export default Home;
