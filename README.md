# Campus Notes

## Introduction

_Campus Notes_ is a web application designed to streamline the process of sharing and accessing study materials among students. It allows students to upload, share notes by semester, year and subject, providing a centralized platform for academic resources. The application also features a global chat system for real-time collaboration and discussions between students, enhancing the overall learning experience.

### **Why this project?**

Students often face challenges in accessing organized study materials. Many rely on scattered platforms for sharing notes, which leads to confusion and inefficiencies. _Campus Notes_ solves this problem by offering a structured way to upload and access notes, while fostering collaboration through a real-time chat feature.

## Features

- **User Authentication**: Sign up, login, and Google OAuth integration for secure access.
- **Profile Management**: Create and manage user profiles to track uploaded notes and interactions.
- **File Uploads**: Upload and share notes using Google Drive API. Notes are categorized by semester and subject.
- **Notes Filtering**: Filter notes based on semester, subject, or custom tags to easily access relevant materials.
- **Global Chat**: Real-time messaging using WebSockets to facilitate communication and collaboration among students.
- **Responsive Design**: Mobile-friendly interface for seamless access on any device.

## Tech Stack

- **Frontend**:
  - React.js
  - Tailwind CSS
  - Material Tailwind
- **Backend**:
  - Node.js
  - Express.js
  - WebSockets (for real-time communication)
- **Database**:
  - MongoDB (NoSQL)
- **APIs and Integrations**:
  - Google Drive API (for file storage)
- **Development Tools**:
  - Git/GitHub (version control)
  - VS Code (IDE)
  - Postman (API testing)
- **Deployment**:
  - Backend - Render
  - Frontend - Vercel

## How to Host Locally

Follow these steps to set up _Campus Notes_ locally on your machine:

### Prerequisites

Make sure you have the following installed:

- **Node.js** (Version 14 or higher)
- **npm** (Node package manager) or **yarn**
- **MongoDB** (If you want to run the local database)
- **Google Cloud Project** with OAuth enabled for Google API (for file uploads via Google Drive)

### Step-by-Step Instructions

Clone the repository

```bash
git clone https://github.com/CampusNotes/Backend.git
```

Go to the project directory

```bash
  cd Backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`APP_PORT`
`MONGO_URI`
`SALT`
`ACCESS_TOKEN_SECRET_KEY`
