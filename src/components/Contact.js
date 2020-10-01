import React from 'react';
import { Content, Heading, Columns } from 'react-bulma-components';

export default ({ tour, phones, mail, address }) => (
  <Content className='has-background-light'>
    <Heading size='5' className='is-hidden-mobile'>Operador del Tour</Heading>
    <Columns className='tour-info is-hidden-mobile'>
      <Columns.Column size={12}>
        {tour}
      </Columns.Column>
      <Columns.Column size={12}>
        {
          phones.join(' | ')
        }
      </Columns.Column>
      <Columns.Column size={12}>
        {mail}
      </Columns.Column>
      <Columns.Column size={12}>
        {address}
      </Columns.Column>
    </Columns>
    <Columns className='has-background-dark has-text-white'>
      <Columns.Column size={12}>
        Para mayor información y/o cambio de fecha ingresar en <a href='https://turismoi.pe/' className='has-text-info'>turismoi.pe</a>.
        <br/><b>Usuario:</b> norbelysnaguanagua21@gmail.com
        <br/><b>Contraseña:</b> Clave
      </Columns.Column>
    </Columns>
  </Content>
)
