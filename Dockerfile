FROM mhart/alpine-node:8
ADD . /code
WORKDIR /code
# COPY package.json yarn.lock ./
RUN yarn install && yarn build
CMD ["yarn", "serve"]
