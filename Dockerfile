FROM node:20-alpine3.17 as builder
LABEL stage=builder
RUN mkdir -p /app/client/src
WORKDIR /app

#CLIENT
COPY ./public ./app/public
COPY package.json tsconfig.json tsconfig.node.json vite.config.ts index.html ./client/
RUN cd client && npm install
COPY src ./client/src/
RUN cd client && npm run build


# ENV NODE_ENV=production
WORKDIR /app/client

CMD ["npm", "run", "dev"]