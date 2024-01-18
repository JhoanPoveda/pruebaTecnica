import { BehaviorSubject } from 'rxjs';
import { IInvoices } from './../shared/Interfaces/IInvoces.interface';

export const invoicesMock: IInvoices[] = [
  {
    commerce: {
      code: 1,
      name: 'Comercio de ropa',
      nit: '1452',
      address: 'Calle 30 # 67-89'
    },
    trans: {
      code: 12,
      meansPayment: { code: 32, description: 'Tarjeta de crédito' },
      state: { code: 1, description: 'Aprobado' },
      total: 10,
      date: '10/1/2024'
    },
    user: {
      id: 101010,
      name: 'Stiven Rojas',
      mail: 'stiven@yomail.com'
    }
  },
  {
    commerce: {
      code: 2,
      name: 'Tienda de electrónicos',
      nit: '9876',
      address: 'Avenida 45 # 123'
    },
    trans: {
      code: 15,
      meansPayment: { code: 29, description: 'PSE' },
      state: { code: 1000, description: 'Rechazada' },
      total: 25,
      date: '12/5/2024'
    },
    user: {
      id: 202020,
      name: 'Laura Pérez',
      mail: 'laura@mail.com'
    }
  },
  {
    commerce: {
      code: 3,
      name: 'Supermercado XYZ',
      nit: '5632',
      address: 'Carrera 10 # 34-56'
    },
    trans: {
      code: 18,
      meansPayment: { code: 41, description: 'Gana' },
      state: { code: 999, description: 'Pendiente' },
      total: 30,
      date: '5/8/2024'
    },
    user: {
      id: 303030,
      name: 'Carlos Gómez',
      mail: 'carlos@gmail.com'
    }
  },
  {
    commerce: {
      code: 4,
      name: 'Librería ABC',
      nit: '8765',
      address: 'Avenida 20 # 78-90'
    },
    trans: {
      code: 21,
      meansPayment: { code: 42, description: 'Caja' },
      state: { code: 1, description: 'Aprobado' },
      total: 15,
      date: '8/12/2024'
    },
    user: {
      id: 404040,
      name: 'Ana Martínez',
      mail: 'ana@hotmail.com'
    }
  },
  {
    commerce: {
      code: 5,
      name: 'Cafetería Sol',
      nit: '2341',
      address: 'Calle 15 # 45-67'
    },
    trans: {
      code: 25,
      meansPayment: { code: 32, description: 'Tarjeta de crédito' },
      state: { code: 1000, description: 'Rechazada' },
      total: 18,
      date: '3/6/2024'
    },
    user: {
      id: 505050,
      name: 'David Sánchez',
      mail: 'david@yahoo.com'
    }
  },
  {
    commerce: {
      code: 6,
      name: 'Ferretería ConstruMax',
      nit: '9987',
      address: 'Diagonal 12 # 56-78'
    },
    trans: {
      code: 29,
      meansPayment: { code: 29, description: 'PSE' },
      state: { code: 999, description: 'Pendiente' },
      total: 22,
      date: '7/9/2024'
    },
    user: {
      id: 606060,
      name: 'Marta López',
      mail: 'marta@gmail.com'
    }
  },
  {
    commerce: {
      code: 7,
      name: 'Peluquería Elegance',
      nit: '7890',
      address: 'Carrera 5 # 23-45'
    },
    trans: {
      code: 33,
      meansPayment: { code: 41, description: 'Gana' },
      state: { code: 1, description: 'Aprobado' },
      total: 12,
      date: '11/2/2024'
    },
    user: {
      id: 707070,
      name: 'Javier Ramírez',
      mail: 'javier@mail.com'
    }
  },
  {
    commerce: {
      code: 8,
      name: 'Farmacia Salud',
      nit: '1234',
      address: 'Avenida 30 # 89-12'
    },
    trans: {
      code: 37,
      meansPayment: { code: 32, description: 'Tarjeta de crédito' },
      state: { code: 1000, description: 'Rechazada' },
      total: 28,
      date: '4/7/2024'
    },
    user: {
      id: 808080,
      name: 'Patricia Torres',
      mail: 'patricia@hotmail.com'
    }
  },
  {
    commerce: {
      code: 9,
      name: 'Restaurante Sabor',
      nit: '5678',
      address: 'Calle 25 # 56-78'
    },
    trans: {
      code: 41,
      meansPayment: { code: 42, description: 'Caja' },
      state: { code: 999, description: 'Pendiente' },
      total: 35,
      date: '9/11/2024'
    },
    user: {
      id: 909090,
      name: 'Roberto Gutiérrez',
      mail: 'roberto@yahoo.com'
    }
  },
  {
    commerce: {
      code: 10,
      name: 'Taller Mecánico AutoFix',
      nit: '4321',
      address: 'Diagonal 8 # 34-56'
    },
    trans: {
      code: 45,
      meansPayment: { code: 29, description: 'PSE' },
      state: { code: 1, description: 'Aprobado' },
      total: 20,
      date: '6/10/2024'
    },
    user: {
      id: 10101010,
      name: 'Sandra Medina',
      mail: 'sandra@mail.com'
    }
  }
]

export const InvoicesResponseMock = new BehaviorSubject(
  JSON.parse(JSON.stringify(invoicesMock))
);
