"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[6571],{9092:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=s(5893),i=s(1151);const r={description:"Learn how to deploy your Next.js app to production, either managed or self-hosted."},o="Deployment",l={id:"next-js/v13.0.0/deployment",title:"Deployment",description:"Learn how to deploy your Next.js app to production, either managed or self-hosted.",source:"@site/docs/next-js/v13.0.0/deployment.md",sourceDirName:"next-js/v13.0.0",slug:"/next-js/v13.0.0/deployment",permalink:"/next-js/v13.0.0/deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.0/deployment.md",tags:[],version:"current",frontMatter:{description:"Learn how to deploy your Next.js app to production, either managed or self-hosted."},sidebar:"tutorialSidebar",previous:{title:"TypeScript",permalink:"/next-js/v13.0.0/basic-features/typescript"},next:{title:"Frequently Asked Questions",permalink:"/next-js/v13.0.0/faq"}},a={},c=[{value:"Next.js Build API",id:"nextjs-build-api",level:2},{value:"Managed Next.js with Vercel",id:"managed-nextjs-with-vercel",level:2},{value:"Self-Hosting",id:"self-hosting",level:2},{value:"Node.js Server",id:"nodejs-server",level:3},{value:"Docker Image",id:"docker-image",level:3},{value:"Static HTML Export",id:"static-html-export",level:3},{value:"Other Services",id:"other-services",level:2},{value:"Managed Server",id:"managed-server",level:3},{value:"Static Only",id:"static-only",level:3},{value:"Serverless",id:"serverless",level:3},{value:"Automatic Updates",id:"automatic-updates",level:2},{value:"Manual Graceful shutdowns",id:"manual-graceful-shutdowns",level:2},{value:"Related",id:"related",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"deployment",children:"Deployment"}),"\n",(0,n.jsxs)(t.p,{children:["Congratulations, you are ready to deploy your Next.js application to production. This document will show how to deploy either managed or self-hosted using the ",(0,n.jsx)(t.a,{href:"#nextjs-build-api",children:"Next.js Build API"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"nextjs-build-api",children:"Next.js Build API"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"next build"})," generates an optimized version of your application for production. This standard output includes:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["HTML files for pages using ",(0,n.jsx)(t.code,{children:"getStaticProps"})," or ",(0,n.jsx)(t.a,{href:"/docs/advanced-features/automatic-static-optimization.md",children:"Automatic Static Optimization"})]}),"\n",(0,n.jsx)(t.li,{children:"CSS files for global styles or for individually scoped styles"}),"\n",(0,n.jsx)(t.li,{children:"JavaScript for pre-rendering dynamic content from the Next.js server"}),"\n",(0,n.jsx)(t.li,{children:"JavaScript for interactivity on the client-side through React"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["This output is generated inside the ",(0,n.jsx)(t.code,{children:".next"})," folder:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:".next/static/chunks/pages"})," \u2013 Each JavaScript file inside this folder relates to the route with the same name. For example, ",(0,n.jsx)(t.code,{children:".next/static/chunks/pages/about.js"})," would be the JavaScript file loaded when viewing the ",(0,n.jsx)(t.code,{children:"/about"})," route in your application"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:".next/static/media"})," \u2013 Statically imported images from ",(0,n.jsx)(t.code,{children:"next/image"})," are hashed and copied here"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:".next/static/css"})," \u2013 Global CSS files for all pages in your application"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:".next/server/pages"})," \u2013 The HTML and JavaScript entry points prerendered from the server. The ",(0,n.jsx)(t.code,{children:".nft.json"})," files are created when ",(0,n.jsx)(t.a,{href:"/docs/advanced-features/output-file-tracing.md",children:"Output File Tracing"})," is enabled and contain all the file paths that depend on a given page."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:".next/server/chunks"})," \u2013 Shared JavaScript chunks used in multiple places throughout your application"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:".next/cache"})," \u2013 Output for the build cache and cached images, responses, and pages from the Next.js server. Using a cache helps decrease build times and improve performance of loading images"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["All JavaScript code inside ",(0,n.jsx)(t.code,{children:".next"})," has been ",(0,n.jsx)(t.strong,{children:"compiled"})," and browser bundles have been ",(0,n.jsx)(t.strong,{children:"minified"})," to help achieve the best performance and support ",(0,n.jsx)(t.a,{href:"/docs/basic-features/supported-browsers-features.md",children:"all modern browsers"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"managed-nextjs-with-vercel",children:"Managed Next.js with Vercel"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://vercel.com?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",children:"Vercel"})," is the fastest way to deploy your Next.js application with zero configuration."]}),"\n",(0,n.jsxs)(t.p,{children:["When deploying to Vercel, the platform ",(0,n.jsx)(t.a,{href:"https://vercel.com/solutions/nextjs?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",children:"automatically detects Next.js"}),", runs ",(0,n.jsx)(t.code,{children:"next build"}),", and optimizes the build output for you, including:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Persisting cached assets across deployments if unchanged"}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://vercel.com/features/previews?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",children:"Immutable deployments"})," with a unique URL for every commit"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/docs/basic-features/pages.md",children:"Pages"})," are automatically statically optimized, if possible"]}),"\n",(0,n.jsxs)(t.li,{children:["Assets (JavaScript, CSS, images, fonts) are compressed and served from a ",(0,n.jsx)(t.a,{href:"https://vercel.com/features/infrastructure?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",children:"Global Edge Network"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/docs/api-routes/introduction.md",children:"API Routes"})," are automatically optimized as isolated ",(0,n.jsx)(t.a,{href:"https://vercel.com/features/infrastructure?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",children:"Serverless Functions"})," that can scale infinitely"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/docs/middleware.md",children:"Middleware"})," are automatically optimized as ",(0,n.jsx)(t.a,{href:"https://vercel.com/features/edge-functions?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",children:"Edge Functions"})," that have zero cold starts and boot instantly"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In addition, Vercel provides features like:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Automatic performance monitoring with ",(0,n.jsx)(t.a,{href:"https://vercel.com/analytics?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",children:"Next.js Analytics"})]}),"\n",(0,n.jsx)(t.li,{children:"Automatic HTTPS and SSL certificates"}),"\n",(0,n.jsx)(t.li,{children:"Automatic CI/CD (through GitHub, GitLab, Bitbucket, etc.)"}),"\n",(0,n.jsxs)(t.li,{children:["Support for ",(0,n.jsx)(t.a,{href:"https://vercel.com/docs/environment-variables?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",children:"Environment Variables"})]}),"\n",(0,n.jsxs)(t.li,{children:["Support for ",(0,n.jsx)(t.a,{href:"https://vercel.com/docs/custom-domains?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",children:"Custom Domains"})]}),"\n",(0,n.jsxs)(t.li,{children:["Support for ",(0,n.jsx)(t.a,{href:"/docs/basic-features/image-optimization.md",children:"Image Optimization"})," with ",(0,n.jsx)(t.code,{children:"next/image"})]}),"\n",(0,n.jsxs)(t.li,{children:["Instant global deployments via ",(0,n.jsx)(t.code,{children:"git push"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/hello-world&project-name=hello-world&repository-name=hello-world&utm_source=next-site&utm_medium=docs&utm_campaign=next-website",children:"Deploy a Next.js application to Vercel"})," for free to try it out."]}),"\n",(0,n.jsx)(t.h2,{id:"self-hosting",children:"Self-Hosting"}),"\n",(0,n.jsxs)(t.p,{children:["You can self-host Next.js with support for all features using Node.js or Docker. You can also do a Static HTML Export, which ",(0,n.jsx)(t.a,{href:"/docs/advanced-features/static-html-export.md",children:"has some limitations"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"nodejs-server",children:"Node.js Server"}),"\n",(0,n.jsxs)(t.p,{children:["Next.js can be deployed to any hosting provider that supports Node.js. For example, ",(0,n.jsx)(t.a,{href:"https://aws.amazon.com/ec2/",children:"AWS EC2"})," or a ",(0,n.jsx)(t.a,{href:"https://www.digitalocean.com/products/droplets/",children:"DigitalOcean Droplet"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["First, ensure your ",(0,n.jsx)(t.code,{children:"package.json"})," has the ",(0,n.jsx)(t.code,{children:'"build"'})," and ",(0,n.jsx)(t.code,{children:'"start"'})," scripts:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "scripts": {\n    "dev": "next dev",\n    "build": "next build",\n    "start": "next start"\n  }\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Then, run ",(0,n.jsx)(t.code,{children:"next build"})," to build your application. Finally, run ",(0,n.jsx)(t.code,{children:"next start"})," to start the Node.js server. This server supports all features of Next.js."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["If you are using ",(0,n.jsx)(t.a,{href:"/docs/basic-features/image-optimization.md",children:(0,n.jsx)(t.code,{children:"next/image"})}),", consider adding ",(0,n.jsx)(t.code,{children:"sharp"})," for more performant ",(0,n.jsx)(t.a,{href:"/docs/basic-features/image-optimization.md",children:"Image Optimization"})," in your production environment by running ",(0,n.jsx)(t.code,{children:"npm install sharp"})," in your project directory. On Linux platforms, ",(0,n.jsx)(t.code,{children:"sharp"})," may require ",(0,n.jsx)(t.a,{href:"https://sharp.pixelplumbing.com/install#linux-memory-allocator",children:"additional configuration"})," to prevent excessive memory usage."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"docker-image",children:"Docker Image"}),"\n",(0,n.jsxs)(t.p,{children:["Next.js can be deployed to any hosting provider that supports ",(0,n.jsx)(t.a,{href:"https://www.docker.com/",children:"Docker"})," containers. You can use this approach when deploying to container orchestrators such as ",(0,n.jsx)(t.a,{href:"https://kubernetes.io/",children:"Kubernetes"})," or ",(0,n.jsx)(t.a,{href:"https://www.nomadproject.io/",children:"HashiCorp Nomad"}),", or when running inside a single node in any cloud provider."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.docker.com/get-docker/",children:"Install Docker"})," on your machine"]}),"\n",(0,n.jsxs)(t.li,{children:["Clone the ",(0,n.jsx)(t.a,{href:"https://github.com/vercel/next.js/tree/canary/examples/with-docker",children:"with-docker"})," example"]}),"\n",(0,n.jsxs)(t.li,{children:["Build your container: ",(0,n.jsx)(t.code,{children:"docker build -t nextjs-docker ."})]}),"\n",(0,n.jsxs)(t.li,{children:["Run your container: ",(0,n.jsx)(t.code,{children:"docker run -p 3000:3000 nextjs-docker"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["If you need to use different Environment Variables across multiple environments, check out our ",(0,n.jsx)(t.a,{href:"https://github.com/vercel/next.js/tree/canary/examples/with-docker-multi-env",children:"with-docker-multi-env"})," example."]}),"\n",(0,n.jsx)(t.h3,{id:"static-html-export",children:"Static HTML Export"}),"\n",(0,n.jsxs)(t.p,{children:["If you\u2019d like to do a static HTML export of your Next.js app, follow the directions on our ",(0,n.jsx)(t.a,{href:"/docs/advanced-features/static-html-export.md",children:"Static HTML Export documentation"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"other-services",children:"Other Services"}),"\n",(0,n.jsxs)(t.p,{children:["The following services support Next.js ",(0,n.jsx)(t.code,{children:"v12+"}),". Below, you\u2019ll find examples or guides to deploy Next.js to each service."]}),"\n",(0,n.jsx)(t.h3,{id:"managed-server",children:"Managed Server"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://aws.github.io/copilot-cli/",children:"AWS Copilot"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.digitalocean.com/tutorials/app-nextjs-deploy/",children:"Digital Ocean App Platform"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/vercel/next.js/tree/canary/examples/with-docker",children:"Google Cloud Run"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://elements.heroku.com/buildpacks/mars/heroku-nextjs",children:"Heroku"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://railway.app/new/starters/nextjs-prisma",children:"Railway"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://render.com/docs/deploy-nextjs-app",children:"Render"})}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," There are also managed platforms that allow you to use a Dockerfile as shown in the ",(0,n.jsx)(t.a,{href:"/docs/deployment.md#docker-image",children:"example above"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"static-only",children:"Static Only"}),"\n",(0,n.jsxs)(t.p,{children:["The following services support deploying Next.js using ",(0,n.jsx)(t.a,{href:"/docs/advanced-features/static-html-export.md",children:(0,n.jsx)(t.code,{children:"next export"})}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/azure/static-web-apps/deploy-nextjs",children:"Azure Static Web Apps"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/",children:"Cloudflare Pages"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/vercel/next.js/tree/canary/examples/with-firebase-hosting",children:"Firebase"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/vercel/next.js/tree/canary/examples/github-pages",children:"GitHub Pages"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You can also manually deploy the ",(0,n.jsx)(t.a,{href:"/docs/advanced-features/static-html-export.md",children:(0,n.jsx)(t.code,{children:"next export"})})," output to any static hosting provider, often through your CI/CD pipeline like GitHub Actions, Jenkins, AWS CodeBuild, Circle CI, Azure Pipelines, and more."]}),"\n",(0,n.jsx)(t.h3,{id:"serverless",children:"Serverless"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/serverless-nextjs/serverless-next.js",children:"AWS Serverless"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/milliHQ/terraform-aws-next-js",children:"Terraform"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.netlify.com/integrations/frameworks/next-js",children:"Netlify"})}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," Not all serverless providers implement the ",(0,n.jsx)(t.a,{href:"/docs/deployment.md#nextjs-build-api",children:"Next.js Build API"})," from ",(0,n.jsx)(t.code,{children:"next start"}),". Please check with the provider to see what features are supported."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"automatic-updates",children:"Automatic Updates"}),"\n",(0,n.jsx)(t.p,{children:"When you deploy your Next.js application, you want to see the latest version without needing to reload."}),"\n",(0,n.jsxs)(t.p,{children:["Next.js will automatically load the latest version of your application in the background when routing. For client-side navigations, ",(0,n.jsx)(t.code,{children:"next/link"})," will temporarily function as a normal ",(0,n.jsx)(t.code,{children:"<a>"})," tag."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," If a new page (with an old version) has already been prefetched by ",(0,n.jsx)(t.code,{children:"next/link"}),", Next.js will use the old version. Navigating to a page that has ",(0,n.jsx)(t.em,{children:"not"})," been prefetched (and is not cached at the CDN level) will load the latest version."]}),"\n",(0,n.jsx)(t.h2,{id:"manual-graceful-shutdowns",children:"Manual Graceful shutdowns"}),"\n",(0,n.jsxs)(t.p,{children:["Sometimes you might want to run some cleanup code on process signals like ",(0,n.jsx)(t.code,{children:"SIGTERM"})," or ",(0,n.jsx)(t.code,{children:"SIGINT"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can do that by setting the env variable ",(0,n.jsx)(t.code,{children:"NEXT_MANUAL_SIG_HANDLE"})," to ",(0,n.jsx)(t.code,{children:"true"})," and then register a handler for that signal inside your ",(0,n.jsx)(t.code,{children:"_document.js"})," file."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"// pages/_document.js\n\nif (process.env.NEXT_MANUAL_SIG_HANDLE) {\n  // this should be added in your custom _document\n  process.on('SIGTERM', () => {\n    console.log('Received SIGTERM: ', 'cleaning up')\n    process.exit(0)\n  })\n\n  process.on('SIGINT', () => {\n    console.log('Received SIGINT: ', 'cleaning up')\n    process.exit(0)\n  })\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"related",children:"Related"}),"\n",(0,n.jsx)(t.p,{children:"For more information on what to do next, we recommend the following sections:"}),"\n",(0,n.jsx)("div",{class:"card",children:(0,n.jsxs)("a",{href:"/docs/going-to-production.md",children:[(0,n.jsx)("b",{children:"Going to Production:"}),(0,n.jsx)("small",{children:"Ensure the best performance and user experience."})]})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>o});var n=s(7294);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);