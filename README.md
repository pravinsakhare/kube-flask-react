# Kube Flask React 🚀

A beginner-friendly **full-stack microservices project** built using **React (frontend)** and **Flask (backend)**, designed to be deployed on **Kubernetes (Kind)**.

This project is created to **learn Kubernetes from scratch using a real application**, not just YAML files.

---

## 🧩 Project Architecture

```
Browser
   ↓
React Frontend (Port 3000)
   ↓ HTTP API
Flask Backend (Port 5000)
```

- Frontend and backend are **independent services**
- Communication happens via **REST API (JSON)**
- Designed using **microservice principles**

---

## 🛠 Tech Stack

### Frontend
- React
- JavaScript
- HTML / CSS

### Backend
- Python
- Flask
- Flask-CORS

### DevOps (Next Phases)
- Docker
- Kubernetes (Kind)
- kubectl

---

## ✨ Features

- Simple and clean UI
- React frontend calling Flask backend
- REST API communication
- CORS enabled for cross-origin calls
- Kubernetes-ready architecture

---

## ▶️ How to Run Locally

### 1️⃣ Run Backend (Flask)

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
# source venv/bin/activate   # Linux/Mac
pip install -r requirements.txt
python app.py
```

Backend runs on:
```
http://localhost:5000
```

### 2️⃣ Run Frontend (React)

```bash
cd frontend
npm install
npm start
```

Frontend runs on:
```
http://localhost:3000
```

---

## 🎯 Learning Goals

This project helps you learn:

- Microservice architecture
- Frontend–backend communication
- REST APIs
- CORS and browser security
- Preparing applications for Docker & Kubernetes

---

## 🚀 Future Enhancements

- [ ] Dockerize frontend and backend
- [ ] Deploy application on Kubernetes using Kind
- [ ] Add Kubernetes Services and Deployments
- [ ] Scale pods and test self-healing
- [ ] Add ConfigMaps and Secrets

---

## 👨‍💻 Author

Built as part of a Kubernetes hands-on learning journey.

---

## 📝 License

MIT License - Feel free to use this project for learning purposes.