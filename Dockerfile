FROM node:latest

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# production environment
CMD ["npm", "run", "start"]