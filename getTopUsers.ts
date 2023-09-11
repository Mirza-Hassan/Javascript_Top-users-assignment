//mock data
let mockUsers: User[] = [
   { distance: 10, id: "1", jobTitles: ["Developer", "Engineer"], name: "Alice" },
   { distance: 15, id: "2", jobTitles: ["Designer"], name: "Bob" },
   { distance: 25, id: "3", jobTitles: ["Engineer"], name: "Charlie" },
];

interface User {
    distance: number;
    id: string;
    jobTitles: string[];
    name: string;
  }
  
  const getTopUsers = (
    users: User[],
    jobTitleQuery: string,
    maxDistance = 20,
    // Line 19: The default limit for the number of returned users is set to Number.MAX_SAFE_INTEGER, which is an extremely large number.
    limit = 10 // Changed default limit to 10
  ) => {
    const topUsers: User[] = [];
  
    for (const user of users) {
    // Line 25: By extracting the 'distance' and 'jobTitles' properties directly from the 'user' object.
    const { distance, jobTitles } = user; // Use destructuring to make the code more readable.
     if (distance < maxDistance) {
      for (const jobTitle of jobTitles) {
        if (jobTitle.includes(jobTitleQuery)) {
           // Line 30: Consider using the push method instead of unshift to add valid users to the topUsers array. 
            topUsers.push(user); // Use push instead of unshift
            // Line 32: Instead of using a flag variable (valid), you can simplify this by breaking out of the inner loop when a valid job title is found.
            break; // Break when a valid job title is found
          }
        }
      }
    }
  
    topUsers.sort((a, b) => a.distance - b.distance); // Simplified sorting using a custom comparison function
  
    return topUsers.slice(0, limit);
  };

  module.exports = getTopUsers; // Export the function
