# build stage front
FROM node:lts-alpine as build-stage-front
WORKDIR /app
COPY ./front/package*.json ./
RUN npm install
COPY ./front .
ENV NODE_ENV=production
RUN npm run build

# build stage admin
FROM node:lts-alpine as build-stage-admin
WORKDIR /app
COPY ./admin/package*.json ./
RUN npm install
COPY ./admin .
ENV NODE_ENV=production
RUN npm run build

# build stage cashier
FROM node:lts-alpine as build-stage-cashier
WORKDIR /app
COPY ./cashier/package*.json ./
RUN npm install
COPY ./cashier .
ENV NODE_ENV=production
RUN npm run build



# production stage
FROM nginx:stable-alpine as production-stage
RUN apk update && apk add bash
COPY --from=build-stage-front /app/dist /var/www/html/front/dist
COPY --from=build-stage-admin /app/dist /var/www/html/admin/dist
COPY --from=build-stage-cashier /app/dist /var/www/html/cashier/dist
RUN rm /etc/nginx/conf.d/default.conf
COPY mafei.dev.conf /etc/nginx/conf.d/mafei.dev.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
