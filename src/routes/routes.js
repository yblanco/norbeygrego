import Routes from './class';

import Home from '../pages/Home';
import Obrajillo from '../pages/Obrajillo';
import Chancay from '../pages/Chancay'
import Churin from '../pages/Churin'
import Paracas from '../pages/Paracas'



const routes = {
  notFound: {
    link: '*',
    component: Home,
  },
  home: {
    link: '/',
    component: Home,
  },
  Primero: {
    link: '/first',
    component: Obrajillo, //obrajillo
  },
  Segundo: {
    link: '/second',
    component: Chancay, //chancay
  },
  Tercero: {
    link: '/third',
    component: Churin, //churin
  },
  Cuarto: {
    link: '/fourth',
    component: Paracas, // paracas
  },
};

export default new Routes(routes);
