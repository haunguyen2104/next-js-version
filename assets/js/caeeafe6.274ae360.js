"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[6382],{2486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=n(5893),i=n(1151);const r={description:"Customize the pages that will be exported as HTML files when using `next export`."},o="exportPathMap",d={id:"next-js/v13.0.1/api-reference/next.config.js/exportPathMap",title:"exportPathMap",description:"Customize the pages that will be exported as HTML files when using `next export`.",source:"@site/docs/next-js/v13.0.1/api-reference/next.config.js/exportPathMap.md",sourceDirName:"next-js/v13.0.1/api-reference/next.config.js",slug:"/next-js/v13.0.1/api-reference/next.config.js/exportPathMap",permalink:"/next-js/v13.0.1/api-reference/next.config.js/exportPathMap",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.1/api-reference/next.config.js/exportPathMap.md",tags:[],version:"current",frontMatter:{description:"Customize the pages that will be exported as HTML files when using `next export`."},sidebar:"tutorialSidebar",previous:{title:"Environment Variables",permalink:"/next-js/v13.0.1/api-reference/next.config.js/environment-variables"},next:{title:"Headers",permalink:"/next-js/v13.0.1/api-reference/next.config.js/headers"}},c={},a=[{value:"Adding a trailing slash",id:"adding-a-trailing-slash",level:2},{value:"Customizing the output directory",id:"customizing-the-output-directory",level:2},{value:"Related",id:"related",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"exportpathmap",children:"exportPathMap"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This feature is exclusive to ",(0,s.jsx)(t.code,{children:"next export"}),". Please refer to ",(0,s.jsx)(t.a,{href:"/docs/advanced-features/static-html-export.md",children:"Static HTML export"})," if you want to learn more about it."]}),"\n"]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"Examples"})}),(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/with-static-export",children:"Static Export"})})})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"exportPathMap"})," allows you to specify a mapping of request paths to page destinations, to be used during export. Paths defined in ",(0,s.jsx)(t.code,{children:"exportPathMap"})," will also be available when using ",(0,s.jsx)(t.a,{href:"/docs/api-reference/cli.md#development",children:(0,s.jsx)(t.code,{children:"next dev"})}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Let's start with an example, to create a custom ",(0,s.jsx)(t.code,{children:"exportPathMap"})," for an app with the following pages:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"pages/index.js"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"pages/about.js"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"pages/post.js"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Open ",(0,s.jsx)(t.code,{children:"next.config.js"})," and add the following ",(0,s.jsx)(t.code,{children:"exportPathMap"})," config:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"module.exports = {\n  exportPathMap: async function (\n    defaultPathMap,\n    { dev, dir, outDir, distDir, buildId }\n  ) {\n    return {\n      '/': { page: '/' },\n      '/about': { page: '/about' },\n      '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },\n      '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },\n      '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },\n    }\n  },\n}\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Note: the ",(0,s.jsx)(t.code,{children:"query"})," field in ",(0,s.jsx)(t.code,{children:"exportPathMap"})," cannot be used with ",(0,s.jsx)(t.a,{href:"/docs/advanced-features/automatic-static-optimization",children:"automatically statically optimized pages"})," or ",(0,s.jsxs)(t.a,{href:"/docs/basic-features/data-fetching/get-static-props.md",children:[(0,s.jsx)(t.code,{children:"getStaticProps"})," pages"]})," as they are rendered to HTML files at build-time and additional query information cannot be provided during ",(0,s.jsx)(t.code,{children:"next export"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The pages will then be exported as HTML files, for example, ",(0,s.jsx)(t.code,{children:"/about"})," will become ",(0,s.jsx)(t.code,{children:"/about.html"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"exportPathMap"})," is an ",(0,s.jsx)(t.code,{children:"async"})," function that receives 2 arguments: the first one is ",(0,s.jsx)(t.code,{children:"defaultPathMap"}),", which is the default map used by Next.js. The second argument is an object with:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"dev"})," - ",(0,s.jsx)(t.code,{children:"true"})," when ",(0,s.jsx)(t.code,{children:"exportPathMap"})," is being called in development. ",(0,s.jsx)(t.code,{children:"false"})," when running ",(0,s.jsx)(t.code,{children:"next export"}),". In development ",(0,s.jsx)(t.code,{children:"exportPathMap"})," is used to define routes."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"dir"})," - Absolute path to the project directory"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"outDir"})," - Absolute path to the ",(0,s.jsx)(t.code,{children:"out/"})," directory (",(0,s.jsxs)(t.a,{href:"#customizing-the-output-directory",children:["configurable with ",(0,s.jsx)(t.code,{children:"-o"})]}),"). When ",(0,s.jsx)(t.code,{children:"dev"})," is ",(0,s.jsx)(t.code,{children:"true"})," the value of ",(0,s.jsx)(t.code,{children:"outDir"})," will be ",(0,s.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"distDir"})," - Absolute path to the ",(0,s.jsx)(t.code,{children:".next/"})," directory (configurable with the ",(0,s.jsx)(t.a,{href:"/docs/api-reference/next.config.js/setting-a-custom-build-directory.md",children:(0,s.jsx)(t.code,{children:"distDir"})})," config)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"buildId"})," - The generated build id"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The returned object is a map of pages where the ",(0,s.jsx)(t.code,{children:"key"})," is the ",(0,s.jsx)(t.code,{children:"pathname"})," and the ",(0,s.jsx)(t.code,{children:"value"})," is an object that accepts the following fields:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"page"}),": ",(0,s.jsx)(t.code,{children:"String"})," - the page inside the ",(0,s.jsx)(t.code,{children:"pages"})," directory to render"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"query"}),": ",(0,s.jsx)(t.code,{children:"Object"})," - the ",(0,s.jsx)(t.code,{children:"query"})," object passed to ",(0,s.jsx)(t.code,{children:"getInitialProps"})," when prerendering. Defaults to ",(0,s.jsx)(t.code,{children:"{}"})]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["The exported ",(0,s.jsx)(t.code,{children:"pathname"})," can also be a filename (for example, ",(0,s.jsx)(t.code,{children:"/readme.md"}),"), but you may need to set the ",(0,s.jsx)(t.code,{children:"Content-Type"})," header to ",(0,s.jsx)(t.code,{children:"text/html"})," when serving its content if it is different than ",(0,s.jsx)(t.code,{children:".html"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"adding-a-trailing-slash",children:"Adding a trailing slash"}),"\n",(0,s.jsxs)(t.p,{children:["It is possible to configure Next.js to export pages as ",(0,s.jsx)(t.code,{children:"index.html"})," files and require trailing slashes, ",(0,s.jsx)(t.code,{children:"/about"})," becomes ",(0,s.jsx)(t.code,{children:"/about/index.html"})," and is routable via ",(0,s.jsx)(t.code,{children:"/about/"}),". This was the default behavior prior to Next.js 9."]}),"\n",(0,s.jsxs)(t.p,{children:["To switch back and add a trailing slash, open ",(0,s.jsx)(t.code,{children:"next.config.js"})," and enable the ",(0,s.jsx)(t.code,{children:"trailingSlash"})," config:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"module.exports = {\n  trailingSlash: true,\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"customizing-the-output-directory",children:"Customizing the output directory"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/advanced-features/static-html-export.md#how-to-use-it",children:(0,s.jsx)(t.code,{children:"next export"})})," will use ",(0,s.jsx)(t.code,{children:"out"})," as the default output directory, you can customize this using the ",(0,s.jsx)(t.code,{children:"-o"})," argument, like so:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"next export -o outdir\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Warning"}),": Using ",(0,s.jsx)(t.code,{children:"exportPathMap"})," for defining routes with any ",(0,s.jsx)(t.code,{children:"getStaticPaths"})," powered page is now ignored and gets overridden. We recommend not to use them together."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related",children:"Related"}),"\n",(0,s.jsx)("div",{class:"card",children:(0,s.jsxs)("a",{href:"/docs/api-reference/next.config.js/introduction.md",children:[(0,s.jsx)("b",{children:"Introduction to next.config.js:"}),(0,s.jsx)("small",{children:"Learn more about the configuration file used by Next.js."})]})}),"\n",(0,s.jsx)("div",{class:"card",children:(0,s.jsxs)("a",{href:"/docs/advanced-features/static-html-export.md",children:[(0,s.jsx)("b",{children:"Static HTML Export:"}),(0,s.jsx)("small",{children:"Export your Next.js app to static HTML."})]})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var s=n(7294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);