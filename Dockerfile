FROM ubuntu:22.04
RUN apt update && apt upgrade -y
RUN apt install -y git nginx
RUN git clone https://github.com/DecloudNodesLab/site
RUN sed -i -e "s|root .*|root /site/;|" /etc/nginx/sites-available/default
RUN service nginx start
WORKDIR /site
CMD git pull ; service nginx start; sleep infinity