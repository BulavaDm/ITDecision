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
        icon: 'operation_icon.svg'
      },
      {
        title: 'Отчеты',
        icon: 'reports_icon.svg'
      },
      {
        title: 'Контрагенты',
        icon: 'contragents_icon.svg'
      },
      {
        title: 'Проекты',
        icon: 'work_icon.svg'
      },  
      {
        title: 'Статьи расходов',
        icon: 'accounts_icon.svg'
      }, 
      {
        title: 'Сотрудники',
        icon: 'person_icon.svg'
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
            billDescription: 'monobank',
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
            billDescription: 'monobank',
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
            billDescription: 'monobank',
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
            billDescription: 'monobank',
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
            billDescription: 'monobank',
            payee: 'Сайт Кранкомплект',
            serviceDescription: 'Разработка',
            fullDescription: 'Аванс за разработку',
            paymentStatus: 'Оплачено',
            amount: '+170 000₴',
            amountStatus: true
          }
        ]
      },
    ],
    usersList: [
      {
        id: 0,
        avatar: 'photo_0.svg',
        abbr: 'ДК',
        showAbbr: true,
        favorite: true
      },
      {
        id: 1,
        avatar: 'photo_1.svg',
        abbr: '',
        showAbbr: false,
        favorite: true
      },
      {
        id: 2,
        avatar: 'photo_2.svg',
        abbr: '',
        showAbbr: false,
        favorite: true
      },
      {
        id: 3,
        avatar: 'photo_3.svg',
        abbr: '',
        showAbbr: false,
        favorite: true
      },
    ],
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

    getterUsersList: state => {
      return state.usersList;
    },
  } 
});

export default store