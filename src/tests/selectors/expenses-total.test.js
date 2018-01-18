import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test('should return the value of a single expense', () => {
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(expenses[0].amount);
});
test('should return the value of all expense', () => {
  const res = selectExpensesTotal(expenses);
  const total = expenses[0].amount + expenses[1].amount + expenses[2].amount;
  expect(res).toBe(total);
});
