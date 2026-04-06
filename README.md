# 🛒 OwnCartX Backend

A scalable backend for an AI-powered e-commerce platform built using Node.js, Express, and MongoDB.

---

## 🚀 Features

* 🔐 User Authentication (Register, Login & Logout)
* 🔑 JWT-based Authorization
* 🗄️ MongoDB Database Integration
* ⚡ RESTful API Architecture
* 📦 Modular Folder Structure

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)

---

## 📂 Project Structure

```
backend/
├── controllers/
├── routes/
├── models/
├── config/
├── middlewares/   (coming soon)
├── index.js
├── package.json
```

---

## ⚙️ Setup & Installation

1. Clone the repository

```
git clone https://github.com/KrGuddu/ownCartX-backend.git
```

2. Navigate to project folder

```
cd ownCartX-backend/backend
```

3. Install dependencies

```
npm install
```

4. Create a `.env` file

```
PORT=8000
MONGODB_URL=your_mongodb_url
JWT_SECRET=your_secret_key
```

5. Run the server

```
npm run dev
```

---

## 🔐 Environment Variables

Refer to `.env.example` for required variables.

---

## 📌 API Endpoints

### Auth Routes

* `POST /api/auth/registration` → Register User
* `POST /api/auth/login` → Login User

---

## 🚀 Future Enhancements

* 🧠 AI-based product recommendations
* 🛒 Product & Order APIs
* 👤 Role-based access (Admin/User)
* 💳 Payment Gateway Integration

---

## 👨‍💻 Author

Guddu Kumar

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
