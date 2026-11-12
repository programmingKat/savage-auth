# Savage Auth
A message board with user accounts where signed-in users post messages and vote them up or down.

## Goal

I built this to practice full-stack CRUD with authentication on top of an Express and MongoDB starter. Users sign up and log in with Passport, then post messages from their profile page. I updated the thumbs up, thumbs down, and delete routes to target each message by its ID instead of its text.

## Tech Stack

- **Front end:** EJS templates, CSS, JavaScript (Fetch API)
- **Back end:** Node.js, Express, Passport (local strategy), express-session
- **Database:** MongoDB (Mongoose)
- **Hosting:** [GitHub Pages / Netlify / Vercel / Render]

## How to Use

1. Open the [live app](https://savage-auth-2t2y.onrender.com/).
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

**Live app:**
[Live Link](https://savage-auth-2t2y.onrender.com/)

| Login | Profile and Messages |
<img width="1260" height="541" alt="image" src="https://github.com/user-attachments/assets/38d6c4ac-f275-4cba-ab10-86c87c250efa" />
<img width="1271" height="543" alt="image" src="https://github.com/user-attachments/assets/28bf1893-6eff-46bc-8879-37d808325420" />
<img width="1276" height="542" alt="image" src="https://github.com/user-attachments/assets/d6193325-23d5-41ac-8421-9aa60c637814" />
<img width="1261" height="551" alt="image" src="https://github.com/user-attachments/assets/5952d381-2e46-4f20-8881-25f298bf5829" />

## Future Improvements

- Move the MongoDB connection string into a `.env` file
- Only let users delete their own messages
- Limit each user to one vote per message
- Sort messages by votes

## Credit

Modified from Scotch.io's auth tutorial
