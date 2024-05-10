FROM node:alpine

ARG NEXT_PUBLIC_WS_URL
ARG NEXT_PUBLIC_API_URL
ARG SUPER_SECRET_KEY

ENV NEXT_PUBLIC_WS_URL=${NEXT_PUBLIC_WS_URL}
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ENV SUPER_SECRET_KEY=${SUPER_SECRET_KEY}

WORKDIR /home/perplexica

COPY ui /home/perplexica/

RUN yarn install
RUN yarn build

CMD ["yarn", "start"]
