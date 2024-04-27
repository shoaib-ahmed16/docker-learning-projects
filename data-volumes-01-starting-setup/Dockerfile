FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ARG DEFAULT_PORT=80

ENV PORT $DEFAULT_PORT

EXPOSE $PORT

# VOLUME [ "/app/feedback" ] Anonymous Volumes create by docker and manage by docker, when container is deleted this volumes get deleted. While named volumes services.

CMD ["node", "server.js"]

