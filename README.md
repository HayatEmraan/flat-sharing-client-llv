# Flat Share

Welcome to the backend repository for HealthCare, a project developed as part of the "Level 2 Web Development Course" offered by Programming Hero. This repository contains the backend codebase responsible for handling server-side logic, database management, and communication between different system components.

## Table of Contents

- [Flat Share Backend](#healthcare-server)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation and Setup](#installation-and-setup)
- [Flat Share Frontend](#healthcare-server)
  - [Technologies Used](#technologies-used)
  - [Features](#features)
  - [Installation and Setup](#installation-and-setup)
  - [Account Creation](#table-of-contents)
    - [Sign Up](#table-of-contents)
    - [Sign In](#table-of-contents)
  - [Home page](#table-of-contents)
    - [Explore](#table-of-contents)
    - [Search by need](#table-of-contents)
  - [Property Page](#table-of-contents)
    - [Explore](#table-of-contents)
    - [Details](#table-of-contents)
  - [Sign In as Admin](#table-of-contents)
    - [Home](#table-of-contents)
    - [Users](#table-of-contents)
    - [Bookings](#table-of-contents)
    - [Properties](#table-of-contents)
    - [Bookings (Reserve)](#table-of-contents)
  - [Sign In as User](#table-of-contents)
    - [Home](#table-of-contents)
    - [My Bookings](#table-of-contents)
    - [My Properties](#table-of-contents)
    - [Bookings (Reserve)](#table-of-contents)
    - [Listing](#table-of-contents)
  - [Shared with User](#table-of-contents)
    - [Settings](#table-of-contents)
    - [Logout](#table-of-contents)
  - [Restriction](#table-of-contents)
    - [For Admin](#table-of-contents)
      - [Listing](#table-of-contents)
      - [Reserve](#table-of-contents)
    - [For User](#table-of-contents)
      - [Users](#table-of-contents)
- [Deployment](#healthcare-server)
  - [Frontend](#features)
  - [Backend](#technologies-used)

## Features

- **User Authentication and Authorization**: Secure authentication using JWT tokens.
- **User Management**: CRUD operations for managing user accounts.
- **Booking Management**: Create, update, and delete appointments.
- **Prescription Management**: Create, update, and delete prescriptions.
- **Email Notifications**: Send email notifications for verify email, account create confirmation, and booking reserve & update so on.

## Technologies Used

- **Node.js**: Runtime environment for executing JavaScript code.
- **Express.js**: Web application framework for building APIs and handling HTTP requests.
- **Prisma**: ORM (Object-Relational Mapping) tool for database management.
- **PostgreSQL**: Relational database management system.
- **JWT**: JSON Web Tokens for secure authentication and authorization.
- **bcrypt**: Library for hashing passwords.
- **nodemailer**: Library for sending email notifications.

## Installation and Setup

1. Clone this repository: `git clone https://github.com/HayatEmraan/flat-sharing-server-llv`
2. Install dependencies: `npm install`
3. Set up the environment variables by creating a `.env` file and filling in the required variables based on the provided `.env.example` file.
4. Run the database migrations: `npx prisma migrate dev`
5. Start the server: `npm run dev`
