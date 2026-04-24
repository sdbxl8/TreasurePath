FROM php:8.2-apache

# Deshabilitar módulos MPM conflictivos y usar prefork
RUN a2dismod mpm_event mpm_worker mpm_winnt 2>/dev/null || true && \
    a2enmod mpm_prefork

# Copiar archivos del backend
COPY server/ /var/www/html/

# Habilitar módulos necesarios
RUN a2enmod rewrite

EXPOSE 80