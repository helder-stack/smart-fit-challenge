FROM node:20-alpine

WORKDIR .

COPY . .

RUN yarn

EXPOSE 3000

CMD ["yarn", "dev"]
