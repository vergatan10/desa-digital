# FullStack PHP + JS [Desa Digital]

Backend : Laravel 10.2 + JWT <br>
Frontend : React Vite + Bootstrap (Admin/Landing Page) <br>
Mobile : React Native <br><br>

yarn build/ npm run dev<br>
dist/.htaccess
<IfModule mod_rewrite.c><br><br>

RewriteEngine On<br>
RewriteBase /<br>
RewriteRule ^index\.html$ - [L]<br>
RewriteCond %{REQUEST_FILENAME} !-f<br>
RewriteCond %{REQUEST_FILENAME} !-d<br>
RewriteCond %{REQUEST_FILENAME} !-l<br>
RewriteRule . /index.html [L]<br>
<br>
</IfModule><br>
