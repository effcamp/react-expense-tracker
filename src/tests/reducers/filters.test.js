import moment from 'moment';
import filtersReducers from '../../reducers/filters';

test('Should setup default filter values', () => {
  const state = filtersReducers(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('Should set sortBy to amount', () => {
  const state = filtersReducers(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducers(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
  const state = filtersReducers(undefined, {type: 'SET_TEXT_FILTER', text: 'rent'});
  expect(state.text).toBe('rent');
});

test('Should set startDate filter', () => {
  const state = filtersReducers(undefined, {type: 'SET_START_DATE', startDate: 1000 });
  expect(state.startDate).toBe(1000);
})
test('Should set endDate filter', () => {
  const state = filtersReducers(undefined, {type: 'SET_END_DATE', endDate: 1000 });
  expect(state.endDate).toBe(1000);
})

