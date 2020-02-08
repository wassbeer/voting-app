FROM mhart/alpine-node:10

WORKDIR /app

COPY package.json .

RUN apk add --update alpine-sdk
RUN apk add --no-cache git
RUN apk add --no-cache python
RUN npm install

FROM mhart/alpine-node:slim-10

WORKDIR /app

COPY --from=0 /app .

COPY . .
