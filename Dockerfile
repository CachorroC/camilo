FROM node:latest

WORKDIR /app

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

# pnpm fetch does require only lockfile
COPY pnpm-lock.yaml ./

# If you patched any package, include patches before running pnpm fetch
#COPY patches patches

RUN pnpm fetch --dev

ADD . ./
RUN pnpm install -r --offline --dev


EXPOSE 3000
CMD [ "next", "start" ]