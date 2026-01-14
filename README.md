# BookWorm Backend

Backend API for **BookWorm** – a personalized book recommendation and reading tracker application. Built with **Node.js**, **Express**, and **MongoDB**. Handles authentication, user roles, book management, reviews, and dashboard stats for admins.

---

## 🌐 Live Frontend

Frontend is deployed at:  
[BookWorm Frontend Live](https://book-worm-frontend-omega.vercel.app/)

---

## 📂 Repository Links

- **Backend Repo:** [GitHub](https://github.com/sorifulhasan300/book-worm)  
- **Frontend Repo:** [GitHub](https://github.com/sorifulhasan300/book-worm-frontend)

---

## 👤 User Roles & Credentials

### Normal User
- **Email:** soriful100@gmail.com  
- **Password:** aA123#

### Admin
- **Email:** soriful@12hasan  
- **Password:** dfadf124

> Use these credentials to test authentication, protected routes, and admin dashboards.

---

## 🚀 Features

### Authentication
- User registration with profile photo upload
- Secure login and JWT-based authentication
- Role-based access control (Admin / Normal User)

### User Features
- Browse books, add to shelves (Want to Read / Currently Reading / Read)
- Track reading progress
- Write and view reviews
- Personalized book recommendations

### Admin Features
- CRUD operations for books and genres
- Review moderation (approve/delete)
- Tutorial management (YouTube embeds)
- Dashboard with stats:
  - Total books
  - Total users
  - Pending reviews
  - Books per genre chart

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Atlas or local)  
- **Authentication:** JWT, bcrypt  
- **File Upload:** Cloudinary (or local storage)  
- **Deployment:** Vercel (Serverless)  

---

## 📌 Installation (Local Development)

1. Clone the repository:

```bash
git clone https://github.com/sorifulhasan300/book-worm.git
cd book-worm
