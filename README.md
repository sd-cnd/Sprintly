# Sprintly - Project and Sprint Management App

Sprintly is a modern project and sprint management application built using **React**, **Next.js**, **Tailwind CSS**, **Neon DB**, **Prisma**, **Clerk Authentication**, and **Shadcn UI**. It provides a clean, intuitive interface to manage projects, sprints, and issues—perfect for teams looking to stay organized and productive.

This app is designed to demonstrate full-stack development capabilities while providing useful features like task tracking, sprint management, drag-and-drop functionality for issues, and seamless authentication and database management.

## Project Overview

Sprintly allows users to:
- Create and manage **Projects** and **Organizations**.
- Track tasks and issues using a **Kanban board**.
- Create and manage **Sprints** with associated tasks.
- Use **Clerk** authentication for secure user logins and sign-ups.
- Interact with the **Neon DB** for storing and retrieving data with the help of **Prisma** ORM.

With **Sprintly**, teams can manage their workflows, streamline their project management processes, and boost overall productivity.

## Key Features

- **User Authentication**: Users can sign in and sign up securely with **Clerk** authentication.
[![User unboarding](https://i.imgur.com/fF3Tnwf.png)](https://i.imgur.com/fF3Tnwf.png)
- **Project Management**: Create and manage **Organizations** and **Projects**.
[![Project Management](https://i.imgur.com/aUawYH6.png)](https://i.imgur.com/aUawYH6.png)
- **Kanban Board**: Easily manage tasks and issues on a drag-and-drop **Kanban board**.
[![Kanban board](https://i.imgur.com/zMfwKDz.png)](https://i.imgur.com/zMfwKDz.png)
- **Sprint Management**: Plan and manage **Sprints** with associated tasks.
[![Sprint Management](https://i.imgur.com/y3dKarA.png)](https://i.imgur.com/y3dKarA.png)

[![Sprint Management](https://i.imgur.com/2vTItVb.png)](https://i.imgur.com/2vTItVb.png)

- **Database Integration**: **Neon DB** and **Prisma ORM** for efficient data management.
[![Database Integration](https://i.imgur.com/sbGF6Hl.png)](https://i.imgur.com/sbGF6Hl.png)

[![Database Integration](https://i.imgur.com/MaMzJEi.png)](https://i.imgur.com/MaMzJEi.png)

- **Responsive Design**: The app is fully responsive and works across various devices.
Full screen view :-
[![Responsive Design](https://i.imgur.com/uGsf3yq.png)](https://i.imgur.com/uGsf3yq.png)
Mobile view :-
[![Responsive Design](https://i.imgur.com/qGbjvHx.png)](https://i.imgur.com/qGbjvHx.png)
- **User Onboarding**: A smooth onboarding process for new users.
[![User Onboarding](https://i.imgur.com/X36Hlaq.png)](https://i.imgur.com/X36Hlaq.png)

## Tech Stack

- **Frontend**: React, Next.js, Tailwind CSS, Shadcn UI
- **Backend**: Next.js API Routes
- **Database**: Neon DB
- **Authentication**: Clerk Authentication
- **ORM**: Prisma

## Installation

Follow these steps to get the project running locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/sd-cnd/Sprintly.git
   
2. **Navigate into the project folder:**

   ```bash
   cd project_folder
   ```

3. **Install dependencies:**

    ```bash
    npm install
    ```
    
4. **Set up environment variables:**
    ```bash
    Create a .env.local file in the root of the project and add your environment variables.

    DATABASE_URL=

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```

## Database Schema

Below is the database schema for Sprintly, which defines the tables and relationships used for managing users, organizations, projects, sprints, and issues.

[![Database Schema](https://i.imgur.com/01o8ovN.png)](https://i.imgur.com/01o8ovN.png)

## Credits
- Clerk for authentication
- Neon DB for the database
- Prisma for database ORM
- Tailwind CSS for styling
- Shadcn UI for UI components

## Links :
- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.dev/docs)
- [Neon DB Documentation](https://neon.tech/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/docs)

