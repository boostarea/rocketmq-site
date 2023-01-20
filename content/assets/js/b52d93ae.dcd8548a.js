"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7625],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2322:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={},i="RocketMQ Dashboard",l={unversionedId:"deploymentOperations/18Dashboard",id:"version-5.0/deploymentOperations/18Dashboard",title:"RocketMQ Dashboard",description:"RocketMQ Dashboard is a tool for managing RocketMQ, providing various statistical information on events and performance of clients and applications, and supporting visualized tools to replace command line operations such as topic configuration and broker management.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/05-deploymentOperations/18Dashboard.md",sourceDirName:"05-deploymentOperations",slug:"/deploymentOperations/18Dashboard",permalink:"/docs/deploymentOperations/18Dashboard",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/05-deploymentOperations/18Dashboard.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Master-Slave automatic switchover mode deployment",permalink:"/docs/deploymentOperations/17autoswitchdeploy"},next:{title:"RocketMQ Promethus Exporter",permalink:"/docs/deploymentOperations/19Exporter"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Feature Overview",id:"feature-overview",level:3},{value:"Quick Start",id:"quick-start",level:2},{value:"1. Docker image installation",id:"1-docker-image-installation",level:3},{value:"2. Source installation",id:"2-source-installation",level:3},{value:"Tutorial",id:"tutorial",level:2},{value:"1.Create topic-Topic",id:"1create-topic-topic",level:3},{value:"2. Create consumer group-Consumer",id:"2-create-consumer-group-consumer",level:3},{value:"3. Reset consumption offset",id:"3-reset-consumption-offset",level:3},{value:"4. Expand topic queues",id:"4-expand-topic-queues",level:3},{value:"5. Expand Broker",id:"5-expand-broker",level:3},{value:"6. Send message",id:"6-send-message",level:3}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rocketmq-dashboard"},"RocketMQ Dashboard"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"RocketMQ Dashboard"))," is a tool for managing RocketMQ, providing various statistical information on events and performance of clients and applications, and supporting visualized tools to replace command line operations such as topic configuration and broker management."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("h3",{id:"feature-overview"},"Feature Overview"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Dashboard"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OPS"),(0,r.kt)("td",{parentName:"tr",align:null},"Modify nameserver address; use ",(0,r.kt)("inlineCode",{parentName:"td"},"VIPChannel"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"Check broker, topic message volume")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cluster"),(0,r.kt)("td",{parentName:"tr",align:null},"Cluster distribution, broker configuration, runtime information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Topic"),(0,r.kt)("td",{parentName:"tr",align:null},"Search, filter, delete, update/add topics, message routing, send messages, reset consumption points")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Consumer"),(0,r.kt)("td",{parentName:"tr",align:null},"Search, delete, add/update consumer groups, terminals, consumption details, configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message"),(0,r.kt)("td",{parentName:"tr",align:null},"Message records, private messages, message trace, etc. message details")))),(0,r.kt)("p",null,"Operation panel\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1657630174311",src:a(31486).Z,width:"2556",height:"934"})),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"System requirements\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Linux/Unix/Mac"),(0,r.kt)("li",{parentName:"ol"},"64bit JDK 1.8+"),(0,r.kt)("li",{parentName:"ol"},"Maven 3.2.x"),(0,r.kt)("li",{parentName:"ol"},"Start ",(0,r.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quick-start/"},"RocketMQ")," ")),(0,r.kt)("p",null,"Network configuration\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The cloud server can be accessed remotely or the local virtual machine can PING the external network"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"rocketmq")," configuration file ",(0,r.kt)("inlineCode",{parentName:"li"},"broker.conf / broker-x.properties")," set nameserver's address and port."),(0,r.kt)("li",{parentName:"ol"},"Start the broker with the configuration file")),(0,r.kt)("h3",{id:"1-docker-image-installation"},"1. Docker image installation"),(0,r.kt)("p",null,"\u2460 Install docker and pull the rocketmq-dashboard image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull apacherocketmq/rocketmq-dashboard:latest\n")),(0,r.kt)("p",null,"\u2461 Run in a docker container ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-dashboard")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'docker run -d --name rocketmq-dashboard -e "JAVA_OPTS=-Drocketmq.namesrv.addr=127.0.0.1:9876" -p 8080:8080 -t apacherocketmq/rocketmq-dashboard:latest\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Replace namesrv.addr:port with the nameserver address and port configured in rocketmq"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Open port numbers: 8080, 9876, 10911, 11011")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Cloud server: Set security group access rules"),(0,r.kt)("li",{parentName:"ul"},"Local virtual machine: Turn off firewall, or -add-port"))),(0,r.kt)("h3",{id:"2-source-installation"},"2. Source installation"),(0,r.kt)("p",null,"Source address\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-dashboard"},"apache/rocketmq-dashboard")," "),(0,r.kt)("p",null,"Download it, unzip it, and navigate to the source directory ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-dashboard-master/")),(0,r.kt)("p",null,"\u2460 Compile ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-dashboard")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mvn clean package -Dmaven.test.skip=true\n")),(0,r.kt)("p",null,"\u2461 Run ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-dashboard")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"java -jar target/rocketmq-dashboard-1.0.1-SNAPSHOT.jar\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Started App in x.xxx seconds (JVM running for x.xxx)")," \uff0cIndicates successful startup.")),(0,r.kt)("p",null,"Browser page access\uff1anamesrv.addr:8080"),(0,r.kt)("p",null,"Close ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-dashboard")," : ctrl + c"),(0,r.kt)("p",null,"Restart\uff1aexecution \u2461"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"tips"),"\uff1aThe downloaded source code needs to be uploaded to the Linux system for compilation, and local compilation may return errors"),(0,r.kt)("h2",{id:"tutorial"},"Tutorial"),(0,r.kt)("h3",{id:"1create-topic-topic"},"1.Create topic-Topic"),(0,r.kt)("p",null,"Topic ",(0,r.kt)("inlineCode",{parentName:"p"},">")," ADD/UPDATE"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1657547091545",src:a(93373).Z,width:"2208",height:"846"})),(0,r.kt)("h3",{id:"2-create-consumer-group-consumer"},"2. Create consumer group-Consumer"),(0,r.kt)("p",null,"Consumer ",(0,r.kt)("inlineCode",{parentName:"p"},">")," ADD/UPDATE"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1657547745254",src:a(27602).Z,width:"2193",height:"1020"})),(0,r.kt)("h3",{id:"3-reset-consumption-offset"},"3. Reset consumption offset"),(0,r.kt)("p",null,"Topic ",(0,r.kt)("inlineCode",{parentName:"p"},">")," REST CONSUMER OFFSET"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1657547891994",src:a(72736).Z,width:"2204",height:"564"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Cluster consumption supports resetting consumption offsets, but broadcast mode does not."),(0,r.kt)("li",{parentName:"ul"},"If a consumer is not online, it is not possible to reset the consumption offset."))),(0,r.kt)("h3",{id:"4-expand-topic-queues"},"4. Expand topic queues"),(0,r.kt)("p",null,"Topic ",(0,r.kt)("inlineCode",{parentName:"p"},">")," TOPIC CONFIG"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1657548375401",src:a(41259).Z,width:"2236",height:"793"})),(0,r.kt)("h3",{id:"5-expand-broker"},"5. Expand Broker"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To install and deploy a new broker with the same nameserver address as the current cluster"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"1657549432610",src:a(55165).Z,width:"3828",height:"550"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To update the ",(0,r.kt)("inlineCode",{parentName:"p"},"BROKER_NAME")," of topic"),(0,r.kt)("p",{parentName:"li"},"Topic ",(0,r.kt)("inlineCode",{parentName:"p"},">")," ADD/UPDATE ",(0,r.kt)("inlineCode",{parentName:"p"},">")," BROKER_NAME"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1657549599728",src:a(73018).Z,width:"3067",height:"754"})),(0,r.kt)("h3",{id:"6-send-message"},"6. Send message"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To send a message to a specific topic"),(0,r.kt)("p",{parentName:"li"},"Topic ",(0,r.kt)("inlineCode",{parentName:"p"},">")," SEND MESSAGE"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"1657550506673",src:a(29892).Z,width:"3333",height:"1446"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Send result"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"1657550592049",src:a(36035).Z,width:"3336",height:"1111"})))))}c.isMDXComponent=!0},31486:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1_dashboard-b20f8e9d3aeddbbf6820034c6eac7c31.png"},93373:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2_createTopic-69ff3f87c23f95124e875ec73bf85b08.png"},27602:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/3_createConsumer-cd5dfb10e6e993bf7deaea31f9a30548.png"},72736:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/4_resetOffset-d8f1ba3eab460f7bcce5058e4363c4ab.png"},41259:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/5_enlargeTopic-60b15fc11e9d39631d7b9fe0b678b6cc.png"},55165:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/6_cluster-4f5dd8b7657815fb15e5b9dad561c9a2.png"},73018:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/7_enlargeBroker-32c0818aad2302d84c9d423ef9201d64.png"},29892:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/8_sendMessage-888a2cb2da8869ba6bdfc4333f0ca443.png"},36035:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/9_sendResult-fb7347023b19e760f663664daba3f5c6.png"}}]);