# Savage Auth

A message board with user accounts where signed-in users post messages and vote them up or down.

**Live app:** [https://your-link-here](https://your-link-here)

![Screenshot of the main screen](./screenshots/main.png)

## Goal

I built this to practice full-stack CRUD with authentication on top of an Express and MongoDB starter. Users sign up and log in with Passport, then post messages from their profile page. I updated the thumbs up, thumbs down, and delete routes to target each message by its ID instead of its text.

## Tech Stack

- **Front end:** EJS templates, CSS, JavaScript (Fetch API)
- **Back end:** Node.js, Express, Passport (local strategy), express-session
- **Database:** MongoDB (Mongoose)
- **Hosting:** [GitHub Pages / Netlify / Vercel / Render]

## How to Use

1. Open the [live app](https://your-link-here).
2. Sign up with an email and password, or log in.
3. On your profile, add a message.
4. Use the thumbs up and thumbs down icons to vote on messages, or the trash icon to delete one.

## Installation

1. Clone repo
2. run `npm install`
3. No `.env` file is needed. The server uses the `PORT` environment variable if it is set (default 8080), and the MongoDB connection string is in `config/database.js`.

## Usage

1. run `node server.js`
2. Navigate to `localhost:8080`

## Live App

**Link:** [https://your-link-here](https://your-link-here)

| Login | Profile and Messages |
| --- | --- |
| ![Login page](./screenshots/one.png) | ![Profile page with messages](./screenshots/two.png) |

## Future Improvements

- Move the MongoDB connection string into a `.env` file
- Only let users delete their own messages
- Limit each user to one vote per message
- Sort messages by votes

## Credit

Modified from Scotch.io's auth tutorial
