"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[3964],{9049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=n(5893),i=n(1151);const a={description:"Control page initialization and add a layout that persists for all pages by overriding the default App component used by Next.js."},r="Custom App",o={id:"next-js/v13.0.0/advanced-features/custom-app",title:"Custom App",description:"Control page initialization and add a layout that persists for all pages by overriding the default App component used by Next.js.",source:"@site/docs/next-js/v13.0.0/advanced-features/custom-app.md",sourceDirName:"next-js/v13.0.0/advanced-features",slug:"/next-js/v13.0.0/advanced-features/custom-app",permalink:"/next-js/v13.0.0/advanced-features/custom-app",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.0/advanced-features/custom-app.md",tags:[],version:"current",frontMatter:{description:"Control page initialization and add a layout that persists for all pages by overriding the default App component used by Next.js."},sidebar:"tutorialSidebar",previous:{title:"Next.js Compiler",permalink:"/next-js/v13.0.0/advanced-features/compiler"},next:{title:"Custom Document",permalink:"/next-js/v13.0.0/advanced-features/custom-document"}},c={},d=[{value:"Caveats",id:"caveats",level:3},{value:"TypeScript",id:"typescript",level:3},{value:"Related",id:"related",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"custom-app",children:["Custom ",(0,s.jsx)(t.code,{children:"App"})]}),"\n",(0,s.jsxs)(t.p,{children:["Next.js uses the ",(0,s.jsx)(t.code,{children:"App"})," component to initialize pages. You can override it and control the page initialization. Which allows you to do amazing things like:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Persisting layout between page changes"}),"\n",(0,s.jsx)(t.li,{children:"Keeping state when navigating pages"}),"\n",(0,s.jsxs)(t.li,{children:["Custom error handling using ",(0,s.jsx)(t.code,{children:"componentDidCatch"})]}),"\n",(0,s.jsx)(t.li,{children:"Inject additional data into pages"}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/basic-features/built-in-css-support.md#adding-a-global-stylesheet",children:"Add global CSS"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["To override the default ",(0,s.jsx)(t.code,{children:"App"}),", create the file ",(0,s.jsx)(t.code,{children:"./pages/_app.js"})," as shown below:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"// import App from 'next/app'\n\nfunction MyApp({ Component, pageProps }) {\n  return <Component {...pageProps} />\n}\n\n// Only uncomment this method if you have blocking data requirements for\n// every single page in your application. This disables the ability to\n// perform automatic static optimization, causing every page in your app to\n// be server-side rendered.\n//\n// MyApp.getInitialProps = async (appContext) => {\n//   // calls page's `getInitialProps` and fills `appProps.pageProps`\n//   const appProps = await App.getInitialProps(appContext);\n//\n//   return { ...appProps }\n// }\n\nexport default MyApp\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"Component"})," prop is the active ",(0,s.jsx)(t.code,{children:"page"}),", so whenever you navigate between routes, ",(0,s.jsx)(t.code,{children:"Component"})," will change to the new ",(0,s.jsx)(t.code,{children:"page"}),". Therefore, any props you send to ",(0,s.jsx)(t.code,{children:"Component"})," will be received by the ",(0,s.jsx)(t.code,{children:"page"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"pageProps"})," is an object with the initial props that were preloaded for your page by one of our ",(0,s.jsx)(t.a,{href:"/docs/basic-features/data-fetching/overview.md",children:"data fetching methods"}),", otherwise it's an empty object."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"App.getInitialProps"})," receives a single argument called ",(0,s.jsx)(t.code,{children:"context.ctx"}),". It's an object with the same set of properties as the ",(0,s.jsxs)(t.a,{href:"/docs/api-reference/data-fetching/get-initial-props#context-object",children:[(0,s.jsx)(t.code,{children:"context"})," object"]})," in ",(0,s.jsx)(t.code,{children:"getInitialProps"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"caveats",children:"Caveats"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If your app is running and you added a custom ",(0,s.jsx)(t.code,{children:"App"}),", you'll need to restart the development server. Only required if ",(0,s.jsx)(t.code,{children:"pages/_app.js"})," didn't exist before."]}),"\n",(0,s.jsxs)(t.li,{children:["Adding a custom ",(0,s.jsx)(t.a,{href:"/docs/api-reference/data-fetching/get-initial-props.md",children:(0,s.jsx)(t.code,{children:"getInitialProps"})})," in your ",(0,s.jsx)(t.code,{children:"App"})," will disable ",(0,s.jsx)(t.a,{href:"/docs/advanced-features/automatic-static-optimization.md",children:"Automatic Static Optimization"})," in pages without ",(0,s.jsx)(t.a,{href:"/docs/basic-features/data-fetching/get-static-props.md",children:"Static Generation"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["When you add ",(0,s.jsx)(t.code,{children:"getInitialProps"})," in your custom app, you must ",(0,s.jsx)(t.code,{children:'import App from "next/app"'}),", call ",(0,s.jsx)(t.code,{children:"App.getInitialProps(appContext)"})," inside ",(0,s.jsx)(t.code,{children:"getInitialProps"})," and merge the returned object into the return value."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"App"})," currently does not support Next.js ",(0,s.jsx)(t.a,{href:"/docs/basic-features/data-fetching/overview.md",children:"Data Fetching methods"})," like ",(0,s.jsx)(t.a,{href:"/docs/basic-features/data-fetching/get-static-props.md",children:(0,s.jsx)(t.code,{children:"getStaticProps"})})," or ",(0,s.jsx)(t.a,{href:"/docs/basic-features/data-fetching/get-server-side-props.md",children:(0,s.jsx)(t.code,{children:"getServerSideProps"})}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"typescript",children:"TypeScript"}),"\n",(0,s.jsxs)(t.p,{children:["If you\u2019re using TypeScript, take a look at ",(0,s.jsx)(t.a,{href:"/docs/basic-features/typescript.md#custom-app",children:"our TypeScript documentation"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"related",children:"Related"}),"\n",(0,s.jsx)(t.p,{children:"For more information on what to do next, we recommend the following sections:"}),"\n",(0,s.jsx)("div",{class:"card",children:(0,s.jsxs)("a",{href:"/docs/advanced-features/automatic-static-optimization.md",children:[(0,s.jsx)("b",{children:"Automatic Static Optimization:"}),(0,s.jsx)("small",{children:"Next.js automatically optimizes your app to be static HTML whenever possible. Learn how it works here."})]})}),"\n",(0,s.jsx)("div",{class:"card",children:(0,s.jsxs)("a",{href:"/docs/advanced-features/custom-error-page.md",children:[(0,s.jsx)("b",{children:"Custom Error Page:"}),(0,s.jsx)("small",{children:"Learn more about the built-in Error page."})]})})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(7294);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);