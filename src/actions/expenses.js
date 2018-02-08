import uuid from 'uuid';
import db from '../firebase/firebase';
// ADD EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => (dispatch, getState) => {
  const uid = getState().auth.uid;
  const {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = expenseData;
  const expense = { description, note, amount, createdAt };

  return db
    .ref(`users/${uid}/expenses`)
    .push(expense)
    .then((ref) => {
      dispatch(
        addExpense({
          id: ref.key,
          ...expense
        })
      );
    });
};

// REMOVE EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => (dispatch, getState) => {
  const uid = getState().auth.uid;
  return db
    .ref(`users/${uid}/expenses/${id}`)
    .remove()
    .then((ref) => dispatch(removeExpense({ id })));
};
// EDIT EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => (dispatch, getState) => {
  const uid = getState().auth.uid;
  return db
    .ref(`users/${uid}/expenses/${id}`)
    .update(updates)
    .then((ref) => dispatch(editExpense(id, updates)));
};

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => (dispatch, getState) => {
  const uid = getState().auth.uid;
  return db
    .ref(`users/${uid}/expenses`)
    .once('value')
    .then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setExpenses(expenses));
    });
};
