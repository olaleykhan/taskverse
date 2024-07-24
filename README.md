# Unith-Imgur

## live site: [https://taskverse-p2mw.onrender.com/](https://taskverse-p2mw.onrender.com/)

### live site: [https://converse.lekan.dev/](https://converse.lekan.dev/)

## Overview

Realtime To-Do is a collaborative to-do list application that allows multiple users to view, add, mark, and delete tasks in real-time using Pusher.

## Project Structure

## Project Summary

- `src`: Main source code directory.
- `public`: Contains public assets accessible by HTML
- `src/app`: Next JS folder containing routes and pages
- `src/__test__`: General test folders (You will find other tests closer to their component folders for easier accessibility)
- `src/components`: General component files reusable accross multiple features/Routes
- `src/lib`: Library directories that help with powering the app but are not related to NextJS
- `src/theme`: Material UI related theming and global resets
- `static`: Static assets like images and icons.
- `features`: separates components by features. components and hooks should only be imported within the dame directory or to it's parent directory in src/app. (if a component is needed accross more than one feature then, it should be in src/components)
- `hooks`: gotta love this one. this are reuseable react logics that are able to maintain state while reuseable accross multiple components.

## Stack

- [Next.js](https://nextjs.org/): React framework for building web applications with server-side rendering.
- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript that compiles to plain JavaScript.
- [MUI](https://mui.com/): React components for faster and easier web development.
- [Vitest](https://vitest.dev/): Vite-native unit test framework.
- [Pusher](pusher.com): Real-time communication service for WebSockets.
- [Tailwind](.....)

## Setting Up


### Run Locally

Clone the repository:

```bash
git clone https://github.com/olaleykhan/taskverse
cd taskverse
```
install dependencies

```bash
npm install
```

run the development server:

```bash
npm run dev
```

### Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.

- To run development container: `docker compose -f compose.dev.yaml up --build`.

```bash
docker compose -f compose.dev.yaml up --build
```

- To Run your production build: `docker compose up --build`.

```bash
docker compose up --build

```


Environment Variables
Make sure to set up your environment variables in a .env.local file. You can use the .env.example file as a template. Here are the variables you need to set:

PUSHER_APP_ID=your-pusher-app-id
PUSHER_KEY=your-pusher-key
PUSHER_SECRET=your-pusher-secret
PUSHER_CLUSTER=your-pusher-cluster


Sign up at Pusher.com to get your Pusher credentials and fill them in.