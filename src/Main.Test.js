import { initializeTimes, updateTimes } from './Main';


// Create fake API functions that return predictable data for testing
global.window.fetchAPI = jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
global.window.submitAPI = jest.fn(() => true);


// Test 1 - Check does the function that gets initial times actually return a list of times?
test('initializeTimes returns non-empty array', () => {
  const result = initializeTimes(); // Call the initializeTimes function
  expect(Array.isArray(result)).toBe(true) // Check that it returns an array
  expect(result.length).toBeGreaterThan(0);   // Check that the array is not empty
});


// Test 2 - Check default behavior of updateTimes
test('updateTimes returns the same value that is provided in the state', () => {
  // Create test data
  const currentState = ['17:00', '18:00', '19:00'];
  const action = { type: 'ANY_ACTION' };

  const result = updateTimes(currentState, action);  // Call updateTimes with unknown action type
  expect(result).toEqual(currentState); // Should return the original state unchanged
});


// Test 3 - When user picks a new date, does the system fetch new times for that date?
test('updateTimes returns new times when date changes', () => {
  // Create test data with DATE_CHANGED action
  const currentState = ['17:00', '18:00', '19:00'];
  const action = {type: 'DATE_CHANGED', date: '2024-01-05'}

  const result = updateTimes(currentState, action); // Call updateTimes which should fetch new times
  expect(Array.isArray(result)).toBe(true); // Check it returns an array
  expect(result.length).toBeGreaterThan(0); // Check the array has times in it
})


// Test 4 - writing to loacalStorage, Can we save booking data to the browser's storage?
test('writes booking to localStorage', () => {
  const booking = { date: '2024-01-15'}   // Create test booking data
  localStorage.setItem('test-booking', JSON.stringify(booking)); // Save to localStorage (browser storage)

  const saved = JSON.parse(localStorage.getItem('test-booking')); // Read back from localStorage
  expect(saved.date).toBe('2024-01-15'); // Verify the data was saved correctly
})


// Test 5 - Can we read back the saved booking data correctly?
test('reads booking from localStorage', () => {
  // Save test data to localStorage
  const booking = { date: '2024-01-15', time: '18:00' };
  localStorage.setItem('test-booking', JSON.stringify(booking));

  const saved = JSON.parse(localStorage.getItem('test-booking')); // Read it back
  expect(saved.time).toBe('18:00'); // Verify we can read the time correctly
});

