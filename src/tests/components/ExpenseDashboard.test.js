import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboard from '../../components/ExpenseDashboard';
import expenses from '../fixtures/expenses';

test('should render ExpenseDashboard correctly', () => {
  const wrapper = shallow(<ExpenseDashboard />);

  expect(wrapper).toMatchSnapshot();
});
