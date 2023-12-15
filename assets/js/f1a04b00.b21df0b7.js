"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[1966],{1637:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(5893),o=t(1151);const s={description:"Learn different strategies for incrementally adopting Next.js into your development workflow."},i="Incrementally Adopting Next.js",a={id:"next-js/v13.0.0/migrating/incremental-adoption",title:"Incrementally Adopting Next.js",description:"Learn different strategies for incrementally adopting Next.js into your development workflow.",source:"@site/docs/next-js/v13.0.0/migrating/incremental-adoption.md",sourceDirName:"next-js/v13.0.0/migrating",slug:"/next-js/v13.0.0/migrating/incremental-adoption",permalink:"/next-js/v13.0.0/migrating/incremental-adoption",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.0/migrating/incremental-adoption.md",tags:[],version:"current",frontMatter:{description:"Learn different strategies for incrementally adopting Next.js into your development workflow."},sidebar:"tutorialSidebar",previous:{title:"Migrating from React Router",permalink:"/next-js/v13.0.0/migrating/from-react-router"},next:{title:"Routing",permalink:"/next-js/v13.0.0/routing/"}},c={},d=[{value:"Strategies",id:"strategies",level:2},{value:"Subpath",id:"subpath",level:3},{value:"Rewrites",id:"rewrites",level:3},{value:"Micro-Frontends with Monorepos and Subdomains",id:"micro-frontends-with-monorepos-and-subdomains",level:3},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"incrementally-adopting-nextjs",children:"Incrementally Adopting Next.js"}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"Examples"})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/rewrites",children:"Rewrites"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/redirects",children:"Redirects"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/with-zones",children:"Multi-Zones"})})]})]}),"\n",(0,r.jsx)(n.p,{children:"Next.js has been designed for gradual adoption. With Next.js, you can continue using your existing code and add as much (or as little) React as you need. By starting small and incrementally adding more pages, you can prevent derailing feature work by avoiding a complete rewrite."}),"\n",(0,r.jsx)(n.h2,{id:"strategies",children:"Strategies"}),"\n",(0,r.jsx)(n.h3,{id:"subpath",children:"Subpath"}),"\n",(0,r.jsxs)(n.p,{children:["The first strategy is to configure your server or proxy such that, everything under a specific subpath points to a Next.js app. For example, your existing website might be at ",(0,r.jsx)(n.code,{children:"example.com"}),", and you might configure your proxy such that ",(0,r.jsx)(n.code,{children:"example.com/store"})," serves a Next.js e-commerce store."]}),"\n",(0,r.jsxs)(n.p,{children:["Using ",(0,r.jsx)(n.a,{href:"/docs/api-reference/next.config.js/basepath.md",children:(0,r.jsx)(n.code,{children:"basePath"})}),", you can configure your Next.js application's assets and links to automatically work with your new subpath ",(0,r.jsx)(n.code,{children:"/store"}),". Since each page in Next.js is its own ",(0,r.jsx)(n.a,{href:"/docs/routing/introduction.md",children:"standalone route"}),", pages like ",(0,r.jsx)(n.code,{children:"pages/products.js"})," will route to ",(0,r.jsx)(n.code,{children:"example.com/store/products"})," in your application."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"// next.config.js\n\nmodule.exports = {\n  basePath: '/store',\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To learn more about ",(0,r.jsx)(n.code,{children:"basePath"}),", take a look at our ",(0,r.jsx)(n.a,{href:"/docs/api-reference/next.config.js/basepath.md",children:"documentation"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"rewrites",children:"Rewrites"}),"\n",(0,r.jsxs)(n.p,{children:["The second strategy is to create a new Next.js app that points to the root URL of your domain. Then, you can use ",(0,r.jsx)(n.a,{href:"/docs/api-reference/next.config.js/rewrites.md",children:(0,r.jsx)(n.code,{children:"rewrites"})})," inside ",(0,r.jsx)(n.code,{children:"next.config.js"})," to have some subpaths to be proxied to your existing app."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, let's say you created a Next.js app to be served from ",(0,r.jsx)(n.code,{children:"example.com"})," with the following ",(0,r.jsx)(n.code,{children:"next.config.js"}),". Now, requests for the pages you\u2019ve added to this Next.js app (e.g. ",(0,r.jsx)(n.code,{children:"/about"})," if you\u2019ve added ",(0,r.jsx)(n.code,{children:"pages/about.js"}),") will be handled by Next.js, and requests for any other route (e.g. ",(0,r.jsx)(n.code,{children:"/dashboard"}),") will be proxied to ",(0,r.jsx)(n.code,{children:"proxy.example.com"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If you use ",(0,r.jsx)(n.a,{href:"/docs/api-reference/data-fetching/get-static-paths#fallback-true",children:"fallback: true/'blocking'"})," in ",(0,r.jsx)(n.code,{children:"getStaticPaths"}),", the catch-all fallback ",(0,r.jsx)(n.code,{children:"rewrites"})," defined in ",(0,r.jsx)(n.code,{children:"next.config.js"})," will not be run. They are instead caught by the ",(0,r.jsx)(n.code,{children:"getStaticPaths"})," fallback."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"// next.config.js\n\nmodule.exports = {\n  async rewrites() {\n    return {\n      // After checking all Next.js pages (including dynamic routes)\n      // and static files we proxy any other requests\n      fallback: [\n        {\n          source: '/:path*',\n          destination: `https://proxy.example.com/:path*`,\n        },\n      ],\n    }\n\n    // For versions of Next.js < v10.1 you can use a no-op rewrite instead\n    return [\n      // we need to define a no-op rewrite to trigger checking\n      // all pages/static files before we attempt proxying\n      {\n        source: '/:path*',\n        destination: '/:path*',\n      },\n      {\n        source: '/:path*',\n        destination: `https://proxy.example.com/:path*`,\n      },\n    ]\n  },\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To learn more about rewrites, take a look at our ",(0,r.jsx)(n.a,{href:"/docs/api-reference/next.config.js/rewrites.md",children:"documentation"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If you are incrementally migrating to a dynamic route (e.g. ",(0,r.jsx)(n.code,{children:"[slug].js"}),") and using ",(0,r.jsx)(n.code,{children:"fallback: true"})," or ",(0,r.jsx)(n.code,{children:"fallback: 'blocking'"})," along with a fallback ",(0,r.jsx)(n.code,{children:"rewrite"}),", ensure you consider the case where pages are not found. When Next.js matches the dynamic route it stops checking any further routes. Using ",(0,r.jsx)(n.code,{children:"notFound: true"})," in ",(0,r.jsx)(n.code,{children:"getStaticProps"})," will return the 404 page without applying the fallback ",(0,r.jsx)(n.code,{children:"rewrite"}),". If this is not desired, you can use ",(0,r.jsx)(n.code,{children:"getServerSideProps"})," with ",(0,r.jsx)(n.code,{children:"stale-while-revalidate"})," Cache-Control headers when returning your props. Then, you can ",(0,r.jsx)(n.em,{children:"manually"})," proxy to your existing backend using something like ",(0,r.jsx)(n.a,{href:"https://github.com/vercel/next.js/discussions/38839#discussioncomment-3744442",children:"http-proxy"})," instead of returning ",(0,r.jsx)(n.code,{children:"notFound: true"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"micro-frontends-with-monorepos-and-subdomains",children:"Micro-Frontends with Monorepos and Subdomains"}),"\n",(0,r.jsxs)(n.p,{children:["Next.js and ",(0,r.jsx)(n.a,{href:"https://vercel.com",children:"Vercel"})," make it straightforward to adopt micro frontends and deploy as a ",(0,r.jsx)(n.a,{href:"https://vercel.com/blog/monorepos-are-changing-how-teams-build-software?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",children:"monorepo"}),". This allows you to use ",(0,r.jsx)(n.a,{href:"https://demo.vercel.pub/platforms-starter-kit",children:"subdomains"})," to adopt new applications incrementally. Some benefits of micro-frontends:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Smaller, more cohesive and maintainable codebases."}),"\n",(0,r.jsx)(n.li,{children:"More scalable organizations with decoupled, autonomous teams."}),"\n",(0,r.jsx)(n.li,{children:"The ability to upgrade, update, or even rewrite parts of the frontend in a more incremental fashion."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Once your monorepo is set up, push changes to your Git repository as usual and you'll see the commits deployed to the Vercel projects you've connected."}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(n.p,{children:["To learn more, read about ",(0,r.jsx)(n.a,{href:"/docs/api-reference/next.config.js/basepath.md",children:"subpaths"})," and ",(0,r.jsx)(n.a,{href:"/docs/api-reference/next.config.js/rewrites.md",children:"rewrites"})," or ",(0,r.jsx)(n.a,{href:"https://vercel.com/templates/next.js/monorepo-turborepo",children:"deploy a Next.js monorepo"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(7294);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);