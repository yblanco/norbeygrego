import React from 'react';
import { Content } from 'react-bulma-components';

import Title from '../components/Title';
import Gift from '../components/Gift';

import img from '../components/laviuda.jpg';

export default () => {
  const title = 'Tour privado a Cordillera la Viuda';
  const booking = '67262';
  const date = '25 de octubre del 2020';
  const time = '06:30 am';
  const dropon = 'Av. Jorge Basadre Cdra. 1, cruce con Av. Javier Prado Oeste Cdra. 1.';
  const duration = '1 día';
  const include = [
    'Mirador Cochapampa',
    'Ritual del pago del agua',
    'Visita a la Laguna de Chuchón.',
    'Visita a la Laguna de Leoncocha.',
    'Excursión a la Cordillera la Viuda.',
    'Visita a la Comunidad de Cullhuay.',
    'Visita al pueblo de Canta.',
    'Catarata de Pomora.',
    'Visita Cascada de Luckle.',
    'Y mas...',
  ];
  const tour = 'Sierra Verde Peru';
  const phones = ['2421415','4442111'];
  const mail = 'Gonzalo Luis Cordova del Campo'
  const address = 'Jr. Colon 110 Of. 706. Lima, Lima, Miraflores'
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
