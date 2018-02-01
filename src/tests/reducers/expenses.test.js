import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
  const state = expensesReducers(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('Should remove expense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense if ID not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('Should add an expense', () => {
  const expense = {
    id: '123',
    description: 'Nothin',
    note: '',
    createdAt: 20000,
    amount: 109500
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});
test('Should edit an expense', () => {
  const amount = 1043;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducers(expenses, action);
  expect(state[1].amount).toBe(amount);
});
test('Should not edit an expense if not found', () => {
  const amount = 1043;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
