"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[3145],{4991:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=r(5893),i=r(1151);const s={description:"Next.js reports ESLint errors and warnings during builds by default. Learn how to opt-out of this behavior here."},o="Ignoring ESLint",c={id:"next-js/v13.0.0/api-reference/next.config.js/ignoring-eslint",title:"Ignoring ESLint",description:"Next.js reports ESLint errors and warnings during builds by default. Learn how to opt-out of this behavior here.",source:"@site/docs/next-js/v13.0.0/api-reference/next.config.js/ignoring-eslint.md",sourceDirName:"next-js/v13.0.0/api-reference/next.config.js",slug:"/next-js/v13.0.0/api-reference/next.config.js/ignoring-eslint",permalink:"/next-js/v13.0.0/api-reference/next.config.js/ignoring-eslint",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.0/api-reference/next.config.js/ignoring-eslint.md",tags:[],version:"current",frontMatter:{description:"Next.js reports ESLint errors and warnings during builds by default. Learn how to opt-out of this behavior here."},sidebar:"tutorialSidebar",previous:{title:"Headers",permalink:"/next-js/v13.0.0/api-reference/next.config.js/headers"},next:{title:"Ignoring TypeScript Errors",permalink:"/next-js/v13.0.0/api-reference/next.config.js/ignoring-typescript-errors"}},a={},d=[{value:"Related",id:"related",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"ignoring-eslint",children:"Ignoring ESLint"}),"\n",(0,t.jsxs)(n.p,{children:["When ESLint is detected in your project, Next.js fails your ",(0,t.jsx)(n.strong,{children:"production build"})," (",(0,t.jsx)(n.code,{children:"next build"}),") when errors are present."]}),"\n",(0,t.jsx)(n.p,{children:"If you'd like Next.js to produce production code even when your application has ESLint errors, you can disable the built-in linting step completely. This is not recommended unless you already have ESLint configured to run in a separate part of your workflow (for example, in CI or a pre-commit hook)."}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"next.config.js"})," and enable the ",(0,t.jsx)(n.code,{children:"ignoreDuringBuilds"})," option in the ",(0,t.jsx)(n.code,{children:"eslint"})," config:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  eslint: {\n    // Warning: This allows production builds to successfully complete even if\n    // your project has ESLint errors.\n    ignoreDuringBuilds: true,\n  },\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"related",children:"Related"}),"\n",(0,t.jsx)("div",{class:"card",children:(0,t.jsxs)("a",{href:"/docs/api-reference/next.config.js/introduction.md",children:[(0,t.jsx)("b",{children:"Introduction to next.config.js:"}),(0,t.jsx)("small",{children:"Learn more about the configuration file used by Next.js."})]})}),"\n",(0,t.jsx)("div",{class:"card",children:(0,t.jsxs)("a",{href:"/docs/basic-features/eslint.md",children:[(0,t.jsx)("b",{children:"ESLint:"}),(0,t.jsx)("small",{children:"Get started with ESLint in Next.js."})]})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var t=r(7294);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);