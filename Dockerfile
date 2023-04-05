FROM node:18.15.0 as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i

COPY . .
# Build the app
RUN npm run build

CMD ["npm", "run","start"]