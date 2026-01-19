# Kube Flask React ☸️🐳

A beginner-to-intermediate **cloud-native project** demonstrating how to build, containerize, and deploy a **React frontend + Flask backend** application on **Kubernetes (Kind)** using **Docker Hub images**.

This project is designed to learn Kubernetes through a **real working application**, not just YAML files.

---

## 🧠 Project Overview

- **Frontend:** React (served via Nginx)
- **Backend:** Python Flask (REST API)
- **Containerization:** Docker
- **Image Registry:** Docker Hub
- **Orchestration:** Kubernetes (Kind)

The frontend and backend are deployed as **separate microservices** and communicate using **Kubernetes Service DNS**.

---

## 🏗️ Architecture
```
Browser
  |
  | (NodePort / Port Forward)
  v
React Frontend (Kubernetes Pod)
  |
  | http://flask-backend:5000
  v
Flask Backend (Kubernetes Pod)
```

### Kubernetes Components Used

- Deployment
- Service (ClusterIP, NodePort)
- Pods
- Docker Hub images
- kubectl port-forward (for local access)

---

## 🗂️ Project Structure
```
kube-flask-react/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   └── .env
├── k8s/
│   ├── backend/
│   │   ├── backend-deployment.yaml
│   │   └── backend-service.yaml
│   └── frontend/
│       ├── frontend-deployment.yaml
│       └── frontend-service.yaml
└── README.md
```

---

## 🐳 Docker Images

Images are built locally and pushed to Docker Hub:

- **Backend:** `pravinsakharkar/flask-backend:v1`
- **Frontend:** `pravinsakharkar/react-frontend:v1`

---

## ▶️ Run Locally (Without Kubernetes)

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

### Frontend
```bash
cd frontend
npm install
npm start
```

---

## ☸️ Run on Kubernetes (Kind)

### 1️⃣ Create / Verify Kind Cluster
```bash
kind create cluster   # if not already created
kubectl get nodes
```

### 2️⃣ Deploy Backend
```bash
kubectl apply -f k8s/backend/
```

Test backend:
```bash
kubectl port-forward svc/flask-backend 5000:5000
```

### 3️⃣ Deploy Frontend
```bash
kubectl apply -f k8s/frontend/
```

Access frontend:
```bash
kubectl port-forward svc/react-frontend 3000:80
```

Open: `http://localhost:3000`

---

## 🔑 Environment Configuration

Frontend uses environment variables:
```env
REACT_APP_API_URL=http://flask-backend:5000
```

This allows the frontend to communicate with the backend via Kubernetes service DNS.

---

## 🎯 Key Learnings

- Microservices architecture
- Dockerizing frontend and backend apps
- Pushing images to Docker Hub
- Kubernetes Deployments and Services
- Internal service-to-service communication
- Debugging Kubernetes networking (Kind + NodePort)
- Using port-forward for local Kubernetes access

---

## 🚀 Future Improvements

- Add Ingress (NGINX) instead of port-forward
- Add ConfigMaps and Secrets
- Add liveness & readiness probes
- Enable Horizontal Pod Autoscaling (HPA)
- CI/CD with GitHub Actions

---

## 👤 Author

**Pravin Sakharkar**

Learning Kubernetes, Docker, and Cloud-native development through hands-on projects.

---

## ✅ Commit the README Update

From repo root:
```bash
git add README.md
git commit -m "Update README with Docker and Kubernetes deployment details"
git push
```