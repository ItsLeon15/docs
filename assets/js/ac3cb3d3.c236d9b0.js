"use strict";(self.webpackChunkpaymenterdocs=self.webpackChunkpaymenterdocs||[]).push([[94],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},195:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:4,description:"How to setup the webserver for Paymenter."},i="Webserver configuration",c={unversionedId:"installation/webserver-configuration",id:"installation/webserver-configuration",title:"Webserver configuration",description:"How to setup the webserver for Paymenter.",source:"@site/docs/installation/webserver-configuration.md",sourceDirName:"installation",slug:"/installation/webserver-configuration",permalink:"/docs/installation/webserver-configuration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation/webserver-configuration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"How to setup the webserver for Paymenter."},sidebar:"tutorialSidebar",previous:{title:"Setting up the config",permalink:"/docs/installation/edit-config"},next:{title:"Congratulations! \ud83c\udf89",permalink:"/docs/installation/congratulations"}},s={},l=[{value:"Apache",id:"apache",level:2},{value:".htaccess",id:"htaccess",level:3},{value:"Nginx",id:"nginx",level:2},{value:"nginx.conf",id:"nginxconf",level:3},{value:"Problems?",id:"problems",level:2}],p={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webserver-configuration"},"Webserver configuration"),(0,o.kt)("h2",{id:"apache"},"Apache"),(0,o.kt)("h3",{id:"htaccess"},".htaccess"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apache"},"<VirtualHost *:80>\n    ServerName paymenter.org\n    ServerAlias www.paymenter.org\n    DocumentRoot /var/www/paymenter/public\n    <Directory /var/www/paymenter/public>\n        AllowOverride All\n        Require all granted\n    </Directory>\n</VirtualHost>\n")),(0,o.kt)("h2",{id:"nginx"},"Nginx"),(0,o.kt)("h3",{id:"nginxconf"},"nginx.conf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen 80;\n    server_name paymenter.org;\n    root /var/www/paymenter/public;\n\n    index index.php;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location ~ \\.php$ {\n        include snippets/fastcgi-php.conf;\n        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;\n    }\n}\n")),(0,o.kt)("h2",{id:"problems"},"Problems?"),(0,o.kt)("p",null,"Ask for help on our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paymenter"},"GitHub repository"),", or our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/xB4UUT3XQg"},"Discord server")))}u.isMDXComponent=!0}}]);