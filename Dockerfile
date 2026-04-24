FROM php:8.2-fpm as php

RUN docker-php-ext-install mysqli

FROM nginx:alpine

# Copiar config nginx
RUN mkdir -p /etc/nginx/conf.d

# Copiar PHP desde la otra stage
COPY --from=php /usr/local/bin/php-fpm /usr/local/bin/
COPY --from=php /usr/local/lib /usr/local/lib

# Copiar aplicación
COPY server/ /var/www/html/

# Config nginx básica
RUN echo 'server {\n\
    listen 80;\n\
    root /var/www/html;\n\
    index index.php;\n\
    location ~ \\.php$ {\n\
        fastcgi_pass 127.0.0.1:9000;\n\
        fastcgi_index index.php;\n\
        include fastcgi_params;\n\
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n\
    }\n\
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80