FROM node:12-alpine AS builder
WORKDIR /app

COPY ./ ./
RUN yarn global add lerna && \
    yarn install && \
    lerna bootstrap && \
    cd /app/packages/api && yarn build && \
    rm -rf /app/node_modules

# ===== Second Stage Build =====
FROM node:12-alpine
WORKDIR /app

COPY --from=builder /app /app

RUN yarn global add lerna && \
    lerna bootstrap -- --production --no-optional && \
    yarn global remove lerna

EXPOSE 3000

ENV NODE_ENV production

ENTRYPOINT cd ./packages/api/ && yarn start