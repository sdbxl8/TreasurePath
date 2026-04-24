FROM php:8.2-apache-bookworm

COPY server/ /var/www/html/

RUN a2enmod rewrite

EXPOSE 80