"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[7254],{5551:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=r(5893),o=r(1151);const s={description:"Learn more about the API of the Next.js Router, and access the router instance in your page with the useRouter hook."},i="next/router",c={id:"next-js/v13.0.0/api-reference/next/router",title:"next/router",description:"Learn more about the API of the Next.js Router, and access the router instance in your page with the useRouter hook.",source:"@site/docs/next-js/v13.0.0/api-reference/next/router.md",sourceDirName:"next-js/v13.0.0/api-reference/next",slug:"/next-js/v13.0.0/api-reference/next/router",permalink:"/next-js/v13.0.0/api-reference/next/router",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.0/api-reference/next/router.md",tags:[],version:"current",frontMatter:{description:"Learn more about the API of the Next.js Router, and access the router instance in your page with the useRouter hook."},sidebar:"tutorialSidebar",previous:{title:"next/link",permalink:"/next-js/v13.0.0/api-reference/next/link"},next:{title:"next/script",permalink:"/next-js/v13.0.0/api-reference/next/script"}},l={},a=[{value:"useRouter",id:"userouter",level:2},{value:"<code>router</code> object",id:"router-object",level:2},{value:"router.push",id:"routerpush",level:3},{value:"Usage",id:"usage",level:4},{value:"Resetting state after navigation",id:"resetting-state-after-navigation",level:4},{value:"With URL object",id:"with-url-object",level:4},{value:"router.replace",id:"routerreplace",level:3},{value:"Usage",id:"usage-1",level:4},{value:"router.prefetch",id:"routerprefetch",level:3},{value:"Usage",id:"usage-2",level:4},{value:"router.beforePopState",id:"routerbeforepopstate",level:3},{value:"Usage",id:"usage-3",level:4},{value:"router.back",id:"routerback",level:3},{value:"Usage",id:"usage-4",level:4},{value:"router.reload",id:"routerreload",level:3},{value:"Usage",id:"usage-5",level:4},{value:"router.events",id:"routerevents",level:3},{value:"Usage",id:"usage-6",level:4},{value:"Potential ESLint errors",id:"potential-eslint-errors",level:2},{value:"Potential solutions",id:"potential-solutions",level:3},{value:"withRouter",id:"withrouter",level:2},{value:"Usage",id:"usage-7",level:3},{value:"TypeScript",id:"typescript",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"nextrouter",children:"next/router"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Before moving forward, we recommend you to read ",(0,t.jsx)(n.a,{href:"/docs/routing/introduction.md",children:"Routing Introduction"})," first."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"userouter",children:"useRouter"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to access the ",(0,t.jsxs)(n.a,{href:"#router-object",children:[(0,t.jsx)(n.code,{children:"router"})," object"]})," inside any function component in your app, you can use the ",(0,t.jsx)(n.code,{children:"useRouter"})," hook, take a look at the following example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { useRouter } from 'next/router'\n\nfunction ActiveLink({ children, href }) {\n  const router = useRouter()\n  const style = {\n    marginRight: 10,\n    color: router.asPath === href ? 'red' : 'black',\n  }\n\n  const handleClick = (e) => {\n    e.preventDefault()\n    router.push(href)\n  }\n\n  return (\n    <a href={href} onClick={handleClick} style={style}>\n      {children}\n    </a>\n  )\n}\n\nexport default ActiveLink\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"useRouter"})," is a ",(0,t.jsx)(n.a,{href:"https://reactjs.org/docs/hooks-intro.html",children:"React Hook"}),", meaning it cannot be used with classes. You can either use ",(0,t.jsx)(n.a,{href:"#withRouter",children:"withRouter"})," or wrap your class in a function component."]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"router-object",children:[(0,t.jsx)(n.code,{children:"router"})," object"]}),"\n",(0,t.jsxs)(n.p,{children:["The following is the definition of the ",(0,t.jsx)(n.code,{children:"router"})," object returned by both ",(0,t.jsx)(n.a,{href:"#useRouter",children:(0,t.jsx)(n.code,{children:"useRouter"})})," and ",(0,t.jsx)(n.a,{href:"#withRouter",children:(0,t.jsx)(n.code,{children:"withRouter"})}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pathname"}),": ",(0,t.jsx)(n.code,{children:"String"})," - The path for current route file that comes after ",(0,t.jsx)(n.code,{children:"/pages"}),". Therefore, ",(0,t.jsx)(n.code,{children:"basePath"}),", ",(0,t.jsx)(n.code,{children:"locale"})," and trailing slash (",(0,t.jsx)(n.code,{children:"trailingSlash: true"}),") are not included."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"query"}),": ",(0,t.jsx)(n.code,{children:"Object"})," - The query string parsed to an object, including ",(0,t.jsx)(n.a,{href:"/docs/routing/dynamic-routes.md",children:"dynamic route"})," parameters. It will be an empty object during prerendering if the page doesn't use ",(0,t.jsx)(n.a,{href:"/docs/basic-features/data-fetching/get-server-side-props.md",children:"Server-side Rendering"}),". Defaults to ",(0,t.jsx)(n.code,{children:"{}"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"asPath"}),": ",(0,t.jsx)(n.code,{children:"String"})," - The path as shown in the browser including the search params and respecting the ",(0,t.jsx)(n.code,{children:"trailingSlash"})," configuration. ",(0,t.jsx)(n.code,{children:"basePath"})," and ",(0,t.jsx)(n.code,{children:"locale"})," are not included."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"isFallback"}),": ",(0,t.jsx)(n.code,{children:"boolean"})," - Whether the current page is in ",(0,t.jsx)(n.a,{href:"/docs/api-reference/data-fetching/get-static-paths.md#fallback-pages",children:"fallback mode"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"basePath"}),": ",(0,t.jsx)(n.code,{children:"String"})," - The active ",(0,t.jsx)(n.a,{href:"/docs/api-reference/next.config.js/basepath.md",children:"basePath"})," (if enabled)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"locale"}),": ",(0,t.jsx)(n.code,{children:"String"})," - The active locale (if enabled)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"locales"}),": ",(0,t.jsx)(n.code,{children:"String[]"})," - All supported locales (if enabled)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"defaultLocale"}),": ",(0,t.jsx)(n.code,{children:"String"})," - The current default locale (if enabled)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"domainLocales"}),": ",(0,t.jsx)(n.code,{children:"Array<{domain, defaultLocale, locales}>"})," - Any configured domain locales."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"isReady"}),": ",(0,t.jsx)(n.code,{children:"boolean"})," - Whether the router fields are updated client-side and ready for use. Should only be used inside of ",(0,t.jsx)(n.code,{children:"useEffect"})," methods and not for conditionally rendering on the server. See related docs for use case with ",(0,t.jsx)(n.a,{href:"/docs/advanced-features/automatic-static-optimization.md",children:"automatically statically optimized pages"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"isPreview"}),": ",(0,t.jsx)(n.code,{children:"boolean"})," - Whether the application is currently in ",(0,t.jsx)(n.a,{href:"/docs/advanced-features/preview-mode.md",children:"preview mode"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Using the ",(0,t.jsx)(n.code,{children:"asPath"})," field may lead to a mismatch between client and server if the page is rendered using server-side rendering or ",(0,t.jsx)(n.a,{href:"/docs/advanced-features/automatic-static-optimization.md",children:"automatic static optimization"}),". Avoid using ",(0,t.jsx)(n.code,{children:"asPath"})," until the ",(0,t.jsx)(n.code,{children:"isReady"})," field is ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The following methods are included inside ",(0,t.jsx)(n.code,{children:"router"}),":"]}),"\n",(0,t.jsx)(n.h3,{id:"routerpush",children:"router.push"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Examples"})}),(0,t.jsx)("ul",{children:(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/using-router",children:"Using Router"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Handles client-side transitions, this method is useful for cases where ",(0,t.jsx)(n.a,{href:"/docs/api-reference/next/link.md",children:(0,t.jsx)(n.code,{children:"next/link"})})," is not enough."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"router.push(url, as, options)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"url"}),": ",(0,t.jsx)(n.code,{children:"UrlObject | String"})," - The URL to navigate to (see ",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/url.html#legacy-urlobject",children:"Node.JS URL module documentation"})," for ",(0,t.jsx)(n.code,{children:"UrlObject"})," properties)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"as"}),": ",(0,t.jsx)(n.code,{children:"UrlObject | String"})," - Optional decorator for the path that will be shown in the browser URL bar. Before Next.js 9.5.3 this was used for dynamic routes, check our ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/tag/v9.5.2/api-reference/next/link#dynamic-routes",children:"previous docs"})," to see how it worked. Note: when this path differs from the one provided in ",(0,t.jsx)(n.code,{children:"href"})," the previous ",(0,t.jsx)(n.code,{children:"href"}),"/",(0,t.jsx)(n.code,{children:"as"})," behavior is used as shown in the ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/tag/v9.5.2/api-reference/next/link#dynamic-routes",children:"previous docs"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"options"})," - Optional object with the following configuration options:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"scroll"})," - Optional boolean, controls scrolling to the top of the page after navigation. Defaults to ",(0,t.jsx)(n.code,{children:"true"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/routing/shallow-routing.md",children:(0,t.jsx)(n.code,{children:"shallow"})}),": Update the path of the current page without rerunning ",(0,t.jsx)(n.a,{href:"/docs/basic-features/data-fetching/get-static-props.md",children:(0,t.jsx)(n.code,{children:"getStaticProps"})}),", ",(0,t.jsx)(n.a,{href:"/docs/basic-features/data-fetching/get-server-side-props.md",children:(0,t.jsx)(n.code,{children:"getServerSideProps"})})," or ",(0,t.jsx)(n.a,{href:"/docs/api-reference/data-fetching/get-initial-props.md",children:(0,t.jsx)(n.code,{children:"getInitialProps"})}),". Defaults to ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"locale"})," - Optional string, indicates locale of the new page"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["You don't need to use ",(0,t.jsx)(n.code,{children:"router.push"})," for external URLs. ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/location",children:"window.location"})," is better suited for those cases."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["Navigating to ",(0,t.jsx)(n.code,{children:"pages/about.js"}),", which is a predefined route:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { useRouter } from 'next/router'\n\nexport default function Page() {\n  const router = useRouter()\n\n  return (\n    <button type=\"button\" onClick={() => router.push('/about')}>\n      Click me\n    </button>\n  )\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Navigating ",(0,t.jsx)(n.code,{children:"pages/post/[pid].js"}),", which is a dynamic route:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { useRouter } from 'next/router'\n\nexport default function Page() {\n  const router = useRouter()\n\n  return (\n    <button type=\"button\" onClick={() => router.push('/post/abc')}>\n      Click me\n    </button>\n  )\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Redirecting the user to ",(0,t.jsx)(n.code,{children:"pages/login.js"}),", useful for pages behind ",(0,t.jsx)(n.a,{href:"/docs/authentication",children:"authentication"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { useEffect } from 'react'\nimport { useRouter } from 'next/router'\n\n// Here you would fetch and return the user\nconst useUser = () => ({ user: null, loading: false })\n\nexport default function Page() {\n  const { user, loading } = useUser()\n  const router = useRouter()\n\n  useEffect(() => {\n    if (!(user || loading)) {\n      router.push('/login')\n    }\n  }, [user, loading])\n\n  return <p>Redirecting...</p>\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"resetting-state-after-navigation",children:"Resetting state after navigation"}),"\n",(0,t.jsxs)(n.p,{children:["When navigating to the same page in Next.js, the page's state ",(0,t.jsx)(n.strong,{children:"will not"})," be reset by default as react does not unmount unless the parent component has changed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"// pages/[slug].js\nimport Link from 'next/link'\nimport { useState } from 'react'\nimport { useRouter } from 'next/router'\n\nexport default function Page(props) {\n  const router = useRouter()\n  const [count, setCount] = useState(0)\n  return (\n    <div>\n      <h1>Page: {router.query.slug}</h1>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increase count</button>\n      <Link href=\"/one\">one</Link> <Link href=\"/two\">two</Link>\n    </div>\n  )\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the above example, navigating between ",(0,t.jsx)(n.code,{children:"/one"})," and ",(0,t.jsx)(n.code,{children:"/two"})," ",(0,t.jsx)(n.strong,{children:"will not"})," reset the count . The ",(0,t.jsx)(n.code,{children:"useState"})," is maintained between renders because the top-level React component, ",(0,t.jsx)(n.code,{children:"Page"}),", is the same."]}),"\n",(0,t.jsx)(n.p,{children:"If you do not want this behavior, you have a couple of options:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Manually ensure each state is updated using ",(0,t.jsx)(n.code,{children:"useEffect"}),". In the above example, that could look like:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"useEffect(() => {\n  setCount(0)\n}, [router.query.slug])\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Use a React ",(0,t.jsx)(n.code,{children:"key"})," to ",(0,t.jsx)(n.a,{href:"https://reactjs.org/docs/lists-and-keys.html#keys",children:"tell React to remount the component"}),". To do this for all pages, you can use a custom app:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"// pages/_app.js\nimport { useRouter } from 'next/router'\n\nexport default function MyApp({ Component, pageProps }) {\n  const router = useRouter()\n  return <Component key={router.asPath} {...pageProps} />\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"with-url-object",children:"With URL object"}),"\n",(0,t.jsxs)(n.p,{children:["You can use a URL object in the same way you can use it for ",(0,t.jsx)(n.a,{href:"/docs/api-reference/next/link.md#with-url-object",children:(0,t.jsx)(n.code,{children:"next/link"})}),". Works for both the ",(0,t.jsx)(n.code,{children:"url"})," and ",(0,t.jsx)(n.code,{children:"as"})," parameters:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { useRouter } from 'next/router'\n\nexport default function ReadMore({ post }) {\n  const router = useRouter()\n\n  return (\n    <button\n      type=\"button\"\n      onClick={() => {\n        router.push({\n          pathname: '/post/[pid]',\n          query: { pid: post.id },\n        })\n      }}\n    >\n      Click here to read more\n    </button>\n  )\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"routerreplace",children:"router.replace"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to the ",(0,t.jsx)(n.code,{children:"replace"})," prop in ",(0,t.jsx)(n.a,{href:"/docs/api-reference/next/link.md",children:(0,t.jsx)(n.code,{children:"next/link"})}),", ",(0,t.jsx)(n.code,{children:"router.replace"})," will prevent adding a new URL entry into the ",(0,t.jsx)(n.code,{children:"history"})," stack."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"router.replace(url, as, options)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The API for ",(0,t.jsx)(n.code,{children:"router.replace"})," is exactly the same as the API for ",(0,t.jsx)(n.a,{href:"#router.push",children:(0,t.jsx)(n.code,{children:"router.push"})}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"usage-1",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"Take a look at the following example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { useRouter } from 'next/router'\n\nexport default function Page() {\n  const router = useRouter()\n\n  return (\n    <button type=\"button\" onClick={() => router.replace('/home')}>\n      Click me\n    </button>\n  )\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"routerprefetch",children:"router.prefetch"}),"\n",(0,t.jsxs)(n.p,{children:["Prefetch pages for faster client-side transitions. This method is only useful for navigations without ",(0,t.jsx)(n.a,{href:"/docs/api-reference/next/link.md",children:(0,t.jsx)(n.code,{children:"next/link"})}),", as ",(0,t.jsx)(n.code,{children:"next/link"})," takes care of prefetching pages automatically."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"This is a production only feature. Next.js doesn't prefetch pages in development."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"router.prefetch(url, as, options)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"url"})," - The URL to prefetch, including explicit routes (e.g. ",(0,t.jsx)(n.code,{children:"/dashboard"}),") and dynamic routes (e.g. ",(0,t.jsx)(n.code,{children:"/product/[id]"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"as"})," - Optional decorator for ",(0,t.jsx)(n.code,{children:"url"}),". Before Next.js 9.5.3 this was used to prefetch dynamic routes, check our ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/tag/v9.5.2/api-reference/next/link#dynamic-routes",children:"previous docs"})," to see how it worked"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"options"})," - Optional object with the following allowed fields:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"locale"})," - allows providing a different locale from the active one. If ",(0,t.jsx)(n.code,{children:"false"}),", ",(0,t.jsx)(n.code,{children:"url"})," has to include the locale as the active locale won't be used."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"usage-2",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"Let's say you have a login page, and after a login, you redirect the user to the dashboard. For that case, we can prefetch the dashboard to make a faster transition, like in the following example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { useCallback, useEffect } from 'react'\nimport { useRouter } from 'next/router'\n\nexport default function Login() {\n  const router = useRouter()\n  const handleSubmit = useCallback((e) => {\n    e.preventDefault()\n\n    fetch('/api/login', {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({\n        /* Form data */\n      }),\n    }).then((res) => {\n      // Do a fast client-side transition to the already prefetched dashboard page\n      if (res.ok) router.push('/dashboard')\n    })\n  }, [])\n\n  useEffect(() => {\n    // Prefetch the dashboard page\n    router.prefetch('/dashboard')\n  }, [])\n\n  return (\n    <form onSubmit={handleSubmit}>\n      {/* Form fields */}\n      <button type=\"submit\">Login</button>\n    </form>\n  )\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"routerbeforepopstate",children:"router.beforePopState"}),"\n",(0,t.jsxs)(n.p,{children:["In some cases (for example, if using a ",(0,t.jsx)(n.a,{href:"/docs/advanced-features/custom-server.md",children:"Custom Server"}),"), you may wish to listen to ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Events/popstate",children:"popstate"})," and do something before the router acts on it."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"router.beforePopState(cb)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cb"})," - The function to run on incoming ",(0,t.jsx)(n.code,{children:"popstate"})," events. The function receives the state of the event as an object with the following props:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"url"}),": ",(0,t.jsx)(n.code,{children:"String"})," - the route for the new state. This is usually the name of a ",(0,t.jsx)(n.code,{children:"page"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"as"}),": ",(0,t.jsx)(n.code,{children:"String"})," - the url that will be shown in the browser"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"options"}),": ",(0,t.jsx)(n.code,{children:"Object"})," - Additional options sent by ",(0,t.jsx)(n.a,{href:"#router.push",children:"router.push"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"cb"})," returns ",(0,t.jsx)(n.code,{children:"false"}),", the Next.js router will not handle ",(0,t.jsx)(n.code,{children:"popstate"}),", and you'll be responsible for handling it in that case. See ",(0,t.jsx)(n.a,{href:"/docs/advanced-features/custom-server.md#disabling-file-system-routing",children:"Disabling file-system routing"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"usage-3",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["You could use ",(0,t.jsx)(n.code,{children:"beforePopState"})," to manipulate the request, or force a SSR refresh, as in the following example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { useEffect } from 'react'\nimport { useRouter } from 'next/router'\n\nexport default function Page() {\n  const router = useRouter()\n\n  useEffect(() => {\n    router.beforePopState(({ url, as, options }) => {\n      // I only want to allow these two routes!\n      if (as !== '/' && as !== '/other') {\n        // Have SSR render bad routes as a 404.\n        window.location.href = as\n        return false\n      }\n\n      return true\n    })\n  }, [])\n\n  return <p>Welcome to the page</p>\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"routerback",children:"router.back"}),"\n",(0,t.jsxs)(n.p,{children:["Navigate back in history. Equivalent to clicking the browser\u2019s back button. It executes ",(0,t.jsx)(n.code,{children:"window.history.back()"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"usage-4",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { useRouter } from 'next/router'\n\nexport default function Page() {\n  const router = useRouter()\n\n  return (\n    <button type=\"button\" onClick={() => router.back()}>\n      Click here to go back\n    </button>\n  )\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"routerreload",children:"router.reload"}),"\n",(0,t.jsxs)(n.p,{children:["Reload the current URL. Equivalent to clicking the browser\u2019s refresh button. It executes ",(0,t.jsx)(n.code,{children:"window.location.reload()"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"usage-5",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { useRouter } from 'next/router'\n\nexport default function Page() {\n  const router = useRouter()\n\n  return (\n    <button type=\"button\" onClick={() => router.reload()}>\n      Click here to reload\n    </button>\n  )\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"routerevents",children:"router.events"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Examples"})}),(0,t.jsx)("ul",{children:(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/with-loading",children:"With a page loading indicator"})})})]}),"\n",(0,t.jsx)(n.p,{children:"You can listen to different events happening inside the Next.js Router. Here's a list of supported events:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"routeChangeStart(url, { shallow })"})," - Fires when a route starts to change"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"routeChangeComplete(url, { shallow })"})," - Fires when a route changed completely"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"routeChangeError(err, url, { shallow })"})," - Fires when there's an error when changing routes, or a route load is cancelled","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"err.cancelled"})," - Indicates if the navigation was cancelled"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"beforeHistoryChange(url, { shallow })"})," - Fires before changing the browser's history"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hashChangeStart(url, { shallow })"})," - Fires when the hash will change but not the page"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hashChangeComplete(url, { shallow })"})," - Fires when the hash has changed but not the page"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," Here ",(0,t.jsx)(n.code,{children:"url"})," is the URL shown in the browser, including the ",(0,t.jsx)(n.a,{href:"/docs/api-reference/next.config.js/basepath.md",children:(0,t.jsx)(n.code,{children:"basePath"})}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"usage-6",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["For example, to listen to the router event ",(0,t.jsx)(n.code,{children:"routeChangeStart"}),", open or create ",(0,t.jsx)(n.code,{children:"pages/_app.js"})," and subscribe to the event, like so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { useEffect } from 'react'\nimport { useRouter } from 'next/router'\n\nexport default function MyApp({ Component, pageProps }) {\n  const router = useRouter()\n\n  useEffect(() => {\n    const handleRouteChange = (url, { shallow }) => {\n      console.log(\n        `App is changing to ${url} ${\n          shallow ? 'with' : 'without'\n        } shallow routing`\n      )\n    }\n\n    router.events.on('routeChangeStart', handleRouteChange)\n\n    // If the component is unmounted, unsubscribe\n    // from the event with the `off` method:\n    return () => {\n      router.events.off('routeChangeStart', handleRouteChange)\n    }\n  }, [])\n\n  return <Component {...pageProps} />\n}\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["We use a ",(0,t.jsx)(n.a,{href:"/docs/advanced-features/custom-app.md",children:"Custom App"})," (",(0,t.jsx)(n.code,{children:"pages/_app.js"}),") for this example to subscribe to the event because it's not unmounted on page navigations, but you can subscribe to router events on any component in your application."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Router events should be registered when a component mounts (",(0,t.jsx)(n.a,{href:"https://reactjs.org/docs/hooks-effect.html",children:"useEffect"})," or ",(0,t.jsx)(n.a,{href:"https://reactjs.org/docs/react-component.html#componentdidmount",children:"componentDidMount"})," / ",(0,t.jsx)(n.a,{href:"https://reactjs.org/docs/react-component.html#componentwillunmount",children:"componentWillUnmount"}),") or imperatively when an event happens."]}),"\n",(0,t.jsxs)(n.p,{children:["If a route load is cancelled (for example, by clicking two links rapidly in succession), ",(0,t.jsx)(n.code,{children:"routeChangeError"})," will fire. And the passed ",(0,t.jsx)(n.code,{children:"err"})," will contain a ",(0,t.jsx)(n.code,{children:"cancelled"})," property set to ",(0,t.jsx)(n.code,{children:"true"}),", as in the following example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { useEffect } from 'react'\nimport { useRouter } from 'next/router'\n\nexport default function MyApp({ Component, pageProps }) {\n  const router = useRouter()\n\n  useEffect(() => {\n    const handleRouteChangeError = (err, url) => {\n      if (err.cancelled) {\n        console.log(`Route to ${url} was cancelled!`)\n      }\n    }\n\n    router.events.on('routeChangeError', handleRouteChangeError)\n\n    // If the component is unmounted, unsubscribe\n    // from the event with the `off` method:\n    return () => {\n      router.events.off('routeChangeError', handleRouteChangeError)\n    }\n  }, [])\n\n  return <Component {...pageProps} />\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"potential-eslint-errors",children:"Potential ESLint errors"}),"\n",(0,t.jsxs)(n.p,{children:["Certain methods accessible on the ",(0,t.jsx)(n.code,{children:"router"})," object return a Promise. If you have the ESLint rule, ",(0,t.jsx)(n.a,{href:"https://typescript-eslint.io/rules/no-floating-promises",children:"no-floating-promises"})," enabled, consider disabling it either globally, or for the affected line."]}),"\n",(0,t.jsxs)(n.p,{children:["If your application needs this rule, you should either ",(0,t.jsx)(n.code,{children:"void"})," the promise \u2013 or use an ",(0,t.jsx)(n.code,{children:"async"})," function, ",(0,t.jsx)(n.code,{children:"await"})," the Promise, then void the function call. ",(0,t.jsxs)(n.strong,{children:["This is not applicable when the method is called from inside an ",(0,t.jsx)(n.code,{children:"onClick"})," handler"]}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The affected methods are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"router.push"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"router.replace"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"router.prefetch"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"potential-solutions",children:"Potential solutions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { useEffect } from 'react'\nimport { useRouter } from 'next/router'\n\n// Here you would fetch and return the user\nconst useUser = () => ({ user: null, loading: false })\n\nexport default function Page() {\n  const { user, loading } = useUser()\n  const router = useRouter()\n\n  useEffect(() => {\n    // disable the linting on the next line - This is the cleanest solution\n    // eslint-disable-next-line no-floating-promises\n    router.push('/login')\n\n    // void the Promise returned by router.push\n    if (!(user || loading)) {\n      void router.push('/login')\n    }\n    // or use an async function, await the Promise, then void the function call\n    async function handleRouteChange() {\n      if (!(user || loading)) {\n        await router.push('/login')\n      }\n    }\n    void handleRouteChange()\n  }, [user, loading])\n\n  return <p>Redirecting...</p>\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"withrouter",children:"withRouter"}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.a,{href:"#useRouter",children:(0,t.jsx)(n.code,{children:"useRouter"})})," is not the best fit for you, ",(0,t.jsx)(n.code,{children:"withRouter"})," can also add the same ",(0,t.jsxs)(n.a,{href:"#router-object",children:[(0,t.jsx)(n.code,{children:"router"})," object"]})," to any component."]}),"\n",(0,t.jsx)(n.h3,{id:"usage-7",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { withRouter } from 'next/router'\n\nfunction Page({ router }) {\n  return <p>{router.pathname}</p>\n}\n\nexport default withRouter(Page)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"typescript",children:"TypeScript"}),"\n",(0,t.jsxs)(n.p,{children:["To use class components with ",(0,t.jsx)(n.code,{children:"withRouter"}),", the component needs to accept a router prop:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import React from 'react'\nimport { withRouter, NextRouter } from 'next/router'\n\ninterface WithRouterProps {\n  router: NextRouter\n}\n\ninterface MyComponentProps extends WithRouterProps {}\n\nclass MyComponent extends React.Component<MyComponentProps> {\n  render() {\n    return <p>{this.props.router.pathname}</p>\n  }\n}\n\nexport default withRouter(MyComponent)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var t=r(7294);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);