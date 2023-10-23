# FullStack PHP + JS [Desa Digital]

Backend : Laravel 10.2 + JWT <br>
Frontend : React Vite + Bootstrap (Admin/Landing Page) <br>
Mobile : React Native <br><br>

yarn build/ npm run dev
dist/.htaccess
<IfModule mod_rewrite.c>

RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]

</IfModule>
