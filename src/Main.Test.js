import { initializeTimes, updateTimes } from './Main';

global.window.fetchAPI = jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
global.window.submitAPI = jest.fn(() => true);

// initialize Times
test('initializeTimes returns non-empty array', () => {
  const result = initializeTimes();
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBeGreaterThan(0);
});

// update Times
test('updateTimes returns the same value that is provided in the state', () => {
  const currentState = ['17:00', '18:00', '19:00'];
  const action = { type: 'ANY_ACTION' };
  const result = updateTimes(currentState, action);
  expect(result).toEqual(currentState);
});


test('updateTimes returns new times when date changes', () => {
  const currentState = ['17:00', '18:00', '19:00'];
  const action = {type: 'DATE_CHANGED', date: '2024-01-05'}
  const result = updateTimes(currentState, action);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
})

// writing to loacalStorage
test('writes booking to localStorage', () => {
  const booking = { date: '2024-01-15'}
  localStorage.setItem('test-booking', JSON.stringify(booking));

  const saved = JSON.parse(localStorage.getItem('test-booking'));
  expect(saved.date).toBe('2024-01-15');
})

// reading from localStorage
test('reads booking from localStorage', () => {
  const booking = { date: '2024-01-15', time: '18:00' };
  localStorage.setItem('test-booking', JSON.stringify(booking));

  const saved = JSON.parse(localStorage.getItem('test-booking'));
  expect(saved.time).toBe('18:00');
});

