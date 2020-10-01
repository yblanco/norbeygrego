import React from 'react';
import { Content } from 'react-bulma-components';

import Title from '../components/Title';
import Gift from '../components/Gift';

import img from '../components/paracas.jpg';

export default () => {
  const title = 'Full Day Paracas - Islas Ballestas, Tubulares';
  const booking = 67245;
  const date = '14 de marzo del 2021';
  const time = '04:00 AM';
  const dropon = 'Saga Falabella, cruce de Av. Arequipa y Av. José Pardo (Miraflores)';
  const duration = '1 día';
  const include = [
    'Excursión a las Islas Ballestas (lancha + chaleco salvavidas + guía).',
    'Carros areneros en las Dunas de la Huacachina.',
    'Sandboard (instructor + tabla).',
    'Visita a la bahía de Paracas.',
    'Visita al geoglifo El Candelabro.',
    'Visita a la laguna de la Huacachina.',
    'Visita a vitivinícola en Ica.',
    'Visita a vitivinícola en Chincha.',
    'Visita a chocolatería en Ica.',
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
