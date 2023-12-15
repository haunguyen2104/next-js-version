"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[1257],{2848:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var s=i(5893),r=i(1151);const n={description:"Next.js automatically optimizes your app to be static HTML whenever possible. Learn how it works here."},a="Automatic Static Optimization",o={id:"next-js/v13.0.1/advanced-features/automatic-static-optimization",title:"Automatic Static Optimization",description:"Next.js automatically optimizes your app to be static HTML whenever possible. Learn how it works here.",source:"@site/docs/next-js/v13.0.1/advanced-features/automatic-static-optimization.md",sourceDirName:"next-js/v13.0.1/advanced-features",slug:"/next-js/v13.0.1/advanced-features/automatic-static-optimization",permalink:"/next-js/v13.0.1/advanced-features/automatic-static-optimization",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.1/advanced-features/automatic-static-optimization.md",tags:[],version:"current",frontMatter:{description:"Next.js automatically optimizes your app to be static HTML whenever possible. Learn how it works here."},sidebar:"tutorialSidebar",previous:{title:"TypeScript",permalink:"/next-js/v13.0.1/advanced-features/amp-support/typescript"},next:{title:"Continuous Integration (CI) Build Caching",permalink:"/next-js/v13.0.1/advanced-features/ci-build-caching"}},c={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Caveats",id:"caveats",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"automatic-static-optimization",children:"Automatic Static Optimization"}),"\n",(0,s.jsxs)(t.p,{children:["Next.js automatically determines that a page is static (can be prerendered) if it has no blocking data requirements. This determination is made by the absence of ",(0,s.jsx)(t.code,{children:"getServerSideProps"})," and ",(0,s.jsx)(t.code,{children:"getInitialProps"})," in the page."]}),"\n",(0,s.jsxs)(t.p,{children:["This feature allows Next.js to emit hybrid applications that contain ",(0,s.jsx)(t.strong,{children:"both server-rendered and statically generated pages"}),"."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Statically generated pages are still reactive: Next.js will hydrate your application client-side to give it full interactivity."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["One of the main benefits of this feature is that optimized pages require no server-side computation, and can be instantly streamed to the end-user from multiple CDN locations. The result is an ",(0,s.jsx)(t.em,{children:"ultra fast"})," loading experience for your users."]}),"\n",(0,s.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,s.jsxs)(t.p,{children:["If ",(0,s.jsx)(t.code,{children:"getServerSideProps"})," or ",(0,s.jsx)(t.code,{children:"getInitialProps"})," is present in a page, Next.js will switch to render the page on-demand, per-request (meaning ",(0,s.jsx)(t.a,{href:"/docs/basic-features/pages.md#server-side-rendering",children:"Server-Side Rendering"}),")."]}),"\n",(0,s.jsxs)(t.p,{children:["If the above is not the case, Next.js will ",(0,s.jsx)(t.strong,{children:"statically optimize"})," your page automatically by prerendering the page to static HTML."]}),"\n",(0,s.jsxs)(t.p,{children:["During prerendering, the router's ",(0,s.jsx)(t.code,{children:"query"})," object will be empty since we do not have ",(0,s.jsx)(t.code,{children:"query"})," information to provide during this phase. After hydration, Next.js will trigger an update to your application to provide the route parameters in the ",(0,s.jsx)(t.code,{children:"query"})," object."]}),"\n",(0,s.jsx)(t.p,{children:"The cases where the query will be updated after hydration triggering another render are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The page is a ",(0,s.jsx)(t.a,{href:"/docs/routing/dynamic-routes.md",children:"dynamic-route"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"The page has query values in the URL."}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/docs/api-reference/next.config.js/rewrites.md",children:"Rewrites"})," are configured in your ",(0,s.jsx)(t.code,{children:"next.config.js"})," since these can have parameters that may need to be parsed and provided in the ",(0,s.jsx)(t.code,{children:"query"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["To be able to distinguish if the query is fully updated and ready for use, you can leverage the ",(0,s.jsx)(t.code,{children:"isReady"})," field on ",(0,s.jsx)(t.a,{href:"/docs/api-reference/next/router.md#router-object",children:(0,s.jsx)(t.code,{children:"next/router"})}),"."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," Parameters added with ",(0,s.jsx)(t.a,{href:"/docs/routing/dynamic-routes.md",children:"dynamic routes"})," to a page that's using ",(0,s.jsx)(t.a,{href:"/docs/basic-features/data-fetching/get-static-props.md",children:(0,s.jsx)(t.code,{children:"getStaticProps"})})," will always be available inside the ",(0,s.jsx)(t.code,{children:"query"})," object."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"next build"})," will emit ",(0,s.jsx)(t.code,{children:".html"})," files for statically optimized pages. For example, the result for the page ",(0,s.jsx)(t.code,{children:"pages/about.js"})," would be:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:".next/server/pages/about.html\n"})}),"\n",(0,s.jsxs)(t.p,{children:["And if you add ",(0,s.jsx)(t.code,{children:"getServerSideProps"})," to the page, it will then be JavaScript, like so:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:".next/server/pages/about.js\n"})}),"\n",(0,s.jsx)(t.h2,{id:"caveats",children:"Caveats"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If you have a ",(0,s.jsxs)(t.a,{href:"/docs/advanced-features/custom-app.md",children:["custom ",(0,s.jsx)(t.code,{children:"App"})]})," with ",(0,s.jsx)(t.code,{children:"getInitialProps"})," then this optimization will be turned off in pages without ",(0,s.jsx)(t.a,{href:"/docs/basic-features/data-fetching/get-static-props.md",children:"Static Generation"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["If you have a ",(0,s.jsxs)(t.a,{href:"/docs/advanced-features/custom-document.md",children:["custom ",(0,s.jsx)(t.code,{children:"Document"})]})," with ",(0,s.jsx)(t.code,{children:"getInitialProps"})," be sure you check if ",(0,s.jsx)(t.code,{children:"ctx.req"})," is defined before assuming the page is server-side rendered. ",(0,s.jsx)(t.code,{children:"ctx.req"})," will be ",(0,s.jsx)(t.code,{children:"undefined"})," for pages that are prerendered."]}),"\n",(0,s.jsxs)(t.li,{children:["Avoid using the ",(0,s.jsx)(t.code,{children:"asPath"})," value on ",(0,s.jsx)(t.a,{href:"/docs/api-reference/next/router.md#router-object",children:(0,s.jsx)(t.code,{children:"next/router"})})," in the rendering tree until the router's ",(0,s.jsx)(t.code,{children:"isReady"})," field is ",(0,s.jsx)(t.code,{children:"true"}),". Statically optimized pages only know ",(0,s.jsx)(t.code,{children:"asPath"})," on the client and not the server, so using it as a prop may lead to mismatch errors. The ",(0,s.jsxs)(t.a,{href:"https://github.com/vercel/next.js/tree/canary/examples/active-class-name",children:[(0,s.jsx)(t.code,{children:"active-class-name"})," example"]})," demonstrates one way to use ",(0,s.jsx)(t.code,{children:"asPath"})," as a prop."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>a});var s=i(7294);const r={},n=s.createContext(r);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);