"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[1826],{3082:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var t=s(5893),i=s(1151);const o={description:"Extend the default page extensions used by Next.js when resolving pages in the pages directory."},c="Custom Page Extensions",r={id:"next-js/v13.0.0/api-reference/next.config.js/custom-page-extensions",title:"Custom Page Extensions",description:"Extend the default page extensions used by Next.js when resolving pages in the pages directory.",source:"@site/docs/next-js/v13.0.0/api-reference/next.config.js/custom-page-extensions.md",sourceDirName:"next-js/v13.0.0/api-reference/next.config.js",slug:"/next-js/v13.0.0/api-reference/next.config.js/custom-page-extensions",permalink:"/next-js/v13.0.0/api-reference/next.config.js/custom-page-extensions",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.0/api-reference/next.config.js/custom-page-extensions.md",tags:[],version:"current",frontMatter:{description:"Extend the default page extensions used by Next.js when resolving pages in the pages directory."},sidebar:"tutorialSidebar",previous:{title:"Configuring the Build ID",permalink:"/next-js/v13.0.0/api-reference/next.config.js/configuring-the-build-id"},next:{title:"Custom Webpack Config",permalink:"/next-js/v13.0.0/api-reference/next.config.js/custom-webpack-config"}},d={},a=[{value:"Including non-page files in the <code>pages</code> directory",id:"including-non-page-files-in-the-pages-directory",level:2},{value:"Related",id:"related",level:2}];function l(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"custom-page-extensions",children:"Custom Page Extensions"}),"\n",(0,t.jsxs)(n.p,{children:["You can extend the default Page extensions (",(0,t.jsx)(n.code,{children:".tsx"}),", ",(0,t.jsx)(n.code,{children:".ts"}),", ",(0,t.jsx)(n.code,{children:".jsx"}),", ",(0,t.jsx)(n.code,{children:".js"}),") used by Next.js. Inside ",(0,t.jsx)(n.code,{children:"next.config.js"}),", add the ",(0,t.jsx)(n.code,{children:"pageExtensions"})," config:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Changing these values affects ",(0,t.jsx)(n.em,{children:"all"})," Next.js pages, including the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"middleware.js"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"pages/_document.js"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"pages/_app.js"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"pages/api/"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For example, if you reconfigure ",(0,t.jsx)(n.code,{children:".ts"})," page extensions to ",(0,t.jsx)(n.code,{children:".page.ts"}),", you would need to rename pages like ",(0,t.jsx)(n.code,{children:"_app.page.ts"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"including-non-page-files-in-the-pages-directory",children:["Including non-page files in the ",(0,t.jsx)(n.code,{children:"pages"})," directory"]}),"\n",(0,t.jsxs)(n.p,{children:["You can colocate test files or other files used by components in the ",(0,t.jsx)(n.code,{children:"pages"})," directory. Inside ",(0,t.jsx)(n.code,{children:"next.config.js"}),", add the ",(0,t.jsx)(n.code,{children:"pageExtensions"})," config:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then, rename your pages to have a file extension that includes ",(0,t.jsx)(n.code,{children:".page"})," (e.g. rename ",(0,t.jsx)(n.code,{children:"MyPage.tsx"})," to ",(0,t.jsx)(n.code,{children:"MyPage.page.tsx"}),"). Ensure you rename ",(0,t.jsx)(n.em,{children:"all"})," Next.js pages, including the files mentioned above."]}),"\n",(0,t.jsx)(n.h2,{id:"related",children:"Related"}),"\n",(0,t.jsx)("div",{class:"card",children:(0,t.jsxs)("a",{href:"/docs/api-reference/next.config.js/introduction.md",children:[(0,t.jsx)("b",{children:"Introduction to next.config.js:"}),(0,t.jsx)("small",{children:"Learn more about the configuration file used by Next.js."})]})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>c});var t=s(7294);const i={},o=t.createContext(i);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);