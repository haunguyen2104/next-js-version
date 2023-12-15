"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[3125],{4740:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(5893),s=t(1151);const a={description:"Configure module path aliases that allow you to remap certain import paths."},r="Absolute Imports and Module path aliases",i={id:"next-js/v13.0.1/advanced-features/module-path-aliases",title:"Absolute Imports and Module path aliases",description:"Configure module path aliases that allow you to remap certain import paths.",source:"@site/docs/next-js/v13.0.1/advanced-features/module-path-aliases.md",sourceDirName:"next-js/v13.0.1/advanced-features",slug:"/next-js/v13.0.1/advanced-features/module-path-aliases",permalink:"/next-js/v13.0.1/advanced-features/module-path-aliases",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.1/advanced-features/module-path-aliases.md",tags:[],version:"current",frontMatter:{description:"Configure module path aliases that allow you to remap certain import paths."},sidebar:"tutorialSidebar",previous:{title:"Middleware",permalink:"/next-js/v13.0.1/advanced-features/middleware"},next:{title:"Multi Zones",permalink:"/next-js/v13.0.1/advanced-features/multi-zones"}},c={},l=[];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"absolute-imports-and-module-path-aliases",children:"Absolute Imports and Module path aliases"}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:"Examples"})}),(0,o.jsx)("ul",{children:(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/with-absolute-imports",children:"Absolute Imports"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["Next.js automatically supports the ",(0,o.jsx)(n.code,{children:"tsconfig.json"})," and ",(0,o.jsx)(n.code,{children:"jsconfig.json"})," ",(0,o.jsx)(n.code,{children:'"paths"'})," and ",(0,o.jsx)(n.code,{children:'"baseUrl"'})," options since ",(0,o.jsx)(n.a,{href:"https://nextjs.org/blog/next-9-4",children:"Next.js 9.4"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Note: ",(0,o.jsx)(n.code,{children:"jsconfig.json"})," can be used when you don't use TypeScript"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Note: you need to restart dev server to reflect modifications done in ",(0,o.jsx)(n.code,{children:"tsconfig.json"})," / ",(0,o.jsx)(n.code,{children:"jsconfig.json"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"These options allow you to configure module aliases, for example a common pattern is aliasing certain directories to use absolute paths."}),"\n",(0,o.jsx)(n.p,{children:"One useful feature of these options is that they integrate automatically into certain editors, for example vscode."}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"baseUrl"})," configuration option allows you to import directly from the root of the project."]}),"\n",(0,o.jsx)(n.p,{children:"An example of this configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'// tsconfig.json or jsconfig.json\n{\n  "compilerOptions": {\n    "baseUrl": "."\n  }\n}\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"// components/button.js\nexport default function Button() {\n  return <button>Click me</button>\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"// pages/index.js\nimport Button from 'components/button'\n\nexport default function HomePage() {\n  return (\n    <>\n      <h1>Hello World</h1>\n      <Button />\n    </>\n  )\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["While ",(0,o.jsx)(n.code,{children:"baseUrl"})," is useful you might want to add other aliases that don't match 1 on 1. For this TypeScript has the ",(0,o.jsx)(n.code,{children:'"paths"'})," option."]}),"\n",(0,o.jsxs)(n.p,{children:["Using ",(0,o.jsx)(n.code,{children:'"paths"'})," allows you to configure module aliases. For example ",(0,o.jsx)(n.code,{children:"@/components/*"})," to ",(0,o.jsx)(n.code,{children:"components/*"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"An example of this configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'// tsconfig.json or jsconfig.json\n{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@/components/*": ["components/*"]\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"// components/button.js\nexport default function Button() {\n  return <button>Click me</button>\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"// pages/index.js\nimport Button from '@/components/button'\n\nexport default function HomePage() {\n  return (\n    <>\n      <h1>Hello World</h1>\n      <Button />\n    </>\n  )\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var o=t(7294);const s={},a=o.createContext(s);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);