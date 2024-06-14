FROM node:20-alpine

WORKDIR /app

ENV PORT=3005

COPY . /app/

RUN npm config set strict-ssl false

RUN npm install

# RUN groupadd -r mygroup && useradd -r -g mygroup myuser
# USER myuser

EXPOSE 3005

CMD [ "node", "server.js" ]