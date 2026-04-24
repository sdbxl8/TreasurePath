FROM php:8.2-apache

# Forzar prefork y desactivar otros MPM
RUN echo "LoadModule mpm_prefork_module /usr/lib/apache2/modules/mod_mpm_prefork.so" > /etc/apache2/mods-enabled/mpm_prefork.load \
 && rm -f /etc/apache2/mods-enabled/mpm_event.load \
 && rm -f /etc/apache2/mods-enabled/mpm_worker.load

COPY server/ /var/www/html/

RUN a2enmod rewrite

EXPOSE 80