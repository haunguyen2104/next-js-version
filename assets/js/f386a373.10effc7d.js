"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[1063],{8636:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=n(5893),s=n(1151);const o={description:"Next.js reports TypeScript errors by default. Learn to opt-out of this behavior here."},i="Ignoring TypeScript Errors",c={id:"next-js/v13.0.1/api-reference/next.config.js/ignoring-typescript-errors",title:"Ignoring TypeScript Errors",description:"Next.js reports TypeScript errors by default. Learn to opt-out of this behavior here.",source:"@site/docs/next-js/v13.0.1/api-reference/next.config.js/ignoring-typescript-errors.md",sourceDirName:"next-js/v13.0.1/api-reference/next.config.js",slug:"/next-js/v13.0.1/api-reference/next.config.js/ignoring-typescript-errors",permalink:"/next-js/v13.0.1/api-reference/next.config.js/ignoring-typescript-errors",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.1/api-reference/next.config.js/ignoring-typescript-errors.md",tags:[],version:"current",frontMatter:{description:"Next.js reports TypeScript errors by default. Learn to opt-out of this behavior here."},sidebar:"tutorialSidebar",previous:{title:"Ignoring ESLint",permalink:"/next-js/v13.0.1/api-reference/next.config.js/ignoring-eslint"},next:{title:"next.config.js",permalink:"/next-js/v13.0.1/api-reference/next.config.js/introduction"}},p={},a=[{value:"Related",id:"related",level:2}];function d(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"ignoring-typescript-errors",children:"Ignoring TypeScript Errors"}),"\n",(0,t.jsxs)(r.p,{children:["Next.js fails your ",(0,t.jsx)(r.strong,{children:"production build"})," (",(0,t.jsx)(r.code,{children:"next build"}),") when TypeScript errors are present in your project."]}),"\n",(0,t.jsx)(r.p,{children:"If you'd like Next.js to dangerously produce production code even when your application has errors, you can disable the built-in type checking step."}),"\n",(0,t.jsx)(r.p,{children:"If disabled, be sure you are running type checks as part of your build or deploy process, otherwise this can be very dangerous."}),"\n",(0,t.jsxs)(r.p,{children:["Open ",(0,t.jsx)(r.code,{children:"next.config.js"})," and enable the ",(0,t.jsx)(r.code,{children:"ignoreBuildErrors"})," option in the ",(0,t.jsx)(r.code,{children:"typescript"})," config:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"module.exports = {\n  typescript: {\n    // !! WARN !!\n    // Dangerously allow production builds to successfully complete even if\n    // your project has type errors.\n    // !! WARN !!\n    ignoreBuildErrors: true,\n  },\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"related",children:"Related"}),"\n",(0,t.jsx)("div",{class:"card",children:(0,t.jsxs)("a",{href:"/docs/api-reference/next.config.js/introduction.md",children:[(0,t.jsx)("b",{children:"Introduction to next.config.js:"}),(0,t.jsx)("small",{children:"Learn more about the configuration file used by Next.js."})]})}),"\n",(0,t.jsx)("div",{class:"card",children:(0,t.jsxs)("a",{href:"/docs/basic-features/typescript.md",children:[(0,t.jsx)("b",{children:"TypeScript:"}),(0,t.jsx)("small",{children:"Get started with TypeScript in Next.js."})]})})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>i});var t=n(7294);const s={},o=t.createContext(s);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);