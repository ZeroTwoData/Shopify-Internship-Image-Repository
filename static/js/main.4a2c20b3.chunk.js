(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(16),n=c.n(s),r=(c(81),c(59),c(29)),i=c(17),o=(c(82),c(4));var l=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("header",{children:[Object(o.jsx)("div",{id:"header-container",children:Object(o.jsxs)(r.b,{to:"/",className:"header-link",children:[Object(o.jsx)("div",{id:"header-logo"}),Object(o.jsx)("h1",{children:"PC Setup Image Repository"})]})}),Object(o.jsx)("nav",{children:Object(o.jsx)(r.b,{to:"/guide",className:"header-link",children:"FAQs"})})]})})},j=c(46),d=c(19),b=c(38),u=c.n(b);c(92);var h=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("li",{className:"cards_item",children:[Object(o.jsx)("figure",{className:"cards_item_pic-wrap","data-category":e.label,children:Object(o.jsx)("img",{src:e.src,alt:"Image",className:"cards_item_img"})}),Object(o.jsx)("div",{className:"cards_item_info",children:Object(o.jsx)("h5",{className:"cards_item_text",children:e.text})})]})})};c(93);var m=function(e){var t=e.itemList.map((function(e){return Object(o.jsx)(h,{src:e.avatar,text:e.description,label:e.imageName})}));return Object(o.jsx)("div",{className:"cards",children:Object(o.jsx)("div",{className:"cards_container",children:Object(o.jsx)("div",{className:"cards_wrapper",children:Object(o.jsx)("ul",{className:"cards_items",children:t})})})})},O=(c(94),function(e){var t=e.input,c=e.updateInput;return Object(o.jsx)("div",{className:"searchbox",children:Object(o.jsx)("input",{type:"text",class:"searchTerm",value:t,placeholder:"Filter By Name",onChange:c})})}),x=c(146),p=c(148),g=c(147),f=c(150),v=c(145),y=c(143),N=c(144),_=c(142),w=c(67),C=(c(99),w.a.initializeApp({projectId:"pc-setup-image-repository",appId:"1:879901571985:web:17ba849a91e05a324ff830",storageBucket:"pc-setup-image-repository.appspot.com",locationId:"us-east4",apiKey:"AIzaSyBwvT-yS5nKoOLYwaJb6Cuol1huMPItTFE",authDomain:"pc-setup-image-repository.firebaseapp.com",messagingSenderId:"879901571985",measurementId:"G-YV3FRSZ4VK"}));function I(e){var t=Object(a.useState)(!1),c=Object(d.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(null),i=Object(d.a)(r,2),l=i[0],b=i[1],h=Object(a.useState)(""),m=Object(d.a)(h,2),O=m[0],x=m[1],w=Object(a.useState)(""),I=Object(d.a)(w,2),S=I[0],k=I[1],A=Object(a.useState)([]),B=Object(d.a)(A,2),F=(B[0],B[1],C.firestore()),D=function(){n(!1)},R=function(e){console.log(e.target.name),"imageName"===e.target.name?x(e.target.value):k(e.target.value)},T=function(){var t=Object(j.a)(u.a.mark((function t(){var c,a,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=C.storage().ref(),a=c.child(l.name),t.next=4,a.put(l);case 4:return t.next=6,a.getDownloadURL();case 6:s=t.sent,console.log("url",s),F.collection("imageCollection").doc(O).set({imageName:O,avatar:s,description:S}),e.setToggle(!e.toggle),n(!1);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsxs)("div",{children:[Object(o.jsx)(p.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)},id:"upload_image_button",children:"Upload Build"}),Object(o.jsxs)(f.a,{open:s,onClose:D,"aria-labelledby":"form-dialog-title",children:[Object(o.jsx)(_.a,{id:"form-dialog-title",children:"Upload"}),Object(o.jsxs)(y.a,{children:[Object(o.jsx)(N.a,{children:"Upload An Image of Any Aesthetic Build"}),Object(o.jsx)(g.a,{autoFocus:!0,margin:"dense",name:"imageName",label:"Build Name",type:"text",fullWidth:!0,onChange:R}),Object(o.jsx)(g.a,{autoFocus:!0,margin:"dense",name:"ImageDescription",label:"Build Description",type:"text",fullWidth:!0,onChange:R}),Object(o.jsx)("input",{type:"file",onChange:function(e){console.log(e.target.files[0]),b(e.target.files[0])}})]}),Object(o.jsxs)(v.a,{children:[Object(o.jsx)(p.a,{onClick:D,color:"primary",children:"Cancel"}),Object(o.jsx)(p.a,{onClick:T,color:"primary",children:"Confirm"})]})]})]})}var S=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),r=Object(d.a)(n,2),i=r[0],l=r[1],b=Object(a.useState)([]),h=Object(d.a)(b,2),p=h[0],g=h[1],f=Object(a.useState)(!1),v=Object(d.a)(f,2),y=v[0],N=v[1],_=C.firestore();return Object(a.useEffect)(Object(j.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.collection("imageCollection").get();case 2:t=e.sent,c=t.docs.map((function(e){return console.log(e.data()),e.data()})),l(c),g(c),console.log(c),console.log("images loaded");case 8:case"end":return e.stop()}}),e)}))),[y]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{id:"home_container",children:[Object(o.jsxs)("div",{className:"home_content",id:"home_about",children:[Object(o.jsx)("h1",{children:"Aesthetico"}),Object(o.jsx)("p",{children:"Let Dreams Become Reality"})]}),Object(o.jsxs)(x.a,{flex:!0,id:"toolbar",children:[Object(o.jsx)(O,{input:c,updateInput:function(e){var t=e.target;s(t.value),console.log("target is",t.value),""!==t.value?g(i.filter((function(e){return e.imageName.toLowerCase().includes(t.value.toLowerCase())}))):g(i)},id:"searchbar"}),Object(o.jsx)(I,{setToggle:N,toggle:y,id:"uploadbutton"})]}),Object(o.jsx)(m,{itemList:p})]})})};c(101);function k(){return Object(o.jsxs)("div",{id:"home_container",children:[Object(o.jsxs)("div",{className:"home_content",id:"home_about",children:[Object(o.jsx)("h1",{children:"Aesthetico"}),Object(o.jsx)("p",{children:"Let Dreams Become Reality"}),Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{})]}),Object(o.jsxs)("div",{id:"home_hw",children:[Object(o.jsx)("h3",{className:"smaller_h1",children:"Demo + Explanation"}),Object(o.jsx)("div",{class:"embed-responsive embed-responsive-16by9",style:{width:"60%",margin:"auto"},children:Object(o.jsx)("iframe",{class:"embed-responsive-item",src:"",allowfullscreen:!0})}),Object(o.jsx)("h3",{className:"smaller_h1",children:"Need More Info About How This Repository Work?"}),Object(o.jsxs)("p",{class:"text_for_first",children:["Check Out My Github For Additional Info ",Object(o.jsx)("a",{href:"https://github.com/ZeroTwoData",children:"https://github.com/ZeroTwoData"})]}),Object(o.jsx)("br",{})]})]})}c(102);var A=function(){return Object(o.jsx)("div",{className:"footer-container",children:Object(o.jsxs)("section",{className:"footer-share",children:[Object(o.jsxs)(r.b,{to:"/",id:"footer-box",children:[Object(o.jsx)("div",{className:"footer-logo"}),Object(o.jsx)("h3",{id:"footer-title",children:"PC Setup Image Repository"})]}),Object(o.jsxs)("h5",{className:"footer-credit",children:["Created By ",Object(o.jsx)("span",{children:"Ralph Worley"})," | All Rights Reserved | \xa9 2022 ZeroTwoData "]})]})})};var B=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)(l,{}),Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{path:"/",exact:!0,component:S}),Object(o.jsx)(i.a,{path:"/guide",exact:!0,component:k})]}),Object(o.jsx)(A,{})]})})};n.a.render(Object(o.jsx)(B,{}),document.getElementById("root"))},59:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.4a2c20b3.chunk.js.map