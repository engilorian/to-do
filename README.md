# To-Do List CLI

My Personal CLI To-Do application built with TypeScript. This app enables you to manage tasks efficiently with options to add, list, remove, and mark tasks as completed. All tasks are saved persistently in a JSON file.

## Features

- **Task Management**: Add, list, remove, and mark tasks as completed.
- **Persistence**: Tasks are stored locally in a JSON file.
- **Interactive CLI**: Intuitive menu-based navigation.
- **TypeScript**: Strictly typed for reliability and maintainability.

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your system.
- **TypeScript**: Install TypeScript globally if not already installed:

  ```bash
  npm install -g typescript
  ```

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Compile TypeScript to JavaScript:

   ```bash
   tsc todo.ts
   ```

4. Run the app:

   ```bash
   node todo.js
   ```

## Usage

1. Launch the app:

   ```bash
   node todo.js
   ```

2. Follow the interactive menu to:
   - Add a new task.
   - List all tasks.
   - Remove a task by ID.
   - Mark a task as completed.
   - Exit the application.

## Project Structure

```plaintext
.
├── tasks.json       # Stores the tasks persistently
├── todo.ts          # Main TypeScript file
├── todo.js          # Compiled JavaScript file
├── package.json     # Project metadata and dependencies
├── README.md        # Documentation
└── .gitignore       # Files and folders to ignore in Git
```
