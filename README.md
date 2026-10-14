# Chatly 💬

**A modern messaging application built for seamless communication.**

Chatly is a messaging app designed to provide a clean, intuitive, and responsive chatting experience. It features email-based verification, user profile customization, and a modern interface inspired by today's messaging platforms.

## ✨ Features

- 🔐 **Email Verification** — Secure authentication using email verification codes.
- 👤 **User Profiles** — Customize your profile with a name, username, profile picture, and bio.
- 💬 **Real-Time Messaging** — A messaging experience designed for seamless conversations.
- 🎨 **Modern UI** — A clean interface with dark and light themes.
- 📱 **Responsive Design** — An interface designed for different screen sizes.

## 🛠️ Tech Stack

### Frontend

<p align="left">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router">
  <img src="https://img.shields.io/badge/React_Icons-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Icons">
</p>

### Backend

<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Nodemailer-22A8E0?style=for-the-badge&logo=minutemailer&logoColor=white" alt="Nodemailer">
</p>

### Tools

<p align="left">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm">
</p>
## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Parham-Saravani/chatly.git
   ```

2. Navigate to the project directory:

   ```bash
   cd chatly
   ```

3. Install frontend dependencies:

   ```bash
   cd frontEnd
   npm install
   ```

4. Install backend dependencies:

   ```bash
   cd ../backEnd
   npm install
   ```

5. Configure your environment variables in the backend `.env` file.

6. Start the frontend and backend development servers using their respective scripts.

### 🔐 Environment Variables

Create a `.env` file in the `backEnd` directory and configure the following environment variables:

```env
PORT=54893
DATABASE_URI=your_database_uri
RESEND_API_KEY=your_resend_api_key
GMAIL_USER=your_email_address
GMAIL_APP_PASSWORD=your_gmail_app_password
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
JWT_SECRET=your_jwt_secret
```

**Important:** Never commit your `.env` file or expose sensitive credentials in your repository. Make sure `.env` is included in your `.gitignore` file.

## 🗺️ Roadmap

- [x] Email verification flow
- [x] Initial authentication interface
- [ ] Profile setup
- [ ] Real-time messaging
- [ ] Conversation management
- [ ] Group chats and channels
- [ ] Message attachments

## 📌 Project Status
Chatly is currently under active development. Features and functionality may change as the project evolves.
