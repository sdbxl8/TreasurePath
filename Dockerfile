FROM php:8.2-apache

# Limpiar y deshabilitar todos los MPM conflictivos
RUN rm -f /etc/apache2/mods-enabled/mpm_*.load && \
    rm -f /etc/apache2/mods-enabled/mpm_*.conf && \
    a2enmod mpm_prefork

# Copiar archivos del backend
COPY server/ /var/www/html/

# Habilitar módulos necesarios
RUN a2enmod rewrite

EXPOSE 80