FROM php:8.2-fpm

# Instalar extensiones y herramientas
RUN apt-get update && apt-get install -y \
    nginx \
    supervisor \
    && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install mysqli

# Copiar archivos
COPY server/ /var/www/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Crear carpetas para supervisor
RUN mkdir -p /var/log/supervisor

# Configurar supervisor
RUN echo '[supervisord]\n\
nodaemon=true\n\
\n\
[program:php-fpm]\n\
command=/usr/local/sbin/php-fpm\n\
autostart=true\n\
autorestart=true\n\
stderr_logfile=/var/log/supervisor/php-fpm.err.log\n\
stdout_logfile=/var/log/supervisor/php-fpm.out.log\n\
\n\
[program:nginx]\n\
command=/usr/sbin/nginx -g "daemon off;"\n\
autostart=true\n\
autorestart=true\n\
stderr_logfile=/var/log/supervisor/nginx.err.log\n\
stdout_logfile=/var/log/supervisor/nginx.out.log\n\
' > /etc/supervisor/conf.d/supervisord.conf

RUN chown -R www-data:www-data /var/www/html

EXPOSE 80

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]