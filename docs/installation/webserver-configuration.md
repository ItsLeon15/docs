--- 
sidebar_position: 4
description: How to setup the webserver for Paymenter.
---

# Webserver configuration

## Apache

### .htaccess

```apache
<VirtualHost *:80>
    ServerName paymenter.org
    ServerAlias www.paymenter.org
    DocumentRoot /var/www/paymenter/public
    <Directory /var/www/paymenter/public>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

## Nginx

### nginx.conf

```nginx
server {
    listen 80;
    server_name paymenter.org;
    root /var/www/paymenter/public;

    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
    }
}
```

## Problems? {#problems}

Ask for help on our [GitHub repository](https://github.com/paymenter), or our [Discord server](https://discord.gg/xB4UUT3XQg)