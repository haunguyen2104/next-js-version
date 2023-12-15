"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[1648],{6475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(5893),i=n(1151);const r={description:"Fetch data and generate static pages with `getStaticProps`. Learn more about this API for data fetching in Next.js."},a="getStaticProps",o={id:"next-js/v13.0.1/basic-features/data-fetching/get-static-props",title:"getStaticProps",description:"Fetch data and generate static pages with `getStaticProps`. Learn more about this API for data fetching in Next.js.",source:"@site/docs/next-js/v13.0.1/basic-features/data-fetching/get-static-props.md",sourceDirName:"next-js/v13.0.1/basic-features/data-fetching",slug:"/next-js/v13.0.1/basic-features/data-fetching/get-static-props",permalink:"/next-js/v13.0.1/basic-features/data-fetching/get-static-props",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.1/basic-features/data-fetching/get-static-props.md",tags:[],version:"current",frontMatter:{description:"Fetch data and generate static pages with `getStaticProps`. Learn more about this API for data fetching in Next.js."},sidebar:"tutorialSidebar",previous:{title:"getStaticPaths",permalink:"/next-js/v13.0.1/basic-features/data-fetching/get-static-paths"},next:{title:"Incremental Static Regeneration",permalink:"/next-js/v13.0.1/basic-features/data-fetching/incremental-static-regeneration"}},c={},d=[{value:"When should I use getStaticProps?",id:"when-should-i-use-getstaticprops",level:2},{value:"When does getStaticProps run",id:"when-does-getstaticprops-run",level:2},{value:"Using getStaticProps to fetch data from a CMS",id:"using-getstaticprops-to-fetch-data-from-a-cms",level:2},{value:"Write server-side code directly",id:"write-server-side-code-directly",level:2},{value:"Statically generates both HTML and JSON",id:"statically-generates-both-html-and-json",level:2},{value:"Where can I use getStaticProps",id:"where-can-i-use-getstaticprops",level:2},{value:"Runs on every request in development",id:"runs-on-every-request-in-development",level:2},{value:"Preview Mode",id:"preview-mode",level:2},{value:"Related",id:"related",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"getstaticprops",children:"getStaticProps"}),"\n",(0,s.jsxs)(t.p,{children:["If you export a function called ",(0,s.jsx)(t.code,{children:"getStaticProps"})," (Static Site Generation) from a page, Next.js will pre-render this page at build time using the props returned by ",(0,s.jsx)(t.code,{children:"getStaticProps"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"export async function getStaticProps(context) {\n  return {\n    props: {}, // will be passed to the page component as props\n  }\n}\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Note that irrespective of rendering type, any ",(0,s.jsx)(t.code,{children:"props"})," will be passed to the page component and can be viewed on the client-side in the initial HTML. This is to allow the page to be ",(0,s.jsx)(t.a,{href:"https://reactjs.org/docs/react-dom.html#hydrate",children:"hydrated"})," correctly. Make sure that you don't pass any sensitive information that shouldn't be available on the client in ",(0,s.jsx)(t.code,{children:"props"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"when-should-i-use-getstaticprops",children:"When should I use getStaticProps?"}),"\n",(0,s.jsxs)(t.p,{children:["You should use ",(0,s.jsx)(t.code,{children:"getStaticProps"})," if:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The data required to render the page is available at build time ahead of a user\u2019s request"}),"\n",(0,s.jsx)(t.li,{children:"The data comes from a headless CMS"}),"\n",(0,s.jsxs)(t.li,{children:["The page must be pre-rendered (for SEO) and be very fast \u2014 ",(0,s.jsx)(t.code,{children:"getStaticProps"})," generates ",(0,s.jsx)(t.code,{children:"HTML"})," and ",(0,s.jsx)(t.code,{children:"JSON"})," files, both of which can be cached by a CDN for performance"]}),"\n",(0,s.jsx)(t.li,{children:"The data can be publicly cached (not user-specific). This condition can be bypassed in certain specific situation by using a Middleware to rewrite the path."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"when-does-getstaticprops-run",children:"When does getStaticProps run"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"getStaticProps"})," always runs on the server and never on the client. You can validate code written inside ",(0,s.jsx)(t.code,{children:"getStaticProps"})," is removed from the client-side bundle ",(0,s.jsx)(t.a,{href:"https://next-code-elimination.vercel.app/",children:"with this tool"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"getStaticProps"})," always runs during ",(0,s.jsx)(t.code,{children:"next build"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"getStaticProps"})," runs in the background when using ",(0,s.jsx)(t.a,{href:"/docs/api-reference/data-fetching/get-static-paths#fallback-true",children:(0,s.jsx)(t.code,{children:"fallback: true"})})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"getStaticProps"})," is called before initial render when using ",(0,s.jsx)(t.a,{href:"/docs/api-reference/data-fetching/get-static-paths#fallback-blocking",children:(0,s.jsx)(t.code,{children:"fallback: blocking"})})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"getStaticProps"})," runs in the background when using ",(0,s.jsx)(t.code,{children:"revalidate"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"getStaticProps"})," runs on-demand in the background when using ",(0,s.jsx)(t.a,{href:"/docs/basic-features/data-fetching/incremental-static-regeneration.md#on-demand-revalidation",children:(0,s.jsx)(t.code,{children:"revalidate()"})})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["When combined with ",(0,s.jsx)(t.a,{href:"/docs/basic-features/data-fetching/incremental-static-regeneration.md",children:"Incremental Static Regeneration"}),", ",(0,s.jsx)(t.code,{children:"getStaticProps"})," will run in the background while the stale page is being revalidated, and the fresh page served to the browser."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"getStaticProps"})," does not have access to the incoming request (such as query parameters or HTTP headers) as it generates static HTML. If you need access to the request for your page, consider using ",(0,s.jsx)(t.a,{href:"/docs/middleware.md",children:"Middleware"})," in addition to ",(0,s.jsx)(t.code,{children:"getStaticProps"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"using-getstaticprops-to-fetch-data-from-a-cms",children:"Using getStaticProps to fetch data from a CMS"}),"\n",(0,s.jsx)(t.p,{children:"The following example shows how you can fetch a list of blog posts from a CMS."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"// posts will be populated at build time by getStaticProps()\nfunction Blog({ posts }) {\n  return (\n    <ul>\n      {posts.map((post) => (\n        <li>{post.title}</li>\n      ))}\n    </ul>\n  )\n}\n\n// This function gets called at build time on server-side.\n// It won't be called on client-side, so you can even do\n// direct database queries.\nexport async function getStaticProps() {\n  // Call an external API endpoint to get posts.\n  // You can use any data fetching library\n  const res = await fetch('https://.../posts')\n  const posts = await res.json()\n\n  // By returning { props: { posts } }, the Blog component\n  // will receive `posts` as a prop at build time\n  return {\n    props: {\n      posts,\n    },\n  }\n}\n\nexport default Blog\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsxs)(t.a,{href:"/docs/api-reference/data-fetching/get-static-props.md",children:[(0,s.jsx)(t.code,{children:"getStaticProps"})," API reference"]})," covers all parameters and props that can be used with ",(0,s.jsx)(t.code,{children:"getStaticProps"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"write-server-side-code-directly",children:"Write server-side code directly"}),"\n",(0,s.jsxs)(t.p,{children:["As ",(0,s.jsx)(t.code,{children:"getStaticProps"})," runs only on the server-side, it will never run on the client-side. It won\u2019t even be included in the JS bundle for the browser, so you can write direct database queries without them being sent to browsers."]}),"\n",(0,s.jsxs)(t.p,{children:["This means that instead of fetching an ",(0,s.jsx)(t.strong,{children:"API route"})," from ",(0,s.jsx)(t.code,{children:"getStaticProps"})," (that itself fetches data from an external source), you can write the server-side code directly in ",(0,s.jsx)(t.code,{children:"getStaticProps"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Take the following example. An API route is used to fetch some data from a CMS. That API route is then called directly from ",(0,s.jsx)(t.code,{children:"getStaticProps"}),". This produces an additional call, reducing performance. Instead, the logic for fetching the data from the CMS can be shared by using a ",(0,s.jsx)(t.code,{children:"lib/"})," directory. Then it can be shared with ",(0,s.jsx)(t.code,{children:"getStaticProps"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"// lib/load-posts.js\n\n// The following function is shared\n// with getStaticProps and API routes\n// from a `lib/` directory\nexport async function loadPosts() {\n  // Call an external API endpoint to get posts\n  const res = await fetch('https://.../posts/')\n  const data = await res.json()\n\n  return data\n}\n\n// pages/blog.js\nimport { loadPosts } from '../lib/load-posts'\n\n// This function runs only on the server side\nexport async function getStaticProps() {\n  // Instead of fetching your `/api` route you can call the same\n  // function directly in `getStaticProps`\n  const posts = await loadPosts()\n\n  // Props returned will be passed to the page component\n  return { props: { posts } }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Alternatively, if you are ",(0,s.jsx)(t.strong,{children:"not"})," using API routes to fetch data, then the ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",children:(0,s.jsx)(t.code,{children:"fetch()"})})," API ",(0,s.jsx)(t.em,{children:"can"})," be used directly in ",(0,s.jsx)(t.code,{children:"getStaticProps"})," to fetch data."]}),"\n",(0,s.jsxs)(t.p,{children:["To verify what Next.js eliminates from the client-side bundle, you can use the ",(0,s.jsx)(t.a,{href:"https://next-code-elimination.vercel.app/",children:"next-code-elimination tool"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"statically-generates-both-html-and-json",children:"Statically generates both HTML and JSON"}),"\n",(0,s.jsxs)(t.p,{children:["When a page with ",(0,s.jsx)(t.code,{children:"getStaticProps"})," is pre-rendered at build time, in addition to the page HTML file, Next.js generates a JSON file holding the result of running ",(0,s.jsx)(t.code,{children:"getStaticProps"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This JSON file will be used in client-side routing through ",(0,s.jsx)(t.a,{href:"/docs/api-reference/next/link.md",children:(0,s.jsx)(t.code,{children:"next/link"})})," or ",(0,s.jsx)(t.a,{href:"/docs/api-reference/next/router.md",children:(0,s.jsx)(t.code,{children:"next/router"})}),". When you navigate to a page that\u2019s pre-rendered using ",(0,s.jsx)(t.code,{children:"getStaticProps"}),", Next.js fetches this JSON file (pre-computed at build time) and uses it as the props for the page component. This means that client-side page transitions will ",(0,s.jsx)(t.strong,{children:"not"})," call ",(0,s.jsx)(t.code,{children:"getStaticProps"})," as only the exported JSON is used."]}),"\n",(0,s.jsxs)(t.p,{children:["When using Incremental Static Generation, ",(0,s.jsx)(t.code,{children:"getStaticProps"})," will be executed in the background to generate the JSON needed for client-side navigation. You may see this in the form of multiple requests being made for the same page, however, this is intended and has no impact on end-user performance."]}),"\n",(0,s.jsx)(t.h2,{id:"where-can-i-use-getstaticprops",children:"Where can I use getStaticProps"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"getStaticProps"})," can only be exported from a ",(0,s.jsx)(t.strong,{children:"page"}),". You ",(0,s.jsx)(t.strong,{children:"cannot"})," export it from non-page files, ",(0,s.jsx)(t.code,{children:"_app"}),", ",(0,s.jsx)(t.code,{children:"_document"}),", or ",(0,s.jsx)(t.code,{children:"_error"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"One of the reasons for this restriction is that React needs to have all the required data before the page is rendered."}),"\n",(0,s.jsxs)(t.p,{children:["Also, you must use export ",(0,s.jsx)(t.code,{children:"getStaticProps"})," as a standalone function \u2014 it will ",(0,s.jsx)(t.strong,{children:"not"})," work if you add ",(0,s.jsx)(t.code,{children:"getStaticProps"})," as a property of the page component."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Note: if you have created a ",(0,s.jsx)(t.a,{href:"/docs/advanced-features/custom-app.md",children:"custom app"}),", ensure you are passing the ",(0,s.jsx)(t.code,{children:"pageProps"})," to the page component as shown in the linked document, otherwise the props will be empty."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"runs-on-every-request-in-development",children:"Runs on every request in development"}),"\n",(0,s.jsxs)(t.p,{children:["In development (",(0,s.jsx)(t.code,{children:"next dev"}),"), ",(0,s.jsx)(t.code,{children:"getStaticProps"})," will be called on every request."]}),"\n",(0,s.jsx)(t.h2,{id:"preview-mode",children:"Preview Mode"}),"\n",(0,s.jsxs)(t.p,{children:["You can temporarily bypass static generation and render the page at ",(0,s.jsx)(t.strong,{children:"request time"})," instead of build time using ",(0,s.jsx)(t.a,{href:"/docs/advanced-features/preview-mode.md",children:(0,s.jsx)(t.strong,{children:"Preview Mode"})}),". For example, you might be using a headless CMS and want to preview drafts before they're published."]}),"\n",(0,s.jsx)(t.h2,{id:"related",children:"Related"}),"\n",(0,s.jsx)(t.p,{children:"For more information on what to do next, we recommend the following sections:"}),"\n",(0,s.jsx)("div",{class:"card",children:(0,s.jsxs)("a",{href:"/docs/api-reference/data-fetching/get-static-props.md",children:[(0,s.jsx)("b",{children:"getStaticProps API Reference"}),(0,s.jsx)("small",{children:"Read the API Reference for getStaticProps"})]})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(7294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);