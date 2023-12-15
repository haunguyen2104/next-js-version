"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[5419],{5268:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var t=r(5893),s=r(1151);const a={description:"Enables browser source map generation during the production build."},o="Source Maps",i={id:"next-js/v13.0.1/advanced-features/source-maps",title:"Source Maps",description:"Enables browser source map generation during the production build.",source:"@site/docs/next-js/v13.0.1/advanced-features/source-maps.md",sourceDirName:"next-js/v13.0.1/advanced-features",slug:"/next-js/v13.0.1/advanced-features/source-maps",permalink:"/next-js/v13.0.1/advanced-features/source-maps",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.1/advanced-features/source-maps.md",tags:[],version:"current",frontMatter:{description:"Enables browser source map generation during the production build."},sidebar:"tutorialSidebar",previous:{title:"Security Headers",permalink:"/next-js/v13.0.1/advanced-features/security-headers"},next:{title:"src Directory",permalink:"/next-js/v13.0.1/advanced-features/src-directory"}},c={},u=[{value:"Configuration flag",id:"configuration-flag",level:2},{value:"Caveats",id:"caveats",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"source-maps",children:"Source Maps"}),"\n",(0,t.jsx)(n.p,{children:"Source Maps are enabled by default during development. During production builds, they are disabled to prevent you leaking your source on the client, unless you specifically opt in with the configuration flag."}),"\n",(0,t.jsx)(n.h2,{id:"configuration-flag",children:"Configuration flag"}),"\n",(0,t.jsx)(n.p,{children:"Next.js provides a configuration flag you can use to enable browser source map generation during the production build:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// next.config.js\nmodule.exports = {\n  productionBrowserSourceMaps: true,\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When the ",(0,t.jsx)(n.code,{children:"productionBrowserSourceMaps"})," option is enabled, the source maps will be output in the same directory as the JavaScript files. Next.js will automatically serve these files when requested."]}),"\n",(0,t.jsx)(n.h2,{id:"caveats",children:"Caveats"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Adding source maps can increase ",(0,t.jsx)(n.code,{children:"next build"})," time"]}),"\n",(0,t.jsxs)(n.li,{children:["Increases memory usage during ",(0,t.jsx)(n.code,{children:"next build"})]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>o});var t=r(7294);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);