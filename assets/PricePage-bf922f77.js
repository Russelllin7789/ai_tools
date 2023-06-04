import{u as $,C as R,_ as C,a as U,b as j,c as q,L as N}from"./LoadingComponent-a0c30b0b.js";import{e as b,r as d,f as t,g as s,i as e,t as l,s as S,v as m,d as v,w as E,a as Q,b as V,k as h,l as x,F as r,m as c,j as W}from"./index-af3dd374.js";const Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA/SURBVHgB7dUxDgAgCARBzv//WbEzWl0iVDsd1RYkoDDNdM5KYRjRjCBBggTr6b6N1djhd9Yv2/iHBAkSJPhYhRgMMtqyrc4AAAAASUVORK5CYII=",I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAECAYAAACdiF9iAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAdSURBVHgB3c0xAQAAAAEw9O+MFA4rMLowJIz9hwEINwQEtvsVnwAAAABJRU5ErkJggg==",M={key:0,class:"min-w-[14px] min-h-[14px] w-[14px] h-[14px] pt-1"},D=e("img",{src:Y,alt:"plus-icon"},null,-1),J=[D],L={key:1,class:"min-w-[14px] w-[14px] h-[2px] pt-2.5"},z=e("img",{src:I,alt:"minus-icon",class:"w-full"},null,-1),F=[z],X={class:"ml-[25px]"},K={class:"w-full font-black text-white text-[20px] leading-[24px]"},O={key:0,class:"mt-5 w-full font-normal text-white text-base"},P=b({__name:"QARow",props:{questionAndAnswer:{}},setup(g){const i=d(!0);return(A,u)=>(t(),s("div",{class:m(`w-full md:w-[40vw] border border-solid border-[#525252]/80 py-5 px-10 flex items-start justify-start hover:border-white rounded-2xl hover:cursor-pointer ${i.value?"":"border-white"}`),onClick:u[0]||(u[0]=w=>i.value=!i.value)},[i.value?(t(),s("div",M,J)):(t(),s("div",L,F)),e("div",X,[e("p",K,l(A.questionAndAnswer.question),1),i.value?S("",!0):(t(),s("p",O,l(A.questionAndAnswer.answer),1))])],2))}}),T={key:1,class:"flex flex-col items-center h-full w-full bg-black"},H={class:"w-full flex flex-col items-center justify-center container-wrapper"},G={class:"w-full py-[160px]"},Z=e("div",{class:"text-white font-black mb-8 text-[20px] leading-[24px] md:text-[32px] md:leading-[38.4px] md:mb-20"}," 定價 ",-1),ee={class:"w-full flex items-center justify-between flex-wrap"},te={class:"w-full min-h-[234px] border-b border-solid border-[#525252]/80 px-8"},se={class:"section-title text-white mb-3"},ie={class:"flex items-center justify-start"},ne=W('<div class="pt-5 px-8 flex items-center justify-between"><div class="flex items-center justify-content"><div class="font-black text-white text-[20px] leading-[24px]"> NT$5 </div><div class="font-normal text-[#919191]/60 text-[20px] leading-[24px]"> ／1k tokens </div></div><div class="flex items-center justify-content"><div class="mr-[14.67px] font-bold text-base text-white"> 開始使用 </div><div class="w-[10px] h-[10px]"><img src="'+q+'"></div></div></div>',1),oe={class:"w-full pb-[160px] flex flex-col items-start justify-between md:flex-row"},de=e("div",{class:"text-white mb-12 font-black text-[20px] leading-[24px] md:text-[32px] md:leading-[38.4px] md:mb-0"}," 使用規範 ",-1),le={class:"w-full md:w-[832px]"},ae={class:"text-white font-black text-[32px] leading-[38.4px] md:text-[48px] md:leading-[57.6px]"},re={class:"w-full container-wrapper pt-[160px]"},ce={class:"w-full flex flex-col items-start justify-between border-b border-solid border-white pb-[160px] md:flex-row"},Ae=e("div",{class:"text-white font-black text-[20px] mb-8 leading-[24px] md:text-[32px] md:leading-[38.4px] md:mb-0"}," 常見問題 ",-1),me=b({__name:"PricePage",setup(g){const i=$(),A=v(()=>i.aiDetails),u=v(()=>i.isLoading),w=d(window.innerWidth),p=d(!1),k=d([{name:"琪琪",details:[{id:0,description:"初級"},{id:1,description:"速度最快"}]},{name:"昊昊",details:[{id:2,description:"中級"}]},{name:"卡卡",details:[{id:3,description:"高級"}]},{name:"杰杰",details:[{id:4,description:"最高級"},{id:5,description:"資訊最完善"}]}]),y=d([{name:"守法",details:[{id:6,description:"請遵守相關的法規和政策，不得進行任何違法違規的活動。"}]},{name:"資訊安全",details:[{id:7,description:"請務必保護好自己的帳號和密碼，不得將其透露給他人。"}]},{name:"守密",details:[{id:8,description:"需對使用過程中產生的數據負責，不得擅自泄露數據。"}]}]),B=d([{id:"first",question:"如何選擇適合的AI模型？",answer:"選擇適合的 AI 模型需要考慮您的應用場景、需要解決的問題、可用的資源以及預算等因素。可以透過對比不同模型的性能、準確率、速度等指標，以及與其他用戶的評價和反饋，來選擇最適合的模型。"},{id:"second",question:"租用模型的費用是如何計算的？",answer:"租用模型的費用通常會根據模型的性能和使用時間等因素進行計算。具體而言，模型的性能可以根據其精度、速度、佔用資源等指標來評估；而使用時間可以根據租用時間的長短來計算，通常會按小時、天或月來計算。綜合考慮這些因素，系統會自動計算出對應的租用費用。"},{id:"third",question:"如何進行付款？",answer:"付款方式可以透過網站上提供的線上支付平台進行。具體而言，您可以選擇使用信用卡、銀行轉帳、電子錢包等不同的支付方式進行支付。在支付前，您需要先登錄網站並選擇適合的租用方案，系統會自動計算出對應的租用費用和支付金額，然後您可以選擇適合的支付方式進行支付，完成支付後，系統會自動向您提供相應的服務。"},{id:"forth",question:"租用模型的期限是多久？",answer:"租用模型的期限可以根據您的需求進行設置，通常可以選擇幾個小時、幾天或幾個月等不同的時間段。"},{id:"fifth",question:"如果在使用過程中遇到問題，應該怎麼處理？",answer:"如果在使用過程中遇到問題，您可以聯繫客服或技術支持人員進行諮詢或報告問題。您也可以透過網站上的幫助中心或社群論壇尋找相關解決方案和回答。"}]),f=()=>{w.value=window.innerWidth};return E(()=>w.value,_=>{_<768?p.value=!0:p.value=!1},{immediate:!0}),Q(async()=>{i.fetchAiDetails(),window.addEventListener("resize",f)}),V(()=>{window.removeEventListener("resize",f)}),(_,ue)=>(t(),s("div",null,[u.value?(t(),h(N,{key:0})):(t(),s("div",T,[e("div",H,[x(U),x(j,{"slogan-one":"用多少，","slogan-two":"付多少。","is-for-price":!0}),e("div",G,[Z,e("div",ee,[(t(!0),s(r,null,c(k.value,(n,o)=>(t(),s("div",{key:o,class:"w-full mb-5 border border-solid border-[#525252]/80 rounded-2xl py-5 hover:cursor-pointer hover:border-white md:w-[49%]"},[e("div",te,[e("div",se,l(n.name),1),e("div",ie,[e("ul",null,[(t(!0),s(r,null,c(n.details,a=>(t(),s("li",{key:a.id,class:"text-white"}," ・"+l(a.description),1))),128))])])]),ne]))),128))])]),e("div",oe,[de,e("div",le,[(t(!0),s(r,null,c(y.value,(n,o)=>(t(),s("div",{key:o,class:m(`flex flex-col border-b border-solid border-[#525252]/80 ${o!==0?"pt-10":""}`)},[e("div",ae,l(n.name),1),(t(!0),s(r,null,c(n.details,a=>(t(),s("div",{key:a.id,class:"mt-6 mb-10 text-white font-normal text-base md:text-[32px] md:leading-[38.4px]"},l(a.description),1))),128))],2))),128))])])]),x(R,{cards:A.value},null,8,["cards"]),e("div",re,[e("div",ce,[Ae,e("div",{class:m(`${p.value?"w-full":""}`)},[(t(!0),s(r,null,c(B.value,(n,o)=>(t(),h(P,{key:n.id,"question-and-answer":n,class:m(o!==0?"mt-[15px]":"")},null,8,["question-and-answer","class"]))),128))],2)])]),x(C,{"is-mobile":p.value},null,8,["is-mobile"])]))]))}});export{me as default};
