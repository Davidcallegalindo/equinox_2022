(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{251:function(n,e){},260:function(n,e){},278:function(n,e){},280:function(n,e){},299:function(n,e){},300:function(n,e){},363:function(n,e){},365:function(n,e){},398:function(n,e){},400:function(n,e){},401:function(n,e){},406:function(n,e){},408:function(n,e){},414:function(n,e){},416:function(n,e){},429:function(n,e){},441:function(n,e){},444:function(n,e){},449:function(n,e){},457:function(n,e){},466:function(n,e){},468:function(n,e){},547:function(n,e,t){},548:function(n,e,t){"use strict";t.r(e);var a,c,r,o,i,s,l,d,u,p,x,b,j,h,g,f,O=t(1),m=t(69),C=t.n(m),y=t(16),v=t.n(y),A=t(43),w=t(59),S=t(14),E=t(58),T=t(70),N=t.n(T),_=t(225),k=t.n(_),M=t(71),I=t(226),D=t(19),R={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},L=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(D.a)(Object(D.a)({},R),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(D.a)(Object(D.a)({},n),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(D.a)(Object(D.a)({},R),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(D.a)(Object(D.a)({},n),{},{account:e.payload.account});default:return n}},F={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},P=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(D.a)(Object(D.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(D.a)(Object(D.a)({},n),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(D.a)(Object(D.a)({},F),{},{loading:!1,error:!0,errorMsg:e.payload});default:return n}},K=Object(M.b)({blockchain:L,data:P}),U=[I.a],z=Object(M.c)(M.a.apply(void 0,U)),Y=Object(M.d)(K,z),G=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},H=function(){return function(){var n=Object(A.a)(v.a.mark((function n(e){var t;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,Y.getState().blockchain.smartContract.methods.totalSupply().call();case 4:t=n.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:t}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),e(G("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},W=function(n){return{type:"CONNECTION_FAILED",payload:n}},B=function(n){return function(){var e=Object(A.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:n}}),t(H());case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},J=t(15),q=J.a.div(a||(a=Object(S.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),Q=J.a.div(c||(c=Object(S.a)(["\n  height: 8px;\n  width: 8px;\n"]))),X=J.a.div(r||(r=Object(S.a)(["\n  height: 16px;\n  width: 16px;\n"]))),Z=J.a.div(o||(o=Object(S.a)(["\n  height: 24px;\n  width: 24px;\n"]))),V=J.a.div(i||(i=Object(S.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=J.a.div(s||(s=Object(S.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var e=n.flex;return e||0}),(function(n){var e=n.fd;return e||"column"}),(function(n){var e=n.jc;return e||"flex-start"}),(function(n){var e=n.ai;return e||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),nn=J.a.p(l||(l=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),en=(J.a.p(d||(d=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),J.a.p(u||(u=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),tn=(J.a.div(p||(p=Object(S.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),t(230)),an=t.n(tn),cn=t(3),rn=J.a.button(x||(x=Object(S.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),on=(J.a.button(b||(b=Object(S.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),J.a.div(j||(j=Object(S.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"])))),sn=J.a.img(h||(h=Object(S.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),ln=J.a.img(g||(g=Object(S.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),dn=J.a.a(f||(f=Object(S.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"]))),un={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};var pn=function(){var n,e,t=Object(E.b)(),a=Object(E.c)((function(n){return n.blockchain})),c=Object(E.c)((function(n){return n.data})),r=Object(O.useState)(!1),o=Object(w.a)(r,2),i=o[0],s=o[1],l=Object(O.useState)("Pide un NFT para el juego"),d=Object(w.a)(l,2),u=d[0],p=d[1],x=Object(O.useState)(1),b=Object(w.a)(x,2),j=b[0],h=(b[1],Object(O.useState)(!1)),g=Object(w.a)(h,2),f=g[0],m=g[1],C=Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),y=Object(w.a)(C,2),S=y[0],T=y[1],_=function(){""!==a.account&&null!==a.smartContract&&t(H(a.account))},M=function(){var n=Object(A.a)(v.a.mark((function n(){var e,t;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,T(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(O.useEffect)((function(){M()}),[]),Object(O.useEffect)((function(){_()}),[a.account]),Object(cn.jsx)(q,{children:Object(cn.jsxs)($,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:S.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(cn.jsx)(sn,{alt:"logo",src:"/config/images/logo.png"}),Object(cn.jsx)(X,{}),Object(cn.jsxs)(on,{flex:1,style:{padding:24},test:!0,children:[Object(cn.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(cn.jsx)(ln,{alt:"example",src:"/config/images/example.gif"})}),Object(cn.jsx)(V,{}),Object(cn.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(cn.jsxs)(nn,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[c.totalSupply," / ",S.MAX_SUPPLY]}),Object(cn.jsx)(en,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(cn.jsx)(dn,{target:"_blank",href:S.SCAN_LINK,children:(n=S.CONTRACT_ADDRESS,e=15,n.length>e?"".concat(n.substring(0,e),"..."):n)})}),Object(cn.jsx)(X,{}),Number(c.totalSupply)>=S.MAX_SUPPLY?Object(cn.jsxs)(cn.Fragment,{children:[Object(cn.jsx)(nn,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(cn.jsxs)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",S.NFT_NAME," on"]}),Object(cn.jsx)(X,{}),Object(cn.jsx)(dn,{target:"_blank",href:S.MARKETPLACE_LINK,children:S.MARKETPLACE})]}):Object(cn.jsxs)(cn.Fragment,{children:[Object(cn.jsxs)(nn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",S.SYMBOL," cuesta ",S.DISPLAY_COST," ",S.NETWORK.SYMBOL,"."]}),Object(cn.jsx)(Q,{}),Object(cn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:"(hay que tener algo de MATICS en la red Mumbai, para pedir dinero se puede usar:"}),Object(cn.jsx)(dn,{href:"https://mumbaifaucet.com",children:"https://mumbaifaucet.com"}),Object(cn.jsx)(X,{}),""===a.account||null===a.smartContract?Object(cn.jsxs)($,{ai:"center",jc:"center",children:[Object(cn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Conectar a la blockchain Mumbai"}),Object(cn.jsx)(X,{}),Object(cn.jsx)(rn,{onClick:function(n){n.preventDefault(),t(function(){var n=Object(A.a)(v.a.mark((function n(e){var t,a,c,r,o,i,s,l,d;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=n.sent,n.next=6,t.json();case 6:return a=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return c=n.sent,n.next=12,c.json();case 12:if(r=n.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){n.next=33;break}return N.a.setProvider(i),s=new k.a(i),n.prev=18,n.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,i.request({method:"net_version"});case 24:n.sent==r.NETWORK.ID?(d=new N.a(a,r.CONTRACT_ADDRESS),e({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(n){e(B(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):e(W("Change network to ".concat(r.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),e(W("Something went wrong."));case 31:n.next=34;break;case 33:e(W("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(e){return n.apply(this,arguments)}}()),_()},children:"CONECTAR"}),""!==a.errorMsg?Object(cn.jsxs)(cn.Fragment,{children:[Object(cn.jsx)(X,{}),Object(cn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:a.errorMsg})]}):null]}):Object(cn.jsxs)(cn.Fragment,{children:[Object(cn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:u}),Object(cn.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(cn.jsx)(Z,{})}),Object(cn.jsx)(X,{}),Object(cn.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(cn.jsx)(rn,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=S.WEI_COST,e=S.GAS_LIMIT,c=String(n*j),r=String(e*j);console.log("Cost: ",c),console.log("Gas limit: ",r),p("Minting your ".concat(S.NFT_NAME,"...")),s(!0),a.smartContract.methods.mint().send({gasLimit:String(r),to:S.CONTRACT_ADDRESS,from:a.account,value:c}).once("error",(function(n){console.log(n),p("Algo ha fallado, intenta de nuevo."),s(!1),m(!1)})).then((function(n){console.log(n),p("Ya tienes tu NFT de Sepia preparado para jugar!!!!"),s(!1),m(!0),t(H(a.account))}))}(),_()},children:i?"MINTEANDO NFT...":"PEDIR NFT"}),Object(cn.jsxs)(an.a,{isOpen:f,style:un,contentLabel:"SEPIAZZ Game",children:[Object(cn.jsx)("h1",{align:"center",children:"Felicidades, ya tienes un NFT del juego!!!!"}),Object(cn.jsx)("h2",{children:"Cuando est\xe9s preparado, pulsa el bot\xf3n de JUGAR para comenzar"}),Object(cn.jsx)("br",{}),Object(cn.jsx)("div",{align:"center",children:Object(cn.jsx)("a",{href:"/game.html",children:"  JUGAR  "})})]}),Object(cn.jsx)(X,{}),Object(cn.jsx)(rn,{hidden:!f,disabled:f?0:1,onClick:function(n){n.preventDefault()},children:'"A JUGAR!!!!"'})]})]})]}),Object(cn.jsx)(Z,{})]}),Object(cn.jsx)(V,{}),Object(cn.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(cn.jsx)(ln,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(cn.jsx)(Z,{}),Object(cn.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(cn.jsxs)(en,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Aseg\xfarate de estar conectado a la red correcta (Mumbai testnet). \xa0",Object(cn.jsx)("a",{href:"https://medium.com/stakingbits/how-to-connect-polygon-mumbai-testnet-to-metamask-fc3487a3871f",children:"Para saber como configurarla"})]}),Object(cn.jsx)(X,{}),Object(cn.jsxs)(en,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Hay un gas establecido de ",S.GAS_LIMIT," para las llamadas al Smart Contract."]})]})]})})},xn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,552)).then((function(e){var t=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),a(n),c(n),r(n),o(n)}))};t(547);C.a.render(Object(cn.jsx)(E.a,{store:Y,children:Object(cn.jsx)(pn,{})}),document.getElementById("root")),xn()}},[[548,1,2]]]);
//# sourceMappingURL=main.418fa74d.chunk.js.map