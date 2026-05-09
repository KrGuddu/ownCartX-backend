<h1 align ="center">🛒 OwnCartX Backend</h1>

A scalable backend for an AI-powered e-commerce platform built using Node.js, Express.js, PostgreSQL, Stripe, Cloudinary, and Gemini AI.

---
## 🚀 Live Demo
🔗 Live Demo: https://owncartx.vercel.app

## 📂 GitHub Repository
📦 Client Repo: https://github.com/KrGuddu/ownCartX-client  
📦 Server Repo: https://github.com/KrGuddu/ownCartX-backend

---

# ✨ Features

## 🔐 Authentication & Authorization
- User Registration & Login
- JWT Authentication
- Protected Routes
- Role-Based Access (Admin/User)
- Forgot Password System
- Reset Password via Email
- Secure Password Hashing

---

## 🛍️ Product Management
- Create Product
- Update Product
- Delete Product
- Get All Products
- Get Single Product
- Product Category Filtering
- Pagination
- Product Search
- AI Product Recommendation/Search

---

## ⭐ Product Reviews
- Add Review
- Update Review
- Delete Review
- Product Rating System
- User Review Validation

---

## 🛒 Orders Management
- Place Orders
- Order History
- Order Details
- Shipping Information
- Order Status Update
- Admin Order Management

---

## 💳 Payments
- Stripe Payment Integration
- Payment Intent Generation
- Secure Checkout Flow

---

## 📧 Email Services
- Forgot Password Email
- Reset Password Email
- SMTP Email Integration

---

## 👨‍💼 Admin Features
- User Management
- Product Management
- Order Management
- Dashboard Statistics APIs

---

## 🤖 AI Features
- AI Product Recommendation
- AI Search Suggestions
- Gemini API Integration

---

## ☁️ Media Handling
- Product Image Upload
- Cloudinary Integration

---

# 🛠️ Tech Stack

## 🌐 Backend
- Node.js
- Express.js

## 🗄️ Database
- PostgreSQL

## 🔑 Authentication
- JWT
- bcryptjs

## 💳 Payments
- Stripe

## ☁️ Cloud Storage
- Cloudinary

## 📧 Email Service
- Nodemailer
- SMTP

## 🤖 AI Integration
- Google Gemini API

## 📦 Other Tools & Libraries
- dotenv
- cors
- cookie-parser
- express-fileupload
- multer
- validator

---

## 📂 Project Structure

```
OWNCARTX/
│
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   └── orderController.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   └── orderRoutes.js
│   │
│   ├── middlewares/
│   ├── models/
│   ├── utils/
│   ├── app.js
│   ├── server.js
│   └── package.json
```
---

# 🔒 Security Features

- JWT Authentication
- Password Hashing
- Protected APIs
- Role-Based Authorization
- Secure Environment Variables
- Error Handling Middleware

---

# ⚡ API Architecture

- RESTful APIs
- MVC Architecture
- Middleware-Based Error Handling
- Modular Folder Structure

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
PORT=5000

DATABASE_URL=your_postgresql_database_url

JWT_SECRET=your_jwt_secret

COOKIE_EXPIRE=7

STRIPE_SECRET_KEY=your_stripe_secret_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_MAIL=your_email
SMTP_PASSWORD=your_email_password

GEMINI_API_KEY=your_google_gemini_api_key
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
**Mr. Guddu Kumar**  
Software Developer

🌐 Portfolio: https://krguddu.netlify.app

🐙 GitHub: https://github.com/KrGuddu

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
