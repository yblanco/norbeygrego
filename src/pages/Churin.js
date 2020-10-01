import React from 'react';
import { Content } from 'react-bulma-components';

import Title from '../components/Title';
import Gift from '../components/Gift';

import img from '../components/churin.jpg';

export default () => {
  const title = 'Full Day Churín: Mamahuarmi, Baños de Tingo y más';
  const booking = 67244;
  const date = '21 de febrero del 2021';
  const time = '04:00 AM';
  const dropon = 'Javier Prado con Av. Arequipa, puerta principal de Hyundai (San Isidro)';
  const duration = '1 día';
  const include = [
    'Visita al pueblo de Sayán.',
    'Visita al Complejo Termal Mamahuarmi.',
    'Visita a los Baños Termales de Tingo.',
    'Vista panorámica de la iglesia San Jerónimo.',
    'Visita a la dulcería “Lumbre”.',
    'Visita a piscigranja en Ayarpongo.',
    'Visita a la gruta de la Mamahuarmi.',
    'Visita a cervecería artesanal.',
    'City tour en plaza de armas.',
    'Y mas...',
  ];
  const tour = 'Intikilla Tours';
  const phones = ['(01) 2317104', '956233236'];
  const mail = 'reservas@intikillatours.com'
  const address = 'Av. José Pardo 620 Ts-10. Miraflores, Lima.'
  return (
    <Content>
      <Title />
      <Gift
        title={title}
        img={img}
        booking={booking}
        date={date}
        time={time}
        dropon={dropon}
        include={include}
        duration={duration}
        tour={tour}
        phones={phones}
        mail={mail}
        address={address}
      />
    </Content>
  );
};
