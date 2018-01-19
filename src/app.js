import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(
  addExpense({ description: 'Water Bill', amount: 5000, createdAt: -100 })
);
store.dispatch(
  addExpense({ description: 'Gas Bill', amount: 3500, createdAt: 1000 })
);
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app')); //
