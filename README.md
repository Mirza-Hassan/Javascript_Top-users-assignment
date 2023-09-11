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

1. Clone the repository:
```
git clone https://github.com/Mirza-Hassan/Top-users-assignment.git
```
Navigate to the project directory:
```
cd Top-users-assignment
```
2. Run the following command to install the required dependencies:
```
npm install
```
2. Compile TypeScript (if applicable):
```
tsc getTopUsers.ts
```
3. Run the project:
```
node getTopUsers.js
```

# Testing

1. Run your tests using the command:
```
npx jest
```
or If you want to run specific test files, you can specify the file path:
```
npx jest getTopUsers.test.js
```
2. If Jest is not already installed globally, You can install it using:
```
npm install --save-dev jest
```

![ts](https://github.com/Mirza-Hassan/Top-users-assignment/assets/17096257/ba50b830-52ce-48f4-92e8-a89316c16a35)

