"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[6095],{2575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var i=n(5893),r=n(1151);const s={description:"Export your Next.js app to static HTML, and run it standalone without the need of a Node.js server."},c="Static HTML Export",d={id:"next-js/v13.0.0/advanced-features/static-html-export",title:"Static HTML Export",description:"Export your Next.js app to static HTML, and run it standalone without the need of a Node.js server.",source:"@site/docs/next-js/v13.0.0/advanced-features/static-html-export.md",sourceDirName:"next-js/v13.0.0/advanced-features",slug:"/next-js/v13.0.0/advanced-features/static-html-export",permalink:"/next-js/v13.0.0/advanced-features/static-html-export",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.0/advanced-features/static-html-export.md",tags:[],version:"current",frontMatter:{description:"Export your Next.js app to static HTML, and run it standalone without the need of a Node.js server."},sidebar:"tutorialSidebar",previous:{title:"src Directory",permalink:"/next-js/v13.0.0/advanced-features/src-directory"},next:{title:"Using MDX with Next.js",permalink:"/next-js/v13.0.0/advanced-features/using-mdx"}},a={},o=[{value:"<code>next export</code>",id:"next-export",level:2},{value:"Supported Features",id:"supported-features",level:2},{value:"Unsupported Features",id:"unsupported-features",level:2},{value:"<code>getInitialProps</code>",id:"getinitialprops",level:3}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"static-html-export",children:"Static HTML Export"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Examples"})}),(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/with-static-export",children:"Static Export"})})})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"next export"})," allows you to export your Next.js application to static HTML, which can be run standalone without the need of a Node.js server. It is recommended to only use ",(0,i.jsx)(t.code,{children:"next export"})," if you don't need any of the ",(0,i.jsx)(t.a,{href:"#unsupported-features",children:"unsupported features"})," requiring a server."]}),"\n",(0,i.jsxs)(t.p,{children:["If you're looking to build a hybrid site where only ",(0,i.jsx)(t.em,{children:"some"})," pages are prerendered to static HTML, Next.js already does that automatically. Learn more about ",(0,i.jsx)(t.a,{href:"/docs/advanced-features/automatic-static-optimization.md",children:"Automatic Static Optimization"})," and ",(0,i.jsx)(t.a,{href:"/docs/basic-features/data-fetching/incremental-static-regeneration.md",children:"Incremental Static Regeneration"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"next-export",children:(0,i.jsx)(t.code,{children:"next export"})}),"\n",(0,i.jsxs)(t.p,{children:["Update your build script in ",(0,i.jsx)(t.code,{children:"package.json"})," to use ",(0,i.jsx)(t.code,{children:"next export"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'"scripts": {\n  "build": "next build && next export"\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Running ",(0,i.jsx)(t.code,{children:"npm run build"})," will generate an ",(0,i.jsx)(t.code,{children:"out"})," directory."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"next export"})," builds an HTML version of your app. During ",(0,i.jsx)(t.code,{children:"next build"}),", ",(0,i.jsx)(t.a,{href:"/docs/basic-features/data-fetching/get-static-props.md",children:(0,i.jsx)(t.code,{children:"getStaticProps"})})," and ",(0,i.jsx)(t.a,{href:"/docs/basic-features/data-fetching/get-static-paths.md",children:(0,i.jsx)(t.code,{children:"getStaticPaths"})})," will generate an HTML file for each page in your ",(0,i.jsx)(t.code,{children:"pages"})," directory (or more for ",(0,i.jsx)(t.a,{href:"/docs/routing/dynamic-routes.md",children:"dynamic routes"}),"). Then, ",(0,i.jsx)(t.code,{children:"next export"})," will copy the already exported files into the correct directory. ",(0,i.jsx)(t.code,{children:"getInitialProps"})," will generate the HTML files during ",(0,i.jsx)(t.code,{children:"next export"})," instead of ",(0,i.jsx)(t.code,{children:"next build"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["For more advanced scenarios, you can define a parameter called ",(0,i.jsx)(t.a,{href:"/docs/api-reference/next.config.js/exportPathMap.md",children:(0,i.jsx)(t.code,{children:"exportPathMap"})})," in your ",(0,i.jsx)(t.a,{href:"/docs/api-reference/next.config.js/introduction.md",children:(0,i.jsx)(t.code,{children:"next.config.js"})})," file to configure exactly which pages will be generated."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Warning"}),": Using ",(0,i.jsx)(t.code,{children:"exportPathMap"})," for defining routes with any ",(0,i.jsx)(t.code,{children:"getStaticPaths"})," powered page is now ignored and gets overridden. We recommend not to use them together."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"supported-features",children:"Supported Features"}),"\n",(0,i.jsx)(t.p,{children:"The majority of core Next.js features needed to build a static site are supported, including:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsxs)(t.a,{href:"/docs/routing/dynamic-routes.md",children:["Dynamic Routes when using ",(0,i.jsx)(t.code,{children:"getStaticPaths"})]})}),"\n",(0,i.jsxs)(t.li,{children:["Prefetching with ",(0,i.jsx)(t.code,{children:"next/link"})]}),"\n",(0,i.jsx)(t.li,{children:"Preloading JavaScript"}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/advanced-features/dynamic-import.md",children:"Dynamic Imports"})}),"\n",(0,i.jsx)(t.li,{children:"Any styling options (e.g. CSS Modules, styled-jsx)"}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/basic-features/data-fetching/client-side.md",children:"Client-side data fetching"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/basic-features/data-fetching/get-static-props.md",children:(0,i.jsx)(t.code,{children:"getStaticProps"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/basic-features/data-fetching/get-static-paths.md",children:(0,i.jsx)(t.code,{children:"getStaticPaths"})})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/basic-features/image-optimization.md",children:"Image Optimization"})," using a ",(0,i.jsx)(t.a,{href:"/docs/basic-features/image-optimization.md#loaders",children:"custom loader"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"unsupported-features",children:"Unsupported Features"}),"\n",(0,i.jsx)(t.p,{children:"Features that require a Node.js server, or dynamic logic that cannot be computed during the build process, are not supported:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/basic-features/image-optimization.md",children:"Image Optimization"})," (default loader)"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/advanced-features/i18n-routing.md",children:"Internationalized Routing"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/api-routes/introduction.md",children:"API Routes"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/api-reference/next.config.js/rewrites.md",children:"Rewrites"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/api-reference/next.config.js/redirects.md",children:"Redirects"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/api-reference/next.config.js/headers.md",children:"Headers"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/middleware.md",children:"Middleware"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/basic-features/data-fetching/incremental-static-regeneration.md",children:"Incremental Static Regeneration"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/api-reference/data-fetching/get-static-paths.md#fallback-true",children:(0,i.jsx)(t.code,{children:"fallback: true"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/basic-features/data-fetching/get-server-side-props.md",children:(0,i.jsx)(t.code,{children:"getServerSideProps"})})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"getinitialprops",children:(0,i.jsx)(t.code,{children:"getInitialProps"})}),"\n",(0,i.jsxs)(t.p,{children:["It's possible to use the ",(0,i.jsx)(t.a,{href:"/docs/api-reference/data-fetching/get-initial-props.md",children:(0,i.jsx)(t.code,{children:"getInitialProps"})})," API instead of ",(0,i.jsx)(t.code,{children:"getStaticProps"}),", but it comes with a few caveats:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"getInitialProps"})," cannot be used alongside ",(0,i.jsx)(t.code,{children:"getStaticProps"})," or ",(0,i.jsx)(t.code,{children:"getStaticPaths"})," on any given page. If you have dynamic routes, instead of using ",(0,i.jsx)(t.code,{children:"getStaticPaths"})," you'll need to configure the ",(0,i.jsx)(t.a,{href:"/docs/api-reference/next.config.js/exportPathMap.md",children:(0,i.jsx)(t.code,{children:"exportPathMap"})})," parameter in your ",(0,i.jsx)(t.a,{href:"/docs/api-reference/next.config.js/introduction.md",children:(0,i.jsx)(t.code,{children:"next.config.js"})})," file to let the exporter know which HTML files it should output."]}),"\n",(0,i.jsxs)(t.li,{children:["When ",(0,i.jsx)(t.code,{children:"getInitialProps"})," is called during export, the ",(0,i.jsx)(t.code,{children:"req"})," and ",(0,i.jsx)(t.code,{children:"res"})," fields of its ",(0,i.jsx)(t.a,{href:"/docs/api-reference/data-fetching/get-initial-props.md#context-object",children:(0,i.jsx)(t.code,{children:"context"})})," parameter will be empty objects, since during export there is no server running."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"getInitialProps"})," ",(0,i.jsx)(t.strong,{children:"will be called on every client-side navigation"}),", if you'd like to only fetch data at build-time, switch to ",(0,i.jsx)(t.code,{children:"getStaticProps"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"getInitialProps"})," should fetch from an API and cannot use Node.js-specific libraries or the file system like ",(0,i.jsx)(t.code,{children:"getStaticProps"})," can."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["We recommend migrating towards ",(0,i.jsx)(t.code,{children:"getStaticProps"})," over ",(0,i.jsx)(t.code,{children:"getInitialProps"})," whenever possible."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>c});var i=n(7294);const r={},s=i.createContext(r);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);