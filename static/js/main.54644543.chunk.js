(this.webpackJsonpreact_portfolio=this.webpackJsonpreact_portfolio||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a(6),r=a.n(n),i=a(4),o=a(1),s=function(e){var t=e.currentPage,a=e.handlePageChange;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"desktop__navigation",children:Object(o.jsxs)("ul",{className:"navigation__links",children:[Object(o.jsx)("a",{className:"linkStyles",href:"#About",onClick:function(){return a("About")},children:Object(o.jsx)("li",{className:"About"===t?"navigationStylesActive":"navigationStyles",children:"About"})}),Object(o.jsx)("a",{className:"linkStyles",href:"#Portfolio",onClick:function(){return a("Portfolio")},children:Object(o.jsx)("li",{className:"Portfolio"===t?"navigationStylesActive":"navigationStyles",children:"Portfolio"})}),Object(o.jsx)("a",{className:"linkStyles",href:"#Contact",onClick:function(){return a("Contact")},children:Object(o.jsx)("li",{className:"Contact"===t?"navigationStylesActive":"navigationStyles",children:"Contact"})}),Object(o.jsx)("a",{className:"linkStyles",href:"#Resume",onClick:function(){return a("Resume")},children:Object(o.jsx)("li",{className:"Resume"===t?"navigationStylesActive":"navigationStyles",children:"Resume"})})]})})})},l=a(7),m=function(e){var t=e.currentPage,a=e.handlePageChange;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"mobile__navigation",children:Object(o.jsxs)("ul",{className:"navigation__links-mobile",children:[Object(o.jsx)("a",{className:"linkStyles-mobile",href:"#About",onClick:function(){return a("About")},children:Object(o.jsx)("li",{className:"About"===t?"navigationStylesActive":"navigationStyles",children:"About"})}),Object(o.jsx)("a",{className:"linkStyles-mobile",href:"#Portfolio",onClick:function(){return a("Portfolio")},children:Object(o.jsx)("li",{className:"Portfolio"===t?"navigationStylesActive":"navigationStyles",children:"Portfolio"})}),Object(o.jsx)("a",{className:"linkStyles-mobile",href:"#Contact",onClick:function(){return a("Contact")},children:Object(o.jsx)("li",{className:"Contact"===t?"navigationStylesActive":"navigationStyles",children:"Contact"})}),Object(o.jsx)("a",{className:"linkStyles-mobile",href:"#Resume",onClick:function(){return a("Resume")},children:Object(o.jsx)("li",{className:"Resume"===t?"navigationStylesActive":"navigationStyles",children:"Resume"})})]})})})},j=a(8),h=function(e){var t=e.currentPage,a=e.handlePageChange,n=Object(c.useState)(!1),r=Object(i.a)(n,2),h=r[0],d=r[1],b=Object(o.jsx)(l.a,{className:"mobile-icon",onClick:function(){return d(!h)}}),u=Object(o.jsx)(j.a,{className:"mobile-icon",onClick:function(){return d(!h)}});return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("nav",{className:"navigation",children:[Object(o.jsx)("header",{className:"header",children:"Jos\xe9 Mar\xeda Centuri\xf3n"}),Object(o.jsx)(s,{currentPage:t,handlePageChange:a}),h?u:b,h&&Object(o.jsx)(m,{currentPage:t,handlePageChange:a})]})})},d=(a(15),a.p+"static/media/me.047188eb.jpg"),b=function(){return Object(o.jsx)("div",{className:"container container__about",children:Object(o.jsxs)("div",{className:"row container__about-row",children:[Object(o.jsx)("div",{className:"col container__about-portrait",children:Object(o.jsx)("img",{className:"bio-photo",src:d,alt:"portrait"})}),Object(o.jsx)("div",{className:"col container__about-paragraph",children:Object(o.jsx)("p",{className:"bio-text",children:"Hello World! My name is Jos\xe9 Mar\xeda Centuri\xf3n and I am a Software Developer currently living in Johnson City, TN. Prior to the pandemic I was living in Orlando working in sports therapy and preparing to play professionally on the mini/ minor league golf tours Florida has to offer. Once the pandemic hit I knew it was time for a career change and in May of 2021 I enrolled in University of Pennsylvania\u2019s Full Stack Flex Coding Bootcamp powered by Trilogy Education focusing in particular on the MERN stack. After the BootCamp I was hired by my current employer Business Information Systems and moved to Johnson City, TN where I began as an Entry Level PHP Developer and have since been promoted to Software Developer Level 1 and currently work with PHP, Vue.js, Typescript, JavaScript, and AJAX most commonly. I have also started a part time position with Trilogy Education as both a FSF Learning Assistant and Grader for the BootCamp. It is helping me stay current and brush up on all the technologies I learned in the BootCamp. In my free time I enjoy playing the piano, stand up comedy, and golf as I hope to return to the Orlando area one day to continue my part time playing career."})})]})})};var u=function(e){return Object(o.jsx)("div",{class:"col",children:Object(o.jsxs)("div",{className:"card project__card",children:[Object(o.jsx)("img",{src:e.image,className:"card-img",alt:e.name}),Object(o.jsx)("div",{className:"card-body project__card-body",children:Object(o.jsxs)("ul",{className:"project__card-details",children:[Object(o.jsx)("li",{className:"project__name",children:e.name}),Object(o.jsx)("li",{className:"homework__name",children:e.project}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:e.deployment,target:"_blank",rel:"noreferrer",children:"Deployed Application"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:e.repository,target:"_blank",rel:"noreferrer",children:"GitHub Repository"})})]})})]})})},p=a(2);var g=function(){return Object(o.jsxs)("div",{className:"row row-cols-1 row-cols-md-3 g-4 mt-2",children:[Object(o.jsx)(u,{name:p[0].name,image:p[0].image,project:p[0].project,deployment:p[0].deployment,repository:p[0].repository}),Object(o.jsx)(u,{name:p[1].name,image:p[1].image,project:p[1].project,deployment:p[1].deployment,repository:p[1].repository}),Object(o.jsx)(u,{name:p[2].name,image:p[2].image,project:p[2].project,deployment:p[2].deployment,repository:p[2].repository}),Object(o.jsx)(u,{name:p[3].name,image:p[3].image,project:p[3].project,deployment:p[3].deployment,repository:p[3].repository}),Object(o.jsx)(u,{name:p[4].name,image:p[4].image,project:p[4].project,deployment:p[4].deployment,repository:p[4].repository}),Object(o.jsx)(u,{name:p[5].name,image:p[5].image,project:p[5].project,deployment:p[5].deployment,repository:p[5].repository})]})},O=a(9),y=function(){return Object(o.jsx)("div",{className:"container contact__container",children:Object(o.jsxs)("div",{className:"row contact__container-row",children:[Object(o.jsx)("div",{className:"col contact__container-col",children:Object(o.jsxs)("div",{className:"container contact__container-form",children:[Object(o.jsx)("h1",{className:"contact__container-form-header",children:"Contact Form"}),Object(o.jsxs)("form",{className:"row",onSubmit:function(e){e.preventDefault(),O.a.sendForm("service_l93l7i4","template_vfdxa0h",e.target,"user_7Y3eP1RxHBOR60eJF3Kyz").then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))},children:[Object(o.jsx)("label",{children:"Name"}),Object(o.jsx)("input",{type:"text",name:"name",className:"form-control"}),Object(o.jsx)("label",{children:"Email"}),Object(o.jsx)("input",{type:"email",name:"user_email",className:"form-control"}),Object(o.jsx)("label",{children:"Message"}),Object(o.jsx)("textarea",{name:"message",rows:"4",className:"form-control"}),Object(o.jsx)("input",{type:"submit",value:"Send",className:"form-control btn btn-primary mt-2"})]})]})}),Object(o.jsx)("div",{className:"col contact__container-col",children:Object(o.jsxs)("div",{className:"contact__info",children:[Object(o.jsx)("h3",{children:"Contact Info"}),Object(o.jsxs)("h5",{className:"contact_text",children:["Phone: ",Object(o.jsx)("a",{href:"tel:2679024605",children:"(267) 902-4605"})]}),Object(o.jsxs)("h5",{className:"contact_text",children:["Email:  ",Object(o.jsx)("a",{href:"mailto: paraguayandeveloper@gmail.com",children:"paraguayandeveloper@gmail.com"})]})]})})]})})},f=a.p+"static/media/ResumeSS.f509507f.png",x=a.p+"static/media/resume.afd210ab.pdf",v=function(){return Object(o.jsx)("div",{className:"container mt-5 container__resume",children:Object(o.jsxs)("div",{className:"row container__resume-row",children:[Object(o.jsxs)("div",{className:"col container__resume-item-1",children:[Object(o.jsx)("h4",{children:"Front-end Proficiencies"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"HTML"}),Object(o.jsx)("li",{children:"CSS"}),Object(o.jsx)("li",{children:"JavaScript"}),Object(o.jsx)("li",{children:"JQuery"}),Object(o.jsx)("li",{children:"Responsive Design"}),Object(o.jsx)("li",{children:"React.js"}),Object(o.jsx)("li",{children:"Bootstrap"})]}),Object(o.jsx)("h4",{children:"Back-end Proficiencies"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"APIs"}),Object(o.jsx)("li",{children:"Node.js"}),Object(o.jsx)("li",{children:"Express.js"}),Object(o.jsx)("li",{children:"MySQL, Sequelize"}),Object(o.jsx)("li",{children:"MongoDB, Mongoose"}),Object(o.jsx)("li",{children:"REST"}),Object(o.jsx)("li",{children:"GraphQL"})]})]}),Object(o.jsx)("div",{className:"col container__resume-item-2",children:Object(o.jsx)("a",{href:x,className:"modal__resume-link",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:f,className:"resume",alt:"resume"})})})]})})},A=a.p+"static/media/gmail.2abed5e9.png",N=a.p+"static/media/linkedinlogo.a2d43d04.png";function w(){return Object(o.jsx)("div",{className:"fixed-bottom",children:Object(o.jsx)("div",{className:"footer-container",children:Object(o.jsx)("footer",{className:"footer__footer",children:Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{className:"footer-list",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://github.com/chemacenturion",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:"github",className:"avatar1"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"mailto:paraguayandeveloper@gmail.com",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:A,alt:"gmail",className:"avatar1"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/josemaria-centurion",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:N,alt:"linkedin",className:"avatar2"})})})]})})})})})}function k(){var e=Object(c.useState)("About"),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(h,{currentPage:a,handlePageChange:function(e){return n(e)}}),"About"===a?Object(o.jsx)(b,{}):"Portfolio"===a?Object(o.jsx)(g,{}):"Contact"===a?Object(o.jsx)(y,{}):"Resume"===a?Object(o.jsx)(v,{}):Object(o.jsx)(b,{}),Object(o.jsx)(w,{})]})}a(16);r.a.render(Object(o.jsx)(k,{}),document.getElementById("root"))},2:function(e){e.exports=JSON.parse('[{"id":1,"name":"Golf Guidance","image":"https://github.com/chemacenturion/Golf_Guidance/raw/main/client/src/images/final2.gif?raw=true","project":"Final Project","deployment":"https://golf-guidance.herokuapp.com/","repository":"https://github.com/chemacenturion/Golf_Guidance"},{"id":2,"name":"NFL Bets","image":"https://github.com/chemacenturion/react_portfolio/blob/main/src/images/nflBets.gif?raw=true","project":"Group Project 2","deployment":"https://vast-eyrie-51403.herokuapp.com/","repository":"https://github.com/chemacenturion/NFL_Bets"},{"id":3,"name":"Just Another Text Editor","image":"https://github.com/chemacenturion/react_portfolio/blob/main/src/images/jate.gif?raw=true","project":"IndexDB Homework","deployment":"https://secure-everglades-37067.herokuapp.com/","repository":"https://github.com/chemacenturion/Text_Editor"},{"id":4,"name":"Fitness Tracker","image":"https://github.com/chemacenturion/react_portfolio/blob/main/src/images/fitness%20tracker.gif?raw=true","project":"MongoDB Homework","deployment":"https://dry-harbor-98999.herokuapp.com/?id=6161928193b6180016a78bcb","repository":"https://github.com/chemacenturion/Fitness_Tracker"},{"id":5,"name":"Search FORE Golf","image":"https://github.com/chemacenturion/Search-Fore-Golf/raw/main/assets/Images/SearchForeGolf.gif","project":"Group Project 1","deployment":"https://chemacenturion.github.io/Search-Fore-Golf/","repository":"https://github.com/chemacenturion/Search-Fore-Golf"},{"id":6,"name":"Work Day Scheduler","image":"https://github.com/chemacenturion/react_portfolio/blob/main/src/images/workDay.gif?raw=true","project":"localStorage Homework","deployment":"https://chemacenturion.github.io/Work-Day-Scheduler/","repository":"https://github.com/chemacenturion/Work-Day-Scheduler"}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.54644543.chunk.js.map