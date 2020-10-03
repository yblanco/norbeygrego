import React from 'react';
import { Content, Hero, Columns, Image } from 'react-bulma-components';

import GiftButton from '../components/GiftButton'
import Card from '../components/Card'


import name from '../components/name.png'

export default  () => {
  return (
    <Content>
      <Card name='Greinny' color='warning' index={1} />
      <Card name='Gaby' color='info' index={2} />
      <Card name='Rodrigo' color='succes' index={3} />
      <Card name='Yeinso' color='danger' index={4} />
      <Card name='David' color='success' index={5} />
      <Card name='Rosselys' color='purple' index={6} /> 
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
