FROM php:8.2-apache

COPY server/ /var/www/html/

RUN a2dismod mpm_event && a2enmod mpm_prefork && a2enmod php8.2

EXPOSE 80
