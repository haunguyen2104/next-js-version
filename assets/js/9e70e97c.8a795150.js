"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[7380],{895:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=t(5893),o=t(1151);const a={description:"Dynamic Routes are pages that allow you to add custom params to your URLs. Start creating Dynamic Routes and learn more here."},r="Dynamic Routes",i={id:"next-js/v13.0.1/routing/dynamic-routes",title:"Dynamic Routes",description:"Dynamic Routes are pages that allow you to add custom params to your URLs. Start creating Dynamic Routes and learn more here.",source:"@site/docs/next-js/v13.0.1/routing/dynamic-routes.md",sourceDirName:"next-js/v13.0.1/routing",slug:"/next-js/v13.0.1/routing/dynamic-routes",permalink:"/next-js/v13.0.1/routing/dynamic-routes",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.1/routing/dynamic-routes.md",tags:[],version:"current",frontMatter:{description:"Dynamic Routes are pages that allow you to add custom params to your URLs. Start creating Dynamic Routes and learn more here."},sidebar:"tutorialSidebar",previous:{title:"Routing",permalink:"/next-js/v13.0.1/routing/"},next:{title:"Imperatively",permalink:"/next-js/v13.0.1/routing/imperatively"}},c={},l=[{value:"Catch all routes",id:"catch-all-routes",level:3},{value:"Optional catch all routes",id:"optional-catch-all-routes",level:3},{value:"Caveats",id:"caveats",level:2},{value:"Related",id:"related",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"dynamic-routes",children:"Dynamic Routes"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"Examples"})}),(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/dynamic-routing",children:"Dynamic Routing"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Defining routes by using predefined paths is not always enough for complex applications. In Next.js you can add brackets to a page (",(0,s.jsx)(n.code,{children:"[param]"}),") to create a dynamic route (a.k.a. url slugs, pretty urls, and others)."]}),"\n",(0,s.jsxs)(n.p,{children:["Consider the following page ",(0,s.jsx)(n.code,{children:"pages/post/[pid].js"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { useRouter } from 'next/router'\n\nconst Post = () => {\n  const router = useRouter()\n  const { pid } = router.query\n\n  return <p>Post: {pid}</p>\n}\n\nexport default Post\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Any route like ",(0,s.jsx)(n.code,{children:"/post/1"}),", ",(0,s.jsx)(n.code,{children:"/post/abc"}),", etc. will be matched by ",(0,s.jsx)(n.code,{children:"pages/post/[pid].js"}),". The matched path parameter will be sent as a query parameter to the page, and it will be merged with the other query parameters."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, the route ",(0,s.jsx)(n.code,{children:"/post/abc"})," will have the following ",(0,s.jsx)(n.code,{children:"query"})," object:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "pid": "abc" }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Similarly, the route ",(0,s.jsx)(n.code,{children:"/post/abc?foo=bar"})," will have the following ",(0,s.jsx)(n.code,{children:"query"})," object:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "foo": "bar", "pid": "abc" }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["However, route parameters will override query parameters with the same name. For example, the route ",(0,s.jsx)(n.code,{children:"/post/abc?pid=123"})," will have the following ",(0,s.jsx)(n.code,{children:"query"})," object:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "pid": "abc" }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Multiple dynamic route segments work the same way. The page ",(0,s.jsx)(n.code,{children:"pages/post/[pid]/[comment].js"})," will match the route ",(0,s.jsx)(n.code,{children:"/post/abc/a-comment"})," and its ",(0,s.jsx)(n.code,{children:"query"})," object will be:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "pid": "abc", "comment": "a-comment" }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Client-side navigations to dynamic routes are handled with ",(0,s.jsx)(n.a,{href:"/docs/api-reference/next/link.md",children:(0,s.jsx)(n.code,{children:"next/link"})}),". If we wanted to have links to the routes used above it will look like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import Link from \'next/link\'\n\nfunction Home() {\n  return (\n    <ul>\n      <li>\n        <Link href="/post/abc">Go to pages/post/[pid].js</Link>\n      </li>\n      <li>\n        <Link href="/post/abc?foo=bar">Also goes to pages/post/[pid].js</Link>\n      </li>\n      <li>\n        <Link href="/post/abc/a-comment">\n          Go to pages/post/[pid]/[comment].js\n        </Link>\n      </li>\n    </ul>\n  )\n}\n\nexport default Home\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Read our docs for ",(0,s.jsx)(n.a,{href:"/docs/routing/introduction.md#linking-between-pages",children:"Linking between pages"})," to learn more."]}),"\n",(0,s.jsx)(n.h3,{id:"catch-all-routes",children:"Catch all routes"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"Examples"})}),(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/catch-all-routes",children:"Catch All Routes"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Dynamic routes can be extended to catch all paths by adding three dots (",(0,s.jsx)(n.code,{children:"..."}),") inside the brackets. For example:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pages/post/[...slug].js"})," matches ",(0,s.jsx)(n.code,{children:"/post/a"}),", but also ",(0,s.jsx)(n.code,{children:"/post/a/b"}),", ",(0,s.jsx)(n.code,{children:"/post/a/b/c"})," and so on."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": You can use names other than ",(0,s.jsx)(n.code,{children:"slug"}),", such as: ",(0,s.jsx)(n.code,{children:"[...param]"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Matched parameters will be sent as a query parameter (",(0,s.jsx)(n.code,{children:"slug"})," in the example) to the page, and it will always be an array, so, the path ",(0,s.jsx)(n.code,{children:"/post/a"})," will have the following ",(0,s.jsx)(n.code,{children:"query"})," object:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "slug": ["a"] }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["And in the case of ",(0,s.jsx)(n.code,{children:"/post/a/b"}),", and any other matching path, new parameters will be added to the array, like so:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "slug": ["a", "b"] }\n'})}),"\n",(0,s.jsx)(n.h3,{id:"optional-catch-all-routes",children:"Optional catch all routes"}),"\n",(0,s.jsxs)(n.p,{children:["Catch all routes can be made optional by including the parameter in double brackets (",(0,s.jsx)(n.code,{children:"[[...slug]]"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, ",(0,s.jsx)(n.code,{children:"pages/post/[[...slug]].js"})," will match ",(0,s.jsx)(n.code,{children:"/post"}),", ",(0,s.jsx)(n.code,{children:"/post/a"}),", ",(0,s.jsx)(n.code,{children:"/post/a/b"}),", and so on."]}),"\n",(0,s.jsxs)(n.p,{children:["The main difference between catch all and optional catch all routes is that with optional, the route without the parameter is also matched (",(0,s.jsx)(n.code,{children:"/post"})," in the example above)."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"query"})," objects are as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ } // GET `/post` (empty object)\n{ "slug": ["a"] } // `GET /post/a` (single-element array)\n{ "slug": ["a", "b"] } // `GET /post/a/b` (multi-element array)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"caveats",children:"Caveats"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Predefined routes take precedence over dynamic routes, and dynamic routes over catch all routes. Take a look at the following examples:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pages/post/create.js"})," - Will match ",(0,s.jsx)(n.code,{children:"/post/create"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pages/post/[pid].js"})," - Will match ",(0,s.jsx)(n.code,{children:"/post/1"}),", ",(0,s.jsx)(n.code,{children:"/post/abc"}),", etc. But not ",(0,s.jsx)(n.code,{children:"/post/create"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pages/post/[...slug].js"})," - Will match ",(0,s.jsx)(n.code,{children:"/post/1/2"}),", ",(0,s.jsx)(n.code,{children:"/post/a/b/c"}),", etc. But not ",(0,s.jsx)(n.code,{children:"/post/create"}),", ",(0,s.jsx)(n.code,{children:"/post/abc"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Pages that are statically optimized by ",(0,s.jsx)(n.a,{href:"/docs/advanced-features/automatic-static-optimization.md",children:"Automatic Static Optimization"})," will be hydrated without their route parameters provided, i.e ",(0,s.jsx)(n.code,{children:"query"})," will be an empty object (",(0,s.jsx)(n.code,{children:"{}"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["After hydration, Next.js will trigger an update to your application to provide the route parameters in the ",(0,s.jsx)(n.code,{children:"query"})," object."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related",children:"Related"}),"\n",(0,s.jsx)(n.p,{children:"For more information on what to do next, we recommend the following sections:"}),"\n",(0,s.jsx)("div",{class:"card",children:(0,s.jsxs)("a",{href:"/docs/api-reference/next/link.md",children:[(0,s.jsx)("b",{children:"next/link:"}),(0,s.jsx)("small",{children:"Enable client-side transitions with next/link."})]})}),"\n",(0,s.jsx)("div",{class:"card",children:(0,s.jsxs)("a",{href:"/docs/routing/introduction.md",children:[(0,s.jsx)("b",{children:"Routing:"}),(0,s.jsx)("small",{children:"Learn more about routing in Next.js."})]})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var s=t(7294);const o={},a=s.createContext(o);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);