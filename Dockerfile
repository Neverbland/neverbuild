# Build off Michael Hart's Alpine/Node image
# Alpine 3.4, NodeJS 5.x
FROM mhart/alpine-node:6
MAINTAINER Neverbland <ops@neverbland.com>

RUN apk --no-cache add \
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
    && rm -fr /var/cache/apk/* \
    && rm -fr /tmp/*
