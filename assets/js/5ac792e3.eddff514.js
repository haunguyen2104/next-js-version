"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[8574],{3858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=n(5893),i=n(1151);const s={description:"Learn about client-side data fetching, and how to use SWR, a data fetching React hook library that handles caching, revalidation, focus tracking, refetching on interval and more."},r="Client-side data fetching",d={id:"next-js/v13.0.1/basic-features/data-fetching/client-side",title:"Client-side data fetching",description:"Learn about client-side data fetching, and how to use SWR, a data fetching React hook library that handles caching, revalidation, focus tracking, refetching on interval and more.",source:"@site/docs/next-js/v13.0.1/basic-features/data-fetching/client-side.md",sourceDirName:"next-js/v13.0.1/basic-features/data-fetching",slug:"/next-js/v13.0.1/basic-features/data-fetching/client-side",permalink:"/next-js/v13.0.1/basic-features/data-fetching/client-side",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.1/basic-features/data-fetching/client-side.md",tags:[],version:"current",frontMatter:{description:"Learn about client-side data fetching, and how to use SWR, a data fetching React hook library that handles caching, revalidation, focus tracking, refetching on interval and more."},sidebar:"tutorialSidebar",previous:{title:"Built-In CSS Support",permalink:"/next-js/v13.0.1/basic-features/built-in-css-support"},next:{title:"getServerSideProps",permalink:"/next-js/v13.0.1/basic-features/data-fetching/get-server-side-props"}},o={},c=[{value:"Client-side data fetching with useEffect",id:"client-side-data-fetching-with-useeffect",level:2},{value:"Client-side data fetching with SWR",id:"client-side-data-fetching-with-swr",level:2},{value:"Related",id:"related",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"client-side-data-fetching",children:"Client-side data fetching"}),"\n",(0,a.jsx)(t.p,{children:"Client-side data fetching is useful when your page doesn't require SEO indexing, when you don't need to pre-render your data, or when the content of your pages needs to update frequently. Unlike the server-side rendering APIs, you can use client-side data fetching at the component level."}),"\n",(0,a.jsx)(t.p,{children:"If done at the page level, the data is fetched at runtime, and the content of the page is updated as the data changes. When used at the component level, the data is fetched at the time of the component mount, and the content of the component is updated as the data changes."}),"\n",(0,a.jsx)(t.p,{children:"It's important to note that using client-side data fetching can affect the performance of your application and the load speed of your pages. This is because the data fetching is done at the time of the component or pages mount, and the data is not cached."}),"\n",(0,a.jsx)(t.h2,{id:"client-side-data-fetching-with-useeffect",children:"Client-side data fetching with useEffect"}),"\n",(0,a.jsx)(t.p,{children:"The following example shows how you can fetch data on the client side using the useEffect hook."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"import { useState, useEffect } from 'react'\n\nfunction Profile() {\n  const [data, setData] = useState(null)\n  const [isLoading, setLoading] = useState(false)\n\n  useEffect(() => {\n    setLoading(true)\n    fetch('/api/profile-data')\n      .then((res) => res.json())\n      .then((data) => {\n        setData(data)\n        setLoading(false)\n      })\n  }, [])\n\n  if (isLoading) return <p>Loading...</p>\n  if (!data) return <p>No profile data</p>\n\n  return (\n    <div>\n      <h1>{data.name}</h1>\n      <p>{data.bio}</p>\n    </div>\n  )\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"client-side-data-fetching-with-swr",children:"Client-side data fetching with SWR"}),"\n",(0,a.jsxs)(t.p,{children:["The team behind Next.js has created a React hook library for data fetching called ",(0,a.jsx)(t.a,{href:"https://swr.vercel.app/",children:(0,a.jsx)(t.strong,{children:"SWR"})}),". It is ",(0,a.jsx)(t.strong,{children:"highly recommended"})," if you are fetching data on the client-side. It handles caching, revalidation, focus tracking, refetching on intervals, and more."]}),"\n",(0,a.jsx)(t.p,{children:"Using the same example as above, we can now use SWR to fetch the profile data. SWR will automatically cache the data for us and will revalidate the data if it becomes stale."}),"\n",(0,a.jsxs)(t.p,{children:["For more information on using SWR, check out the ",(0,a.jsx)(t.a,{href:"https://swr.vercel.app/docs/getting-started",children:"SWR docs"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"import useSWR from 'swr'\n\nconst fetcher = (...args) => fetch(...args).then((res) => res.json())\n\nfunction Profile() {\n  const { data, error } = useSWR('/api/profile-data', fetcher)\n\n  if (error) return <div>Failed to load</div>\n  if (!data) return <div>Loading...</div>\n\n  return (\n    <div>\n      <h1>{data.name}</h1>\n      <p>{data.bio}</p>\n    </div>\n  )\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"related",children:"Related"}),"\n",(0,a.jsx)(t.p,{children:"For more information on what to do next, we recommend the following sections:"}),"\n",(0,a.jsx)("div",{class:"card",children:(0,a.jsxs)("a",{href:"/docs/routing/introduction.md",children:[(0,a.jsx)("b",{children:"Routing:"}),(0,a.jsx)("small",{children:"Learn more about routing in Next.js."})]})})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var a=n(7294);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);