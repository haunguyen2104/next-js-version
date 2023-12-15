"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[9544],{9063:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>t,toc:()=>l});var d=s(5893),r=s(1151);const i={description:"Learn about the server-only helpers for Middleware and Edge API Routes."},c="next/server",t={id:"next-js/v13.0.1/api-reference/next/server",title:"next/server",description:"Learn about the server-only helpers for Middleware and Edge API Routes.",source:"@site/docs/next-js/v13.0.1/api-reference/next/server.md",sourceDirName:"next-js/v13.0.1/api-reference/next",slug:"/next-js/v13.0.1/api-reference/next/server",permalink:"/next-js/v13.0.1/api-reference/next/server",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.1/api-reference/next/server.md",tags:[],version:"current",frontMatter:{description:"Learn about the server-only helpers for Middleware and Edge API Routes."},sidebar:"tutorialSidebar",previous:{title:"next/script",permalink:"/next-js/v13.0.1/api-reference/next/script"},next:{title:"Base Path",permalink:"/next-js/v13.0.1/api-reference/next.config.js/basepath"}},o={},l=[{value:"NextRequest",id:"nextrequest",level:2},{value:"NextFetchEvent",id:"nextfetchevent",level:2},{value:"NextResponse",id:"nextresponse",level:2},{value:"Public Methods",id:"public-methods",level:3},{value:"Static Methods",id:"static-methods",level:3},{value:"userAgent",id:"useragent",level:2},{value:"FAQ",id:"faq",level:2},{value:"Why does <code>redirect</code> use 307 and 308?",id:"why-does-redirect-use-307-and-308",level:3},{value:"How do I access Environment Variables?",id:"how-do-i-access-environment-variables",level:3},{value:"Related",id:"related",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"nextserver",children:"next/server"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"next/server"})," provides server-only helpers for use in ",(0,d.jsx)(n.a,{href:"/docs/middleware.md",children:"Middleware"})," and ",(0,d.jsx)(n.a,{href:"/docs/api-routes/edge-api-routes.md",children:"Edge API Routes"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"nextrequest",children:"NextRequest"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"NextRequest"})," object is an extension of the native ",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request",children:(0,d.jsx)(n.code,{children:"Request"})})," interface, with the following added methods and properties:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"cookies"})," - A ",(0,d.jsx)(n.a,{href:"https://edge-runtime.vercel.app/packages/cookies#for-request",children:"RequestCookies"})," instance with cookies from the ",(0,d.jsx)(n.code,{children:"Request"}),". It reads/mutates the ",(0,d.jsx)(n.code,{children:"Cookie"})," header of the request. See also ",(0,d.jsx)(n.a,{href:"/docs/advanced-features/middleware#using-cookies",children:"Using cookies in Middleware"}),"."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"get"})," - A method that takes a cookie ",(0,d.jsx)(n.code,{children:"name"})," and returns an object with ",(0,d.jsx)(n.code,{children:"name"})," and ",(0,d.jsx)(n.code,{children:"value"}),". If a cookie with ",(0,d.jsx)(n.code,{children:"name"})," isn't found, it returns ",(0,d.jsx)(n.code,{children:"undefined"}),". If multiple cookies match, it will only return the first match."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"getAll"})," - A method that is similar to ",(0,d.jsx)(n.code,{children:"get"}),", but returns a list of all the cookies with a matching ",(0,d.jsx)(n.code,{children:"name"}),". If ",(0,d.jsx)(n.code,{children:"name"})," is unspecified, it returns all the available cookies."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"set"})," - A method that takes an object with properties of ",(0,d.jsx)(n.code,{children:"CookieListItem"})," as defined in the ",(0,d.jsx)(n.a,{href:"https://wicg.github.io/cookie-store/#dictdef-cookielistitem",children:"W3C CookieStore API"})," spec."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"delete"})," - A method that takes either a cookie ",(0,d.jsx)(n.code,{children:"name"})," or a list of names. and removes the cookies matching the name(s). Returns ",(0,d.jsx)(n.code,{children:"true"})," for deleted and ",(0,d.jsx)(n.code,{children:"false"})," for undeleted cookies."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"has"})," - A method that takes a cookie ",(0,d.jsx)(n.code,{children:"name"})," and returns a ",(0,d.jsx)(n.code,{children:"boolean"})," based on if the cookie exists (",(0,d.jsx)(n.code,{children:"true"}),") or not (",(0,d.jsx)(n.code,{children:"false"}),")."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"clear"})," - A method that takes no argument and will effectively remove the ",(0,d.jsx)(n.code,{children:"Cookie"})," header."]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"nextUrl"}),": Includes an extended, parsed, URL object that gives you access to Next.js specific properties such as ",(0,d.jsx)(n.code,{children:"pathname"}),", ",(0,d.jsx)(n.code,{children:"basePath"}),", ",(0,d.jsx)(n.code,{children:"trailingSlash"})," and ",(0,d.jsx)(n.code,{children:"i18n"}),". Includes the following properties:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"basePath"})," (",(0,d.jsx)(n.code,{children:"string"}),")"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"buildId"})," (",(0,d.jsx)(n.code,{children:"string || undefined"}),")"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"defaultLocale"})," (",(0,d.jsx)(n.code,{children:"string || undefined"}),")"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"domainLocale"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"defaultLocale"}),": (",(0,d.jsx)(n.code,{children:"string"}),")"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"domain"}),": (",(0,d.jsx)(n.code,{children:"string"}),")"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"http"}),": (",(0,d.jsx)(n.code,{children:"boolean || undefined"}),")"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"locales"}),": (",(0,d.jsx)(n.code,{children:"string[] || undefined"}),")"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"locale"})," (",(0,d.jsx)(n.code,{children:"string || undefined"}),")"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"url"})," (",(0,d.jsx)(n.code,{children:"URL"}),")"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"ip"}),": (",(0,d.jsx)(n.code,{children:"string || undefined"}),") - Has the IP address of the ",(0,d.jsx)(n.code,{children:"Request"}),". This information is provided by your hosting platform."]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"geo"})," - Has the geographic location from the ",(0,d.jsx)(n.code,{children:"Request"}),". This information is provided by your hosting platform. Includes the following properties:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"city"})," (",(0,d.jsx)(n.code,{children:"string || undefined"}),")"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"country"})," (",(0,d.jsx)(n.code,{children:"string || undefined"}),")"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"region"})," (",(0,d.jsx)(n.code,{children:"string || undefined"}),")"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"latitude"})," (",(0,d.jsx)(n.code,{children:"string || undefined"}),")"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"longitude"})," (",(0,d.jsx)(n.code,{children:"string || undefined"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["You can use the ",(0,d.jsx)(n.code,{children:"NextRequest"})," object as a direct replacement for the native ",(0,d.jsx)(n.code,{children:"Request"})," interface, giving you more control over how you manipulate the request."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"NextRequest"})," can be imported from ",(0,d.jsx)(n.code,{children:"next/server"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-typescript",children:"import type { NextRequest } from 'next/server'\n"})}),"\n",(0,d.jsx)(n.h2,{id:"nextfetchevent",children:"NextFetchEvent"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"NextFetchEvent"})," object extends the native ",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent",children:(0,d.jsx)(n.code,{children:"FetchEvent"})})," object, and includes the ",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent/waitUntil",children:(0,d.jsx)(n.code,{children:"waitUntil()"})})," method."]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"waitUntil()"})," method can be used to prolong the execution of the function if you have other background work to make."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-typescript",children:"import { NextResponse } from 'next/server'\nimport type { NextFetchEvent, NextRequest } from 'next/server'\n\nexport async function middleware(req: NextRequest, event: NextFetchEvent) {\n  event.waitUntil(\n    fetch('https://my-analytics-platform.com', {\n      method: 'POST',\n      body: JSON.stringify({ pathname: req.nextUrl.pathname }),\n    })\n  )\n\n  return NextResponse.next()\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"NextFetchEvent"})," object can be imported from ",(0,d.jsx)(n.code,{children:"next/server"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-typescript",children:"import type { NextFetchEvent } from 'next/server'\n"})}),"\n",(0,d.jsx)(n.h2,{id:"nextresponse",children:"NextResponse"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"NextResponse"})," class extends the native ",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Response",children:(0,d.jsx)(n.code,{children:"Response"})})," interface, with the following:"]}),"\n",(0,d.jsx)(n.h3,{id:"public-methods",children:"Public Methods"}),"\n",(0,d.jsxs)(n.p,{children:["Public methods are available on an instance of the ",(0,d.jsx)(n.code,{children:"NextResponse"})," class. Depending on your use case, you can create an instance and assign to a variable, then access the following public methods:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"cookies"})," - A ",(0,d.jsx)(n.a,{href:"https://edge-runtime.vercel.app/packages/cookies#for-response",children:"ResponseCookies"})," instance with the cookies from the ",(0,d.jsx)(n.code,{children:"Response"}),". It a\nA ",(0,d.jsx)(n.a,{href:"https://edge-runtime.vercel.app/packages/cookies#for-response",children:"ResponseCooies"})," instance with cookies from the ",(0,d.jsx)(n.code,{children:"Response"}),". It reads/mutates the ",(0,d.jsx)(n.code,{children:"Set-Cookie"})," header of the response. See also ",(0,d.jsx)(n.a,{href:"/docs/advanced-features/middleware#using-cookies",children:"Using cookies in Middleware"}),".","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"get"})," - A method that takes a cookie ",(0,d.jsx)(n.code,{children:"name"})," and returns an object with ",(0,d.jsx)(n.code,{children:"name"})," and ",(0,d.jsx)(n.code,{children:"value"}),". If a cookie with ",(0,d.jsx)(n.code,{children:"name"})," isn't found, it returns ",(0,d.jsx)(n.code,{children:"undefined"}),". If multiple cookies match, it will only return the first match."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"getAll"})," - A method that is similar to ",(0,d.jsx)(n.code,{children:"get"}),", but returns a list of all the cookies with a matching ",(0,d.jsx)(n.code,{children:"name"}),". If ",(0,d.jsx)(n.code,{children:"name"})," is unspecified, it returns all the available cookies."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"set"})," - A method that takes an object with properties of ",(0,d.jsx)(n.code,{children:"CookieListItem"})," as defined in the ",(0,d.jsx)(n.a,{href:"https://wicg.github.io/cookie-store/#dictdef-cookielistitem",children:"W3C CookieStore API"})," spec."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"delete"})," - A method that takes either a cookie ",(0,d.jsx)(n.code,{children:"name"})," or a list of names. and removes the cookies matching the name(s). Returns ",(0,d.jsx)(n.code,{children:"true"})," for deleted and ",(0,d.jsx)(n.code,{children:"false"})," for undeleted cookies."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"static-methods",children:"Static Methods"}),"\n",(0,d.jsxs)(n.p,{children:["The following static methods are available on the ",(0,d.jsx)(n.code,{children:"NextResponse"})," class directly:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"redirect()"})," - Returns a ",(0,d.jsx)(n.code,{children:"NextResponse"})," with a redirect set"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"rewrite()"})," - Returns a ",(0,d.jsx)(n.code,{children:"NextResponse"})," with a rewrite set"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"next()"})," - Returns a ",(0,d.jsx)(n.code,{children:"NextResponse"})," that will continue the middleware chain"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["To use the methods above, ",(0,d.jsxs)(n.strong,{children:["you must return the ",(0,d.jsx)(n.code,{children:"NextResponse"})," object"]})," returned. ",(0,d.jsx)(n.code,{children:"NextResponse"})," can be imported from ",(0,d.jsx)(n.code,{children:"next/server"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-typescript",children:"import { NextResponse } from 'next/server'\n"})}),"\n",(0,d.jsx)(n.h2,{id:"useragent",children:"userAgent"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"userAgent"})," helper allows you to interact with the user agent object from the request. It is abstracted from the native ",(0,d.jsx)(n.code,{children:"Request"})," object, and is an opt in feature. It has the following properties:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"isBot"}),": (",(0,d.jsx)(n.code,{children:"boolean"}),") Whether the request comes from a known bot"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"browser"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"name"}),": (",(0,d.jsx)(n.code,{children:"string || undefined"}),") The name of the browser"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"version"}),": (",(0,d.jsx)(n.code,{children:"string || undefined"}),") The version of the browser, determined dynamically"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"device"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"model"}),": (",(0,d.jsx)(n.code,{children:"string || undefined"}),") The model of the device, determined dynamically"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"type"}),": (",(0,d.jsx)(n.code,{children:"string || undefined"}),") The type of the browser, can be one of the following values: ",(0,d.jsx)(n.code,{children:"console"}),", ",(0,d.jsx)(n.code,{children:"mobile"}),", ",(0,d.jsx)(n.code,{children:"tablet"}),", ",(0,d.jsx)(n.code,{children:"smarttv"}),", ",(0,d.jsx)(n.code,{children:"wearable"}),", ",(0,d.jsx)(n.code,{children:"embedded"}),", or ",(0,d.jsx)(n.code,{children:"undefined"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"vendor"}),": (",(0,d.jsx)(n.code,{children:"string || undefined"}),") The vendor of the device, determined dynamically"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"engine"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"name"}),": (",(0,d.jsx)(n.code,{children:"string || undefined"}),") The name of the browser engine, could be one of the following values: ",(0,d.jsx)(n.code,{children:"Amaya"}),", ",(0,d.jsx)(n.code,{children:"Blink"}),", ",(0,d.jsx)(n.code,{children:"EdgeHTML"}),", ",(0,d.jsx)(n.code,{children:"Flow"}),", ",(0,d.jsx)(n.code,{children:"Gecko"}),", ",(0,d.jsx)(n.code,{children:"Goanna"}),", ",(0,d.jsx)(n.code,{children:"iCab"}),", ",(0,d.jsx)(n.code,{children:"KHTML"}),", ",(0,d.jsx)(n.code,{children:"Links"}),", ",(0,d.jsx)(n.code,{children:"Lynx"}),", ",(0,d.jsx)(n.code,{children:"NetFront"}),", ",(0,d.jsx)(n.code,{children:"NetSurf"}),", ",(0,d.jsx)(n.code,{children:"Presto"}),", ",(0,d.jsx)(n.code,{children:"Tasman"}),", ",(0,d.jsx)(n.code,{children:"Trident"}),", ",(0,d.jsx)(n.code,{children:"w3m"}),", ",(0,d.jsx)(n.code,{children:"WebKit"})," or ",(0,d.jsx)(n.code,{children:"undefined"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"version"}),": (",(0,d.jsx)(n.code,{children:"string || undefined"}),") The version of the browser engine, determined dynamically, or ",(0,d.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"os"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"name"}),": (",(0,d.jsx)(n.code,{children:"string || undefined"}),") The name of the OS, could be ",(0,d.jsx)(n.code,{children:"undefined"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"version"}),": (",(0,d.jsx)(n.code,{children:"string || undefined"}),") The version of the OS, determined dynamically, or ",(0,d.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"cpu"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"architecture"}),": (",(0,d.jsx)(n.code,{children:"string || undefined"}),") The architecture of the CPU, could be one of the following values: ",(0,d.jsx)(n.code,{children:"68k"}),", ",(0,d.jsx)(n.code,{children:"amd64"}),", ",(0,d.jsx)(n.code,{children:"arm"}),", ",(0,d.jsx)(n.code,{children:"arm64"}),", ",(0,d.jsx)(n.code,{children:"armhf"}),", ",(0,d.jsx)(n.code,{children:"avr"}),", ",(0,d.jsx)(n.code,{children:"ia32"}),", ",(0,d.jsx)(n.code,{children:"ia64"}),", ",(0,d.jsx)(n.code,{children:"irix"}),", ",(0,d.jsx)(n.code,{children:"irix64"}),", ",(0,d.jsx)(n.code,{children:"mips"}),", ",(0,d.jsx)(n.code,{children:"mips64"}),", ",(0,d.jsx)(n.code,{children:"pa-risc"}),", ",(0,d.jsx)(n.code,{children:"ppc"}),", ",(0,d.jsx)(n.code,{children:"sparc"}),", ",(0,d.jsx)(n.code,{children:"sparc64"})," or ",(0,d.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"userAgent"})," can be imported from ",(0,d.jsx)(n.code,{children:"next/server"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-typescript",children:"import { userAgent } from 'next/server'\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-typescript",children:"import { NextRequest, NextResponse, userAgent } from 'next/server'\n\nexport function middleware(request: NextRequest) {\n  const url = request.nextUrl\n  const { device } = userAgent(request)\n  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop'\n  url.searchParams.set('viewport', viewport)\n  return NextResponse.rewrite(url)\n}\n"})}),"\n",(0,d.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,d.jsxs)(n.h3,{id:"why-does-redirect-use-307-and-308",children:["Why does ",(0,d.jsx)(n.code,{children:"redirect"})," use 307 and 308?"]}),"\n",(0,d.jsxs)(n.p,{children:["When using ",(0,d.jsx)(n.code,{children:"redirect()"})," you may notice that the status codes used are ",(0,d.jsx)(n.code,{children:"307"})," for a temporary redirect, and ",(0,d.jsx)(n.code,{children:"308"})," for a permanent redirect. While traditionally a ",(0,d.jsx)(n.code,{children:"302"})," was used for a temporary redirect, and a ",(0,d.jsx)(n.code,{children:"301"})," for a permanent redirect, many browsers changed the request method of the redirect, from a ",(0,d.jsx)(n.code,{children:"POST"})," to ",(0,d.jsx)(n.code,{children:"GET"})," request when using a ",(0,d.jsx)(n.code,{children:"302"}),", regardless of the origins request method."]}),"\n",(0,d.jsxs)(n.p,{children:["Taking the following example of a redirect from ",(0,d.jsx)(n.code,{children:"/users"})," to ",(0,d.jsx)(n.code,{children:"/people"}),", if you make a ",(0,d.jsx)(n.code,{children:"POST"})," request to ",(0,d.jsx)(n.code,{children:"/users"})," to create a new user, and are conforming to a ",(0,d.jsx)(n.code,{children:"302"})," temporary redirect, the request method will be changed from a ",(0,d.jsx)(n.code,{children:"POST"})," to a ",(0,d.jsx)(n.code,{children:"GET"})," request. This doesn't make sense, as to create a new user, you should be making a ",(0,d.jsx)(n.code,{children:"POST"})," request to ",(0,d.jsx)(n.code,{children:"/people"}),", and not a ",(0,d.jsx)(n.code,{children:"GET"})," request."]}),"\n",(0,d.jsxs)(n.p,{children:["The introduction of the ",(0,d.jsx)(n.code,{children:"307"})," status code means that the request method is preserved as ",(0,d.jsx)(n.code,{children:"POST"}),"."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"302"})," - Temporary redirect, will change the request method from ",(0,d.jsx)(n.code,{children:"POST"})," to ",(0,d.jsx)(n.code,{children:"GET"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"307"})," - Temporary redirect, will preserve the request method as ",(0,d.jsx)(n.code,{children:"POST"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"redirect()"})," method uses a ",(0,d.jsx)(n.code,{children:"307"})," by default, instead of a ",(0,d.jsx)(n.code,{children:"302"})," temporary redirect, meaning your requests will ",(0,d.jsx)(n.em,{children:"always"})," be preserved as ",(0,d.jsx)(n.code,{children:"POST"})," requests."]}),"\n",(0,d.jsxs)(n.p,{children:["If you want to cause a ",(0,d.jsx)(n.code,{children:"GET"})," response to a ",(0,d.jsx)(n.code,{children:"POST"})," request, use ",(0,d.jsx)(n.code,{children:"303"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections",children:"Learn more"})," about HTTP Redirects."]}),"\n",(0,d.jsx)(n.h3,{id:"how-do-i-access-environment-variables",children:"How do I access Environment Variables?"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"process.env"})," can be used to access ",(0,d.jsx)(n.a,{href:"/docs/basic-features/environment-variables.md",children:"Environment Variables"})," from Edge Middleware. They are evaluated during ",(0,d.jsx)(n.code,{children:"next build"}),":"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Works"}),(0,d.jsxs)(n.th,{children:["Does ",(0,d.jsx)(n.strong,{children:"not"})," work"]})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"console.log(process.env.MY_ENV_VARIABLE)"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"const getEnv = name => process.env[name]"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"const { MY_ENV_VARIABLE } = process.env"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:'const { "MY-ENV-VARIABLE": MY_ENV_VARIABLE } = process.env'})}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"related",children:"Related"}),"\n",(0,d.jsx)("div",{class:"card",children:(0,d.jsxs)("a",{href:"/docs/api-reference/edge-runtime.md",children:[(0,d.jsx)("b",{children:"Edge Runtime"}),(0,d.jsx)("small",{children:"Learn more about the supported Web APIs available."})]})}),"\n",(0,d.jsx)("div",{class:"card",children:(0,d.jsxs)("a",{href:"/docs/middleware.md",children:[(0,d.jsx)("b",{children:"Middleware"}),(0,d.jsx)("small",{children:"Run code before a request is completed."})]})})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>c});var d=s(7294);const r={},i=d.createContext(r);function c(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);