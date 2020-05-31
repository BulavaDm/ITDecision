import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userCard: {
      avatar: 'avatar.svg',
      fullName: 'Сергей Василенко',
      company: 'Newage Systems'
    },
    userActions: [
      {
        title: 'Операции',
        icon: 'src/assets/images/operation_icon.svg'
      },
      {
        title: 'Отчеты',
        icon: 'src/assets/images/reports_icon.svg'
      },
      {
        title: 'Контрагенты',
        icon: 'src/assets/images/contragents_icon.svg'
      },
      {
        title: 'Проекты',
        icon: 'src/assets/images/work_icon.svg'
      },  
      {
        title: 'Статьи расходов',
        icon: 'src/assets/images/accounts_icon.svg'
      }, 
      {
        title: 'Сотрудники',
        icon: 'src/assets/images/person_icon.svg'
      }, 
    ],
    transactionsData: [
      {
        id: 0,
        date: 'Сегодня, 10 июля',
        carts: [
          {
            id: 0,
            payer: 'ИП Бирюков Михаил Алексеевич',
            billDescription: 'Со счёта: monobank',
            payee: 'Сайт Volkswagen',
            serviceDescription: 'Продвижение',
            fullDescription: 'Оплата за продвижение Google Adwords июнь-июль',
            paymentStatus: 'Оплачено',
            amount: '+21 239₴',
            amountStatus: true
          },
          {
            id: 1,
            payer: 'Роман Мельников',
            billDescription: 'Со счёта: monobank',
            payee: 'ИП Eltron',
            serviceDescription: 'Зарплата сотрудникам',
            fullDescription: 'Аванс июль',
            paymentStatus: 'Оплачено',
            amount: '-56 000₴',
            amountStatus: false
          },
          {
            id: 2,
            payer: 'ООО "Кранкомплект"',
            billDescription: 'Со счёта: monobank',
            payee: 'Сайт Кранкомплект',
            serviceDescription: 'Разработка',
            fullDescription: 'Аванс за разработку',
            paymentStatus: 'Оплачено',
            amount: '+170 000₴',
            amountStatus: true
          }
        ]
      },
      {
        id: 1,
        date: 'Вчера, 9 июля',
        carts: [
          {
            id: 0,
            payer: 'Роман Мельников',
            billDescription: 'Со счёта: monobank',
            payee: 'Обучение сотрудников',
            serviceDescription: 'Расходы на офис',
            fullDescription: 'Оплата обучения',
            paymentStatus: 'Оплачено',
            amount: '-8 000₴',
            amountStatus: false
          },
          {
            id: 1,
            payer: 'ООО "Кранкомплект"',
            billDescription: 'Со счёта: monobank',
            payee: 'Сайт Кранкомплект',
            serviceDescription: 'Разработка',
            fullDescription: 'Аванс за разработку',
            paymentStatus: 'Оплачено',
            amount: '+170 000₴',
            amountStatus: true
          },
          //{
          //  id: 2,
          //  payer: 'ИП Бирюков Михаил Алексеевич',
          //  billDescription: 'Со счёта: monobank',
          //  payee: 'Сайт Volkswagen',
          //  serviceDescription: 'Продвижение',
          //  fullDescription: 'Оплата за продвижение Google Adwords июнь-июль',
          //  paymentStatus: 'Оплачено',
          //  amount: '+21 239₴',
          //  amountStatus: true
          //},
        ]
      },
    ]
  },
  mutations: {
    
  },
  getters: {
    getterUserCard: state => {
      return state.userCard;
    },

    getterUserActions: state => {
      return state.userActions;
    },

    getterTransactionsData: state => {
      return state.transactionsData;
    },
  } 
});

export default store