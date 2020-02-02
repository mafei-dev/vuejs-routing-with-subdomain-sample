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
COPY --from=build-stage-front /app/dist /var/www/html/front
COPY --from=build-stage-admin /app/dist /var/www/html/admin
COPY --from=build-stage-cashier /app/dist /var/www/html/cashier
COPY mafei.dev.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
