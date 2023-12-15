"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[9002],{9994:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=t(5893),s=t(1151);const i={description:"learn more about the configuration file used by Next.js to handle your application."},r="next.config.js",c={id:"next-js/v13.0.1/api-reference/next.config.js/introduction",title:"next.config.js",description:"learn more about the configuration file used by Next.js to handle your application.",source:"@site/docs/next-js/v13.0.1/api-reference/next.config.js/introduction.md",sourceDirName:"next-js/v13.0.1/api-reference/next.config.js",slug:"/next-js/v13.0.1/api-reference/next.config.js/introduction",permalink:"/next-js/v13.0.1/api-reference/next.config.js/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.1/api-reference/next.config.js/introduction.md",tags:[],version:"current",frontMatter:{description:"learn more about the configuration file used by Next.js to handle your application."},sidebar:"tutorialSidebar",previous:{title:"Ignoring TypeScript Errors",permalink:"/next-js/v13.0.1/api-reference/next.config.js/ignoring-typescript-errors"},next:{title:"React Strict Mode",permalink:"/next-js/v13.0.1/api-reference/next.config.js/react-strict-mode"}},a={},d=[];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"nextconfigjs",children:"next.config.js"}),"\n",(0,o.jsxs)(n.p,{children:["For custom advanced configuration of Next.js, you can create a ",(0,o.jsx)(n.code,{children:"next.config.js"})," or ",(0,o.jsx)(n.code,{children:"next.config.mjs"})," file in the root of your project directory (next to ",(0,o.jsx)(n.code,{children:"package.json"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"next.config.js"})," is a regular Node.js module, not a JSON file. It gets used by the Next.js server and build phases, and it's not included in the browser build."]}),"\n",(0,o.jsxs)(n.p,{children:["Take a look at the following ",(0,o.jsx)(n.code,{children:"next.config.js"})," example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"/**\n * @type {import('next').NextConfig}\n */\nconst nextConfig = {\n  /* config options here */\n}\n\nmodule.exports = nextConfig\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you need ",(0,o.jsx)(n.a,{href:"https://nodejs.org/api/esm.html",children:"ECMAScript modules"}),", you can use ",(0,o.jsx)(n.code,{children:"next.config.mjs"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"/**\n * @type {import('next').NextConfig}\n */\nconst nextConfig = {\n  /* config options here */\n}\n\nexport default nextConfig\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can also use a function:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"module.exports = (phase, { defaultConfig }) => {\n  /**\n   * @type {import('next').NextConfig}\n   */\n  const nextConfig = {\n    /* config options here */\n  }\n  return nextConfig\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Since Next.js 12.1.0, you can use an async function:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"module.exports = async (phase, { defaultConfig }) => {\n  /**\n   * @type {import('next').NextConfig}\n   */\n  const nextConfig = {\n    /* config options here */\n  }\n  return nextConfig\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"phase"})," is the current context in which the configuration is loaded. You can see the ",(0,o.jsx)(n.a,{href:"https://github.com/vercel/next.js/blob/5e6b008b561caf2710ab7be63320a3d549474a5b/packages/next/shared/lib/constants.ts#L19-L23",children:"available phases"}),". Phases can be imported from ",(0,o.jsx)(n.code,{children:"next/constants"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')\n\nmodule.exports = (phase, { defaultConfig }) => {\n  if (phase === PHASE_DEVELOPMENT_SERVER) {\n    return {\n      /* development only config options here */\n    }\n  }\n\n  return {\n    /* config options for all phases except development here */\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The commented lines are the place where you can put the configs allowed by ",(0,o.jsx)(n.code,{children:"next.config.js"}),", which are ",(0,o.jsx)(n.a,{href:"https://github.com/vercel/next.js/blob/canary/packages/next/server/config-shared.ts#L158",children:"defined in this file"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"However, none of the configs are required, and it's not necessary to understand what each config does. Instead, search for the features you need to enable or modify in this section and they will show you what to do."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Avoid using new JavaScript features not available in your target Node.js version. ",(0,o.jsx)(n.code,{children:"next.config.js"})," will not be parsed by Webpack, Babel or TypeScript."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var o=t(7294);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);