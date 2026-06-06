# FUTURE_FS_02 — Client Lead Management System (Backend)

A REST API backend for a Mini CRM system built during my **Full Stack Web Development Internship at Future Interns**.

---

## 📌 Task Description

Build a simple CRM to manage client leads generated from website contact forms. Implement CRUD operations, lead status updates, notes and follow-ups, and secure admin access.

---

## ✨ Features

- 🔐 JWT Authentication (Register & Login)
- 📋 Lead CRUD — Create, Read, Update, Delete
- 🔄 Lead status management (New → Contacted → Converted → Lost)
- 📝 Notes for each lead
- 🛡️ Protected routes with JWT middleware
- ☁️ Supabase PostgreSQL database

---

## 🛠️ Tech Stack

- **Node.js** — Runtime
- **Express.js** — REST API framework
- **Supabase** — PostgreSQL database
- **JWT** — Authentication
- **bcryptjs** — Password hashing
- **dotenv** — Environment variables

---

## 📁 Project Structure

```
FUTURE_FS_02-backend/
├── server.js        # Main server file
├── supabase.js      # Supabase client
├── routes/
│   ├── auth.js      # Register & Login routes
│   └── leads.js     # Lead CRUD routes
├── .gitignore
└── README.md
```

---

## 🚀 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register admin |
| POST | `/api/auth/login` | Login & get token |
| GET | `/api/leads` | Get all leads |
| POST | `/api/leads` | Create new lead |
| PUT | `/api/leads/:id` | Update lead |
| DELETE | `/api/leads/:id` | Delete lead |

---

## ⚙️ Setup

1. Clone the repo:
```bash
git clone https://github.com/durgamahicherla/FUTURE_FS_02-backend.git
cd FUTURE_FS_02-backend
npm install
```

2. Create `.env` file:
```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
JWT_SECRET=your_secret_key
PORT=5000
```

3. Run:
```bash
node server.js
```

---

## 🙋‍♀️ Author

**Mahicherla Durga Posi Lakshmi**
B.Tech CSE (AI & ML) — Godavari Global University
Full Stack Web Dev Intern — Future Interns

📧 durgamahicherla@gmail.com
🔗 [LinkedIn](https://www.linkedin.com/in/durga-mahicherla-085165384)
