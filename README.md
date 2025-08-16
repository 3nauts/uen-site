# UEN – Next.js (Shell) + Prisma + Uploads
Front/Backend unificados com Next 14 + Prisma (MySQL) + uploads.

## Local
npm install
cp .env.example .env
# opcional: docker compose up -d  (MySQL)
npx prisma migrate dev --name init
npm run dev

## Produção
npm run build && npm start

## Endpoints
POST /api/auth/cpf-check
POST /api/users
GET  /api/cliente/:cpf
GET  /api/cliente/:cpf/carteirinha
GET  /api/cliente/:cpf/carteirinha/qrcode.png
GET  /api/uploads/*
