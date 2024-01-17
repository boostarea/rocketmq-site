"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[9477],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=c(a),s=r,d=k["".concat(i,".").concat(s)]||k[s]||u[s]||l;return a?n.createElement(d,p(p({ref:t},m),{},{components:a})):n.createElement(d,p({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[k]="string"==typeof e?e:r,p[1]=o;for(var c=2;c<l;c++)p[c]=a[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},78267:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={},p="\u4e3b\u9898\uff08Topic\uff09",o={unversionedId:"domainModel/02topic",id:"version-5.0/domainModel/02topic",title:"\u4e3b\u9898\uff08Topic\uff09",description:"\u672c\u6587\u4ecb\u7ecd Apache RocketMQ \u4e2d\u4e3b\u9898\uff08Topic\uff09\u7684\u5b9a\u4e49\u3001\u6a21\u578b\u5173\u7cfb\u3001\u5185\u90e8\u5c5e\u6027\u3001\u884c\u4e3a\u7ea6\u675f\u3001\u7248\u672c\u517c\u5bb9\u6027\u53ca\u4f7f\u7528\u5efa\u8bae\u3002",source:"@site/versioned_docs/version-5.0/03-domainModel/02topic.md",sourceDirName:"03-domainModel",slug:"/domainModel/02topic",permalink:"/zh/docs/domainModel/02topic",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/03-domainModel/02topic.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u9886\u57df\u6a21\u578b\u6982\u8ff0",permalink:"/zh/docs/domainModel/01main"},next:{title:"\u961f\u5217\uff08MessageQueue\uff09",permalink:"/zh/docs/domainModel/03messagequeue"}},i={},c=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u6a21\u578b\u5173\u7cfb",id:"\u6a21\u578b\u5173\u7cfb",level:2},{value:"\u5185\u90e8\u5c5e\u6027",id:"\u5185\u90e8\u5c5e\u6027",level:2},{value:"\u884c\u4e3a\u7ea6\u675f",id:"\u884c\u4e3a\u7ea6\u675f",level:2},{value:"\u7248\u672c\u517c\u5bb9\u6027",id:"\u7248\u672c\u517c\u5bb9\u6027",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u4f7f\u7528\u5efa\u8bae",id:"\u4f7f\u7528\u5efa\u8bae",level:2}],m={toc:c},k="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(k,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4e3b\u9898topic"},"\u4e3b\u9898\uff08Topic\uff09"),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd Apache RocketMQ \u4e2d\u4e3b\u9898\uff08Topic\uff09\u7684\u5b9a\u4e49\u3001\u6a21\u578b\u5173\u7cfb\u3001\u5185\u90e8\u5c5e\u6027\u3001\u884c\u4e3a\u7ea6\u675f\u3001\u7248\u672c\u517c\u5bb9\u6027\u53ca\u4f7f\u7528\u5efa\u8bae\u3002"),(0,r.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,r.kt)("p",null,"\u4e3b\u9898\u662f Apache RocketMQ \u4e2d\u6d88\u606f\u4f20\u8f93\u548c\u5b58\u50a8\u7684\u9876\u5c42\u5bb9\u5668\uff0c\u7528\u4e8e\u6807\u8bc6\u540c\u4e00\u7c7b\u4e1a\u52a1\u903b\u8f91\u7684\u6d88\u606f\u3002 \u4e3b\u9898\u7684\u4f5c\u7528\u4e3b\u8981\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5b9a\u4e49\u6570\u636e\u7684\u5206\u7c7b\u9694\u79bb\uff1a")," \u5728 Apache RocketMQ \u7684\u65b9\u6848\u8bbe\u8ba1\u4e2d\uff0c\u5efa\u8bae\u5c06\u4e0d\u540c\u4e1a\u52a1\u7c7b\u578b\u7684\u6570\u636e\u62c6\u5206\u5230\u4e0d\u540c\u7684\u4e3b\u9898\u4e2d\u7ba1\u7406\uff0c\u901a\u8fc7\u4e3b\u9898\u5b9e\u73b0\u5b58\u50a8\u7684\u9694\u79bb\u6027\u548c\u8ba2\u9605\u9694\u79bb\u6027\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5b9a\u4e49\u6570\u636e\u7684\u8eab\u4efd\u548c\u6743\u9650\uff1a")," Apache RocketMQ \u7684\u6d88\u606f\u672c\u8eab\u662f\u533f\u540d\u65e0\u8eab\u4efd\u7684\uff0c\u540c\u4e00\u5206\u7c7b\u7684\u6d88\u606f\u4f7f\u7528\u76f8\u540c\u7684\u4e3b\u9898\u6765\u505a\u8eab\u4efd\u8bc6\u522b\u548c\u6743\u9650\u7ba1\u7406\u3002"))),(0,r.kt)("h2",{id:"\u6a21\u578b\u5173\u7cfb"},"\u6a21\u578b\u5173\u7cfb"),(0,r.kt)("p",null,"\u5728\u6574\u4e2a Apache RocketMQ \u7684\u9886\u57df\u6a21\u578b\u4e2d\uff0c\u4e3b\u9898\u6240\u5904\u7684\u6d41\u7a0b\u548c\u4f4d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u4e3b\u9898",src:a(91885).Z,width:"2383",height:"885"})),(0,r.kt)("p",null,"\u4e3b\u9898\u662f Apache RocketMQ \u7684\u9876\u5c42\u5b58\u50a8\uff0c\u6240\u6709\u6d88\u606f\u8d44\u6e90\u7684\u5b9a\u4e49\u90fd\u5728\u4e3b\u9898\u5185\u90e8\u5b8c\u6210\uff0c\u4f46\u4e3b\u9898\u662f\u4e00\u4e2a\u903b\u8f91\u6982\u5ff5\uff0c\u5e76\u4e0d\u662f\u5b9e\u9645\u7684\u6d88\u606f\u5bb9\u5668\u3002"),(0,r.kt)("p",null,"\u4e3b\u9898\u5185\u90e8\u7531\u591a\u4e2a\u961f\u5217\u7ec4\u6210\uff0c\u6d88\u606f\u7684\u5b58\u50a8\u548c\u6c34\u5e73\u6269\u5c55\u80fd\u529b\u6700\u7ec8\u662f\u7531\u961f\u5217\u5b9e\u73b0\u7684\uff1b\u5e76\u4e14\u9488\u5bf9\u4e3b\u9898\u7684\u6240\u6709\u7ea6\u675f\u548c\u5c5e\u6027\u8bbe\u7f6e\uff0c\u6700\u7ec8\u4e5f\u662f\u901a\u8fc7\u4e3b\u9898\u5185\u90e8\u7684\u961f\u5217\u6765\u5b9e\u73b0\u3002"),(0,r.kt)("h2",{id:"\u5185\u90e8\u5c5e\u6027"},"\u5185\u90e8\u5c5e\u6027"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e3b\u9898\u540d\u79f0")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b9a\u4e49\uff1a\u4e3b\u9898\u7684\u540d\u79f0\uff0c\u7528\u4e8e\u6807\u8bc6\u4e3b\u9898\uff0c\u4e3b\u9898\u540d\u79f0\u96c6\u7fa4\u5185\u5168\u5c40\u552f\u4e00\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53d6\u503c\uff1a\u7531\u7528\u6237\u521b\u5efa\u4e3b\u9898\u65f6\u5b9a\u4e49\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7ea6\u675f\uff1a\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/introduction/03limits"},"\u53c2\u6570\u9650\u5236"),"\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u961f\u5217\u5217\u8868")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b9a\u4e49\uff1a\u961f\u5217\u4f5c\u4e3a\u4e3b\u9898\u7684\u7ec4\u6210\u5355\u5143\uff0c\u662f\u6d88\u606f\u5b58\u50a8\u7684\u5b9e\u9645\u5bb9\u5668\uff0c\u4e00\u4e2a\u4e3b\u9898\u5185\u5305\u542b\u4e00\u4e2a\u6216\u591a\u4e2a\u961f\u5217\uff0c\u6d88\u606f\u5b9e\u9645\u5b58\u50a8\u5728\u4e3b\u9898\u7684\u5404\u961f\u5217\u5185\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/domainModel/03messagequeue"},"\u961f\u5217\uff08MessageQueue\uff09"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53d6\u503c\uff1a\u7cfb\u7edf\u6839\u636e\u961f\u5217\u6570\u91cf\u7ed9\u4e3b\u9898\u5206\u914d\u961f\u5217\uff0c\u961f\u5217\u6570\u91cf\u521b\u5efa\u4e3b\u9898\u65f6\u5b9a\u4e49\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7ea6\u675f\uff1a\u4e00\u4e2a\u4e3b\u9898\u5185\u81f3\u5c11\u5305\u542b\u4e00\u4e2a\u961f\u5217\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6d88\u606f\u7c7b\u578b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b9a\u4e49\uff1a\u4e3b\u9898\u6240\u652f\u6301\u7684\u6d88\u606f\u7c7b\u578b\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53d6\u503c\uff1a\u521b\u5efa\u4e3b\u9898\u65f6\u9009\u62e9\u6d88\u606f\u7c7b\u578b\u3002Apache RocketMQ \u652f\u6301\u7684\u4e3b\u9898\u7c7b\u578b\u5982\u4e0b\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Normal\uff1a",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/featureBehavior/01normalmessage"},"\u666e\u901a\u6d88\u606f"),"\uff0c\u6d88\u606f\u672c\u8eab\u65e0\u7279\u6b8a\u8bed\u4e49\uff0c\u6d88\u606f\u4e4b\u95f4\u4e5f\u6ca1\u6709\u4efb\u4f55\u5173\u8054\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"FIFO\uff1a",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/featureBehavior/03fifomessage"},"\u987a\u5e8f\u6d88\u606f"),"\uff0cApache RocketMQ \u901a\u8fc7\u6d88\u606f\u5206\u7ec4MessageGroup\u6807\u8bb0\u4e00\u7ec4\u7279\u5b9a\u6d88\u606f\u7684\u5148\u540e\u987a\u5e8f\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u6d88\u606f\u7684\u6295\u9012\u987a\u5e8f\u4e25\u683c\u6309\u7167\u6d88\u606f\u53d1\u9001\u65f6\u7684\u987a\u5e8f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Delay\uff1a",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/featureBehavior/02delaymessage"},"\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f"),"\uff0c\u901a\u8fc7\u6307\u5b9a\u5ef6\u65f6\u65f6\u95f4\u63a7\u5236\u6d88\u606f\u751f\u4ea7\u540e\u4e0d\u8981\u7acb\u5373\u6295\u9012\uff0c\u800c\u662f\u5728\u5ef6\u65f6\u95f4\u9694\u540e\u624d\u5bf9\u6d88\u8d39\u8005\u53ef\u89c1\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Transaction\uff1a",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/featureBehavior/04transactionmessage"},"\u4e8b\u52a1\u6d88\u606f"),"\uff0cApache RocketMQ \u652f\u6301\u5206\u5e03\u5f0f\u4e8b\u52a1\u6d88\u606f\uff0c\u652f\u6301\u5e94\u7528\u6570\u636e\u5e93\u66f4\u65b0\u548c\u6d88\u606f\u8c03\u7528\u7684\u4e8b\u52a1\u4e00\u81f4\u6027\u4fdd\u969c\u3002")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7ea6\u675f\uff1aApache RocketMQ \u4ece5.0\u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301\u5f3a\u5236\u6821\u9a8c\u6d88\u606f\u7c7b\u578b\uff0c\u5373\u6bcf\u4e2a\u4e3b\u9898\u53ea\u5141\u8bb8\u53d1\u9001\u4e00\u79cd\u6d88\u606f\u7c7b\u578b\u7684\u6d88\u606f\uff0c\u8fd9\u6837\u53ef\u4ee5\u66f4\u597d\u7684\u8fd0\u7ef4\u548c\u7ba1\u7406\u751f\u4ea7\u7cfb\u7edf\uff0c\u907f\u514d\u6df7\u4e71\u3002\u4e3a\u4fdd\u8bc1\u5411\u4e0b\u517c\u5bb94.x\u7248\u672c\u884c\u4e3a\uff0c\u5f3a\u5236\u6821\u9a8c\u529f\u80fd\u9ed8\u8ba4\u5f00\u542f\u3002"))),(0,r.kt)("h2",{id:"\u884c\u4e3a\u7ea6\u675f"},"\u884c\u4e3a\u7ea6\u675f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6d88\u606f\u7c7b\u578b\u5f3a\u5236\u6821\u9a8c")),(0,r.kt)("p",null,"Apache RocketMQ 5.x\u7248\u672c\u652f\u6301\u5c06\u6d88\u606f\u7c7b\u578b\u62c6\u5206\u5230\u4e3b\u9898\u4e2d\u8fdb\u884c\u72ec\u7acb\u8fd0\u7ef4\u548c\u5904\u7406\uff0c\u56e0\u6b64\u7cfb\u7edf\u4f1a\u5bf9\u53d1\u9001\u7684\u6d88\u606f\u7c7b\u578b\u548c\u4e3b\u9898\u5b9a\u7684\u6d88\u606f\u7c7b\u578b\u8fdb\u884c\u5f3a\u5236\u6821\u9a8c\uff0c\u82e5\u6821\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u6d88\u606f\u53d1\u9001\u8bf7\u6c42\u4f1a\u88ab\u62d2\u7edd\uff0c\u5e76\u8fd4\u56de\u7c7b\u578b\u4e0d\u5339\u914d\u5f02\u5e38\u3002\u6821\u9a8c\u539f\u5219\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d88\u606f\u7c7b\u578b\u5fc5\u987b\u4e00\u81f4\uff1a\u53d1\u9001\u7684\u6d88\u606f\u7684\u7c7b\u578b\uff0c\u5fc5\u987b\u548c\u76ee\u6807\u4e3b\u9898\u5b9a\u4e49\u7684\u6d88\u606f\u7c7b\u578b\u4e00\u81f4\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e3b\u9898\u7c7b\u578b\u5fc5\u987b\u5355\u4e00\uff1a\u6bcf\u4e2a\u4e3b\u9898\u53ea\u652f\u6301\u4e00\u79cd\u6d88\u606f\u7c7b\u578b\uff0c\u4e0d\u5141\u8bb8\u5c06\u591a\u79cd\u7c7b\u578b\u7684\u6d88\u606f\u53d1\u9001\u5230\u540c\u4e00\u4e2a\u4e3b\u9898\u4e2d\u3002"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4e3a\u4fdd\u8bc1\u5411\u4e0b\u517c\u5bb94.x\u7248\u672c\u884c\u4e3a\uff0c\u4e0a\u8ff0\u5f3a\u5236\u6821\u9a8c\u529f\u80fd\u9ed8\u8ba4\u5f00\u542f\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5e38\u89c1\u9519\u8bef\u4f7f\u7528\u573a\u666f")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53d1\u9001\u7684\u6d88\u606f\u7c7b\u578b\u4e0d\u5339\u914d\u4f8b\u5982\uff0c\u521b\u5efa\u4e3b\u9898\u65f6\u6d88\u606f\u7c7b\u578b\u5b9a\u4e49\u4e3a\u987a\u5e8f\u6d88\u606f\uff0c\u53d1\u9001\u6d88\u606f\u65f6\u53d1\u9001\u4e8b\u52a1\u6d88\u606f\u5230\u8be5\u4e3b\u9898\u4e2d\uff0c\u6b64\u65f6\u6d88\u606f\u53d1\u9001\u8bf7\u6c42\u4f1a\u88ab\u62d2\u7edd\uff0c\u5e76\u8fd4\u56de\u7c7b\u578b\u4e0d\u5339\u914d\u5f02\u5e38\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5355\u4e00\u6d88\u606f\u4e3b\u9898\u6df7\u7528\u4f8b\u5982\uff0c\u521b\u5efa\u4e3b\u9898\u65f6\u6d88\u606f\u7c7b\u578b\u5b9a\u4e49\u4e3a\u666e\u901a\u6d88\u606f\uff0c\u53d1\u9001\u6d88\u606f\u65f6\u540c\u65f6\u53d1\u9001\u666e\u901a\u6d88\u606f\u548c\u987a\u5e8f\u6d88\u606f\u5230\u8be5\u4e3b\u9898\u4e2d\uff0c\u5219\u987a\u5e8f\u6d88\u606f\u7684\u53d1\u9001\u8bf7\u6c42\u4f1a\u88ab\u62d2\u7edd\uff0c\u5e76\u8fd4\u56de\u7c7b\u578b\u4e0d\u5339\u914d\u5f02\u5e38\u3002"))),(0,r.kt)("h2",{id:"\u7248\u672c\u517c\u5bb9\u6027"},"\u7248\u672c\u517c\u5bb9\u6027"),(0,r.kt)("p",null,"\u6d88\u606f\u7c7b\u578b\u7684\u5f3a\u5236\u6821\u9a8c\uff0c\u4ec5 Apache RocketMQ \u670d\u52a1\u7aef5.x\u7248\u672c\u652f\u6301\uff0c\u4e14\u9ed8\u8ba4\u5f00\u542f\uff0c\u63a8\u8350\u90e8\u7f72\u65f6\u6253\u5f00\u914d\u7f6e\u3002 Apache RocketMQ \u670d\u52a1\u7aef4.x\u548c3.x\u5386\u53f2\u7248\u672c\u7684SDK\u4e0d\u652f\u6301\u5f3a\u5236\u6821\u9a8c\uff0c\u60a8\u9700\u8981\u81ea\u5df1\u4fdd\u8bc1\u6d88\u606f\u7c7b\u578b\u4e00\u81f4\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u7684\u670d\u52a1\u7aef\u7248\u672c\u4e3a\u5386\u53f2\u7248\u672c\uff0c\u5efa\u8bae\u60a8\u5347\u7ea7\u5230\nApache RocketMQ \u670d\u52a1\u7aef5.x\u7248\u672c\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,r.kt)("p",null,"Apache RocketMQ 5.0\u7248\u672c\u4e0b\u521b\u5efa\u4e3b\u9898\u64cd\u4f5c\uff0c\u63a8\u8350\u4f7f\u7528mqadmin\u5de5\u5177\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5bf9\u4e8e\u6d88\u606f\u7c7b\u578b\u9700\u8981\u901a\u8fc7\u5c5e\u6027\u53c2\u6570\u6dfb\u52a0\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sh mqadmin updateTopic -n <nameserver_address> -t <topic_name> -c <cluster_name> -a +message.type=<message_type>\n")),(0,r.kt)("p",null,"\u5176\u4e2dmessage_type\u6839\u636e\u6d88\u606f\u7c7b\u578b\u8bbe\u7f6e\u6210Normal/FIFO/Delay/Transaction\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u4e3aNormal\u7c7b\u578b\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u5efa\u8bae"},"\u4f7f\u7528\u5efa\u8bae"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6309\u7167\u4e1a\u52a1\u5206\u7c7b\u5408\u7406\u62c6\u5206\u4e3b\u9898")),(0,r.kt)("p",null,"Apache RocketMQ \u7684\u4e3b\u9898\u62c6\u5206\u8bbe\u8ba1\u5e94\u9075\u5faa\u5927\u7c7b\u7edf\u4e00\u539f\u5219\uff0c\u5373\u5c06\u76f8\u540c\u4e1a\u52a1\u57df\u5185\u540c\u4e00\u529f\u80fd\u5c5e\u6027\u7684\u6d88\u606f\u5212\u5206\u4e3a\u540c\u4e00\u4e3b\u9898\u3002\u62c6\u5206\u4e3b\u9898\u65f6\uff0c\u60a8\u53ef\u4ee5\u4ece\u4ee5\u4e0b\u89d2\u5ea6\u8003\u8651\u62c6\u5206\u7c92\u5ea6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d88\u606f\u7c7b\u578b\u662f\u5426\u4e00\u81f4\uff1a\u4e0d\u540c\u7c7b\u578b\u7684\u6d88\u606f\uff0c\u5982\u987a\u5e8f\u6d88\u606f\u548c\u666e\u901a\u6d88\u606f\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7684\u4e3b\u9898\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d88\u606f\u4e1a\u52a1\u662f\u5426\u5173\u8054\uff1a\u5982\u679c\u4e1a\u52a1\u6ca1\u6709\u76f4\u63a5\u5173\u8054\uff0c\u6bd4\u5982\uff0c\u6dd8\u5b9d\u4ea4\u6613\u6d88\u606f\u548c\u76d2\u9a6c\u7269\u6d41\u6d88\u606f\u6ca1\u6709\u4e1a\u52a1\u4ea4\u96c6\uff0c\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7684\u6d88\u606f\u4e3b\u9898\uff1b\u540c\u6837\u662f\u6dd8\u5b9d\u4ea4\u6613\u6d88\u606f\uff0c\u5973\u88c5\u7c7b\u8ba2\u5355\u548c\u7537\u88c5\u7c7b\u8ba2\u5355\u53ef\u4ee5\u4f7f\u7528\u540c\u4e00\u4e2a\u8ba2\u5355\u3002\u5f53\u7136\uff0c\u5982\u679c\u4e1a\u52a1\u91cf\u8f83\u5927\u6216\u5176\u4ed6\u5b50\u6a21\u5757\u5e94\u7528\u5904\u7406\u4e1a\u52a1\u65f6\u9700\u8981\u8fdb\u4e00\u6b65\u62c6\u5206\u8ba2\u5355\u7c7b\u578b\uff0c\u60a8\u4e5f\u53ef\u4ee5\u5c06\u7537\u88c5\u8ba2\u5355\u548c\u5973\u88c5\u8ba2\u5355\u7684\u6d88\u606f\u62c6\u5206\u5230\u4e24\u4e2a\u4e3b\u9898\u4e2d\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d88\u606f\u91cf\u7ea7\u662f\u5426\u4e00\u6837\uff1a\u6570\u91cf\u7ea7\u4e0d\u540c\u6216\u65f6\u6548\u6027\u4e0d\u540c\u7684\u4e1a\u52a1\u6d88\u606f\u5efa\u8bae\u4f7f\u7528\u4e0d\u540c\u7684\u4e3b\u9898\uff0c\u4f8b\u5982\u67d0\u4e9b\u4e1a\u52a1\u6d88\u606f\u91cf\u5f88\u5c0f\u4f46\u662f\u65f6\u6548\u6027\u8981\u6c42\u5f88\u5f3a\uff0c\u5982\u679c\u8ddf\u67d0\u4e9b\u4e07\u4ebf\u7ea7\u6d88\u606f\u91cf\u7684\u4e1a\u52a1\u4f7f\u7528\u540c\u4e00\u4e2a\u4e3b\u9898\uff0c\u4f1a\u589e\u52a0\u6d88\u606f\u7684\u7b49\u5f85\u65f6\u957f\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6b63\u786e\u62c6\u5206\u793a\u4f8b\uff1a")," \u7ebf\u4e0a\u5546\u54c1\u8d2d\u4e70\u573a\u666f\u4e0b\uff0c\u8ba2\u5355\u4ea4\u6613\u5982\u8ba2\u5355\u521b\u5efa\u3001\u652f\u4ed8\u3001\u53d6\u6d88\u7b49\u6d41\u7a0b\u6d88\u606f\u4f7f\u7528\u4e00\u4e2a\u4e3b\u9898\uff0c\u7269\u6d41\u76f8\u5173\u6d88\u606f\u4f7f\u7528\u4e00\u4e2a\u4e3b\u9898\uff0c\u79ef\u5206\u7ba1\u7406\u76f8\u5173\u6d88\u606f\u4f7f\u7528\u4e00\u4e2a\u4e3b\u9898\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9519\u8bef\u62c6\u5206\u793a\u4f8b\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u62c6\u5206\u7c92\u5ea6\u8fc7\u7c97\uff1a\u4f1a\u5bfc\u81f4\u4e1a\u52a1\u9694\u79bb\u6027\u5dee\uff0c\u4e0d\u5229\u4e8e\u72ec\u7acb\u8fd0\u7ef4\u548c\u6545\u969c\u5904\u7406\u3002\u4f8b\u5982\uff0c\u6240\u6709\u4ea4\u6613\u6d88\u606f\u548c\u7269\u6d41\u6d88\u606f\u90fd\u5171\u7528\u4e00\u4e2a\u4e3b\u9898\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u62c6\u5206\u7c92\u5ea6\u8fc7\u7ec6\uff1a\u4f1a\u6d88\u8017\u5927\u91cf\u4e3b\u9898\u8d44\u6e90\uff0c\u9020\u6210\u7cfb\u7edf\u8d1f\u8f7d\u8fc7\u91cd\u3002\u4f8b\u5982\uff0c\u6309\u7167\u7528\u6237ID\u533a\u5206\uff0c\u6bcf\u4e2a\u7528\u6237ID\u4f7f\u7528\u4e00\u4e2a\u4e3b\u9898\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5355\u4e00\u4e3b\u9898\u53ea\u6536\u53d1\u4e00\u79cd\u7c7b\u578b\u6d88\u606f\uff0c\u907f\u514d\u6df7\u7528")),(0,r.kt)("p",null,"Apache RocketMQ \u4e3b\u9898\u7684\u8bbe\u8ba1\u539f\u5219\u4e3a\u901a\u8fc7\u4e3b\u9898\u9694\u79bb\u4e1a\u52a1\uff0c\u4e0d\u540c\u4e1a\u52a1\u903b\u8f91\u7684\u6d88\u606f\u5efa\u8bae\u4f7f\u7528\u4e0d\u540c\u7684\u4e3b\u9898\u3002\u540c\u4e00\u4e1a\u52a1\u903b\u8f91\u6d88\u606f\u7684\u7c7b\u578b\u90fd\u76f8\u540c\uff0c\u56e0\u6b64\uff0c\u5bf9\u4e8e\u6307\u5b9a\u4e3b\u9898\uff0c\u5e94\u8be5\u53ea\u6536\u53d1\u540c\u4e00\u79cd\u7c7b\u578b\u7684\u6d88\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e3b\u9898\u7ba1\u7406\u5c3d\u91cf\u907f\u514d\u81ea\u52a8\u5316\u673a\u5236")),(0,r.kt)("p",null,"\u5728 Apache RocketMQ \u67b6\u6784\u4e2d\uff0c\u4e3b\u9898\u5c5e\u4e8e\u9876\u5c42\u8d44\u6e90\u548c\u5bb9\u5668\uff0c\u62e5\u6709\u72ec\u7acb\u7684\u6743\u9650\u7ba1\u7406\u3001\u53ef\u89c2\u6d4b\u6027\u6307\u6807\u91c7\u96c6\u548c\u76d1\u63a7\u7b49\u80fd\u529b\uff0c\u521b\u5efa\u548c\u7ba1\u7406\u4e3b\u9898\u4f1a\u5360\u7528\u4e00\u5b9a\u7684\u7cfb\u7edf\u8d44\u6e90\u3002\u56e0\u6b64\uff0c\u751f\u4ea7\u73af\u5883\u9700\u8981\u4e25\u683c\u7ba1\u7406\u4e3b\u9898\u8d44\u6e90\uff0c\u8bf7\u52ff\u968f\u610f\u8fdb\u884c\u589e\u3001\u5220\u3001\u6539\u3001\u67e5\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"Apache RocketMQ \u867d\u7136\u63d0\u4f9b\u4e86\u81ea\u52a8\u521b\u5efa\u4e3b\u9898\u7684\u529f\u80fd\uff0c\u4f46\u662f\u5efa\u8bae\u4ec5\u5728\u6d4b\u8bd5\u73af\u5883\u4f7f\u7528\uff0c\u751f\u4ea7\u73af\u5883\u8bf7\u52ff\u6253\u5f00\uff0c\u907f\u514d\u4ea7\u751f\u5927\u91cf\u5783\u573e\u4e3b\u9898\uff0c\u65e0\u6cd5\u7ba1\u7406\u548c\u56de\u6536\u5e76\u6d6a\u8d39\u7cfb\u7edf\u8d44\u6e90\u3002"))}u.isMDXComponent=!0},91885:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/archifortopic-ef512066703a22865613ea9216c4c300.png"}}]);