##############################
# BUILD
#############################
# docker build -t qcapsslane-api/[name] .

##############################
# SET THE FF ENVIRONMENT CONFIGS
#############################
# SLANE_API_DB_HOST
# SLANE_API_DB_USER
# SLANE_API_DB_PASSWORD
# SLANE_API_DB_NAME
# SLANE_API_EMAIL_USER
# SLANE_API_EMAIL_PASSWORD
# NODE_ENV

##############################
# RUN
#############################
# simple
#docker run --restart always -p [port]:3000 -d --name [name] qcapsslane-api/[name]

# with environment variables
#docker run --restart always -e "NODE_ENV=$NODE_ENV" -e "DB_HOST=$SLANE_API_DB_HOST" -e "DB_USER=$SLANE_API_DB_USER" -e "DB_PASSWORD=$SLANE_API_DB_PASSWORD" -e "DB_NAME=$SLANE_API_DB_NAME" -e "EMAIL_USER=$SLANE_API_EMAIL_USER" -e "EMAIL_PASSWORD=$SLANE_API_EMAIL_PASSWORD" -p [port]:3000 -d --name [name] qcapsslane-api/[name]


FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# SET ENVIRONMENT VARIABLES
EXPOSE 3000

CMD [ "npm", "start" ]
