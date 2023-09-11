# Top users assignment

Description: 

Receive an array of users with some properties. The task is to return the top users within it. To determine eligible users:

- Job titles need to partially match the input query string.

- Users are at most a specific distance away, default 20.

The array should be ordered by the distance ascending, so the closest user will be the first element and the returned array should be limited to a specific length.
```
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
 limit = Number.MAX_SAFE_INTEGER
) => {
 const topUsers: User[] = [];

 for (const user of users) {
   if (user.distance < maxDistance) {
     let valid = false;
     for (const jobTitle of user.jobTitles) {
         if (jobTitle.includes(jobTitleQuery)) {
          valid = true;
           continue;
         }
       }
       if (valid) {
         topUsers.unshift(user);
       }
     }
  }
 
   topUsers.sort((a, b) => a.distance - b.distance);

   return topUsers.slice(0, limit);
 };

```
# Pre Requisites

- Frontend: Typescript
- Testing: Jest

# Setup Instructions

1. Clone the repository
```
git clone https://github.com/Mirza-Hassan/Top-users-assignment.git
```
2. Run the following command to install the required dependencies:
```
npm install
```
2. install TypeScript globally:
```
npm install -g typescript
```
3. Compile TypeScript (if applicable):
```
tsc getTopUsers.ts
```
4. Run the project:
```
node getTopUsers.js
```
# Testing
1. Make sure you have Jest installed. You can install it using:
```
npm install --save-dev jest
```
2. Run your tests using the command:
```
npx jest
```
or 
```
npx jest getTopUsers.test.js
```
