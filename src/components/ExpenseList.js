import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import { removeExpense } from '../actions/expenses';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
    {}
  </div>
);

// check this out later
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
