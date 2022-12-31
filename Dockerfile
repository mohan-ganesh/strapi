FROM node:16-slim

WORKDIR /usr/src/app

#ENV NODE_ENV=production

ENV STRAPI_LOG_LEVEL=debug
COPY package*.json ./

RUN npm install --only=production

copy . ./

RUN npm run build

CMD ["npm", "start"]