# 📝 To Do List Web App

A minimalist and functional fullstack To Do List application built using **React + Django REST Framework**. Users can add, update, and delete tasks with persistent storage and a clean UI.

---

## 🚀 Live Demo

🌐 [Deployed on Render](https://todolist-django-6rcp.onrender.com)

---

## 🛠 Tech Stack

### 🎨 Frontend

- **React** (with Hooks)
- **Vite** for fast dev builds and optimized production output
- **Axios** for API interaction
- **CSS Modules** for scoped styling
- **Custom UI Components**: `TickButton`, `CrossButton`

### ⚙️ Backend

- **Django** (v4.2)
- **Django REST Framework** for building API endpoints
- **SQLite** for development database
- **CORS Headers** for frontend-backend communication
- **WhiteNoise** for serving static files in production

### 📦 Deployment & Build

- **Render** for fullstack deployment (both API & static frontend)
- **Gunicorn** as WSGI server
- **Custom `build.sh` script** to:
  - Build Vite frontend
  - Copy static files to Django
  - Collect static assets
  - Run Django migrations

---

## 📂 Project Structure

```
todolist-django/
├── ToDoList/                # React + Vite frontend
├── ToDoList_backend/        # Django backend
│   ├── build.sh             # Build pipeline script
│   ├── static/              # Served assets (index.js/css)
│   └── templates/frontend/  # HTML template served by Django
```

---

## 🧠 Key Features

- ✅ Add new tasks
- ✅ Mark tasks as completed/uncompleted
- ✅ Delete tasks
- ✅ Fully synced with Django backend API
- ✅ Deployed as a monorepo (frontend & backend together)

---

## ⚙️ Development Setup

```bash
# Clone repo and navigate to backend
git clone https://github.com/your-username/todolist-django.git
cd ToDoList_backend

# Create and activate Python virtualenv
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows

# Install backend dependencies
pip install -r requirements.txt

# Build frontend and copy assets
./build.sh

# Run local server
python manage.py runserver
```

---

## 📬 API Endpoints

| Method | Endpoint                   | Description        |
|--------|----------------------------|--------------------|
| GET    | `/api/tasks/`              | Get all tasks      |
| POST   | `/api/tasks/create/`       | Add a new task     |
| PATCH  | `/api/tasks/<id>/update/`  | Toggle complete    |
| DELETE | `/api/tasks/<id>/delete/`  | Delete a task      |

---

## ✨ Author

Built by **6felix9**  
🔗 GitHub: [@6felix9](https://github.com/6felix9)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
