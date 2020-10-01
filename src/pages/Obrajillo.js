import React from 'react';
import { Content } from 'react-bulma-components';

import Title from '../components/Title';
import Gift from '../components/Gift';

import img from '../components/laviuda.jpg';

export default () => {
  const title = 'Full Day: Cordillera la Viuda + Obrajillo';
  const booking = '00000';
  const date = '00 de octubre del 2020';
  const time = '5:10 am';
  const dropon = 'Av. Jorge Basadre Cdra. 1, cruce con Av. Javier Prado Oeste Cdra. 1.';
  const duration = '1 día';
  const include = [
    'Visita al pueblo de Canta.',
    'Excursión a la Cordillera la Viuda.',
    'Visita a la Laguna de Chuchón.',
    'Visita a la Laguna 7 Colores.',
    'Visita a la Laguna de Leoncocha.',
    'Catarata de Pomora.',
    'Visita a la Comunidad de Cullhuay.',
    'Visita al Pueblo de Obrajillo.',
    'Visita Cascada de Luckle.',
    'Y mas...',
  ];
  const tour = 'XXXXXX';
  const phones = ['000000000'];
  const mail = 'xxxx@xxx.xxx'
  const address = 'XXXXX'
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
