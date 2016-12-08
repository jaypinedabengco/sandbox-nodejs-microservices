##############################
# BUILD
#############################
#   docker build -t microservice-api/[name] .

##############################
# SET THE FF ENVIRONMENT CONFIGS
#############################
# API_DB_HOST
# API_DB_USER
# API_DB_PASSWORD
# API_DB_NAME
# API_EMAIL_USER
# API_EMAIL_PASSWORD
# NODE_ENV

##############################
# RUN
#############################
#-delete
#   docker rm -f [name]

#-with environment variables
#   docker run --restart always -p [port]:3000 -d --name [name] -e "NODE_ENV=$NODE_ENV" -e "DB_HOST=$API_DB_HOST" -e "DB_USER=$API_DB_USER" -e "DB_PASSWORD=$API_DB_PASSWORD" -e "DB_NAME=$API_DB_NAME" microservice-api/[name]


##############################
# Update Registry ([registry-name])
#############################
#-pull
#   docker pull [registry-name]/microservice-api/[name]
#-tag
#   -with version
#       docker tag microservice-api/[name] [registry-name]/microservice-api/[name]:v[build-version].[build-date(yyyymmdd)]
#   -force tag latest
#       docker tag -f microservice-api/[name] [registry-name]/microservice-api/[name]
#-push
#   docker push [registry-name]/microservice-api/[name] 

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
