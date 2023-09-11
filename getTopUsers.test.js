// Import the function
const getTopUsers = require('./getTopUsers');

// Test case
test('getTopUsers returns valid users within maxDistance', () => {
  const users = [
    { distance: 10, id: "1", jobTitles: ["Developer", "Engineer"], name: "Alice" },
    { distance: 15, id: "2", jobTitles: ["Designer"], name: "Bob" },
    { distance: 25, id: "3", jobTitles: ["Engineer"], name: "Charlie" },
   ];

  const result = getTopUsers(users, 'Engineer', 20, 2);

  // Expecting users within maxDistance and matching job title
  expect(result).toEqual([
    { distance: 10, id: "1", jobTitles: ["Developer", "Engineer"], name: "Alice" },
   ]);
});
