"use strict";(self.webpackChunkpaymenterdocs=self.webpackChunkpaymenterdocs||[]).push([[821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4,description:"How to setup the config locally, and start a Paymenter site in no time."},a="Setting up the config",l={unversionedId:"installation/edit-config",id:"installation/edit-config",title:"Setting up the config",description:"How to setup the config locally, and start a Paymenter site in no time.",source:"@site/docs/installation/edit-config.md",sourceDirName:"installation",slug:"/installation/edit-config",permalink:"/docs/installation/edit-config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation/edit-config.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"How to setup the config locally, and start a Paymenter site in no time."},sidebar:"tutorialSidebar",previous:{title:"Install & Setup DataBases",permalink:"/docs/installation/install-db"},next:{title:"Webserver configuration",permalink:"/docs/installation/webserver-configuration"}},c={},s=[{value:"Locate the config file",id:"locate-the-config-file",level:2},{value:"Edit the env file",id:"edit-the-env-file",level:2},{value:"Edit mail settings",id:"edit-mail-settings",level:3},{value:"Problems?",id:"problems",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setting-up-the-config"},"Setting up the config"),(0,i.kt)("h2",{id:"locate-the-config-file"},"Locate the config file"),(0,i.kt)("admonition",{title:"Before you continue",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If everything went well during the ",(0,i.kt)("a",{parentName:"p",href:"../category/installation"},"installation"),", there should be a file in the root directory called: ",(0,i.kt)("inlineCode",{parentName:"p"},".env.example"),".\nCopy this file and rename it to ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),". with the following command:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env.example .env\n"))),(0,i.kt)("h2",{id:"edit-the-env-file"},"Edit the env file"),(0,i.kt)("h3",{id:"edit-mail-settings"},"Edit mail settings"),(0,i.kt)("p",null,"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file and edit the following lines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"MAIL_MAILER=\nMAIL_HOST=\nMAIL_PORT=\nMAIL_USERNAME=\nMAIL_PASSWORD=\nMAIL_ENCRYPTION=\n")),(0,i.kt)("p",null,"Be sure to fill in the correct information for your mail server."),(0,i.kt)("h2",{id:"problems"},"Problems?"),(0,i.kt)("p",null,"Ask for help on our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paymenter"},"GitHub repository"),", or our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/xB4UUT3XQg"},"Discord server")))}u.isMDXComponent=!0}}]);