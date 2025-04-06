# 🍺 Brest Guinness Tour

Un projet fun entre amis pour explorer les bars de Brest qui servent de la Guinness !  
Ce site permet de suivre une session de 12 bars via QR codes, validation par PIN et authentification Google/Apple.

---

## 🧱 Stack Technique

| Layer        | Tech                      |
|--------------|---------------------------|
| Frontend     | React + Vite + Tailwind   |
| Backend      | Go + Gin + PostgreSQL     |
| Auth         | Google / Apple OAuth      |
| DB Hosting   | PostgreSQL (Docker)       |
| Dev Tools    | Docker Compose            |

---

## 🚀 Lancer le projet complet (dev)

Assurez-vous d’avoir **Docker** installé. Puis à la racine du projet :

```bash
docker compose up --build
```

- Frontend : http://localhost:5173
- Backend : http://localhost:8080
- DB : PostgreSQL sur `localhost:5432`

---

## 📁 Structure du projet

```
brest-guinness-tour/
├── backend/        # API Go (Gin + GORM + PostgreSQL)
├── frontend/       # React (Vite + TS + Tailwind)
├── docker-compose.yml
└── README.md
```

---

## ✨ Fonctionnalités prévues

- Auth via Google / Apple
- QR code pour chaque bar
- PIN généré après chaque Guinness commandée
- Suivi de session (12 bars à cocher)
- Classement (optionnel)
