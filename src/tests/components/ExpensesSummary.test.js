import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={1} expensesTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with many expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={22} expensesTotal={1239087} />
  );
  expect(wrapper).toMatchSnapshot();
});
