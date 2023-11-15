FROM node:alpine

WORKDIR /usr/app

COPY package.json /usr/app/

COPY server.js /usr/app/

# Install the current packages.
RUN npm Install

EXPOSE 3000
CMD [ "node", "server.js" ]