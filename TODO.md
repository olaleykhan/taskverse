# Real-Time To-Do List Application

This project is a real-time collaborative to-do list application built with Next.js, TypeScript, React, and WebSockets. Below is a checklist of tasks grouped by milestones to guide the development process from scaffolding the project to deploying the application with Docker.

## Project Setup

### Scaffolding the Project
- [x] Initialize a new Next.js project with TypeScript
- [ ] Set up ESLint and Prettier for code linting and formatting
- [ ] Install necessary dependencies (React, Redux, Pusher, etc.)
- [ ] Set up a basic project structure

## State Management with Redux

### Setting Up Redux
- [ ] Install Redux and Redux Toolkit
- [ ] Create a Redux store
- [ ] Define the initial state for tasks
- [ ] Create actions and reducers for task management (fetch, add, delete, toggle)

## WebSocket Integration

### Setting Up Pusher.io
- [ ] Create a Pusher.io account and set up a sandbox
- [ ] Install Pusher client library
- [ ] Initialize Pusher client in the application
- [ ] Set up WebSocket connections to handle real-time updates

## UI Components

### Creating Components
- [ ] Create a TaskList component to display tasks
- [ ] Create a TaskItem component for individual tasks
- [ ] Create an AddTaskForm component for adding new tasks
- [ ] Style components using CSS Modules or styled-components

## Functionality Implementation

### Task Management
- [ ] Fetch a default list of tasks on page load
- [ ] Implement adding tasks functionality
- [ ] Implement deleting tasks functionality
- [ ] Implement toggling tasks as done functionality
- [ ] Ensure real-time updates for all task actions using WebSockets

## Extras

### Additional Features
- [ ] Display the creator of each task
- [ ] Display who marked the task as done

## Testing

### Unit Testing
- [ ] Set up Jest and React Testing Library
- [ ] Write unit tests for components
- [ ] Write unit tests for Redux actions and reducers

### End-to-End Testing
- [ ] Set up Cypress for end-to-end testing
- [ ] Write tests for key user flows (adding, deleting, and marking tasks)

## Deployment

### Docker and Deployment
- [ ] Write a Dockerfile to containerize the application
- [ ] Create a docker-compose.yml file (if needed)
- [ ] Set up GitHub Actions for CI/CD
- [ ] Deploy the application to Vercel

## Tracking Progress

Use the checklist above to track your progress. You can tick off each item as you complete it. To track your overall progress, you can calculate the percentage of completed tasks.

### Progress Calculation

The total number of tasks: **30**

To calculate the percentage of progress:
\[ \text{Progress} (\%) = \left( \frac{\text{Number of completed tasks}}{\text{Total number of tasks}} \right) \times 100 \]

Keep this formula handy to update your progress regularly.

---

By following this checklist, you can ensure a systematic and thorough approach to building the real-time to-do list application. Good luck!