"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[4996],{4820:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=n(5893),o=n(1151);const a={description:"You can add the dynamic routes used for pages to API Routes too. Learn how it works here."},i="Dynamic API Routes",r={id:"next-js/v13.0.1/api-routes/dynamic-api-routes",title:"Dynamic API Routes",description:"You can add the dynamic routes used for pages to API Routes too. Learn how it works here.",source:"@site/docs/next-js/v13.0.1/api-routes/dynamic-api-routes.md",sourceDirName:"next-js/v13.0.1/api-routes",slug:"/next-js/v13.0.1/api-routes/dynamic-api-routes",permalink:"/next-js/v13.0.1/api-routes/dynamic-api-routes",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.1/api-routes/dynamic-api-routes.md",tags:[],version:"current",frontMatter:{description:"You can add the dynamic routes used for pages to API Routes too. Learn how it works here."},sidebar:"tutorialSidebar",previous:{title:"URL Imports",permalink:"/next-js/v13.0.1/api-reference/next.config.js/url-imports"},next:{title:"Edge API Routes (Beta)",permalink:"/next-js/v13.0.1/api-routes/edge-api-routes"}},c={},l=[{value:"Index routes and Dynamic API routes",id:"index-routes-and-dynamic-api-routes",level:3},{value:"Catch all API routes",id:"catch-all-api-routes",level:3},{value:"Optional catch all API routes",id:"optional-catch-all-api-routes",level:3},{value:"Caveats",id:"caveats",level:2},{value:"Related",id:"related",level:2}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"dynamic-api-routes",children:"Dynamic API Routes"}),"\n",(0,t.jsxs)(n,{open:!0,children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Examples"})}),(0,t.jsx)("ul",{children:(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/api-routes",children:"Basic API Routes"})})})]}),"\n",(0,t.jsxs)(s.p,{children:["API routes support ",(0,t.jsx)(s.a,{href:"/docs/routing/dynamic-routes.md",children:"dynamic routes"}),", and follow the same file naming rules used for ",(0,t.jsx)(s.code,{children:"pages"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["For example, the API route ",(0,t.jsx)(s.code,{children:"pages/api/post/[pid].js"})," has the following code:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"export default function handler(req, res) {\n  const { pid } = req.query\n  res.end(`Post: ${pid}`)\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Now, a request to ",(0,t.jsx)(s.code,{children:"/api/post/abc"})," will respond with the text: ",(0,t.jsx)(s.code,{children:"Post: abc"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"index-routes-and-dynamic-api-routes",children:"Index routes and Dynamic API routes"}),"\n",(0,t.jsx)(s.p,{children:"A very common RESTful pattern is to set up routes like this:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"GET api/posts"})," - gets a list of posts, probably paginated"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"GET api/posts/12345"})," - gets post id 12345"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"We can model this in two ways:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Option 1:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"/api/posts.js"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"/api/posts/[postId].js"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Option 2:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"/api/posts/index.js"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"/api/posts/[postId].js"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Both are equivalent. A third option of only using ",(0,t.jsx)(s.code,{children:"/api/posts/[postId].js"})," is not valid because Dynamic Routes (including Catch-all routes - see below) do not have an ",(0,t.jsx)(s.code,{children:"undefined"})," state and ",(0,t.jsx)(s.code,{children:"GET api/posts"})," will not match ",(0,t.jsx)(s.code,{children:"/api/posts/[postId].js"})," under any circumstances."]}),"\n",(0,t.jsx)(s.h3,{id:"catch-all-api-routes",children:"Catch all API routes"}),"\n",(0,t.jsxs)(s.p,{children:["API Routes can be extended to catch all paths by adding three dots (",(0,t.jsx)(s.code,{children:"..."}),") inside the brackets. For example:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"pages/api/post/[...slug].js"})," matches ",(0,t.jsx)(s.code,{children:"/api/post/a"}),", but also ",(0,t.jsx)(s.code,{children:"/api/post/a/b"}),", ",(0,t.jsx)(s.code,{children:"/api/post/a/b/c"})," and so on."]}),"\n"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"}),": You can use names other than ",(0,t.jsx)(s.code,{children:"slug"}),", such as: ",(0,t.jsx)(s.code,{children:"[...param]"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Matched parameters will be sent as a query parameter (",(0,t.jsx)(s.code,{children:"slug"})," in the example) to the page, and it will always be an array, so, the path ",(0,t.jsx)(s.code,{children:"/api/post/a"})," will have the following ",(0,t.jsx)(s.code,{children:"query"})," object:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{ "slug": ["a"] }\n'})}),"\n",(0,t.jsxs)(s.p,{children:["And in the case of ",(0,t.jsx)(s.code,{children:"/api/post/a/b"}),", and any other matching path, new parameters will be added to the array, like so:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{ "slug": ["a", "b"] }\n'})}),"\n",(0,t.jsxs)(s.p,{children:["An API route for ",(0,t.jsx)(s.code,{children:"pages/api/post/[...slug].js"})," could look like this:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"export default function handler(req, res) {\n  const { slug } = req.query\n  res.end(`Post: ${slug.join(', ')}`)\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Now, a request to ",(0,t.jsx)(s.code,{children:"/api/post/a/b/c"})," will respond with the text: ",(0,t.jsx)(s.code,{children:"Post: a, b, c"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"optional-catch-all-api-routes",children:"Optional catch all API routes"}),"\n",(0,t.jsxs)(s.p,{children:["Catch all routes can be made optional by including the parameter in double brackets (",(0,t.jsx)(s.code,{children:"[[...slug]]"}),")."]}),"\n",(0,t.jsxs)(s.p,{children:["For example, ",(0,t.jsx)(s.code,{children:"pages/api/post/[[...slug]].js"})," will match ",(0,t.jsx)(s.code,{children:"/api/post"}),", ",(0,t.jsx)(s.code,{children:"/api/post/a"}),", ",(0,t.jsx)(s.code,{children:"/api/post/a/b"}),", and so on."]}),"\n",(0,t.jsxs)(s.p,{children:["The main difference between catch all and optional catch all routes is that with optional, the route without the parameter is also matched (",(0,t.jsx)(s.code,{children:"/api/post"})," in the example above)."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"query"})," objects are as follows:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{ } // GET `/api/post` (empty object)\n{ "slug": ["a"] } // `GET /api/post/a` (single-element array)\n{ "slug": ["a", "b"] } // `GET /api/post/a/b` (multi-element array)\n'})}),"\n",(0,t.jsx)(s.h2,{id:"caveats",children:"Caveats"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Predefined API routes take precedence over dynamic API routes, and dynamic API routes over catch all API routes. Take a look at the following examples:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"pages/api/post/create.js"})," - Will match ",(0,t.jsx)(s.code,{children:"/api/post/create"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"pages/api/post/[pid].js"})," - Will match ",(0,t.jsx)(s.code,{children:"/api/post/1"}),", ",(0,t.jsx)(s.code,{children:"/api/post/abc"}),", etc. But not ",(0,t.jsx)(s.code,{children:"/api/post/create"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"pages/api/post/[...slug].js"})," - Will match ",(0,t.jsx)(s.code,{children:"/api/post/1/2"}),", ",(0,t.jsx)(s.code,{children:"/api/post/a/b/c"}),", etc. But not ",(0,t.jsx)(s.code,{children:"/api/post/create"}),", ",(0,t.jsx)(s.code,{children:"/api/post/abc"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"related",children:"Related"}),"\n",(0,t.jsx)(s.p,{children:"For more information on what to do next, we recommend the following sections:"}),"\n",(0,t.jsx)("div",{class:"card",children:(0,t.jsxs)("a",{href:"/docs/routing/dynamic-routes.md",children:[(0,t.jsx)("b",{children:"Dynamic Routes:"}),(0,t.jsx)("small",{children:"Learn more about the built-in dynamic routes."})]})})]})}function p(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>i});var t=n(7294);const o={},a=t.createContext(o);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);