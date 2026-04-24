FROM php:8.2-fpm

# Instalar extensiones necesarias
RUN docker-php-ext-install mysqli

# Copiar archivos del backend
COPY server/ /var/www/html/

# Permisos
RUN chown -R www-data:www-data /var/www/html

EXPOSE 9000