"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[3672],{1175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=t(5893),s=t(1151);const a={},i="Multi Zones",r={id:"next-js/v13.0.0/advanced-features/multi-zones",title:"Multi Zones",description:"Examples",source:"@site/docs/next-js/v13.0.0/advanced-features/multi-zones.md",sourceDirName:"next-js/v13.0.0/advanced-features",slug:"/next-js/v13.0.0/advanced-features/multi-zones",permalink:"/next-js/v13.0.0/advanced-features/multi-zones",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.0/advanced-features/multi-zones.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Absolute Imports and Module path aliases",permalink:"/next-js/v13.0.0/advanced-features/module-path-aliases"},next:{title:"Output File Tracing",permalink:"/next-js/v13.0.0/advanced-features/output-file-tracing"}},l={},c=[{value:"How to define a zone",id:"how-to-define-a-zone",level:2},{value:"How to merge zones",id:"how-to-merge-zones",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"multi-zones",children:"Multi Zones"}),"\n",(0,o.jsxs)(t,{open:!0,children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:"Examples"})}),(0,o.jsx)("ul",{children:(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/with-zones",children:"With Zones"})})})]}),"\n",(0,o.jsx)(n.p,{children:"A zone is a single deployment of a Next.js app. You can have multiple zones and merge them as a single app."}),"\n",(0,o.jsx)(n.p,{children:"For example, let's say you have the following apps:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["An app for serving ",(0,o.jsx)(n.code,{children:"/blog/**"})]}),"\n",(0,o.jsx)(n.li,{children:"Another app for serving all other pages"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"With multi zones support, you can merge both these apps into a single one allowing your customers to browse it using a single URL, but you can develop and deploy both apps independently."}),"\n",(0,o.jsx)(n.h2,{id:"how-to-define-a-zone",children:"How to define a zone"}),"\n",(0,o.jsx)(n.p,{children:"There are no zone related APIs. You only need to do the following:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Make sure to keep only the pages you need in your app, meaning that an app can't have pages from another app, if app ",(0,o.jsx)(n.code,{children:"A"})," has ",(0,o.jsx)(n.code,{children:"/blog"})," then app ",(0,o.jsx)(n.code,{children:"B"})," shouldn't have it too."]}),"\n",(0,o.jsxs)(n.li,{children:["Make sure to configure a ",(0,o.jsx)(n.a,{href:"/docs/api-reference/next.config.js/basepath.md",children:"basePath"})," to avoid conflicts with pages and static files."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"how-to-merge-zones",children:"How to merge zones"}),"\n",(0,o.jsxs)(n.p,{children:["You can merge zones using ",(0,o.jsx)(n.a,{href:"/docs/api-reference/next.config.js/rewrites.md",children:(0,o.jsx)(n.code,{children:"rewrites"})})," in one of the apps or any HTTP proxy."]}),"\n",(0,o.jsxs)(n.p,{children:["For ",(0,o.jsx)(n.a,{href:"https://vercel.com?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",children:"Next.js on Vercel"})," applications, you can use a ",(0,o.jsx)(n.a,{href:"https://vercel.com/blog/monorepos-are-changing-how-teams-build-software?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",children:"monorepo"})," to deploy both apps with a single ",(0,o.jsx)(n.code,{children:"git push"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var o=t(7294);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);