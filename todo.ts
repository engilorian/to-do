import fs from 'fs';
import path from 'path';
import readline from 'readline';


interface Task {
  id: number;
  title: string;
  completed: boolean;
}


const tasksFilePath = path.resolve(__dirname, 'tasks.json');


function readTasks(): Task[] {
  if (!fs.existsSync(tasksFilePath)) {
    return [];
  }
  const data = fs.readFileSync(tasksFilePath, 'utf-8');
  return JSON.parse(data);
}


function writeTasks(tasks: Task[]): void {
  fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
}


function addTask(title: string): void {
  const tasks = readTasks();
  const newTask: Task = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    completed: false,
  };
  tasks.push(newTask);
  writeTasks(tasks);
  console.log(`Task added: ${title}`);
}


function listTasks(): void {
  const tasks = readTasks();
  if (tasks.length === 0) {
    console.log('No tasks available.');
    return;
  }
  tasks.forEach((task) => {
    console.log(`${task.id}. [${task.completed ? 'x' : ' '}] ${task.title}`);
  });
}


function removeTask(id: number): void {
  const tasks = readTasks();
  const updatedTasks = tasks.filter((task) => task.id !== id);
  if (updatedTasks.length === tasks.length) {
    console.log(`Task with ID ${id} not found.`);
    return;
  }
  writeTasks(updatedTasks);
  console.log(`Task with ID ${id} removed.`);
}


function completeTask(id: number): void {
  const tasks = readTasks();
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    console.log(`Task with ID ${id} not found.`);
    return;
  }
  task.completed = true;
  writeTasks(tasks);
  console.log(`Task with ID ${id} marked as completed.`);
}


function showMenu(): void {
  console.log('\nTo-Do List CLI');
  console.log('1. Add Task');
  console.log('2. List Tasks');
  console.log('3. Remove Task');
  console.log('4. Complete Task');
  console.log('5. Exit');
}

function main(): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function prompt(): void {
    showMenu();
    rl.question('Choose an option: ', (choice) => {
      switch (choice) {
        case '1':
          rl.question('Enter task title: ', (title) => {
            addTask(title);
            prompt();
          });
          break;
        case '2':
          listTasks();
          prompt();
          break;
        case '3':
          rl.question('Enter task ID to remove: ', (id) => {
            removeTask(Number(id));
            prompt();
          });
          break;
        case '4':
          rl.question('Enter task ID to complete: ', (id) => {
            completeTask(Number(id));
            prompt();
          });
          break;
        case '5':
          console.log('Goodbye!');
          rl.close();
          break;
        default:
          console.log('Invalid choice. Please try again.');
          prompt();
      }
    });
  }

  prompt();
}

main();
