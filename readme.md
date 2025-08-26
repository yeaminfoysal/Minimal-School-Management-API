# School Management API

A **RESTful API** for managing users, students, and classes with **role-based authentication**. Built with **ExpressJS (TypeScript)**, **MongoDB**, and **JWT authentication**.

---

## 🔹 Project Overview

This API provides a backend for managing a school system, including:

- User authentication (Admin, Teacher, Student)
- Student management
- Class management and enrollment
- Role-based access control
- JWT-secured routes

It is designed to be **scalable**, **secure**, and **easy to integrate** with frontend applications.

---

## 🔹 Features by Role

### Admin
- Register new users
- Create new students
- Create new classes
- View all students
- Enroll students in classes

### Teacher
- View all students
- Enroll students in classes
- View students of a specific class

### Student
- View own profile

---

## 🔑 Default Credentials

| Role     | Email              | Password |
|----------|--------------------|----------|
| Admin    | admin@gmail.com    | 111111   |
| Teacher  | teacher@gmail.com  | 111111   |
| Student  | student@gmail.com  | 111111   |

---
## 🌐 Live API & Postman Collection

🔗 **Base URL**: `https://mini-school-management-api.vercel.app`

📬 **Postman Collection**: 🔗 [Click Here](https://www.postman.com/cryosat-administrator-86445068/workspace/test/collection/45714660-a3f77d54-556c-4082-973c-58a0a04c45fb?action=share&creator=45714660)  


---

## 🔹 API Endpoints Summary

### **Auth Module**
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST   | `/auth/login` | Login and receive access & refresh token |
| POST   | `/user/register` | Register a new user (default role: student) |

### **Student Module**
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST   | `/students` | Create a new student (Admin only) |
| GET    | `/students` | List all students (Admin/Teacher) |
| GET    | `/students/:id` | Get student details by ID |

### **Class Module**
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST   | `/classes` | Create a new class (Admin only) |
| POST   | `/classes/:id/enroll` | Enroll a student in a class (Admin/Teacher) |
| GET    | `/classes/:id/students` | Get students of a class |

---

## 🔹 Database Schema

### Users
| Field         | Type   | Description                    |
|---------------|--------|--------------------------------|
| id            | ObjectId | Unique identifier             |
| name          | string  | User's full name              |
| email         | string  | User's email                  |
| password | string  | Hashed password               |
| role          | string  | `ADMIN` \| `TEACHER` \| `STUDENT` |

### Students
| Field    | Type      | Description                  |
|----------|-----------|------------------------------|
| id       | ObjectId  | Unique identifier            |
| name     | string    | Student name                 |
| age      | number    | Student age                  |
| class_id | [ObjectId]| Array of class IDs enrolled  |

### Classes
| Field    | Type      | Description                  |
|----------|-----------|------------------------------|
| id       | ObjectId  | Unique identifier            |
| name     | string    | Class name                   |
| section  | string    | Class section                |
| students | [ObjectId]| Array of enrolled student IDs|

---

## 🔹 Setup & Environment Instructions

Follow these steps to run the project locally:

1️⃣  **Clone the repository**
```bash
git clone https://github.com/yeaminfoysal/Minimal-School-Management-API
cd minimal-school-management-api
```
2️⃣ **Install dependencies**
```bash
npm install
```
3️⃣ **Create a .env file in the root directory:**
```bash
DB_URL=<your-mongodb-uri>
JWT_ACCESS_SECRET=pleaseallowtoken
JWT_REFRESH_SECRET=pleaseallowrefreshtoken
```
4️⃣ **Start the server**
```bash
npm run dev
```
The server will run at http://localhost:3000 (or your specified port).

---