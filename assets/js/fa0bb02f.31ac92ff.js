"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[534],{5479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=n(5893),a=n(1151);const r={description:"Create Next.js apps in one command with create-next-app."},i="Create Next App",c={id:"next-js/v13.0.0/api-reference/create-next-app",title:"Create Next App",description:"Create Next.js apps in one command with create-next-app.",source:"@site/docs/next-js/v13.0.0/api-reference/create-next-app.md",sourceDirName:"next-js/v13.0.0/api-reference",slug:"/next-js/v13.0.0/api-reference/create-next-app",permalink:"/next-js/v13.0.0/api-reference/create-next-app",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.0/api-reference/create-next-app.md",tags:[],version:"current",frontMatter:{description:"Create Next.js apps in one command with create-next-app."},sidebar:"tutorialSidebar",previous:{title:"Next.js CLI",permalink:"/next-js/v13.0.0/api-reference/cli"},next:{title:"getInitialProps",permalink:"/next-js/v13.0.0/api-reference/data-fetching/get-initial-props"}},p={},o=[{value:"Options",id:"options",level:3},{value:"Why use Create Next App?",id:"why-use-create-next-app",level:3},{value:"Related",id:"related",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"create-next-app",children:"Create Next App"}),"\n",(0,s.jsxs)(t.p,{children:["The easiest way to get started with Next.js is by using ",(0,s.jsx)(t.code,{children:"create-next-app"}),". This CLI tool enables you to quickly start building a new Next.js application, with everything set up for you. You can create a new app using the default Next.js template, or by using one of the ",(0,s.jsx)(t.a,{href:"https://github.com/vercel/next.js/tree/canary/examples",children:"official Next.js examples"}),". To get started, use the following command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npx create-next-app@latest\n# or\nyarn create next-app\n# or\npnpm create next-app\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can create a ",(0,s.jsx)(t.a,{href:"https://github.com/vercel/next.js/blob/canary/docs/basic-features/typescript.md",children:"TypeScript project"})," with the ",(0,s.jsx)(t.code,{children:"--ts, --typescript"})," flag:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npx create-next-app@latest --ts\n# or\nyarn create next-app --typescript\n# or\npnpm create next-app --ts\n"})}),"\n",(0,s.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"create-next-app"})," comes with the following options:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"--ts, --typescript"})," - Initialize as a TypeScript project."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"-e, --example [name]|[github-url]"})," - An example to bootstrap the app with. You can use an example name from the ",(0,s.jsx)(t.a,{href:"https://github.com/vercel/next.js/tree/canary/examples",children:"Next.js repo"})," or a GitHub URL. The URL can use any branch and/or subdirectory."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"--example-path [path-to-example]"})," - In a rare case, your GitHub URL might contain a branch name with a slash (e.g. bug/fix-1) and the path to the example (e.g. foo/bar). In this case, you must specify the path to the example separately: ",(0,s.jsx)(t.code,{children:"--example-path foo/bar"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"--use-npm"})," - Explicitly tell the CLI to bootstrap the app using npm"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"--use-pnpm"})," - Explicitly tell the CLI to bootstrap the app using pnpm"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Note: To bootstrap using ",(0,s.jsx)(t.code,{children:"yarn"})," we recommend running ",(0,s.jsx)(t.code,{children:"yarn create next-app"})]}),"\n",(0,s.jsx)(t.h3,{id:"why-use-create-next-app",children:"Why use Create Next App?"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"create-next-app"})," allows you to create a new Next.js app within seconds. It is officially maintained by the creators of Next.js, and includes a number of benefits:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Interactive Experience"}),": Running ",(0,s.jsx)(t.code,{children:"npx create-next-app@latest"})," (with no arguments) launches an interactive experience that guides you through setting up a project."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Zero Dependencies"}),": Initializing a project is as quick as one second. Create Next App has zero dependencies."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Offline Support"}),": Create Next App will automatically detect if you're offline and bootstrap your project using your local package cache."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Support for Examples"}),": Create Next App can bootstrap your application using an example from the Next.js examples collection (e.g. ",(0,s.jsx)(t.code,{children:"npx create-next-app --example api-routes"}),")."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Tested"}),": The package is part of the Next.js monorepo and tested using the same integration test suite as Next.js itself, ensuring it works as expected with every release."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related",children:"Related"}),"\n",(0,s.jsx)(t.p,{children:"For more information on what to do next, we recommend the following sections:"}),"\n",(0,s.jsx)("div",{class:"card",children:(0,s.jsxs)("a",{href:"/docs/basic-features/pages.md",children:[(0,s.jsx)("b",{children:"Pages:"}),(0,s.jsx)("small",{children:"Learn more about what pages are in Next.js."})]})}),"\n",(0,s.jsx)("div",{class:"card",children:(0,s.jsxs)("a",{href:"/docs/basic-features/built-in-css-support.md",children:[(0,s.jsx)("b",{children:"CSS Support:"}),(0,s.jsx)("small",{children:"Use the built-in CSS support to add custom styles to your app."})]})}),"\n",(0,s.jsx)("div",{class:"card",children:(0,s.jsxs)("a",{href:"/docs/api-reference/cli.md",children:[(0,s.jsx)("b",{children:"CLI:"}),(0,s.jsx)("small",{children:"Learn more about the Next.js CLI."})]})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var s=n(7294);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);