import React from 'react';
import { Content } from 'react-bulma-components';

import Title from '../components/Title';
import Gift from '../components/Gift';

import img from '../components/chancay.jpg';

export default () => {
  const title = 'Full Day: Chancay - Aucallama - Huaral';
  const booking = 67242;
  const date = '03 de enero del 2021';
  const time = '06:00 AM';
  const dropon = 'Jorge Basadre Cuadra 1, cruce con Av. Javier Prado Oeste Cdra. 1, Alt. Tienda';
  const duration = '1 día';
  const include = [
    'Visita Castillo de Chancay',
    'Visita al Ecotruly Park',
    'Visita Distrito de Aucallama',
    'Visita Pueblo de la Huaca',
    'Recorrido por Catacumba subterránea e Iglesia del pueblo.',
    'City Tour panorámico en la ciudad de Huaral',
    'Recorrido en Hacienda la Huando',
    'Visita en Fundo Huaral',
    'Degustación de vinos',
    'Y mas...',
  ];
  const tour = 'Majestic Transportes y Turismo';
  const phones = ['975122001', '966330601'];
  const mail = 'informes@majestictyt.com'
  const address = 'Av. Cuba 148, Ofic. 1304 - Santa Beatriz. Jesús María, Lima.'
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
