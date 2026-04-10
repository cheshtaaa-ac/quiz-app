# Quiz App (Full-Stack) 🎯

A full-stack Quiz Application built using Node.js (Express) and Vanilla JavaScript. It supports real-time quiz gameplay, score calculation, and persistent result storage with a leaderboard.

---

## 📌 Features

* 🎯 Topic & difficulty-based quiz selection
* ⏱️ Timer-based quiz system
* ✅ Instant score calculation
* 💾 Persistent result storage (JSON-based backend)
* 🏆 Leaderboard support
* 🔄 Data persists after refresh

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js
* File System (fs) for storage

---

## 📁 Project Structure

```
quiz-app/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── results.json
│   └── package.json
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/quiz-app.git
cd quiz-app
```

### 2️⃣ Setup Backend

```
cd backend
npm install
node server.js
```

Server runs at:
http://localhost:3000

---

### 3️⃣ Run Frontend

Open a new terminal:

```
cd frontend
npx serve
```

OR use VS Code Live Server.

Frontend runs at:
http://localhost:5000 (or similar)

---

## 🔗 API Endpoints

### 📥 Save Result

**POST /save-result**

```
{
  "username": "Guest",
  "topic": "OS",
  "score": 8,
  "total": 10
}
```

### 📤 Get Results

**GET /results**
Returns all stored quiz attempts.

---

## 🧪 How It Works

* User plays quiz on frontend
* Score is calculated instantly
* Result is sent to backend via API
* Backend stores data in `results.json`
* Data is used for leaderboard display

---

## 🎯 Future Improvements

* 👤 User authentication
* 📊 Performance analytics
* 🏆 Advanced leaderboard
* 🌐 Full deployment (Render / Vercel)
* 🧠 Dynamic question loading

---

## 💡 Learning Outcomes

* Full-stack architecture understanding
* API integration using Fetch
* Handling CORS and browser security
* Debugging real-world issues
* Data persistence without database

---

## 👩‍💻 Author

Cheshta Arora
