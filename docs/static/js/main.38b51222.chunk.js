(this.webpackJsonp05_usuarios=this.webpackJsonp05_usuarios||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),r=c(9),l=c.n(r),o=(c(15),c(3)),i=c(8),j=c(2),b=c(5),d=function(e){var t,c=Object(n.useState)([]),s=Object(o.a)(c,2),r=s[0],l=s[1],d=Object(n.useState)(""),u=Object(o.a)(d,2),p=u[0],O=u[1],m=Object(n.useState)({nombre:"",presupuesto:0,tecnologia:"",responsable:"",trabajadores:[]}),h=Object(o.a)(m,2),x=h[0],g=h[1],f=function(e){console.log(e),g(Object(b.a)(Object(b.a)({},x),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Formulario para agregar proyecto"}),Object(a.jsxs)("form",{className:"form mt3",children:[Object(a.jsxs)("div",{class:"mb-3",children:[Object(a.jsx)("label",{class:"form-label",children:"Nombre del proyecto"}),Object(a.jsx)("input",{type:"text",class:"form-control",name:"nombre",value:x.nombre,onChange:f})]}),Object(a.jsxs)("div",{class:"mb-3",children:[Object(a.jsx)("label",{class:"form-label",children:"Presupuesto"}),Object(a.jsx)("input",{type:"number",class:"form-control",name:"presupuesto",value:x.presupuesto,onChange:f})]}),Object(a.jsxs)("div",{class:"mb-3",children:[Object(a.jsx)("label",{class:"form-label",children:"Tecnolog\xeda"}),Object(a.jsx)("select",{class:"form-control",onChange:f,name:"tecnologia",children:["Java","JavaScript","Angular","Ionic","React","ReactNative","PHP","Node","Python"].map((function(e){return Object(a.jsx)("option",{children:e})}))})]}),Object(a.jsxs)("div",{class:"mb-3",children:[Object(a.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Responsable"}),Object(a.jsx)("input",Object(j.a)({value:x.responsable,type:"text",class:"form-control",name:"responsable",onChange:f},"value",x.responsable))]}),Object(a.jsxs)("div",{class:"mb-3",style:{display:"flex"},children:[Object(a.jsx)("label",{class:"form-label",children:"Equipo"}),Object(a.jsx)("input",(t={type:"text",onChange:"form-control"},Object(j.a)(t,"onChange",(function(e){O(e.target.value)})),Object(j.a)(t,"value",p),t)),Object(a.jsx)("button",{className:"btn btn-success",onClick:function(e){e.preventDefault(),l([].concat(Object(i.a)(r),[p]))},children:"Add"}),Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),r.length>0?g(Object(b.a)(Object(b.a)({},x),{},{trabajadores:r})):alert("Antes de confirmar agrega algun trabajador")},children:"Confirmar"})]}),r.length>0?Object(a.jsxs)("div",{class:"alert alert-dark",role:"alert",children:["Actualmente el equipo asignado tiene ",r.length," integrantes:",Object(a.jsx)("ul",{children:r.map((function(e){return Object(a.jsx)("li",{children:e})}))})]}):Object(a.jsx)("div",{class:"alert alert-dark",role:"alert",children:"El equipo no tiene personal asignado"})]}),Object(a.jsx)("button",{onClick:function(){console.log(x),e.addProyect((function(e){return[].concat(Object(i.a)(e),[x])})),O(""),l([]),g({nombre:"",presupuesto:0,tecnologia:"",responsable:"",trabajadores:[]})},className:"btn btn-primary",children:"Agregar proyecto"})]})},u=function(e){var t=e.proyecto;return console.log(t),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"card",style:{width:"18rem;"},children:[Object(a.jsx)("img",{src:"...",className:"card-img-top",alt:"..."}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:t.nombre}),Object(a.jsx)("p",{className:"card-text"}),Object(a.jsx)("div",{children:Object(a.jsx)("ul",{children:t.trabajadores.map((function(e){return Object(a.jsx)("li",{children:e})}))})})]})]})})},p=function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Detalle de los proyectos"}),e.proyectos.map((function(e){return Object(a.jsx)(u,{proyecto:e})}))]})},O=function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Listado de proyetos"}),Object(a.jsx)("ul",{children:e.proyectos.map((function(e){return Object(a.jsx)("li",{children:e.nombre})}))})]})};c.p;var m=function(){var e=Object(n.useState)([{nombre:"React telefonoca",presupuesto:1e3,responsable:"Borja",trabajadores:["Borja","Luis","Pedro"],tecnologia:"React"}]),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(a.jsxs)("div",{className:"App container mt-4",children:[Object(a.jsx)("h1",{children:"Aplicaci\xf3n de gesti\xf3n de proyectos"}),Object(a.jsx)("h3",{children:"App web destinada a la gesti\xf3n de los proyectos de una empresa"}),1==c.length&&Object(a.jsx)("div",{className:"alert alert-warning",role:"alert",children:"Todav\xeda no tienes ning\xfan proyecto asignado"}),Object(a.jsxs)("div",{class:"alert alert-primary",role:"alert",children:["Actualmente cuentas con ",c.length," proyectos"]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-8",children:[Object(a.jsx)(d,{addProyect:s}),Object(a.jsx)(p,{proyectos:c})]}),Object(a.jsx)("div",{className:"col-4",children:Object(a.jsx)(O,{proyectos:c})})]})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.38b51222.chunk.js.map