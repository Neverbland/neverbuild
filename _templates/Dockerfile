FROM nginx:mainline-alpine
MAINTAINER Neverbland <ops@neverbland.com>
CMD ["nginx"]

ADD ci/build/nginx.conf /etc/nginx/nginx.conf
ADD ./build /app
