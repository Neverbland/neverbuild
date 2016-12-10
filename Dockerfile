# Build off Michael Hart's Alpine/Node image
# Alpine 3.4, NodeJS 5.x
FROM mhart/alpine-node:6
MAINTAINER Neverbland <ops@neverbland.com>

ENV NODE_ENV=production

RUN apk --update add \
      build-base \
      make gcc g++ nasm \
      automake autoconf pkgconfig \
      zlib zlib-dev \
      libpng libpng-dev \
      libwebp libwebp-dev \
      libjpeg-turbo libjpeg-turbo-dev \
      ca-certificates \
      file python curl git \
      grep tar bash docker \
      nginx \
    && mkdir -p /var/www/app \
    && rm -fr /var/cache/apk/* \
    && rm -fr /tmp/*
