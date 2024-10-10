FROM node:20

WORKDIR /app

COPY . .

RUN apt update && apt install -y build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev

RUN npm install
RUN npm run build

# production environment
CMD ["npm", "run", "start"]