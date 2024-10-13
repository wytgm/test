import{_ as k}from"./B4UdQCiN.js";import{g as c}from"./DjKJqAo0.js";import{_ as v,h as u,o as s,c as n,a as t,i as f,b as h,w as C,j as y,u as L,F as b,e as x,n as T,t as g,f as B}from"./BFPDRT6O.js";const $={name:"top",setup(){u(()=>{c.to(["#StripeTop01","#StripeTop02","#StripeTop03","#StripeTop04","#StripeTop05","#StripeTop06"],{opacity:0,duration:1,repeat:-1,yoyo:!0,stagger:.3}),c.to(["#StripeBottom1","#StripeBottom2","#StripeBottom3","#StripeBottom4","#StripeBottom5","#StripeBottom6"],{opacity:0,duration:1,delay:.5,repeat:-1,yoyo:!0,stagger:{each:.3,from:"end"}}),c.to(["#circleB1","#circleT1"],{opacity:0}),c.to(["#circleB1","#circleT1"],{opacity:1,duration:.8})})}},D={class:"z-10 w-full h-full border-rose-800 absolute top-0 pointer-events-none",style:{"border-width":"45px"}},M={id:"StripeTop",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1920 1080",width:"90%",height:"90%",x:"0",y:"0",class:"z-20",style:{scale:"1.13"}},K={id:"StripeBottom",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1920 1083",width:"90%",height:"90%",x:"0",y:"0",class:"z-20 absolute -bottom-1 -left-5",style:{scale:"1.1",transform:"translateX(-145px)"}},H={class:"dropdown dropdown-left z-30 absolute right-0 top-0"},V={tabindex:"0",class:"dropdown-content avacardhome w-64 shadow"},E={class:"card-body"};function j(i,e,m,l,o,p){const r=k;return s(),n("div",null,[t("div",D,[(s(),n("svg",M,e[0]||(e[0]=[f('<polygon id="StripeTop01" class="BK-6" points="1268.87 66 1236.87 66 1267.87 3 1298.87 3 1268.87 66"></polygon><polygon id="StripeTop02" class="BK-6" points="1324.15 66 1292.15 66 1323.15 3 1354.15 3 1324.15 66"></polygon><polygon id="StripeTop03" class="BK-6" points="1385.15 66 1353.15 66 1384.15 3 1415.15 3 1385.15 66"></polygon><polygon id="StripeTop04" class="BK-6" points="1445.19 66 1413.19 66 1444.19 3 1475.19 3 1445.19 66"></polygon><polygon id="StripeTop05" class="BK-6" points="1511.23 66 1479.23 66 1510.23 3 1541.23 3 1511.23 66"></polygon><polygon id="StripeTop06" class="BK-6" points="1578.23 66 1546.23 66 1577.23 3 1608.23 3 1578.23 66"></polygon>',6)]))),(s(),n("svg",K,e[1]||(e[1]=[f('<polygon id="StripeBottom1" class="BK-6" points="530.87 1083 498.87 1083 529.87 1020 560.87 1020 530.87 1083"></polygon><polygon id="StripeBottom2" class="BK-6" points="586.15 1083 554.15 1083 585.15 1020 616.15 1020 586.15 1083"></polygon><polygon id="StripeBottom3" class="BK-6" points="647.15 1083 615.15 1083 646.15 1020 677.15 1020 647.15 1083"></polygon><polygon id="StripeBottom4" class="BK-6" points="707.19 1083 675.19 1083 706.19 1020 737.19 1020 707.19 1083"></polygon><polygon id="StripeBottom5" class="BK-6" points="773.23 1083 741.23 1083 772.23 1020 803.23 1020 773.23 1083"></polygon><polygon id="StripeBottom6" class="BK-6" points="840.23 1083 808.23 1083 839.23 1020 870.23 1020 840.23 1083"></polygon>',6)])))]),t("div",H,[e[5]||(e[5]=t("div",{tabindex:"0",role:"button",class:"btn btn-ghost hover:btn-ghost",style:{"background-color":"rgba(155, 155, 155, 0)"}},[t("div",{id:"circleB1",class:"circleB"},[t("div",{id:"circleT1",class:"circleT",style:{}},[t("img",{class:"w-full h-full object-cover relative",src:"http://cdn.sonderwyt.top/Cover/avatar/02.webp",alt:""})])])],-1)),t("div",V,[t("div",E,[e[3]||(e[3]=t("h3",{class:"card-title space-y-10"},"泥嚎啊    \\(@^0^@)/",-1)),e[4]||(e[4]=t("p",null,"这里是我暗戳戳吐槽记录的说说空间，主要是用来记录一些日常生活",-1)),h(r,{to:"/",class:"w-full"},{default:C(()=>e[2]||(e[2]=[t("div",{class:"btn w-full btn-outline outline-double outline-8 btn-sm bg-rose-400 hover:bg-sky-500"},"朕已阅 回到首页",-1)])),_:1})])])])])}const S=v($,[["render",j]]),z={__name:"live2d",setup(i){const e=y(null),m=y(!1);y(0);let l,o;const{$PIXI:p,$Live2DModel:r}=L();return u(async()=>{try{if(!(e.value instanceof HTMLCanvasElement))throw new Error("Container is not a canvas element");l=new p.Application({view:e.value,height:window.innerHeight,width:window.innerWidth,resolution:window.devicePixelRatio,autoDensity:!0,antialias:!0,backgroundAlpha:0}),o=await r.from("http://cdn.sonderwyt.top/Live2D_Model/37/37.model3.json"),l.stage.addChild(o),o.x=180,o.y=520,o.scale.set(.22,.22),o.anchor.set(.5,.5),o.on("load",()=>{m.value=!0,console.log("Model loaded successfully.")}),o.on("error",d=>{console.error("Model load error:",d)}),console.log("Model initialized:",o)}catch(d){console.error("Error loading Live2D model:",d)}}),(d,a)=>(s(),n("canvas",{ref_key:"container",ref:e,class:"live2d-container"},null,512))}},N=v(z,[["__scopeId","data-v-1740da1d"]]),G=[{datetody:"2024.09.15 周日 超凉爽",avatarIndicator:"🐈",message:"晚上和老弟去打球的时候，碰到三只小猫咪，一只狸花，一只三花，还有一只小橘，没经住诱惑去摸了最前方的小狸花，想去摸小三花的时候，小狸花一边蹭蹭，一边对小三花戒备，不让它过来！到最后只摸到了小狸花，它还挺有小心机嘞，感慨一下！",images:[]},{datetody:"2024.09.04 周三 超热",avatarIndicator:"😁",message:"我要笑死在互联网了，也太有意思了。还有这个分凹的我好难受",images:["http://cdn.sonderwyt.top/DailyLife/2024/20240904.webp","http://cdn.sonderwyt.top/DailyLife/2024/202409041.webp","http://cdn.sonderwyt.top/DailyLife/2024/202409042.webp","http://cdn.sonderwyt.top/DailyLife/2024/202409043.webp"]},{datetody:"2024.08.11 周日 晴朗",avatarIndicator:"😯",message:"医院上空的一朵云",images:["http://cdn.sonderwyt.top/DailyLife/2024/20240811.webp"]},{datetody:"2024.08.02 周五 晴朗",avatarIndicator:"😎",message:"夏天来的很迅速，我准备好了！我准备好了！",images:["http://cdn.sonderwyt.top/DailyLife/2024/20240802.webp"]},{datetody:"2024.7.19 周五 阴雨",avatarIndicator:"💧",message:"雨中的风景还是很美丽的！",images:["http://cdn.sonderwyt.top/DailyLife/2024/20240716_15441.webp","http://cdn.sonderwyt.top/DailyLife/2024/20240719_15053.webp","http://cdn.sonderwyt.top/DailyLife/2024/20240716_1540.webp"]},{datetody:"2024.7.2 周二",avatarIndicator:"😭",message:"第一次感受到了披麻戴孝的具象化，事情发生的真的好突然，以后就真的再也见不到了。好像明白了余华的那句话：亲人的离去不是一场暴雨，而是此生漫长的潮湿，我永远困在这潮湿中，在每一个波澜不惊的日子里，掀起狂风暴雨。"},{datetody:"2024.7.2 周二",avatarIndicator:"🎮",message:"过完崩坏三第二部的主线《事先张扬的犯罪》，虽然！但是！我的松雀呀wuer，赵爽老师配的真好！",video:""},{datetody:"2024.6.1 周六",avatarIndicator:"🏀",message:"很好，很废，打了20分钟的篮球就要不行了..."},{datetody:"2024.5.20 周一",avatarIndicator:"🎂",message:"生日！小满！520！多重好运buff叠加！"},{datetody:"2024.5.17 周五",avatarIndicator:"🥰",message:"奶奶楼下一只超级乖巧的流浪小猫咪，但是妈妈在身边不让我摸它，只能和它进行口头上的交流。",video:""},{datetody:"2024.5.6 周一",avatarIndicator:"🥰",message:"ave mujika快端上来吧！这两天都被它的歌洗脑了，好帅！还有从b站看了这个视频后，莫名有种想学打鼓的冲动，就像是当年看完轻音想学吉他的冲动，这种冲动又一次在七八年后出现了！不可思议",video:"https://player.bilibili.com/player.html?bvid=BV1Up4y1c7SD&page=1&autoplay=0"},{datetody:"2024.5.4 周六",avatarIndicator:"😍",message:"最近一直在追番bangdream，已补完全部的番剧剧场版小剧场，也入坑了游戏，真的好多梗啊啊啊，每个band都超可爱！",images:[]},{datetody:"2024.5.1 周三",avatarIndicator:"🤩",message:"星铁演唱会，我的棉袄我的姥！我的心肝我的鸟！唱的好好听！",video:"https://player.bilibili.com/player.html?bvid=BV1ZH4y1V7AE&page=1&autoplay=0"},{datetody:"2024.4.22 周一",avatarIndicator:"🥰",message:"昨天因为一点问题在吃晚饭的时候嗷嗷哭了，爸爸妈妈安慰我之后慌的好明显，他们一直在找话题转移我的注意力都没停过说话，尤其是那么不善言辞的爸爸，我明显能感受到他们的慌张，今天，吃午饭的时候，感觉爸爸妈妈对我说话的语气都比平常温柔好多，果然我这温室的花朵经历不了风雨，我承认了",images:[]},{datetody:"2024.4.21 周日",avatarIndicator:"😶",message:"怎么才半个月没开抖音，我就out了",images:["http://cdn.sonderwyt.top/Chat/20240421.webp"]},{datetody:"2024.4.20 周六",avatarIndicator:"🐾",message:"突发奇想：我可以创作一个二次元的世界观吗",images:[]},{datetody:"2024.4.19 周五",avatarIndicator:"🥰",message:"找到了一个看番软件OMOfun,终于把《跃动青春》的小尾巴补完啦，小金毛男主和女主的性格也太好了吧啊好久不看番剧的我感觉又沉浸在了故事中！",images:[]},{datetody:"2024.4.17 周三",avatarIndicator:"😣",message:"砂金镜流卡池记录：可恶啊啊，给镜流的光锥歪了（姬子的光锥）不说，一上头竟然把我攒给知更鸟的抽数全抽没了，所以还成功升级了，从超级至尊非酋到千里挑一大非酋！....sad，我的鸟，怎么办啊啊啊",images:["http://cdn.sonderwyt.top/Chat/20240417.webp"]},{datetody:"2024.4.15 周一",avatarIndicator:"😣",message:"我决定！从明天开始不再吃辣！一定要控制住自己啊啊啊啊！！",images:[]},{datetody:"2024.4.13 周六",avatarIndicator:"😎",message:"玩星铁快一年了，每天勤勤恳恳，0氪的我终于打出了一百五十多万的伤害，简直可喜可贺！可喜可贺啊啊啊！鼠式给我整激动了，这个活动我爱了！还有...单抽出奇迹！",images:["http://cdn.sonderwyt.top/Chat/2024041301.webp","http://cdn.sonderwyt.top/Chat/2024041302.webp"]},{datetody:"2024.4.12 周五",avatarIndicator:"🌼",message:"和妈妈散步时遇到了猫猫祟祟，而且还买了两盆❀（金狐狸and仙客来）",images:["http://cdn.sonderwyt.top/Chat/2024041201.webp","http://cdn.sonderwyt.top/Chat/2024041202.webp","http://cdn.sonderwyt.top/Chat/2024041203.webp"]},{datetody:"2024.4.9 周二",avatarIndicator:"🙃",message:"刚过完崩坏3第二部的新剧情，咱就是说！好好的一个美男子，竟然成这样了！请看VCR！不要太好笑好嘛w(ﾟДﾟ)w！最后放两张美丽的图片压压惊。",images:["http://cdn.sonderwyt.top/Honkai%20Impact%203/Chapter3_01.webp","http://cdn.sonderwyt.top/Honkai%20Impact%203/Chapter_02.webp"]},{datetody:"2024.4.8 周一",avatarIndicator:"😅",message:"小欧皇到大非酋的转变：",images:["http://cdn.sonderwyt.top/Honkai:%20Star%20Rail/Gacha/gacha_01.webp","http://cdn.sonderwyt.top/Honkai:%20Star%20Rail/Gacha/gacha_02.webp","http://cdn.sonderwyt.top/Honkai:%20Star%20Rail/Gacha/gacha_03.webp"]},{datetody:"2024.4.7 周日",message:"终于！终于！说说空间终于搭建完成了，虽然有点简陋，但是...以后会逐渐升级的！目前能实现的功能有：...",images:[]},{datetody:"2024.4.3 周三",message:"啊啊啊啊啊显存爆了！！果然我的电脑带不动好画质！！！我不配啊啊，都感觉要闻到烧焦的气味了...2G显存的我竟然妄想使用SDXL模型。但是，墙裂推荐...",video:"https://player.bilibili.com/player.html?bvid=BV1oF4m1G79a&page=1&autoplay=0"}],R={components:{topchat:S},name:"Chat",data(){return{chats:G,quote:""}},mounted(){setTimeout(()=>{this.$emit("load")},5e3)},setup(){u(()=>{document.addEventListener("DOMContentLoaded",function(){const i=document.querySelector(".loading");i&&(i.style.display="none")})})},methods:{chatItemClass(i){return i%2===0?"chat-start":"chat-end"},openModal(){document.getElementById("my_modal_5").showModal()}}},A={class:"container mx-auto w-full h-full center bg1"},F={class:"flex flex-row w-11/12 h-full items-center justify-center center space-x-4"},O={class:"w-[30rem] h-[680px] flex relative items-center justify-center bg-lime-400"},X={class:"character"},q={class:"threeseven"},P={class:"rightchat-bg"},W={class:"p-6 w-full h-full relative top-0 left-0 overflow-scroll overflow-x-hidden"},U={class:"chat-image avatar indicator"},Z={class:"indicator-item badge"},J={class:"chat-header relative p-3 flex flex-row space-x-2"},Q={class:"flex opacity-100"},Y={class:"chat-bubble"},tt={class:"textcus -translate-y-1"},et=["innerHTML"],ot={key:0,class:"grid-container"},at=["href"],st=["src"],nt=["href"],it={style:{height:"auto",width:"auto","margin-top":"5px"}},dt=["src"];function rt(i,e,m,l,o,p){const r=S,d=N;return s(),n("div",null,[h(r),t("div",A,[t("div",F,[t("div",O,[t("div",X,[e[0]||(e[0]=t("div",null,[t("div",{role:"alert",class:"alert shadow-lg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"stroke-info h-6 w-6 shrink-0"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]),t("div",null,[t("h3",{class:"font-bold"},"注意哦!"),t("div",{class:"text-xs"},"动作一定要隔5秒之后再按，否则会出现bug哦！")])])],-1)),t("div",q,[h(d)])])]),t("div",P,[t("div",W,[(s(!0),n(b,null,x(o.chats,(a,w)=>(s(),n("div",{key:w,class:T(["chat",p.chatItemClass(w)])},[t("div",U,[e[1]||(e[1]=t("img",{style:{width:"80px",height:"80px","border-radius":"50%"},src:"http://cdn.sonderwyt.top/Cover/avatar/02.webp",alt:""},null,-1)),t("span",Z,g(a.avatarIndicator),1)]),t("div",J,[e[2]||(e[2]=t("div",{class:"flex"}," Sonder",-1)),t("div",Q,g(a.datetody),1)]),t("div",Y,[t("div",tt,[t("p",{innerHTML:a.message},null,8,et),a&&a.images&&a.images.length>0?(s(),n("div",ot,[(s(!0),n(b,null,x(a.images,(_,I)=>(s(),n("div",{key:I,class:"grid-item"},[t("a",{href:_},[t("img",{src:_,alt:"Image"},null,8,st)],8,at)]))),128))])):B("",!0),t("a",{href:a.link},g(i.linktitle),9,nt),t("div",it,[a.video?(s(),n("iframe",{key:0,style:{"border-radius":"15px"},src:a.video,allowfullscreen:"",width:"100%",height:"285",scrolling:"no",frameborder:"0"},null,8,dt)):B("",!0)])])])],2))),128))])])])])])}const mt=v(R,[["render",rt],["__scopeId","data-v-3731702a"]]);export{mt as default};
