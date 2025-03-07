# Group Expense Tracker

A simplified group expense tracker application built with **Next.js**, **Supabase**, and **TypeScript**. This application allows users to create groups, add expenses, and track shared expenses within a group.

## Features

- **User Authentication**: Register and login using Supabase Auth.
- **Groups**: Create and view groups linked to the authenticated user.
- **Expenses**: Add and view expenses within a group.
- **Protected Routes**: Unauthenticated users are redirected to the login page.

## Technologies Used

- **Next.js**: React framework for server-side rendering and routing.
- **Supabase**: Open-source Firebase alternative for authentication and database.
- **TypeScript**: Adds static typing to JavaScript for better developer experience.
- **AI Assistance**: Used AI tools to assist in debugging, code generation, and documentation.

## How AI Was Used in This Project

This project utilized AI tools to assist in various stages of development:

1. **Code Generation**:
   - AI was used to generate boilerplate code for authentication, database queries, and API routes.
   - Example: The `withAuth` Higher-Order Component (HOC) for protecting routes was partially generated using AI.

2. **Debugging**:
   - AI helped identify and fix issues in the code, such as incorrect Supabase queries and navigation problems.
   - Example: Debugging the `fetchGroups` function to ensure proper data fetching from Supabase.

3. **Documentation**:
   - AI assisted in writing clear and concise documentation, including this `README.md` file.
   - Example: Generating explanations for how the authentication flow works.

4. **TypeScript Integration**:
   - AI provided guidance on adding TypeScript types to the project, ensuring type safety and better code quality.
   - Example: Defining interfaces for `Group` and `Expense` data structures.

5. **Best Practices**:
   - AI suggested best practices for structuring the project, managing state, and handling errors.
   - Example: Implementing loading states and error handling in the `withAuth` HOC.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/group-expense-tracker.git
   cd group-expense-tracker
Install Dependencies:

bash
Copy
npm install
Set Up Supabase:

Create a Supabase project at https://supabase.com.

Enable email/password authentication.

Create the groups and expenses tables using the SQL scripts provided in the supabase-setup.sql file.

Configure Environment Variables:
Create a .env.local file in the root directory and add your Supabase credentials:

env
Copy
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
Run the Application:

bash
Copy
npm run dev
Access the Application:
Open your browser and navigate to http://localhost:3000.
