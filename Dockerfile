FROM node:20-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat openssl
COPY package.json package-lock.json* ./
RUN npm ci || npm install
FROM node:20-alpine AS builder
WORKDIR /app
ENV STANDALONE=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run postinstall && npm run build
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
RUN mkdir -p /app/uploads/fotos /app/uploads/documentos
VOLUME ["/app/uploads"]
EXPOSE 3000
CMD ["node","server.js"]
