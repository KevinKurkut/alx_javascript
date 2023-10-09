const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Status code:', response.statusCode);
    return;
  }

  const tasks = JSON.parse(body);
  // empty object
  const completedTasks = {};
  tasks.forEach(task => {
    if (task.completed) {
      if (completedTasks[task.userId]) {
        completedTasks[task.userId]++;
      } else {
        completedTasks[task.userId] = 1;
      }
    }
  });
  for (const userId in completedTasks) {
    console.log(`User ${userId} completed ${completedTasks[userId]} tasks`);
  }
});
