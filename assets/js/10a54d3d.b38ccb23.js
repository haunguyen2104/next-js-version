"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[6146],{13:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(5893),r=t(1151);const i={},a="Streaming SSR",o={id:"next-js/v13.0.0/advanced-features/react-18/streaming",title:"Streaming SSR",description:"React 18 includes architectural improvements to React server-side rendering (SSR) performance. This means you can use Suspense in your React components in streaming SSR mode and React will render content on the server and send updates through HTTP streams.",source:"@site/docs/next-js/v13.0.0/advanced-features/react-18/streaming.md",sourceDirName:"next-js/v13.0.0/advanced-features/react-18",slug:"/next-js/v13.0.0/advanced-features/react-18/streaming",permalink:"/next-js/v13.0.0/advanced-features/react-18/streaming",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.0/advanced-features/react-18/streaming.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React Server Components (RFC)",permalink:"/next-js/v13.0.0/advanced-features/react-18/server-components"},next:{title:"Switchable Runtime (Alpha)",permalink:"/next-js/v13.0.0/advanced-features/react-18/switchable-runtime"}},d={},c=[{value:"Using Streaming Server-Rendering",id:"using-streaming-server-rendering",level:2},{value:"Streaming Features",id:"streaming-features",level:2},{value:"next/dynamic",id:"nextdynamic",level:3},{value:"Important Notes",id:"important-notes",level:2},{value:"<code>next/head</code> and <code>next/script</code>",id:"nexthead-and-nextscript",level:4},{value:"Data Fetching",id:"data-fetching",level:4},{value:"Styling",id:"styling",level:4}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"streaming-ssr",children:"Streaming SSR"}),"\n",(0,s.jsxs)(n.p,{children:["React 18 includes architectural improvements to React server-side rendering (SSR) performance. This means you can use ",(0,s.jsx)(n.code,{children:"Suspense"})," in your React components in streaming SSR mode and React will render content on the server and send updates through HTTP streams."]}),"\n",(0,s.jsx)(n.h2,{id:"using-streaming-server-rendering",children:"Using Streaming Server-Rendering"}),"\n",(0,s.jsxs)(n.p,{children:["When you use Suspense in a server-rendered page, there is no extra configuration required to use streaming SSR. When deployed, streaming can be utilized through infrastructure like ",(0,s.jsx)(n.a,{href:"https://vercel.com/features/edge-functions?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",children:"Edge Functions"})," on Vercel (with the Edge Runtime) or with a Node.js server (with the Node.js runtime). AWS Lambda Functions do not currently support streaming responses."]}),"\n",(0,s.jsxs)(n.p,{children:["All SSR pages have the ability to render components into streams and the client continues receiving updates from these streams even after the initial SSR response is sent. When any suspended components resolve down the line, they are rendered on the server and streamed to the client. This means applications can start emitting HTML even ",(0,s.jsx)(n.em,{children:"before"})," all the data is ready, improving your app's loading performance."]}),"\n",(0,s.jsx)(n.p,{children:"As an added bonus, in streaming SSR mode the client will also use selective hydration to prioritize component hydration based on user interactions, further improving performance."}),"\n",(0,s.jsxs)(n.p,{children:["For non-SSR pages, all Suspense boundaries will still be ",(0,s.jsx)(n.a,{href:"/docs/advanced-features/automatic-static-optimization.md",children:"statically optimized"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"streaming-features",children:"Streaming Features"}),"\n",(0,s.jsx)(n.h3,{id:"nextdynamic",children:"next/dynamic"}),"\n",(0,s.jsxs)(n.p,{children:["Next.js supports lazy loading external libraries with ",(0,s.jsx)(n.code,{children:"import()"})," and React components with ",(0,s.jsx)(n.code,{children:"next/dynamic"}),". Deferred loading helps improve the initial loading performance by decreasing the amount of JavaScript necessary to render the page. Components or libraries are only imported and included in the JavaScript bundle when they're used."]}),"\n",(0,s.jsxs)(n.p,{children:["Read more about how to use ",(0,s.jsx)(n.a,{href:"/docs/advanced-features/dynamic-import.md",children:(0,s.jsx)(n.code,{children:"next/dynamic"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"important-notes",children:"Important Notes"}),"\n",(0,s.jsxs)(n.h4,{id:"nexthead-and-nextscript",children:[(0,s.jsx)(n.code,{children:"next/head"})," and ",(0,s.jsx)(n.code,{children:"next/script"})]}),"\n",(0,s.jsxs)(n.p,{children:["Using resource tags (e.g. scripts or stylesheets) in ",(0,s.jsx)(n.code,{children:"next/head"})," won't work as intended with streaming, as the loading order and timing of ",(0,s.jsx)(n.code,{children:"next/head"})," tags can no longer be guaranteed once you add Suspense boundaries. We suggest moving resource tags to ",(0,s.jsx)(n.code,{children:"next/script"})," with the ",(0,s.jsx)(n.code,{children:"afterInteractive"})," or ",(0,s.jsx)(n.code,{children:"lazyOnload"})," strategy, or to ",(0,s.jsx)(n.code,{children:"_document"}),". For similar reasons, we also suggest migrating ",(0,s.jsx)(n.code,{children:"next/script"})," instances with the ",(0,s.jsx)(n.code,{children:"beforeInteractive"})," strategy to ",(0,s.jsx)(n.code,{children:"_document"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"data-fetching",children:"Data Fetching"}),"\n",(0,s.jsxs)(n.p,{children:["Data fetching within ",(0,s.jsx)(n.code,{children:"Suspense"})," boundaries is currently only supported on the client side. ",(0,s.jsx)(n.strong,{children:"Server-side data fetching is not supported"})," yet. Read the ",(0,s.jsx)(n.a,{href:"https://nextjs.org/blog/layouts-rfc",children:"Layouts RFC"})," for more information about the future of data fetching on the server."]}),"\n",(0,s.jsx)(n.h4,{id:"styling",children:"Styling"}),"\n",(0,s.jsx)(n.p,{children:"The following solutions are compatible with Next.js streaming:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Inline Styles"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/basic-features/built-in-css-support.md#adding-a-global-stylesheet",children:"Global Stylesheets"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/basic-features/built-in-css-support.md#adding-component-level-css",children:"CSS Modules"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/basic-features/built-in-css-support.md#css-in-js",children:"styled-jsx"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["CSS-in-JS solutions like ",(0,s.jsx)(n.code,{children:"styled-components"})," and ",(0,s.jsx)(n.code,{children:"emotion"})," are currently not compatible with streaming. For library authors, check out the ",(0,s.jsx)(n.a,{href:"https://github.com/reactwg/react-18/discussions/110",children:"upgrade guide"})," to learn more."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(7294);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);