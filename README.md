# Expense Tracker Management System

A full-stack expense management application built with **React.js** and
**Django REST Framework**. It allows users to add, view, search, edit,
update, and delete expenses, with automatic spending totals, transaction
counts, and category-wise summaries.

## 🚀 Live Demo

-   **Frontend:**
    https://expense-tracker-management-system-2-1.onrender.com
-   **Backend API:**
    https://expense-tracker-management-system-2.onrender.com/api/expenses/

## 📸 Application Preview

![Expense Tracker Dashboard](./dashboard-preview.png)

## ✨ Features

-   Add, view, edit, and delete expenses
-   Search expenses by description or category
-   Filter expenses by category through the API
-   Automatic total spending calculation
-   Automatic transaction count
-   Category-wise spending summary
-   RESTful CRUD API using Django REST Framework
-   Django Admin support
-   SQLite database for local development
-   PostgreSQL database support for production
-   Environment-based production configuration
-   Responsive React frontend
-   Production deployment using Render

## 🧠 Architecture

``` text
React + Vite Frontend
        ↓
REST API
        ↓
Django + Django REST Framework
        ↓
Django ORM
        ↓
SQLite (local) / PostgreSQL (production)
```

### 🔹 Backend

-   Python
-   Django
-   Django REST Framework
-   Django ORM
-   PostgreSQL / SQLite
-   Gunicorn
-   WhiteNoise

### 🔹 Frontend

-   React.js
-   Vite
-   JavaScript
-   HTML5
-   CSS3

## 🛠️ Tech Stack

**Frontend:** React.js, Vite, JavaScript, HTML5, CSS3

**Backend:** Python, Django, Django REST Framework

**Database:** PostgreSQL, SQLite

**Tools:** Git, GitHub, REST API, JSON

## 📁 Project Structure

``` text
Expense-Tracker-Management-System/
│
├── backend/
│   ├── expense_tracker/
│   ├── expenses/
│   ├── manage.py
│   ├── requirements.txt
│   └── build.sh
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── package.json
│   └── index.html
│
├── .gitignore
└── README.md
```

## 🔌 API Endpoints

  Method   Endpoint                Description
  -------- ----------------------- ----------------------
  GET      `/api/expenses/`        List expenses
  POST     `/api/expenses/`        Create an expense
  GET      `/api/expenses/<id>/`   Retrieve an expense
  PUT      `/api/expenses/<id>/`   Update an expense
  DELETE   `/api/expenses/<id>/`   Delete an expense
  GET      `/api/summary/`         Get spending summary

## 🚀 Run Locally

### Backend

Open a terminal in the `backend` directory:

``` bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Backend API:

``` text
http://127.0.0.1:8000/api/
```

### 🔹 Frontend

Open another terminal:

``` bash
cd frontend
npm install
npm run dev
```

The frontend will normally run at:

``` text
http://localhost:5173
```

For local development, the frontend connects to:

``` text
http://127.0.0.1:8000/api
```

For deployment, the API URL is configured using:

``` text
VITE_API_URL
```

## ⚙️ Production Configuration

The backend supports production deployment using environment variables
and PostgreSQL.

### Backend Environment Variables

``` text
DJANGO_SECRET_KEY
DJANGO_DEBUG=False
DJANGO_ALLOWED_HOSTS
CORS_ALLOWED_ORIGINS
DATABASE_URL
```

### Frontend Environment Variable

``` text
VITE_API_URL=https://expense-tracker-management-system-2.onrender.com/api
```

Production deployment uses:

-   PostgreSQL
-   Gunicorn
-   WhiteNoise
-   Environment-based configuration
-   Render

## 📌 Resume Highlights

-   Built a full-stack expense management application using **Python,
    Django REST Framework, React.js, and PostgreSQL/SQLite**.
-   Developed RESTful CRUD APIs and a responsive React frontend.
-   Implemented expense search, category filtering, spending summaries,
    and persistent database storage.
-   Configured production deployment using environment variables,
    PostgreSQL, Gunicorn, and WhiteNoise.
-   Deployed the frontend and backend using Render.

## 👤 Author

**Vinod Kumar**
