FROM node:10-alpine
LABEL maintainer="sd.chitra.singh@gmail.com"

# Expose ports needed to use zoop
EXPOSE 8080 443

# create workspace
RUN mkdir /app
WORKDIR /app
COPY ./src/ .

#Install Service dependency
RUN yarn
RUN yarn build

CMD ["yarn", "start"]