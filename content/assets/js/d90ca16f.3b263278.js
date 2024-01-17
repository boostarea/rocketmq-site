"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[1854],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>g});var n=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(s),d=a,g=l["".concat(c,".").concat(d)]||l[d]||m[d]||r;return s?n.createElement(g,o(o({ref:t},p),{},{components:s})):n.createElement(g,o({ref:t},p))}));function g(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,o=new Array(r);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<r;u++)o[u]=s[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,s)}d.displayName="MDXCreateElement"},94328:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=s(87462),a=(s(67294),s(3905));const r={},o="Concepts",i={unversionedId:"introduction/02concepts",id:"version-5.0/introduction/02concepts",title:"Concepts",description:"This section describes the core concepts of Apache RocketMQ.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/01-introduction/02concepts.md",sourceDirName:"01-introduction",slug:"/introduction/02concepts",permalink:"/docs/introduction/02concepts",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/01-introduction/02concepts.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Why choose RocketMQ",permalink:"/docs/"},next:{title:"Parameter Constraints and Suggestions",permalink:"/docs/introduction/03limits"}},c={},u=[{value:"Topic",id:"topic",level:2},{value:"MessageType",id:"messagetype",level:2},{value:"MessageQueue",id:"messagequeue",level:2},{value:"Message",id:"message",level:2},{value:"MessageView",id:"messageview",level:2},{value:"MessageTag",id:"messagetag",level:2},{value:"MessageOffset",id:"messageoffset",level:2},{value:"ConsumerOffset",id:"consumeroffset",level:2},{value:"MessageKey",id:"messagekey",level:2},{value:"Producer",id:"producer",level:2},{value:"TransactionChecker",id:"transactionchecker",level:2},{value:"ConsumerGroup",id:"consumergroup",level:2},{value:"Consumer",id:"consumer",level:2},{value:"Subscription",id:"subscription",level:2}],p={toc:u},l="wrapper";function m(e){let{components:t,...s}=e;return(0,a.kt)(l,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"concepts"},"Concepts"),(0,a.kt)("p",null,"This section describes the core concepts of Apache RocketMQ."),(0,a.kt)("h2",{id:"topic"},"Topic"),(0,a.kt)("p",null,"A topic is a top-level container that is used in Apache RocketMQ to transfer and store messages that belong to the same business logic.Learn more ",(0,a.kt)("a",{parentName:"p",href:"/docs/domainModel/02topic"},"Topic"),"."),(0,a.kt)("h2",{id:"messagetype"},"MessageType"),(0,a.kt)("p",null,"Categories defined by message transfer characteristics for type management and security verification. Apache RocketMQ support NORMAL,FIFO,TRANSACTION and DELAY message type."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Starting from version 5.0, Apache RocketMQ supports enforcing the validation of message types, that is, each topic only allows messages of a single type to be sent. This can better facilitate operation and management of production systems and avoid confusion. However, to ensure backward compatibility with version 4.x, the validation feature is enable by default.")),(0,a.kt)("h2",{id:"messagequeue"},"MessageQueue"),(0,a.kt)("p",null,"MessageQueue is a container that is used to store and transmit messages in Apache RocketMQ. MessageQueue is the smallest unit of storage for Apache RocketMQ messages. Learn more ",(0,a.kt)("a",{parentName:"p",href:"/docs/domainModel/03messagequeue"},"MessageQueue"),"."),(0,a.kt)("h2",{id:"message"},"Message"),(0,a.kt)("p",null,"A message is the smallest unit of data transmission in Apache RocketMQ. A producer encapsulates the load and extended attributes of business data into messages and sends the messages to a Apache RocketMQ broker. Then, the broker delivers the messages to the consumer based on the relevant semantics. Learn more",(0,a.kt)("a",{parentName:"p",href:"/docs/domainModel/04message"},"Message"),"."),(0,a.kt)("h2",{id:"messageview"},"MessageView"),(0,a.kt)("p",null,"MessageView is read-only interface to message from a development perspective. The message view allows you to read multiple properties and payload information inside a message, but you cannot make any changes to the message itself."),(0,a.kt)("h2",{id:"messagetag"},"MessageTag"),(0,a.kt)("p",null,"MessageTag is a fine-grained message classification property that allows message to be subdivided below the topic level. Consumers implement message filtering by subscribing to specific tags. Learn more ",(0,a.kt)("a",{parentName:"p",href:"/docs/featureBehavior/07messagefilter"},"MessageFilter"),"."),(0,a.kt)("h2",{id:"messageoffset"},"MessageOffset"),(0,a.kt)("p",null,"Messages are stored in the queue in order of precedence, each message has a unique coordinate of type Long in the queue, which is defined as the message site. Learn more ",(0,a.kt)("a",{parentName:"p",href:"/docs/featureBehavior/09consumerprogress"},"Consumer progress management"),"\u3002"),(0,a.kt)("h2",{id:"consumeroffset"},"ConsumerOffset"),(0,a.kt)("p",null,"A message is not removed from the queue immediately after it has been consumed by a consumer, Apache RocketMQ will record the last consumed message based on each consumer group. Learn more ",(0,a.kt)("a",{parentName:"p",href:"/docs/featureBehavior/09consumerprogress"},"Consumer progress management"),"."),(0,a.kt)("h2",{id:"messagekey"},"MessageKey"),(0,a.kt)("p",null,"MessageKey is The message-oriented index property. By setting the message index, you can quickly find the corresponding message content."),(0,a.kt)("h2",{id:"producer"},"Producer"),(0,a.kt)("p",null,"A producer in Apache RocketMQ is a functional messaging entity that creates messages and sends them to the server. A producer is typically integrated on the business system and serves to encapsulate data as messages in Apache RocketMQ and send the messages to the server. Learn more ",(0,a.kt)("a",{parentName:"p",href:"/docs/domainModel/04producer"},"Producer"),"\u3002"),(0,a.kt)("h2",{id:"transactionchecker"},"TransactionChecker"),(0,a.kt)("p",null,"Apache RocketMQ uses a transaction messaging mechanism that requires a producer to implement a transaction checker to ensure eventual consistency of transactions. Learn more",(0,a.kt)("a",{parentName:"p",href:"/docs/featureBehavior/04transactionmessage"},"Transaction Message"),"\u3002"),(0,a.kt)("h2",{id:"consumergroup"},"ConsumerGroup"),(0,a.kt)("p",null,"A consumer group is a load balancing group that contains consumers that use the same consumption behaviors in Apache RocketMQ. Learn more ",(0,a.kt)("a",{parentName:"p",href:"/docs/domainModel/07consumergroup"},"ConsumerGroup"),"\u3002"),(0,a.kt)("h2",{id:"consumer"},"Consumer"),(0,a.kt)("p",null,"A consumer is an entity that receives and processes messages in Apache RocketMQ. Consumers are usually integrated in business systems. They obtain messages from Apache RocketMQ brokers and convert the messages into information that can be perceived and processed by business logic. Learn more ",(0,a.kt)("a",{parentName:"p",href:"/docs/domainModel/08consumer"},"Consumer"),"\u3002"),(0,a.kt)("h2",{id:"subscription"},"Subscription"),(0,a.kt)("p",null,"A subscription is the rule and status settings for consumers to obtain and process messages in Apache RocketMQ. Subscriptions are dynamically registered by consumer groups with brokers. Messages are then matched and consumed based on the filter rules defined by subscriptions. Learn more ",(0,a.kt)("a",{parentName:"p",href:"/docs/domainModel/09subscription"},"Subscription"),"\u3002"))}m.isMDXComponent=!0}}]);