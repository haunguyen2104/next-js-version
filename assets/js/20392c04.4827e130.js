"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[4729],{5513:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(5893),n=t(1151);const o={description:"Next.js supports API Routes, which allow you to build your API without leaving your Next.js app. Learn how it works here."},i="API Routes",a={id:"next-js/v13.0.0/api-routes/introduction",title:"API Routes",description:"Next.js supports API Routes, which allow you to build your API without leaving your Next.js app. Learn how it works here.",source:"@site/docs/next-js/v13.0.0/api-routes/introduction.md",sourceDirName:"next-js/v13.0.0/api-routes",slug:"/next-js/v13.0.0/api-routes/introduction",permalink:"/next-js/v13.0.0/api-routes/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.0/api-routes/introduction.md",tags:[],version:"current",frontMatter:{description:"Next.js supports API Routes, which allow you to build your API without leaving your Next.js app. Learn how it works here."},sidebar:"tutorialSidebar",previous:{title:"Edge API Routes (Beta)",permalink:"/next-js/v13.0.0/api-routes/edge-api-routes"},next:{title:"API Routes Request Helpers",permalink:"/next-js/v13.0.0/api-routes/request-helpers"}},l={},c=[{value:"Use Cases",id:"use-cases",level:2},{value:"Caveats",id:"caveats",level:2},{value:"Related",id:"related",level:2}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components},{Details:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"api-routes",children:"API Routes"}),"\n",(0,r.jsxs)(t,{open:!0,children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"Examples"})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/api-routes",children:"Basic API Routes"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/api-routes-graphql",children:"API Routes with GraphQL"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/api-routes-rest",children:"API Routes with REST"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors",children:"API Routes with CORS"})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["API routes provide a solution to build your ",(0,r.jsx)(s.strong,{children:"API"})," with Next.js."]}),"\n",(0,r.jsxs)(s.p,{children:["Any file inside the folder ",(0,r.jsx)(s.code,{children:"pages/api"})," is mapped to ",(0,r.jsx)(s.code,{children:"/api/*"})," and will be treated as an API endpoint instead of a ",(0,r.jsx)(s.code,{children:"page"}),". They are server-side only bundles and won't increase your client-side bundle size."]}),"\n",(0,r.jsxs)(s.p,{children:["For example, the following API route ",(0,r.jsx)(s.code,{children:"pages/api/user.js"})," returns a ",(0,r.jsx)(s.code,{children:"json"})," response with a status code of ",(0,r.jsx)(s.code,{children:"200"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default function handler(req, res) {\n  res.status(200).json({ name: 'John Doe' })\n}\n"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note"}),": API Routes will be affected by ",(0,r.jsxs)(s.a,{href:"/docs/api-reference/next.config.js/custom-page-extensions.md",children:[(0,r.jsx)(s.code,{children:"pageExtensions"})," configuration"]})," in ",(0,r.jsx)(s.code,{children:"next.config.js"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["For an API route to work, you need to export a function as default (a.k.a ",(0,r.jsx)(s.strong,{children:"request handler"}),"), which then receives the following parameters:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"req"}),": An instance of ",(0,r.jsx)(s.a,{href:"https://nodejs.org/api/http.html#class-httpincomingmessage",children:"http.IncomingMessage"}),", plus some ",(0,r.jsx)(s.a,{href:"/docs/api-routes/request-helpers.md",children:"pre-built middlewares"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"res"}),": An instance of ",(0,r.jsx)(s.a,{href:"https://nodejs.org/api/http.html#class-httpserverresponse",children:"http.ServerResponse"}),", plus some ",(0,r.jsx)(s.a,{href:"/docs/api-routes/response-helpers.md",children:"helper functions"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["To handle different HTTP methods in an API route, you can use ",(0,r.jsx)(s.code,{children:"req.method"})," in your request handler, like so:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default function handler(req, res) {\n  if (req.method === 'POST') {\n    // Process a POST request\n  } else {\n    // Handle any other HTTP method\n  }\n}\n"})}),"\n",(0,r.jsx)(s.p,{children:"To fetch API endpoints, take a look into any of the examples at the start of this section."}),"\n",(0,r.jsx)(s.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,r.jsx)(s.p,{children:"For new projects, you can build your entire API with API Routes. If you have an existing API, you do not need to forward calls to the API through an API Route. Some other use cases for API Routes are:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Masking the URL of an external service (e.g. ",(0,r.jsx)(s.code,{children:"/api/secret"})," instead of ",(0,r.jsx)(s.code,{children:"https://company.com/secret-url"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:["Using ",(0,r.jsx)(s.a,{href:"/docs/basic-features/environment-variables.md",children:"Environment Variables"})," on the server to securely access external services."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"caveats",children:"Caveats"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["API Routes ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",children:"do not specify CORS headers"}),", meaning they are ",(0,r.jsx)(s.strong,{children:"same-origin only"})," by default. You can customize such behavior by wrapping the request handler with the ",(0,r.jsx)(s.a,{href:"https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors",children:"CORS request helpers"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["API Routes can't be used with ",(0,r.jsx)(s.a,{href:"/docs/advanced-features/static-html-export.md",children:(0,r.jsx)(s.code,{children:"next export"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"related",children:"Related"}),"\n",(0,r.jsx)(s.p,{children:"For more information on what to do next, we recommend the following sections:"}),"\n",(0,r.jsx)("div",{class:"card",children:(0,r.jsxs)("a",{href:"/docs/api-routes/request-helpers.md",children:[(0,r.jsx)("b",{children:"API Routes Request Helpers:"}),(0,r.jsx)("small",{children:"learn about the built-in helpers for the request."})]})}),"\n",(0,r.jsx)("div",{class:"card",children:(0,r.jsxs)("a",{href:"/docs/api-routes/response-helpers.md",children:[(0,r.jsx)("b",{children:"Response Helpers:"}),(0,r.jsx)("small",{children:"learn about the built-in methods for the response."})]})}),"\n",(0,r.jsx)("div",{class:"card",children:(0,r.jsxs)("a",{href:"/docs/basic-features/typescript.md#api-routes",children:[(0,r.jsx)("b",{children:"TypeScript:"}),(0,r.jsx)("small",{children:"Add TypeScript to your API Routes."})]})})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>i});var r=t(7294);const n={},o=r.createContext(n);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);