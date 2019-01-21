//rem
var px = 0;
(function(win, doc) {
	if(!win.addEventListener) return;
	var html = document.documentElement;

	function setFont() {
		var html = document.documentElement;
		var k = 750;
		html.style.fontSize = html.clientWidth / k * 100 + "px";
		px = html.clientWidth / k * 100;
	}
	setFont();
	setTimeout(function() {
		setFont();
	}, 300);
	doc.addEventListener('DOMContentLoaded', setFont, false);
	win.addEventListener('resize', setFont, false);
	win.addEventListener('load', setFont, false);
})(window, document);
//首页动画
function initAm(){
	var imgIndex = 1;
	setInterval(function(){
		if(imgIndex>24)imgIndex=1;
		var img = $('<img src="ossweb-img/A/'+imgIndex+'.png" alt="banner" class="img1"/>');
		$(".img-box1").append(img);
		setTimeout(function(){
			img.remove();
		},600);
		imgIndex++;
	},150)
}
initAm();
//随机出现文本方法
function random (n,arr){
	var num = parseInt(Math.random()*n) 
	var txt =  arr[num]
	return txt
}
//动态创建节点
function creatEle (fun,num){
	var oMessage = $("<div class='item-box'></div>");   //创建标签
	var _html = '<div class="raduis"><img src="ossweb-img/head'+num+'.png" alt="" /></div>'+
	'<span class="item">'+fun+'</span>'
	oMessage.html(_html)//标签内容
	$(".S-box").append(oMessage)
}
//model1动画页面进入选择职业页面
$(".model1 .btn").click(function(){
	$(".model1").hide()
	$(".model2").show()
})
//主态状态保存
var Zpeople = {
	profession:3,
	carName:"",
	userName:""
}
//提示用户点击头像操作
$(".model3 .Ts").click(function(){
	$(this).hide()
})
//model2 主态选择职业
$(".model2 .bg1-center li").click(function(){
	var index = $(this).index()+1;
	Zpeople.profession = index;
	$(".model2 .bg1-center").find("li").removeClass("on1").removeClass("on2").removeClass("on3").removeClass("on4").removeClass("on5");
	$(this).addClass("on"+index);
	$(".model2 .i").removeClass("on1").removeClass("on2").removeClass("on3").removeClass("on4").removeClass("on5");
	$(".model2 .i").eq(index-1).addClass("on"+index);
	$(".model2 .big-p").hide();
	$(".model2 .big-p").eq(index-1).show();	
})
//喜提爱车按钮点击事件
$(".model2 .in-btn").click(function(){
	if($("#carName").val() == ""){
		alert("请输入车队名！")
		return
	}
	if($("#userName").val() == ""){
		alert("请输入昵称！")
		return
	}
	$(".model2").hide()
	$(".model3").show()
	var sex = $("#sel option:checked").val()
	var carName = $("#carName").val()
	var userName = $("#userName").val()
	Zpeople.carName = sex;
	Zpeople.carName = carName;
	Zpeople.userName = userName;
	//model3 主态显示相应的英雄
	console.log(Zpeople)
	var i = Zpeople.profession;
//	console.log(i)
	//var Index = $(".model3 .bg1").find("div").index();
	$(".model3 .bg1").find("div").eq(i-1).addClass("on"+i);
	$(".model3 .bg1-center").find("li").eq(i-1).addClass("on"+i);
	$(".model3 .bg1-center").find("li .nickName").eq(i-1).text(Zpeople.userName);
	$(".model3 .bg2 .user-name").text(Zpeople.userName+"的");
	$(".model3 .bg2 .cars-name").text(Zpeople.carName+"大摩托");
	switch(i){
		case 1:
		creatEle(random(jzarr.length,jzarr),1);
		break;
		case 2:
		creatEle(random(fsarr.length,fsarr),2);
		break;
		case 3:
		creatEle(random(tkarr.length,tkarr),3);
		break;
		case 4:
		creatEle(random(ssarr.length,ssarr),4);
		break;
		case 5:
		creatEle(random(zlarr.length,zlarr),5);
		break;
	}
	am();

})


//model3 主态调用分享弹出层
$(".model3 .bg1-center li").click(function(){
	var t = $(this).find(".nickName").text()
	console.log(t)
	if($.trim(t) == ""){
		$(".model3 .share-fix").show()
		return
	}
	//点击进入队伍头像  显示专属回忆页面
	if($.trim(t) != "" && $(this).find(".on1")||$(this).find(".on2")||$(this).find(".on3")||$(this).find(".on4")||$(this).find(".on5")){
		$(".model3").hide()
		$(".model4").show()
		$(".model4 .f-l img").attr("src","ossweb-img/head"+Zpeople.profession+".png")
	}
})
//model4返回车队按钮
$(".model4 .back-btn4").click(function(){
	$(".model4").hide()
	$(".model3").show()
})
//model4分享按钮
$(".model4 .share-btn4").click(function(){
	$(".model4 .share-fix").show()
})
//model4分享弹窗关闭
$(".share-fix").click(function(){
	$(this).hide()
})

//model3 召集队友按钮
$(".L-btn").click(function(){
	$(".model3 .share-fix").show()
})
//model3 一键进本按钮事件
$(".L-btn1").click(function(){
	$(".model3").hide()
	$(".model5").show()
	var fb = random(fbTxt.length,fbTxt)
	console.log(fb.txt)
	//进入副本战斗后 显示结果
	setTimeout(function(){
		$(".model5 .shut-txt").html(fb.txt)
	},4000)
	$(".model5 .shut").html(fb.fb)
})
//$(".share-fix").click(function(){
//	$(".model3 .share-fix").hide()
//})
//model3 发车奖励显示隐藏
$(".model3 .R-btn").click(function(){
	$(".model3").hide()
	$(".model6").show()
})
//发车奖励页面  继续招募按钮
$(".go").click(function(){
	$(".model3").show()
	$(".model6").hide()
})

//客态  选择职业代码
$(".model7 .bg1-center .head").click(function(){
	var t = $(this).first().text()
	if($.trim(t) == ""){
		console.log($(this).first().index()+1)
		var index = $(this).index()+1;
		$(".model7 .bg1-center").find(".head").removeClass("on1").removeClass("on2").removeClass("on3").removeClass("on4").removeClass("on5");
		$(this).addClass("on"+index);
		$(".model7 .i").removeClass("on1").removeClass("on2").removeClass("on3").removeClass("on4").removeClass("on5");
		$(".model7 .i").eq(index-1).addClass("on"+index);
		$(".model7 .big-p").hide();
		$(".model7 .big-p").eq(index-1).show();
	}else {
		alert("有人了")
	}
})
//改变分享页背景图
function changeBack (){
	var num = parseInt(Math.random()*4+1)
	if(num == 1){
//		$(".model4 .userName").css("color","#b06015")
		$(".model5 .userName").css("color","#4273c2")
	}
	if(num == 3){
		$(".model4 .anTwo").css({
			"background":"url(ossweb-img/"+num+".png) no-repeat",
			"background-size":"180rem"
		})
		$(".model4 .userName").css("color","#b06015")
		$(".model5 .userName").css("color","#456381")
	}
	if(num == 2){
		$(".model4 .anTwo").css({
			"background":"url(ossweb-img/"+num+".png) no-repeat",
			"background-size":"180rem"
		})
		$(".model4 .userName").css("color","#456381")
		$(".model5 .userName").css("color","#fee386")
	}
	if(num == 4){
		$(".model4 .anTwo").css({
			"background":"url(ossweb-img/"+num+".png) no-repeat",
			"background-size":"180rem"
		})
		$(".model4 .userName").css("color","#407ac3")
		$(".model5 .userName").css("color","#b06015")
	}
	$(".model4 .bg1").css({
		"background":"url(ossweb-img/bg"+num+".jpg) no-repeat",
		"background-size":"7.5rem"
	})
	$(".model5 .bg1").css({
		"background":"url(ossweb-img/Bbg"+num+".jpg) no-repeat",
		"background-size":"7.5rem"
	})
}
changeBack()
//组队副本 描述
var fbTxt = [
	{
		fb:"T练小号的5人本",
		txt:"传家宝傍身的T一个冲锋冲进怪堆<br>豪情万丈特别风骚。然后就死了…<br>一队人看着他苟延残喘了3s，“T别开怪太快，我们还在接任务呢…”"
	},
	{
		fb:"奶妈究极心累本",
		txt:"“那个T怎么没血了。。皮怎么那么脆啊！”<br>“远程你们是傻的嘛，站一起好不好！”<br>“Boss要放AOE了，赶紧预读一个群奶先！”<br>”终于倒了，怎么有人是半血？我来奶满先！“"
	},
	{
		fb:"史上最菜BOSS本",
		txt:"全队人聚精会神准备挑战副本首杀<br>火枪手一炮轰向副本小boss开怪<br>boss向后飞出，然后就卡在两山之间再也没出来…<br>留下一脸懵逼的5人团在风中久久无法回神…"
	},
	{
		fb:"那些年的菜鸡新手本",
		txt:"全队人聚精会神准备挑战副本首杀<br>火枪手一炮轰向副本小boss开怪<br>boss向后飞出，然后就卡在两山之间再也没出来…<br>留下一脸懵逼的5人团在风中久久无法回神…"
	}
	
]
//专属关系分享
var gX = [
	"我一通电话，<br>就会有几百个人去到你死对头家楼下插旗<br>（就问怕不怕~）",
	"好兄弟<br>从来不撕逼~<br>（兽人还永不为奴呢QAQ~）",
	"一代版本一代神<br>代代版本跟你混~<br>（车队老司机，说的就是你！）",
	"如果我俩的聊天记录被截图并公诸于众，<br>那我俩可能都要完蛋。<br>（无话不谈真朋友！）",
	"强弱是一个补丁的事<br>但信仰和你<br>可是一辈子的事~",
	"艾萨拉有部落征服者三季稻<br>而我的开荒车队<br>还好有你~",
	"同样是九年义务教育没补过课，<br>为什么你能如此优秀<br>我的开荒好战友~",
	"你对我的意义总在实时切换：<br>“深夜情感抚慰”“吃喝玩乐”以及“借钱找你”<br>（总之都很重要啦....）",
	"第一眼骂狗屎感觉这货真的脏<br>第二眼惊叹卧槽，<br>第三眼你就成为了我固定车队的一员，直到今天~",
	"如果我送你100块的礼物，<br>就必不能接受你送我98的。<br>因为在我心里，你会在100的基础上勇敢地往上走~",
	"打本总是喜欢交给你来做指挥决定<br>然后我自己再负责提出一系列的反对意见<br>就喜欢你看不惯我又干不掉我的样子：）",
	"即使你分享的85%聊天内容<br>我都提不起兴趣，<br>我也还是会尽最大的努力附和：）",
	"即使两年不联系了<br>偶尔一次凌晨2点的QQ聊天<br>也能让我感觉我们的关系再一次的突飞猛进！",
	"我交朋友，还讲究面相和玄学<br>你能成为我车队的一份子，<br>说明你真的很棒棒~",
	"其实我有无数条交友准则，<br>要是你觉得你跟其中哪条不符，<br>那么我只能说一切还是以颜值为准，我的朋友：）"
]
$(".model4 .txt-box").html(random(gX.length,gX));

//职业昵称
var jzName = [
	"潜行或死亡","天黑请闭眼","致命刺客","风骚走位之父","绕后偷袭专家","完美的隐藏","一击致命","神挡杀神","暗夜幽灵","无需二次拔刀","你死或我亡"
];
var fsName = [
	"法爷","叫我爸爸","冰火两重天","《论法术暴击》","荆棘谷三季稻","一个能打的都没有","1V2能力","插旗solo","魔法为我存在","毁天灭地","最秀是我"
];
var tkName = [
	"不拿盾开盾墙","绝对防御","皮糙肉厚","能抗能打","活好耐操","绝对依靠","硬过钢筋","开荒神T","钢铁直男","为人民服务","风骚冲锋"
];
var ssName = [
	"一击毙命","正中红心","脱靶达人","视力5.2","箭无虚发","让箭矢飞","百发百中","一发入魂","更爱活靶子","最强远程输出","零秒出手"
];
var zlName = [
	"36D巨乳","广袤飞机场","“平”天下","妙手回春","打地鼠专精","单身狗手速","刷满强迫症","圣光之名","有奶就是娘","斜视眼症候群","选择性放生"
];
//随机显示职业标签
$(function(){
	$(".model4 .head-li .nickName").text(random(ssName.length,ssName))
})

//分享页面 获取参数
var getParam = function () {
    try{
    var url = window.location.href;
    var result = url.split("?")[1];
    var keyValue = result.split("&");
    var obj = {};
    for (var i = 0; i < keyValue.length; i++) {
        var item = keyValue[i].split("=");
        obj[item[0]] = item[1];
    }
    return obj;
    }
    catch(e){
        console.warn("There has no param value!");
    }
};
/**
 * 页面加载完毕打印键值对对象
 */
window.onload = function () {
//  console.log(getParam());
	var zhi = getParam()
    for(var i in zhi){
    	if(zhi[i] == "true"){
//  	console.log("分享页面");
    	$(".model5 .share-btn4").hide()
    	$(".model5 .car-btn4").show()
    }
    }
}
//职业独白
var jzarr = [
"真正的刺客，从不佯攻 ！",
"潜行或者死亡，必须习惯其中一种。",
"他们看不到我来，但一定可以看到我离开。 ",
"我的匕首放在这里，除非他的主人低头，它将永不折断！",
"天黑请闭眼，狩猎——开始！",
"神挡杀神！你的首级，我收下了。",
"风骚走位溜boss，绕后偷袭戳菊花。",
"走位风骚谁能比，输出爆炸无人敌。",
"我不会让你感觉到我的存在，我的靠近，也不会让你感觉到鲜血涌出的痛苦…",
"背负冷血无情之名，潜行在黑暗边缘；虽有傲人的伤害，但我终究只是一名黑暗中的刺客。",
"完美的侦查是战术，完美的隐藏是艺术。",
"灵活的打法才是制胜的关键，力气和武器只不过是一种手段。",
"想叫就叫吧，反正是最后一声了。",
"不知道你的名字，但清楚你的死期——就是现在。"
];
var fsarr = [
"想要做一个法师，哪怕是最蹩脚的法师,只要是法师就好。",
"我的左手凝结冰霜的冷冽，右手缠绕奥术的涌动，心中翻滚炙热的熔岩。",
"我摧毁敌人，造成的伤口胜逾刀剑的砍杀；我玩弄敌人，只给垂死的敌人戏谑的笑脸。",
"再强大的敌人，也无法经受冰霜和熔岩的双重考验！",
"一代补丁一代神，代代补丁有法神。“叫我爸爸。”",
"高伤害：《论法术暴击》",
"可笑的凡人，在法爷面前统统灰飞烟灭吧！",
"魔法，为我而存在~",
"金木水火，元素之力构成了一切，也必定能摧毁一切。",
"当你倒在我脚下，你就会知道，冷静的思考是多么的重要。",
"当火焰在我的指尖缠绕时，我已经看到了你的毁灭。",
"忘掉那些没用的刀剑吧，魔法将赐予我们最强的力量！",
"准备好了吗?接下来你将面对的是最恐怖的梦魇……"
];
var tkarr = [
"我的战斧早已饥渴难耐。",
"战士的最高境界，就是不拿盾也能开盾墙！",
"绝对的防御是消除一切攻击的最有效方法！",
"战斧是我的惩罚，板甲是我的护佑，绝对的防御，是我！",
"愿在与敌人的决战中，光荣地战死沙场！",
"皮糙肉厚活好耐操，开荒首选绝对依靠！",
"天堂在左，战士向右，如果我活着，我就将永不退缩！",
"万王有肉，其名为T，T之硬，比钢筋还硬！",
"不眷恋生的美好，不惧怕死的痛苦，不在意敌人的强大，不羡慕旁人有魔法与圣光护体。",
"万千boss我来扛，胯下输出最疯狂~",
"冲锋大跳切姿态，狂暴回复开剑在，集结护盾嗑药水，盾吸苟且绑绷带",
"我的信念来自鲜血与雷霆，我的力量化作怒火与死亡，即便倒下我也无怨无悔！",
"我以骑士的荣耀起誓，你可以击碎我的盾但击不碎我的信仰！",
"结实胸肌，钢铁之躯，开荒神T老司机——是我！"
];
var ssarr = [
"当你被我没有踪影的箭矢射穿喉咙的时候，你就会明白什么是战场上最大的悲哀。",
"正对眉心，一击毙命！",
"别怕，不就是把苹果放在你头上么？我又不会射偏！",
"没有什么是一发利箭不能解决的问题， 如果有，那就两发！",
"让箭矢快乐地飞起来吧！",
"一发入魂！要来一发吗？满足你！",
"送你一个轰轰烈烈的退场，来自射手的关怀已进入炮膛！",
"预备——瞄准！是时候展现真正的技术了！",
"指望着我会射空？别做白日梦了，让你见识一击毙命的恐惧…",
"我更喜欢打移动的，更具挑战性的靶子~",
"我会让我的猎物，死的很痛快。",
"最强远程物理dp！移动攻击，无敌位移，操作无脑新手友好，就问你服不服气！",
"你有试过把mmo战场玩成tps的快感吗？"
];
var zlarr = [
"治疗职业是一种怎样的体验？emmm…打地鼠玩儿过吗？",
"不要放弃治疗~",
"拒绝背锅，DPS请自保 ：)",
"一要会加血，二要会喷人；要点是有蓝喷T，没蓝喷DPS",
"……并不是所有的牧师，都是能语音喊666的软妹子啊><",
"跟随圣光的指引，我将以牧师之职终此一生。",
"胸围能顶天，奶量大无边，是我~",
"即使手握暗影，依然心拥圣光。",
"坚持刷满每个人的血条，这就是身为治疗的倔tong强bing！",
"副本的路我就不记了，总之跟着大家跑，低头看Grid就是了。",
"至今好多boss的全名我都不知道，队里T的名字，到是都牢记着…",
"一入奶门深似海，从此单刷是路人。",
"现在拉个毛毛球的怪，奶不到你了呵呵…跑那么远？死去吧！",
"坦克不需要动，MT倒了算我输！",
"什么！队友是人形不是条状的？别逗了。"
];

//am();
var amIndex = 0;
function am(){
//	console.log("执行到了弹幕！")
	if(amIndex == $(".S-box .item-box").length)amIndex=0;
	var width = $(".S-box .item-box").eq(amIndex).width()+px*.2;
	var top = RandomNum(0,(2.4-1.12)*100) / 100;
	
	var time = 5000 + ((5000-width) / (px*2)/100 * 5000);
//	console.log(time);
	$(".S-box .item-box").eq(amIndex).css({"left":"6rem","top":top+"rem"});
	$(".S-box .item-box").eq(amIndex).animate({"left":-width}, time,function(){
		amIndex++;
		am();
	});
}

function RandomNum(Min, Max) {
      var Range = Max - Min;
      var Rand = Math.random();
      if(Math.round(Rand * Range)==0){       
        return Min + 1;
      }
      var num = Min + Math.round(Rand * Range);
      return num;
}

