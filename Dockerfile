FROM php:8.2-apache

# No forzar MPM, dejar el default (mpm_event)
# Solo garantizar que esté habilitado
RUN a2enmod mpm_event || true

# Copiar archivos del backend
COPY server/ /var/www/html/

# Habilitar módulos necesarios
RUN a2enmod rewrite

EXPOSE 80