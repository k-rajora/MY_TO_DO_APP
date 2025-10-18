# 📝 MERN Todo App

A simple yet powerful **Todo application** built using the **MERN stack** (MongoDB, Express, React, Node.js).  
You can **add, delete, and mark todos as completed**, with all data stored securely in **MongoDB Atlas**.

---

## 🚀 Tech Stack

| Layer         | Technology Used        |
|---------------|-----------------------|
| **Frontend**  | React (Axios, CSS)    |
| **Backend**   | Node.js, Express.js   |
| **Database**  | MongoDB Atlas         |
| **Runtime**   | Node.js               |
| **Tools**     | VS Code, Postman, npm |

---

## 🧩 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/k-rajora/MY_TO_DO_APP.git
cd MY_TO_DO_APP

Setup the Backend
cd backend
npm install


Create a .env file inside the backend folder:
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/todoapp

Run the backend:

node server.js


Setup the Frontend
cd ../frontend
npm install
npm start

Connecting to MongoDB Atlas
Go to https://www.mongodb.com/cloud/atlas
Create a free cluster
Add a database user
Allow access from anywhere (0.0.0.0/0)
Copy the connection string and paste it in your .env as shown above