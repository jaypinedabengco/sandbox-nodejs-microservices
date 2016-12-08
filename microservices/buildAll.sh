# docker build -t [repository]/slane-qcaps-microservice/compare compare/. &
# docker build -t [repository]/slane-qcaps-microservice/search search/.

#docker build -t microservice-compare compare/. & 
#docker build -t microservice-search search/.

docker build -t slane-qcaps-microservice/compare compare/.
docker build -t slane-qcaps-microservice/search search/. 
#docker run -d -ti -p <port>:3000 --name [container-name] [image-name]
#docker run -d -ti -p 41000:3000 --name microservice-search slane-qcaps-microservice/search
#docker run -d -ti -p 41001:3000 --name microservice-compare slane-qcaps-microservice/compare

#docker run -d -ti -p --net=<network-name> <port>:3000 --name [container-name] [image-name]

#docker run -d -ti -p 41002:3000 --net=exampleNetwork  --name microservice-search-test slane-qcaps-microservice/search