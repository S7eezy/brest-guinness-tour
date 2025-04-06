# 🔙 Backend — Brest Guinness Tour

API REST écrite en Go avec le framework Gin.

---

## 📦 Dépendances

- Gin
- GORM
- PostgreSQL
- godotenv (pour .env)

---

## 🚀 Lancer le backend en local

### 1. Copier le fichier `.env`

```bash
cp .env.example .env
```

### 2. Modifier la connexion DB si besoin

```
DATABASE_URL=postgres://postgres:postgres@localhost:5432/bgtour?sslmode=disable
```

### 3. Lancer le serveur

```bash
go run main.go
```

---

## 🔧 Fichiers utiles

- `main.go` : point d’entrée
- `init.sql` : création des tables à l'initialisation (utilisé par Docker)
- `.env.example` : config de base

---

## 📌 Routes prévues

| Méthode | Route              | Description                        |
|---------|--------------------|------------------------------------|
| POST    | /start-session     | Créer une session                  |
| POST    | /validate-pin      | Valider un passage au bar          |
| GET     | /progress/:id      | Voir les bars validés              |
| POST    | /generate-pin      | Générer un PIN (interface bar)     |
