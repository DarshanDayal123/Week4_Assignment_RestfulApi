# Task Management API

This is a simple RESTful API built using Node.js and Express for managing tasks in a Task Management application. The API allows users to create, update, delete, and list tasks, making it suitable for integration with a frontend task management application.

## Features

- Create a task
- Get all tasks
- Get a task by ID
- Update a task by ID
- Delete a task by ID

## Technologies

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing tasks.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

## Prerequisites

- **Node.js** (v14+ recommended)
- **MongoDB** (running locally or using a cloud service like MongoDB Atlas)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/task-manager-api.git
    cd task-manager-api
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up the database connection in the `config/database.js` file. Make sure your MongoDB server is running, or use MongoDB Atlas. Example:
    ```js
    mongoose.connect('mongodb://localhost:27017/taskmanager', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    ```

4. Run the application:
    ```bash
    npm run dev
    ```

5. The API should now be running at `http://localhost:5000`.

## API Endpoints

### 1. Get All Tasks

- **URL**: `/api/tasks`
- **Method**: `GET`
- **Description**: Fetches all tasks from the database.

#### Example Response:
```json
[
  {
    "_id": "612d2a3b4f3560303c5a9ef2",
    "title": "Task 1",
    "description": "This is task 1",
    "status": "pending",
    "dueDate": "2023-09-25T10:00:00.000Z",
    "createdAt": "2021-08-31T09:22:19.000Z",
    "updatedAt": "2021-08-31T09:22:19.000Z"
  }
]
