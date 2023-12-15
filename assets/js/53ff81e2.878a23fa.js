"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[618],{3415:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=s(5893),r=s(1151);const i={description:"Learn to add and access environment variables in your Next.js application."},t="Environment Variables",l={id:"next-js/v13.0.0/basic-features/environment-variables",title:"Environment Variables",description:"Learn to add and access environment variables in your Next.js application.",source:"@site/docs/next-js/v13.0.0/basic-features/environment-variables.md",sourceDirName:"next-js/v13.0.0/basic-features",slug:"/next-js/v13.0.0/basic-features/environment-variables",permalink:"/next-js/v13.0.0/basic-features/environment-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.0/basic-features/environment-variables.md",tags:[],version:"current",frontMatter:{description:"Learn to add and access environment variables in your Next.js application."},sidebar:"tutorialSidebar",previous:{title:"Data Fetching Overview",permalink:"/next-js/v13.0.0/basic-features/data-fetching/overview"},next:{title:"ESLint",permalink:"/next-js/v13.0.0/basic-features/eslint"}},a={},c=[{value:"Loading Environment Variables",id:"loading-environment-variables",level:2},{value:"Exposing Environment Variables to the Browser",id:"exposing-environment-variables-to-the-browser",level:2},{value:"Default Environment Variables",id:"default-environment-variables",level:2},{value:"Environment Variables on Vercel",id:"environment-variables-on-vercel",level:2},{value:"Test Environment Variables",id:"test-environment-variables",level:2},{value:"Environment Variable Load Order",id:"environment-variable-load-order",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["This document is for Next.js versions 9.4 and up. If you\u2019re using an older version of Next.js, upgrade or refer to ",(0,o.jsx)(n.a,{href:"/docs/api-reference/next.config.js/environment-variables.md",children:"Environment Variables in next.config.js"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(s,{open:!0,children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:"Examples"})}),(0,o.jsx)("ul",{children:(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/environment-variables",children:"Environment Variables"})})})]}),"\n",(0,o.jsx)(n.p,{children:"Next.js comes with built-in support for environment variables, which allows you to do the following:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsxs)(n.a,{href:"#loading-environment-variables",children:["Use ",(0,o.jsx)(n.code,{children:".env.local"})," to load environment variables"]})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsxs)(n.a,{href:"#exposing-environment-variables-to-the-browser",children:["Expose environment variables to the browser by prefixing with ",(0,o.jsx)(n.code,{children:"NEXT_PUBLIC_"})]})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"loading-environment-variables",children:"Loading Environment Variables"}),"\n",(0,o.jsxs)(n.p,{children:["Next.js has built-in support for loading environment variables from ",(0,o.jsx)(n.code,{children:".env.local"})," into ",(0,o.jsx)(n.code,{children:"process.env"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["An example ",(0,o.jsx)(n.code,{children:".env.local"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"DB_HOST=localhost\nDB_USER=myuser\nDB_PASS=mypassword\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This loads ",(0,o.jsx)(n.code,{children:"process.env.DB_HOST"}),", ",(0,o.jsx)(n.code,{children:"process.env.DB_USER"}),", and ",(0,o.jsx)(n.code,{children:"process.env.DB_PASS"})," into the Node.js environment automatically allowing you to use them in ",(0,o.jsx)(n.a,{href:"/docs/basic-features/data-fetching/overview.md",children:"Next.js data fetching methods"})," and ",(0,o.jsx)(n.a,{href:"/docs/api-routes/introduction.md",children:"API routes"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, using ",(0,o.jsx)(n.a,{href:"/docs/basic-features/data-fetching/get-static-props.md",children:(0,o.jsx)(n.code,{children:"getStaticProps"})}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// pages/index.js\nexport async function getStaticProps() {\n  const db = await myDB.connect({\n    host: process.env.DB_HOST,\n    username: process.env.DB_USER,\n    password: process.env.DB_PASS,\n  })\n  // ...\n}\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note"}),": In order to keep server-only secrets safe, environment variables are evaluated at build time, so only environment variables ",(0,o.jsx)(n.em,{children:"actually"})," used will be included. This means that ",(0,o.jsx)(n.code,{children:"process.env"})," is not a standard JavaScript object, so you\u2019re not able to\nuse ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",children:"object destructuring"}),".\nEnvironment variables must be referenced as e.g. ",(0,o.jsx)(n.code,{children:"process.env.PUBLISHABLE_KEY"}),", ",(0,o.jsx)(n.em,{children:"not"})," ",(0,o.jsx)(n.code,{children:"const { PUBLISHABLE_KEY } = process.env"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note"}),": Next.js will automatically expand variables (",(0,o.jsx)(n.code,{children:"$VAR"}),") inside of your ",(0,o.jsx)(n.code,{children:".env*"})," files.\nThis allows you to reference other secrets, like so:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# .env\nHOSTNAME=localhost\nPORT=8080\nHOST=http://$HOSTNAME:$PORT\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you are trying to use a variable with a ",(0,o.jsx)(n.code,{children:"$"})," in the actual value, it needs to be escaped like so: ",(0,o.jsx)(n.code,{children:"\\$"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'# .env\nA=abc\n\n# becomes "preabc"\nWRONG=pre$A\n\n# becomes "pre$A"\nCORRECT=pre\\$A\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note"}),": If you are using a ",(0,o.jsx)(n.code,{children:"/src"})," folder, please note that Next.js will load the .env files ",(0,o.jsx)(n.strong,{children:"only"})," from the parent folder and ",(0,o.jsx)(n.strong,{children:"not"})," from the ",(0,o.jsx)(n.code,{children:"/src"})," folder."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"exposing-environment-variables-to-the-browser",children:"Exposing Environment Variables to the Browser"}),"\n",(0,o.jsx)(n.p,{children:"By default environment variables are only available in the Node.js environment, meaning they won't be exposed to the browser."}),"\n",(0,o.jsxs)(n.p,{children:["In order to expose a variable to the browser you have to prefix the variable with ",(0,o.jsx)(n.code,{children:"NEXT_PUBLIC_"}),". For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"NEXT_PUBLIC_ANALYTICS_ID=abcdefghijk\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This loads ",(0,o.jsx)(n.code,{children:"process.env.NEXT_PUBLIC_ANALYTICS_ID"})," into the Node.js environment automatically, allowing you to use it anywhere in your code. The value will be inlined into JavaScript sent to the browser because of the ",(0,o.jsx)(n.code,{children:"NEXT_PUBLIC_"})," prefix. This inlining occurs at build time, so your various ",(0,o.jsx)(n.code,{children:"NEXT_PUBLIC_"})," envs need to be set when the project is built."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// pages/index.js\nimport setupAnalyticsService from '../lib/my-analytics-service'\n\n// 'NEXT_PUBLIC_ANALYTICS_ID' can be used here as it's prefixed by 'NEXT_PUBLIC_'.\n// It will be transformed at build time to `setupAnalyticsService('abcdefghijk')`.\nsetupAnalyticsService(process.env.NEXT_PUBLIC_ANALYTICS_ID)\n\nfunction HomePage() {\n  return <h1>Hello World</h1>\n}\n\nexport default HomePage\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note that dynamic lookups will ",(0,o.jsx)(n.em,{children:"not"})," be inlined, such as:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// This will NOT be inlined, because it uses a variable\nconst varName = 'NEXT_PUBLIC_ANALYTICS_ID'\nsetupAnalyticsService(process.env[varName])\n\n// This will NOT be inlined, because it uses a variable\nconst env = process.env\nsetupAnalyticsService(env.NEXT_PUBLIC_ANALYTICS_ID)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"default-environment-variables",children:"Default Environment Variables"}),"\n",(0,o.jsxs)(n.p,{children:["In general only one ",(0,o.jsx)(n.code,{children:".env.local"})," file is needed. However, sometimes you might want to add some defaults for the ",(0,o.jsx)(n.code,{children:"development"})," (",(0,o.jsx)(n.code,{children:"next dev"}),") or ",(0,o.jsx)(n.code,{children:"production"})," (",(0,o.jsx)(n.code,{children:"next start"}),") environment."]}),"\n",(0,o.jsxs)(n.p,{children:["Next.js allows you to set defaults in ",(0,o.jsx)(n.code,{children:".env"})," (all environments), ",(0,o.jsx)(n.code,{children:".env.development"})," (development environment), and ",(0,o.jsx)(n.code,{children:".env.production"})," (production environment)."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:".env.local"})," always overrides the defaults set."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note"}),": ",(0,o.jsx)(n.code,{children:".env"}),", ",(0,o.jsx)(n.code,{children:".env.development"}),", and ",(0,o.jsx)(n.code,{children:".env.production"})," files should be included in your repository as they define defaults. ",(0,o.jsxs)(n.strong,{children:[(0,o.jsx)(n.code,{children:".env*.local"})," should be added to ",(0,o.jsx)(n.code,{children:".gitignore"})]}),", as those files are intended to be ignored. ",(0,o.jsx)(n.code,{children:".env.local"})," is where secrets can be stored."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"environment-variables-on-vercel",children:"Environment Variables on Vercel"}),"\n",(0,o.jsxs)(n.p,{children:["When deploying your Next.js application to ",(0,o.jsx)(n.a,{href:"https://vercel.com",children:"Vercel"}),", Environment Variables can be configured ",(0,o.jsx)(n.a,{href:"https://vercel.com/docs/concepts/projects/environment-variables?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",children:"in the Project Settings"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["All types of Environment Variables should be configured there. Even Environment Variables used in Development \u2013\xa0which can be ",(0,o.jsx)(n.a,{href:"https://vercel.com/docs/concepts/projects/environment-variables#development-environment-variables?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",children:"downloaded onto your local device"})," afterwards."]}),"\n",(0,o.jsxs)(n.p,{children:["If you've configured ",(0,o.jsx)(n.a,{href:"https://vercel.com/docs/concepts/projects/environment-variables#development-environment-variables?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",children:"Development Environment Variables"})," you can pull them into a ",(0,o.jsx)(n.code,{children:".env.local"})," for usage on your local machine using the following command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"vercel env pull .env.local\n"})}),"\n",(0,o.jsx)(n.h2,{id:"test-environment-variables",children:"Test Environment Variables"}),"\n",(0,o.jsxs)(n.p,{children:["Apart from ",(0,o.jsx)(n.code,{children:"development"})," and ",(0,o.jsx)(n.code,{children:"production"})," environments, there is a 3rd option available: ",(0,o.jsx)(n.code,{children:"test"}),". In the same way you can set defaults for development or production environments, you can do the same with a ",(0,o.jsx)(n.code,{children:".env.test"})," file for the ",(0,o.jsx)(n.code,{children:"testing"})," environment (though this one is not as common as the previous two). Next.js will not load environment variables from ",(0,o.jsx)(n.code,{children:".env.development"})," or ",(0,o.jsx)(n.code,{children:".env.production"})," in the ",(0,o.jsx)(n.code,{children:"testing"})," environment."]}),"\n",(0,o.jsxs)(n.p,{children:["This one is useful when running tests with tools like ",(0,o.jsx)(n.code,{children:"jest"})," or ",(0,o.jsx)(n.code,{children:"cypress"})," where you need to set specific environment vars only for testing purposes. Test default values will be loaded if ",(0,o.jsx)(n.code,{children:"NODE_ENV"})," is set to ",(0,o.jsx)(n.code,{children:"test"}),", though you usually don't need to do this manually as testing tools will address it for you."]}),"\n",(0,o.jsxs)(n.p,{children:["There is a small difference between ",(0,o.jsx)(n.code,{children:"test"})," environment, and both ",(0,o.jsx)(n.code,{children:"development"})," and ",(0,o.jsx)(n.code,{children:"production"})," that you need to bear in mind: ",(0,o.jsx)(n.code,{children:".env.local"})," won't be loaded, as you expect tests to produce the same results for everyone. This way every test execution will use the same env defaults across different executions by ignoring your ",(0,o.jsx)(n.code,{children:".env.local"})," (which is intended to override the default set)."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note"}),": similar to Default Environment Variables, ",(0,o.jsx)(n.code,{children:".env.test"})," file should be included in your repository, but ",(0,o.jsx)(n.code,{children:".env.test.local"})," shouldn't, as ",(0,o.jsx)(n.code,{children:".env*.local"})," are intended to be ignored through ",(0,o.jsx)(n.code,{children:".gitignore"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["While running unit tests you can make sure to load your environment variables the same way Next.js does by leveraging the ",(0,o.jsx)(n.code,{children:"loadEnvConfig"})," function from the ",(0,o.jsx)(n.code,{children:"@next/env"})," package."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// The below can be used in a Jest global setup file or similar for your testing set-up\nimport { loadEnvConfig } from '@next/env'\n\nexport default async () => {\n  const projectDir = process.cwd()\n  loadEnvConfig(projectDir)\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"environment-variable-load-order",children:"Environment Variable Load Order"}),"\n",(0,o.jsx)(n.p,{children:"Environment variables are looked up in the following places, in order, stopping once the variable is found."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"process.env"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:".env.$(NODE_ENV).local"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:".env.local"})," (Not checked when ",(0,o.jsx)(n.code,{children:"NODE_ENV"})," is ",(0,o.jsx)(n.code,{children:"test"}),".)"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:".env.$(NODE_ENV)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:".env"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For example, if ",(0,o.jsx)(n.code,{children:"NODE_ENV"})," is ",(0,o.jsx)(n.code,{children:"development"})," and you define a variable in both ",(0,o.jsx)(n.code,{children:".env.development.local"})," and ",(0,o.jsx)(n.code,{children:".env"}),", the value in ",(0,o.jsx)(n.code,{children:".env.development.local"})," will be used."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," The allowed values for ",(0,o.jsx)(n.code,{children:"NODE_ENV"})," are ",(0,o.jsx)(n.code,{children:"production"}),", ",(0,o.jsx)(n.code,{children:"development"})," and ",(0,o.jsx)(n.code,{children:"test"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>t});var o=s(7294);const r={},i=o.createContext(r);function t(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);