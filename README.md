Signup Form with Redux (React + Vite)

A clean, modern Signup form built using React, Redux Toolkit, and Vite.
This project demonstrates:

Component-based UI architecture

Redux Toolkit usage for state management

Navigation using React Router

Form validation

Clean, scalable folder structure

🚀 Features
✔ Signup Form

Name, Email, Password fields

Inline form validation

Error messages

Modern UI with soft palette & rounded card

✔ Redux Toolkit Integration

signupStart, signupSuccess, signupFailure actions

Stores user data globally

Simulated async signup using setTimeout

Proper Redux slices & store configuration

✔ Routing

/ → Signup Page

/home → Welcome Page 

✔ File Structure
```
src/
│
├── app/
│   └── store.js
│
├── features/
│   └── auth/
│       └── authSlice.js
│
├── components/
│   └── Signup/
│       ├── Signup.jsx
│       ├── Signup.css
│       └── index.js
│
├── pages/
│   └── Home/
│       ├── Home.jsx
│       └── Home.css
│
├── utils/
│
├── hooks/
│
├── App.jsx
├── main.jsx
└── index.css
```

🛠️ Tech Stack

React (Vite)

Redux Toolkit

React Router DOM

CSS Modules (plain CSS)

JavaScript (ES6+)

📦 Installation & Setup
1️⃣ Clone the repository

```
git clone https://github.com/Harshita2020/signup-redux-assignment.git
```

2️⃣ Install dependencies
```
npm install
```

3️⃣ Run the development server
```
npm run dev
```

🧪 How it Works
➤ When user fills the form & clicks Sign Up:

Validation runs

Redux dispatches signupStart()

A fake API delay (800ms) simulates network call

If successful → signupSuccess(userData)

User is redirected to /home using useNavigate

Home page reads Redux user state via useSelector

Displays:
“Welcome, {name}! 🎉”

📁 Folder Structure Explained
components/

Reusable UI components (Signup form)

features/auth/

Contains authSlice.js — manages signup state (loading, user, error)

pages/

Route-based components (Signup, Home)

app/store.js

Redux store configuration

🖼️ Screenshots

(Add screenshots here if you want to make the repo look more polished.)

🧑‍💻 Author

Created by Harshita — as part of an interview assignment requiring a Signup Component with Redux.

⭐ If this project helped you or you're reviewing it, thank you!