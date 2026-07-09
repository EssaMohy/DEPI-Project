# Plantera — Plant Care Management & ML Diagnostics

Cross-platform plant care system with AI-powered species identification and disease detection.

## Architecture

| Component | Technology | Port |
|-----------|-----------|------|
| Backend API | Express.js / TypeScript | 8000 |
| Web Frontend | React / Vite (nginx) | 3001 |
| Plant Analyzer | FastAPI / Python / YOLOv11 | 5000 |
| PostgreSQL | Database (15-alpine) | 5432 |
| Redis | Cache / Queue (7-alpine) | 6379 |
| RabbitMQ | Message broker (3-management) | 5672, 15672 |
| MailHog (dev only) | Email testing | 1025, 8025 |

## Quick Start (Full Stack)

```bash
# From project root
docker compose -f docker-compose.yml up -d --build
```

Wait ~60s for DB init, migrations, and seeding. Verify:

```bash
# All containers healthy?
docker ps --filter name=plantera

# Check status
docker logs plantera-backend --tail 10
```

Open http://localhost:3001.

## Per-Service Standalone

Each subrepo is self-contained — its `compose.yml` pulls its own infra dependencies:

```bash
# Backend only (includes postgres, redis, rabbitmq, mailhog)
docker compose -f compose.yml up -d --build

# Frontend only (connects to backend at VITE_API_URL)
docker compose -f compose.yml up -d --build

# ML analyzer only
docker compose -f compose.yml up -d --build
```

## Development Mode

Root `docker-compose.dev.yml` uses `include:` to pull each subrepo's override file with hot-reload ports:

| Service | Host Port |
|---------|-----------|
| Backend | 8001 |
| Frontend | 3002 |
| Analyzer | 5001 |
| RabbitMQ mgmt | 15674 |
| MailHog SMTP | 25025 |
| MailHog web | 25026 |

```bash
docker compose -f docker-compose.dev.yml up -d --build
```

## Configuration

Each subrepo owns its own `.env` — no shared env vars across repos.

| File | Key Vars |
|------|----------|
| `apps/backend/.env` | `DATABASE_URL`, `JWT_SECRET`, `MAIL_HOST` |
| `apps/web/.env` | `VITE_API_URL` |
| `apps/plant-analyzer/.env` | `ML_PORT` |

Root `.env` is intentionally empty — it exists only for Docker Compose orchestration.

## Common Commands

```bash
# View all logs
docker compose logs -f

# Rebuild a single service
docker compose build backend

# Restart
docker compose restart backend

# Full reset (data loss)
docker compose down -v

# Clean disk space
docker system prune -f --all
docker builder prune -f --all
```

## API Docs

- Swagger UI: http://localhost:8000/api/v1/docs
- MailHog (email preview): http://localhost:8025
- RabbitMQ mgmt: http://localhost:15672 (guest/guest)

## Local Development (Without Docker)

See each app's README:
- [Backend](apps/backend/README.md)
- [Web](apps/web/README.md)
- [Plant Analyzer](apps/plant-analyzer/README.md)

---

*Each subrepo is self-contained — see its README for standalone Docker or local setup.*
