"use strict";(self.webpackChunknext_version=self.webpackChunknext_version||[]).push([[8579],{1781:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var o=s(5893),t=s(1151);const i={description:"Debug your Next.js app."},r="Debugging",d={id:"next-js/v13.0.0/advanced-features/debugging",title:"Debugging",description:"Debug your Next.js app.",source:"@site/docs/next-js/v13.0.0/advanced-features/debugging.md",sourceDirName:"next-js/v13.0.0/advanced-features",slug:"/next-js/v13.0.0/advanced-features/debugging",permalink:"/next-js/v13.0.0/advanced-features/debugging",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/next-js/v13.0.0/advanced-features/debugging.md",tags:[],version:"current",frontMatter:{description:"Debug your Next.js app."},sidebar:"tutorialSidebar",previous:{title:"Customizing PostCSS Config",permalink:"/next-js/v13.0.0/advanced-features/customizing-postcss-config"},next:{title:"Dynamic Import",permalink:"/next-js/v13.0.0/advanced-features/dynamic-import"}},c={},a=[{value:"Debugging with VS Code",id:"debugging-with-vs-code",level:2},{value:"Using the Debugger in Jetbrains WebStorm",id:"using-the-debugger-in-jetbrains-webstorm",level:2},{value:"Debugging with Chrome DevTools",id:"debugging-with-chrome-devtools",level:2},{value:"Client-side code",id:"client-side-code",level:3},{value:"Server-side code",id:"server-side-code",level:3},{value:"Debugging on Windows",id:"debugging-on-windows",level:3},{value:"More information",id:"more-information",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"debugging",children:"Debugging"}),"\n",(0,o.jsxs)(n.p,{children:["This documentation explains how you can debug your Next.js frontend and backend code with full source maps support using either the ",(0,o.jsx)(n.a,{href:"https://code.visualstudio.com/docs/editor/debugging",children:"VS Code debugger"})," or ",(0,o.jsx)(n.a,{href:"https://developers.google.com/web/tools/chrome-devtools",children:"Chrome DevTools"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Any debugger that can attach to Node.js can also be used to debug a Next.js application. You can find more details in the Node.js ",(0,o.jsx)(n.a,{href:"https://nodejs.org/en/docs/guides/debugging-getting-started/",children:"Debugging Guide"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"debugging-with-vs-code",children:"Debugging with VS Code"}),"\n",(0,o.jsxs)(n.p,{children:["Create a file named ",(0,o.jsx)(n.code,{children:".vscode/launch.json"})," at the root of your project with the following content:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Next.js: debug server-side",\n      "type": "node-terminal",\n      "request": "launch",\n      "command": "npm run dev"\n    },\n    {\n      "name": "Next.js: debug client-side",\n      "type": "pwa-chrome",\n      "request": "launch",\n      "url": "http://localhost:3000"\n    },\n    {\n      "name": "Next.js: debug full stack",\n      "type": "node-terminal",\n      "request": "launch",\n      "command": "npm run dev",\n      "console": "integratedTerminal",\n      "serverReadyAction": {\n        "pattern": "started server on .+, url: (https?://.+)",\n        "uriFormat": "%s",\n        "action": "debugWithChrome"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"npm run dev"})," can be replaced with ",(0,o.jsx)(n.code,{children:"yarn dev"})," if you're using Yarn. If you're ",(0,o.jsx)(n.a,{href:"/docs/api-reference/cli#development",children:"changing the port number"})," your application starts on, replace the ",(0,o.jsx)(n.code,{children:"3000"})," in ",(0,o.jsx)(n.code,{children:"http://localhost:3000"})," with the port you're using instead."]}),"\n",(0,o.jsxs)(n.p,{children:["Now go to the Debug panel (",(0,o.jsx)("kbd",{children:"Ctrl"}),"+",(0,o.jsx)("kbd",{children:"Shift"}),"+",(0,o.jsx)("kbd",{children:"D"})," on Windows/Linux, ",(0,o.jsx)("kbd",{children:"\u21e7"}),"+",(0,o.jsx)("kbd",{children:"\u2318"}),"+",(0,o.jsx)("kbd",{children:"D"})," on macOS), select a launch configuration, then press ",(0,o.jsx)("kbd",{children:"F5"})," or select ",(0,o.jsx)(n.strong,{children:"Debug: Start Debugging"})," from the Command Palette to start your debugging session."]}),"\n",(0,o.jsx)(n.h2,{id:"using-the-debugger-in-jetbrains-webstorm",children:"Using the Debugger in Jetbrains WebStorm"}),"\n",(0,o.jsxs)(n.p,{children:["Click the drop down menu listing the runtime configuration, and click ",(0,o.jsx)(n.code,{children:"Edit Configurations..."}),". Create a ",(0,o.jsx)(n.code,{children:"Javascript Debug"})," debug configuration with ",(0,o.jsx)(n.code,{children:"http://localhost:3000"})," as the URL. Customize to your liking (e.g. Browser for debugging, store as project file), and click ",(0,o.jsx)(n.code,{children:"OK"}),". Run this debug configuration, and the selected browser should automatically open. At this point, you should have 2 applications in debug mode: the NextJS node application, and the client/ browser application."]}),"\n",(0,o.jsx)(n.h2,{id:"debugging-with-chrome-devtools",children:"Debugging with Chrome DevTools"}),"\n",(0,o.jsx)(n.h3,{id:"client-side-code",children:"Client-side code"}),"\n",(0,o.jsxs)(n.p,{children:["Start your development server as usual by running ",(0,o.jsx)(n.code,{children:"next dev"}),", ",(0,o.jsx)(n.code,{children:"npm run dev"}),", or ",(0,o.jsx)(n.code,{children:"yarn dev"}),". Once the server starts, open ",(0,o.jsx)(n.code,{children:"http://localhost:3000"})," (or your alternate URL) in Chrome. Next, open Chrome's Developer Tools (",(0,o.jsx)("kbd",{children:"Ctrl"}),"+",(0,o.jsx)("kbd",{children:"Shift"}),"+",(0,o.jsx)("kbd",{children:"J"})," on Windows/Linux, ",(0,o.jsx)("kbd",{children:"\u2325"}),"+",(0,o.jsx)("kbd",{children:"\u2318"}),"+",(0,o.jsx)("kbd",{children:"I"})," on macOS), then go to the ",(0,o.jsx)(n.strong,{children:"Sources"})," tab."]}),"\n",(0,o.jsxs)(n.p,{children:["Now, any time your client-side code reaches a ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger",children:(0,o.jsx)(n.code,{children:"debugger"})})," statement, code execution will pause and that file will appear in the debug area. You can also press ",(0,o.jsx)("kbd",{children:"Ctrl"}),"+",(0,o.jsx)("kbd",{children:"P"})," on Windows/Linux or ",(0,o.jsx)("kbd",{children:"\u2318"}),"+",(0,o.jsx)("kbd",{children:"P"})," on macOS to search for a file and set breakpoints manually. Note that when searching here, your source files will have paths starting with ",(0,o.jsx)(n.code,{children:"webpack://_N_E/./"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"server-side-code",children:"Server-side code"}),"\n",(0,o.jsxs)(n.p,{children:["To debug server-side Next.js code with Chrome DevTools, you need to pass the ",(0,o.jsx)(n.a,{href:"https://nodejs.org/api/cli.html#cli_inspect_host_port",children:(0,o.jsx)(n.code,{children:"--inspect"})})," flag to the underlying Node.js process:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"NODE_OPTIONS='--inspect' next dev\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you're using ",(0,o.jsx)(n.code,{children:"npm run dev"})," or ",(0,o.jsx)(n.code,{children:"yarn dev"})," (see ",(0,o.jsx)(n.a,{href:"/docs/getting-started",children:"Getting Started"}),") then you should update the ",(0,o.jsx)(n.code,{children:"dev"})," script on your ",(0,o.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"dev": "NODE_OPTIONS=\'--inspect\' next dev"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Launching the Next.js dev server with the ",(0,o.jsx)(n.code,{children:"--inspect"})," flag will look something like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Debugger listening on ws://127.0.0.1:9229/0cf90313-350d-4466-a748-cd60f4e47c95\nFor help, see: https://nodejs.org/en/docs/inspector\nready - started server on 0.0.0.0:3000, url: http://localhost:3000\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Be aware that running ",(0,o.jsx)(n.code,{children:"NODE_OPTIONS='--inspect' npm run dev"})," or ",(0,o.jsx)(n.code,{children:"NODE_OPTIONS='--inspect' yarn dev"})," won't work. This would try to start multiple debuggers on the same port: one for the npm/yarn process and one for Next.js. You would then get an error like ",(0,o.jsx)(n.code,{children:"Starting inspector on 127.0.0.1:9229 failed: address already in use"})," in your console."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Once the server starts, open a new tab in Chrome and visit ",(0,o.jsx)(n.code,{children:"chrome://inspect"}),", where you should see your Next.js application inside the ",(0,o.jsx)(n.strong,{children:"Remote Target"})," section. Click ",(0,o.jsx)(n.strong,{children:"inspect"})," under your application to open a separate DevTools window, then go to the ",(0,o.jsx)(n.strong,{children:"Sources"})," tab."]}),"\n",(0,o.jsxs)(n.p,{children:["Debugging server-side code here works much like debugging client-side code with Chrome DevTools, except that when you search for files here with ",(0,o.jsx)("kbd",{children:"Ctrl"}),"+",(0,o.jsx)("kbd",{children:"P"})," or ",(0,o.jsx)("kbd",{children:"\u2318"}),"+",(0,o.jsx)("kbd",{children:"P"}),", your source files will have paths starting with ",(0,o.jsx)(n.code,{children:"webpack://{application-name}/./"})," (where ",(0,o.jsx)(n.code,{children:"{application-name}"})," will be replaced with the name of your application according to your ",(0,o.jsx)(n.code,{children:"package.json"})," file)."]}),"\n",(0,o.jsx)(n.h3,{id:"debugging-on-windows",children:"Debugging on Windows"}),"\n",(0,o.jsxs)(n.p,{children:["Windows users may run into an issue when using ",(0,o.jsx)(n.code,{children:"NODE_OPTIONS='--inspect'"})," as that syntax is not supported on Windows platforms. To get around this, install the ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/cross-env",children:(0,o.jsx)(n.code,{children:"cross-env"})})," package as a development dependency (",(0,o.jsx)(n.code,{children:"-D"})," with ",(0,o.jsx)(n.code,{children:"npm"})," and ",(0,o.jsx)(n.code,{children:"yarn"}),") and replace the ",(0,o.jsx)(n.code,{children:"dev"})," script with the following."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"dev": "cross-env NODE_OPTIONS=\'--inspect\' next dev",\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"cross-env"})," will set the ",(0,o.jsx)(n.code,{children:"NODE_OPTIONS"})," environment variable regardless of which platform you are on (including Mac, Linux, and Windows) and allow you to debug consistently across devices and operating systems."]}),"\n",(0,o.jsx)(n.h2,{id:"more-information",children:"More information"}),"\n",(0,o.jsx)(n.p,{children:"To learn more about how to use a JavaScript debugger, take a look at the following documentation:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_breakpoints",children:"Node.js debugging in VS Code: Breakpoints"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developers.google.com/web/tools/chrome-devtools/javascript",children:"Chrome DevTools: Debug JavaScript"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>r});var o=s(7294);const t={},i=o.createContext(t);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);