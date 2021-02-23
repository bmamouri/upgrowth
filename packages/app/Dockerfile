FROM node:12-alpine AS builder
WORKDIR /app

ENV NEXT_PUBLIC_API_SERVER=http://ec2-100-26-23-121.compute-1.amazonaws.com

COPY ./ ./
RUN yarn global add lerna && \
    yarn install && \
    lerna bootstrap && \
    cd /app/packages/app && yarn build && \
    rm -rf /app/node_modules

# ===== Second Stage Build =====
FROM node:12-alpine
WORKDIR /app

COPY --from=builder /app .

RUN yarn global add lerna && \
    lerna bootstrap -- --production --no-optional && \
    yarn global remove lerna

EXPOSE 80

ENV NODE_ENV production

ENTRYPOINT cd ./packages/app && yarn start