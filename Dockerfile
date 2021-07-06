# syntax=docker/dockerfile:1
FROM node
WORKDIR /app
COPY src/ .
RUN npm install
ENV SUBDOMAIN=instant-n00dles
CMD [ "node", "index.js" ]
