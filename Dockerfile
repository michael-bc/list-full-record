FROM node:lts-alpine as build-stage

ARG REACT_APP_API_BASE_URL

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build


FROM nginx:stable-alpine as production-stage

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY --from=build-stage /app/public /usr/share/nginx/html/public

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
