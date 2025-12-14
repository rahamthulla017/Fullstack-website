# Web Tech - Modern Fullstack Website

A premium, high-performance website built with **React** (Frontend) and **Django** (Backend), featuring advanced 3D animations, glassmorphism UI, and a robust REST API.

![Project Preview](https://via.placeholder.com/800x400.png?text=Web+Tech+Preview)

## 🚀 Technologies Used

### Frontend
*   **React** (Vite) - Fast and modern UI library.
*   **Tailwind CSS** - Utility-first CSS framework for styling.
*   **Framer Motion** - Powerful networking library for React.
*   **Lucide React** - Beautiful & consistent icons.
*   **React Router** - Dynamic client-side routing.

### Backend
*   **Python & Django** - Robust and secure server-side framework.
*   **Django REST Framework** - Toolkit for building Web APIs.
*   **SQLite** (Default) - Lightweight database for development.

## 🛠️ Installation & Setup

Follow these steps to set up the project locally.

### Prerequisites
*   Node.js & npm installed
*   Python 3.8+ installed

### 1. Backend Setup (Django)

Navigate to the `backend` folder and set up the virtual environment:

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run database migrations
python manage.py migrate

# Start the development server
python manage.py runserver
```
The API will be available at `http://127.0.0.1:8000/`.

### 2. Frontend Setup (React)

Open a new terminal, navigate to the `frontend` folder:

```bash
cd frontend

# Install Node modules
npm install

# Start the development server
npm run dev
```
The website will launch at `http://localhost:5173/`.

## 📂 Project Structure

```
website/
├── backend/            # Django Project
│   ├── api/            # App for handling Jobs, Team, Contact, etc.
│   ├── backend/        # Project settings (settings.py, urls.py)
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/           # React Project
│   ├── public/
│   ├── src/
│   │   ├── components/ # Reusable UI components (Navbar, Hero, TechStack...)
│   │   ├── pages/      # Page views (Home, About, Services...)
│   │   ├── App.jsx     # Main entry point with Routing
│   │   └── index.css   # Global styles & Tailwind
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## ✨ Key Features
*   **Interactive 3D Backgrounds**: Custom particle and wave animations.
*   **Glassmorphism Design**: Modern, translucent UI elements.
*   **Responsive Layout**: Fully optimized for Desktop, Tablet, and Mobile.
*   **Tech Stack Marquee**: Infinite scrolling animation for technologies.
*   **Dynamic Content**: Jobs, Team members, and Contact forms powered by Django API.

## 🤝 Contributing
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

## 📄 License
This project is licensed under the MIT License.
