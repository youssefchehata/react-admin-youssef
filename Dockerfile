FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm config set registry https://registry.npmjs.org/
RUN npm install --network-timeout=60000
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]