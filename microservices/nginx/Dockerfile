#docker build -t server-nginx .
#docker rm -f test-nginx
#docker run -d -e DOCKER_IP=$DOCKER_MACHINE_IP -p 38080:80 -p 34443:443 --name test-nginx server-nginx 

FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY content /usr/share/nginx/html

COPY conf /etc/nginx/conf.d