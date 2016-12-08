#BUILD
#docker build -t local/mysql-server .
#docker run -d --name local-mysql-server -p 3306:3306 -p 33060:33060 local/mysql-server

FROM mysql/mysql-server:latest

ENV MYSQL_ROOT_PASSWORD password
ENV MYSQL_DATABASE sampleDB

COPY dump.sql /docker-entrypoint-initdb.d

EXPOSE 3306 33060