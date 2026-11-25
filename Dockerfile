FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

FROM python:3.11-slim
WORKDIR /app/backend

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PORT=7860

COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/ /app/backend/
COPY --from=frontend-builder /app/frontend/build /app/frontend/build

RUN mkdir -p /app/backend/static/audio && chmod -R 777 /app/backend

EXPOSE 7860

CMD ["gunicorn", "-b", "0.0.0.0:7860", "--workers", "2", "--timeout", "120", "app:app"]
