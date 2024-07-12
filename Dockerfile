# 베이스 이미지 설정
FROM node:20.11.0-alpine AS base

RUN apk add --no-cache 'libc6-compat'

WORKDIR /app

COPY package.json package-lock.json ./

RUN rm -rf ./.next/cache

RUN npm install

# 빌드
COPY . .

ENV NAVER_MAP_CLIENT_ID=$NAVER_MAP_CLIENT_ID \
    NAVER_MAP_CLIENT_SECRET=$NAVER_MAP_CLIENT_SECRET \
    SERVER_URL=$SERVER_URL \
    KAKAO_REST_API=$KAKAO_REST_API

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]
