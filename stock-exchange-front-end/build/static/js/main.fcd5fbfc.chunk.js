(this["webpackJsonpsimple-site-front"]=this["webpackJsonpsimple-site-front"]||[]).push([[0],{31:function(e,t,n){e.exports=n(48)},36:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n.n(c),i=(n(36),n(22)),s=n(17),l=n(19),u=n(2),p={user:null,tickerPrice:{}};var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER":return Object(u.a)({},e,{user:t.data});case"BUY":var n=Math.round(100*(e.user.money-t.data.price*t.data.qty))/100;if(n>0){e.user.stocks.length;var a,r=t.data.ticker;return t.data.ticker=null,e.tickerPrice[r]?(fetch("http://localhost:4000/api/v1/userstocks/",{method:"POST",headers:{Authorization:localStorage.token,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({ticker:r,money:n,qty:t.data.qty,stock_price:t.data.price})}),Object(u.a)({},e,{user:Object(u.a)({},e.user,{money:n,stocks:[].concat(Object(l.a)(e.user.stocks),[{name:t.data.ticker}]),userstocks:[].concat(Object(l.a)(e.user.userstocks),[{amount:t.data.qty}])}),tickerPrice:Object(u.a)({},e.tickerPrice,Object(s.a)({},r,Object(u.a)({},e.tickerPrice[r],{qty:e.tickerPrice[r].qty+t.data.qty})))})):(fetch("http://localhost:4000/api/v1/userstocks",{method:"POST",headers:{Authorization:localStorage.token,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({ticker:r,money:n,qty:t.data.qty,stock_price:t.data.price})}),a=e.user.stocks[0]?e.user.stocks[e.user.stocks.length-1].id+1:5e3,Object(u.a)({},e,{user:Object(u.a)({},e.user,{money:n,stocks:[].concat(Object(l.a)(e.user.stocks),[{name:t.data.ticker,id:a}]),userstocks:[].concat(Object(l.a)(e.user.userstocks),[{amount:t.data.qty,stock_id:a,money:t.data.price}])}),tickerPrice:Object(u.a)({},e.tickerPrice,Object(s.a)({},r,t.data))}))}alert("not enought money");case"CREATESTOCK":var c=Object.keys(t.data)[0];if(e.tickerPrice[c]){var o=e.tickerPrice[c].qty+t.data[c].qty;return Object(u.a)({},e,{tickerPrice:Object(u.a)({},e.tickerPrice,{},t.data,Object(s.a)({},c,Object(u.a)({},e.tickerPrice[c],{qty:o})))})}return Object(u.a)({},e,{tickerPrice:Object(u.a)({},e.tickerPrice,{},t.data)});case"SIGNOUT":return p;case"EmptyTickerPrice":return Object(u.a)({},e,{tickerPrice:{}});default:return e}},h=n(7),d=n(8),f=n(10),b=n(9),k=n(11),y=n(16),E=n(3),v=(n(41),n(42),function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).handlelogin=function(e){var t=e.target[0].value,a=e.target[1].value;fetch("http://localhost:4000/api/v1/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:t,password:a})}).then((function(e){return e.json()})).then((function(e){e.error?alert(e.error):(localStorage.setItem("token",e.jwt),n.props.handleuser(e.user))}))},n}return Object(k.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.user;t.location;return n?r.a.createElement(y.a,{to:"/portfolio"}):r.a.createElement("div",{className:"login"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.handlelogin(t)}},r.a.createElement("h1",{className:"center"},"Sign in"),r.a.createElement("label",{className:"center"},"E-mail:",r.a.createElement("input",{type:"text",name:"email"})),r.a.createElement("br",null),r.a.createElement("label",{className:"center"},"password:",r.a.createElement("input",{type:"text",name:"password"})),r.a.createElement("br",null),r.a.createElement("input",{className:"center",type:"submit",value:"Sign in"})))}}]),t}(r.a.Component));var j=Object(E.b)((function(e){return{user:e.user}}),(function(e){return{handleuser:function(t){e({type:"USER",data:t})}}}))(v),O=(n(44),function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).handleregister=function(e){var t=e.target[0].value,a=e.target[1].value,r=e.target[2].value;fetch("http://localhost:4000/api/v1/users",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user:{name:t,password:r,email:a,money:5e3}})}).then((function(e){return e.json()})).then((function(e){e.error?alert(e.error):(localStorage.setItem("token",e.jwt),n.props.handleuser(e.user))}))},n}return Object(k.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return this.props.user?r.a.createElement(y.a,{to:"/portfolio"}):r.a.createElement("div",{className:"register"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.handleregister(t)}},r.a.createElement("h1",{className:"center"},"Register"),r.a.createElement("label",{className:"center"},"Name:",r.a.createElement("input",{type:"text",name:"name",required:!0})),r.a.createElement("br",null),r.a.createElement("label",{className:"center"},"E-mail:",r.a.createElement("input",{type:"email",name:"email",required:!0})),r.a.createElement("br",null),r.a.createElement("label",{className:"center"},"password:",r.a.createElement("input",{type:"password",name:"password",required:!0})),r.a.createElement("input",{className:"center",type:"submit",value:"Register"})))}}]),t}(r.a.Component));var g=Object(E.b)((function(e){return{user:e.user}}),(function(e){return{handleuser:function(t){e({type:"USER",data:t})}}}))(O),S=(n(45),"pk_ade36e087b854be0bb67dd3751460d25"),P=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={stocksShown:0,uniqueStockIds:new Map},n.addStock=function(e){n.state.uniqueStockIds.has(e)&&n.setState({stocksShown:n.state.stocksShown+1})},n.updateUniqueStocks=function(){if(n.props.user){var e=n.props.user,t=e.userstocks,a=void 0===t?{}:t,r=(e.stocks,new Map);return a.forEach((function(e,t){var n=e.stock_id;r.has(n)?r.set(n,r.get(n)+e.amount):r.set(n,e.amount)})),n.setState({uniqueStockIds:r}),r}},n.fetchNextStockData=function(){var e=n.props,t=e.user,a=e.handleCreateStock,r=n.state.stocksShown;if(t){t.userstocks;var c=t.stocks,o=void 0===c?{}:c,i=n.updateUniqueStocks(),s=0;i.forEach((function(e,t){if(s>=r&&s<r+3){var n=o.find((function(e){return e.id===t})).name;fetch("https://cloud.iexapis.com/stable/stock/".concat(n,"/intraday-prices?token=").concat(S)).then((function(e){return e.json()})).then((function(t){var r,c=t.filter((function(e){return null!=e.open})),o=c[0].open,i=c[c.length-1].close;r=o>i?"red":o==i?"gray":"green";var s={};s[n]={qty:e,price:i,color:r},a(s)}))}s++})),n.setState({stocksShown:r+3})}},n}return Object(k.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.handlEmptyTickerPrice(),this.fetchNextStockData()}},{key:"render",value:function(){var e=this,t=this.props,n=t.tickerPrice,a=t.user,c=t.handlebuy,o=this.state,i=o.uniqueStockIds,s=o.stocksShown;return a?r.a.createElement("div",{className:"portfolio"},r.a.createElement("div",null,r.a.createElement("h1",null,"porfolio"),"Cash:$",a.money,r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),c(t.target[0].value,parseInt(t.target[1].value),e.addStock)}},r.a.createElement("label",null,"Ticker:",r.a.createElement("input",{type:"text",name:"ticker",required:!0})),r.a.createElement("br",null),r.a.createElement("label",null,"QTY:",r.a.createElement("input",{type:"number",min:"1",step:"1",name:"qty",required:!0,minLength:"1"})),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Buy"}))),Object.keys(n).length>0&&Object.keys(n).map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("p",null,e.toUpperCase()),r.a.createElement("p",null,"QTY:",n[e].qty),r.a.createElement("p",{style:{color:n[e].color}},"$",parseFloat(n[e].price*n[e].qty).toFixed(2)))})),s<i.size&&r.a.createElement("button",{onClick:this.fetchNextStockData},"Show more")):r.a.createElement(y.a,{to:"/login"})}}]),t}(r.a.Component);var w=Object(E.b)((function(e){return{user:e.user,tickerPrice:e.tickerPrice}}),(function(e){return{handlebuy:function(t,n,a){fetch("https://cloud.iexapis.com/stable/stock/".concat(t,"/intraday-prices?token=").concat(S)).then((function(e){return e.json()})).then((function(r){var c,o=r.filter((function(e){return null!=e.open})),i=o[0].open,s=o[o.length-1].close;c=i>s?"red":i==s?"gray":"green",a&&a(),e({type:"BUY",data:{ticker:t,price:s,qty:n,color:c}})})).catch((function(e){alert("Please input valid ticker")}))},handleCreateStock:function(t){e({type:"CREATESTOCK",data:t})},handleQty:function(t,n){e({type:"QTY",data:{name:t,qty:n}})},handlEmptyTickerPrice:function(){e({type:"EmptyTickerPrice"})}}}))(P),q=(n(46),function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return this.props.user?(console.log(this.props.user),r.a.createElement("div",{className:"transactions"},r.a.createElement("h1",null,"transactions"),null!=this.props.user&&this.props.user.userstocks.map((function(t){var n=e.props.user.stocks.find((function(e){return e.id==t.stock_id})).name;return r.a.createElement("div",{key:t.id},r.a.createElement("p",null,"BUY ",n," --- ",t.amount," share(s) @ $",t.money))})))):r.a.createElement(y.a,{to:"/login"})}}]),t}(r.a.Component));var T=Object(E.b)((function(e){return{user:e.user,tickerPrice:e.tickerPrice}}),(function(e){return{}}))(q),N=n(5),C=(n(47),function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).signout=function(){localStorage.token=null,n.props.removeUser()},n.handlePortfolio=function(){n.props.user||alert("Please sign in to view your protfolio")},n.handleTransaction=function(){n.props.user||alert("Please sign in to view your transactions")},n}return Object(k.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(N.b,{to:"/portfolio",onClick:this.handlePortfolio},"Portfolio")),r.a.createElement("li",null,r.a.createElement(N.b,{to:"/transactions",onClick:this.handleTransaction},"Transactions")),this.props.user?r.a.createElement("li",{style:{float:"right"}},r.a.createElement(N.b,{to:"/login",onClick:function(){return e.signout()}},"Sign Out")):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{style:{float:"right"}},r.a.createElement(N.b,{to:"/login"},"Sign In")),r.a.createElement("li",{style:{float:"right"}},r.a.createElement(N.b,{to:"/register"},"Register"))))}}]),t}(r.a.Component));var x=Object(E.b)((function(e){return{user:e.user}}),(function(e){return{removeUser:function(){e({type:"SIGNOUT"})}}}))(C),A=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.token;t&&fetch("http://localhost:4000/api/v1/profile",{headers:{Authorization:t}}).then((function(e){return e.json()})).then((function(t){e.props.handleuser(t.user)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(j,null)}}),r.a.createElement(y.b,{exact:!0,path:"/register",render:function(){return r.a.createElement(g,null)}}),r.a.createElement(y.b,{exact:!0,path:"/portfolio",render:function(){return r.a.createElement(w,null)}}),r.a.createElement(y.b,{exact:!0,path:"/transactions",render:function(){return r.a.createElement(T,null)}})))}}]),t}(r.a.Component);var U=Object(E.b)((function(e){return{user:e.user}}),(function(e){return{handleuser:function(t){e({type:"USER",data:t})}}}))(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=Object(i.b)(m);o.a.render(r.a.createElement(E.a,{store:I},r.a.createElement(N.a,null,r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.fcd5fbfc.chunk.js.map