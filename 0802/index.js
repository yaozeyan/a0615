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
//��ҳ����
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
//��������ı�����
function random (n,arr){
	var num = parseInt(Math.random()*n) 
	var txt =  arr[num]
	return txt
}
//��̬�����ڵ�
function creatEle (fun,num){
	var oMessage = $("<div class='item-box'></div>");   //������ǩ
	var _html = '<div class="raduis"><img src="ossweb-img/head'+num+'.png" alt="" /></div>'+
	'<span class="item">'+fun+'</span>'
	oMessage.html(_html)//��ǩ����
	$(".S-box").append(oMessage)
}
//model1����ҳ�����ѡ��ְҵҳ��
$(".model1 .btn").click(function(){
	$(".model1").hide()
	$(".model2").show()
})
//��̬״̬����
var Zpeople = {
	profession:3,
	carName:"",
	userName:""
}
//��ʾ�û����ͷ�����
$(".model3 .Ts").click(function(){
	$(this).hide()
})
//model2 ��̬ѡ��ְҵ
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
//ϲ�ᰮ����ť����¼�
$(".model2 .in-btn").click(function(){
	if($("#carName").val() == ""){
		alert("�����복������")
		return
	}
	if($("#userName").val() == ""){
		alert("�������ǳƣ�")
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
	//model3 ��̬��ʾ��Ӧ��Ӣ��
	console.log(Zpeople)
	var i = Zpeople.profession;
//	console.log(i)
	//var Index = $(".model3 .bg1").find("div").index();
	$(".model3 .bg1").find("div").eq(i-1).addClass("on"+i);
	$(".model3 .bg1-center").find("li").eq(i-1).addClass("on"+i);
	$(".model3 .bg1-center").find("li .nickName").eq(i-1).text(Zpeople.userName);
	$(".model3 .bg2 .user-name").text(Zpeople.userName+"��");
	$(".model3 .bg2 .cars-name").text(Zpeople.carName+"��Ħ��");
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


//model3 ��̬���÷�������
$(".model3 .bg1-center li").click(function(){
	var t = $(this).find(".nickName").text()
	console.log(t)
	if($.trim(t) == ""){
		$(".model3 .share-fix").show()
		return
	}
	//����������ͷ��  ��ʾר������ҳ��
	if($.trim(t) != "" && $(this).find(".on1")||$(this).find(".on2")||$(this).find(".on3")||$(this).find(".on4")||$(this).find(".on5")){
		$(".model3").hide()
		$(".model4").show()
		$(".model4 .f-l img").attr("src","ossweb-img/head"+Zpeople.profession+".png")
	}
})
//model4���س��Ӱ�ť
$(".model4 .back-btn4").click(function(){
	$(".model4").hide()
	$(".model3").show()
})
//model4����ť
$(".model4 .share-btn4").click(function(){
	$(".model4 .share-fix").show()
})
//model4�������ر�
$(".share-fix").click(function(){
	$(this).hide()
})

//model3 �ټ����Ѱ�ť
$(".L-btn").click(function(){
	$(".model3 .share-fix").show()
})
//model3 һ��������ť�¼�
$(".L-btn1").click(function(){
	$(".model3").hide()
	$(".model5").show()
	var fb = random(fbTxt.length,fbTxt)
	console.log(fb.txt)
	//���븱��ս���� ��ʾ���
	setTimeout(function(){
		$(".model5 .shut-txt").html(fb.txt)
	},4000)
	$(".model5 .shut").html(fb.fb)
})
//$(".share-fix").click(function(){
//	$(".model3 .share-fix").hide()
//})
//model3 ����������ʾ����
$(".model3 .R-btn").click(function(){
	$(".model3").hide()
	$(".model6").show()
})
//��������ҳ��  ������ļ��ť
$(".go").click(function(){
	$(".model3").show()
	$(".model6").hide()
})

//��̬  ѡ��ְҵ����
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
		alert("������")
	}
})
//�ı����ҳ����ͼ
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
//��Ӹ��� ����
var fbTxt = [
	{
		fb:"T��С�ŵ�5�˱�",
		txt:"���ұ������Tһ��������ֶ�<br>���������ر��ɧ��Ȼ������ˡ�<br>һ���˿��������Ӳд���3s����T�𿪹�̫�죬���ǻ��ڽ������ء���"
	},
	{
		fb:"���辿�����۱�",
		txt:"���Ǹ�T��ôûѪ�ˡ���Ƥ��ô��ô�డ����<br>��Զ��������ɵ���վһ��ò��ã���<br>��BossҪ��AOE�ˣ��Ͻ�Ԥ��һ��Ⱥ���ȣ���<br>�����ڵ��ˣ���ô�����ǰ�Ѫ�����������ȣ���"
	},
	{
		fb:"ʷ�����BOSS��",
		txt:"ȫ���˾۾�����׼����ս������ɱ<br>��ǹ��һ�ں��򸱱�Сboss����<br>boss���ɳ���Ȼ��Ϳ�����ɽ֮����Ҳû������<br>����һ���±Ƶ�5�����ڷ��оþ��޷�����"
	},
	{
		fb:"��Щ��Ĳ˼����ֱ�",
		txt:"ȫ���˾۾�����׼����ս������ɱ<br>��ǹ��һ�ں��򸱱�Сboss����<br>boss���ɳ���Ȼ��Ϳ�����ɽ֮����Ҳû������<br>����һ���±Ƶ�5�����ڷ��оþ��޷�����"
	}
	
]
//ר����ϵ����
var gX = [
	"��һͨ�绰��<br>�ͻ��м��ٸ���ȥ��������ͷ��¥�²���<br>�������²���~��",
	"���ֵ�<br>������˺��~<br>�����˻�����Ϊū��QAQ~��",
	"һ���汾һ����<br>�����汾�����~<br>��������˾����˵�ľ����㣡��",
	"��������������¼����ͼ���������ڣ�<br>���������ܶ�Ҫ�군��<br>���޻���̸�����ѣ���",
	"ǿ����һ����������<br>����������<br>����һ���ӵ���~",
	"�������в���������������<br>���ҵĿ��ĳ���<br>��������~",
	"ͬ���Ǿ����������û�����Σ�<br>Ϊʲô�����������<br>�ҵĿ��ĺ�ս��~",
	"����ҵ���������ʵʱ�л���<br>����ҹ��и�ο�����Ժ����֡��Լ�����Ǯ���㡱<br>����֮������Ҫ��....��",
	"��һ���ʺ�о���������<br>�ڶ��۾�̾�Բۣ�<br>��������ͳ�Ϊ���ҹ̶����ӵ�һԱ��ֱ������~",
	"���������100������<br>�ͱز��ܽ���������98�ġ�<br>��Ϊ������������100�Ļ������¸ҵ�������~",
	"������ϲ������������ָ�Ӿ���<br>Ȼ�����Լ��ٸ������һϵ�еķ������<br>��ϲ���㿴�������ָɲ����ҵ����ӣ���",
	"��ʹ������85%��������<br>�Ҷ��᲻����Ȥ��<br>��Ҳ���ǻᾡ����Ŭ�����ͣ���",
	"��ʹ���겻��ϵ��<br>ż��һ���賿2���QQ����<br>Ҳ�����Ҹо����ǵĹ�ϵ��һ�ε�ͻ���ͽ���",
	"�ҽ����ѣ��������������ѧ<br>���ܳ�Ϊ�ҳ��ӵ�һ���ӣ�<br>˵������ĺܰ���~",
	"��ʵ��������������׼��<br>Ҫ������������������������<br>��ô��ֻ��˵һ�л�������ֵΪ׼���ҵ����ѣ���"
]
$(".model4 .txt-box").html(random(gX.length,gX));

//ְҵ�ǳ�
var jzName = [
	"Ǳ�л�����","��������","�����̿�","��ɧ��λ֮��","�ƺ�͵Ϯר��","����������","һ������","��ɱ��","��ҹ����","������ΰε�","����������"
];
var fsName = [
	"��ү","���Ұְ�","����������","���۷���������","������������","һ���ܴ�Ķ�û��","1V2����","����solo","ħ��Ϊ�Ҵ���","�������","��������"
];
var tkName = [
	"���öܿ���ǽ","���Է���","Ƥ�����","�ܿ��ܴ�","����Ͳ�","��������","Ӳ���ֽ�","������T","����ֱ��","Ϊ�������","��ɧ���"
];
var ssName = [
	"һ������","���к���","�Ѱд���","����5.2","�����鷢","�ü�ʸ��","�ٷ�����","һ�����","���������","��ǿԶ�����","�������"
];
var zlName = [
	"36D����","����ɻ���","��ƽ������","���ֻش�","�����ר��","��������","ˢ��ǿ��֢","ʥ��֮��","���̾�����","б����֢��Ⱥ","ѡ���Է���"
];
//�����ʾְҵ��ǩ
$(function(){
	$(".model4 .head-li .nickName").text(random(ssName.length,ssName))
})

//����ҳ�� ��ȡ����
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
 * ҳ�������ϴ�ӡ��ֵ�Զ���
 */
window.onload = function () {
//  console.log(getParam());
	var zhi = getParam()
    for(var i in zhi){
    	if(zhi[i] == "true"){
//  	console.log("����ҳ��");
    	$(".model5 .share-btn4").hide()
    	$(".model5 .car-btn4").show()
    }
    }
}
//ְҵ����
var jzarr = [
"�����Ĵ̿ͣ��Ӳ��� ��",
"Ǳ�л�������������ϰ������һ�֡�",
"���ǿ�������������һ�����Կ������뿪�� ",
"�ҵ�ذ�׷�����������������˵�ͷ�����������۶ϣ�",
"�������ۣ����ԡ�����ʼ��",
"��ɱ������׼����������ˡ�",
"��ɧ��λ��boss���ƺ�͵Ϯ���ջ���",
"��λ��ɧ˭�ܱȣ������ը���˵С�",
"�Ҳ�������о����ҵĴ��ڣ��ҵĿ�����Ҳ��������о�����Ѫӿ����ʹ�࡭",
"������Ѫ����֮����Ǳ���ںڰ���Ե�����а��˵��˺��������վ�ֻ��һ���ڰ��еĴ̿͡�",
"�����������ս����������������������",
"���Ĵ򷨲�����ʤ�Ĺؼ�������������ֻ������һ���ֶΡ�",
"��оͽаɣ����������һ���ˡ�",
"��֪��������֣������������ڡ����������ڡ�"
];
var fsarr = [
"��Ҫ��һ����ʦ�������������ŵķ�ʦ,ֻҪ�Ƿ�ʦ�ͺá�",
"�ҵ����������˪�����������ֲ��ư�����ӿ�������з������ȵ����ҡ�",
"�Ҵݻٵ��ˣ���ɵ��˿�ʤ�⵶���Ŀ�ɱ������Ū���ˣ�ֻ�������ĵ���Ϸ�ʵ�Ц����",
"��ǿ��ĵ��ˣ�Ҳ�޷����ܱ�˪�����ҵ�˫�ؿ��飡",
"һ������һ���񣬴��������з��񡣡����Ұְ֡���",
"���˺������۷���������",
"��Ц�ķ��ˣ��ڷ�ү��ǰͳͳ�ҷ�����ɣ�",
"ħ����Ϊ�Ҷ�����~",
"��ľˮ��Ԫ��֮��������һ�У�Ҳ�ض��ܴݻ�һ�С�",
"���㵹���ҽ��£���ͻ�֪�����侲��˼���Ƕ�ô����Ҫ��",
"���������ҵ�ָ�����ʱ�����Ѿ���������Ļ���",
"������Щû�õĵ����ɣ�ħ��������������ǿ��������",
"׼��������?�������㽫��Ե�����ֲ������ʡ���"
];
var tkarr = [
"�ҵ�ս�����Ѽ������͡�",
"սʿ����߾��磬���ǲ��ö�Ҳ�ܿ���ǽ��",
"���Եķ���������һ�й���������Ч������",
"ս�����ҵĳͷ���������ҵĻ��ӣ����Եķ��������ң�",
"Ը������˵ľ�ս�У����ٵ�ս��ɳ����",
"Ƥ��������Ͳ٣�������ѡ����������",
"��������սʿ���ң�����һ��ţ��Ҿͽ�����������",
"�������⣬����ΪT��T֮Ӳ���ȸֽӲ��",
"�������������ã�����������ʹ�࣬��������˵�ǿ�󣬲���Ľ������ħ����ʥ�⻤�塣",
"��ǧboss�������������������~",
"����������̬���񱩻ظ������ڣ����Ụ���ҩˮ���������Ұ����",
"�ҵ�����������Ѫ���������ҵ���������ŭ�������������㵹����Ҳ��Թ�޻ڣ�",
"������ʿ����ҫ���ģ�����Ի����ҵĶܵ��������ҵ�������",
"��ʵ�ؼ�������֮����������T��˾���������ң�"
];
var ssarr = [
"���㱻��û����Ӱ�ļ�ʸ�䴩������ʱ����ͻ�����ʲô��ս�������ı�����",
"����ü�ģ�һ��������",
"���£������ǰ�ƻ��������ͷ��ô�����ֲ�����ƫ��",
"û��ʲô��һ���������ܽ�������⣬ ����У��Ǿ�������",
"�ü�ʸ���ֵط������ɣ�",
"һ����꣡Ҫ��һ���������㣡",
"����һ��������ҵ��˳����������ֵĹػ��ѽ������ţ�",
"Ԥ��������׼����ʱ��չ�������ļ����ˣ�",
"ָ�����һ���գ������������ˣ������ʶһ�������Ŀ־塭",
"�Ҹ�ϲ�����ƶ��ģ�������ս�Եİ���~",
"�һ����ҵ�������ĺ�ʹ�졣",
"��ǿԶ������dp���ƶ��������޵�λ�ƣ��������������Ѻã����������������",
"�����Թ���mmoս�����tps�Ŀ����"
];
var zlarr = [
"����ְҵ��һ�����������飿emmm��������������",
"��Ҫ��������~",
"�ܾ�������DPS���Ա� ��)",
"һҪ���Ѫ����Ҫ�����ˣ�Ҫ����������T��û����DPS",
"�������������е���ʦ��������������666�������Ӱ�><",
"����ʥ���ָ�����ҽ�����ʦְ֮�մ�һ����",
"��Χ�ܶ��죬�������ޱߣ�����~",
"��ʹ���հ�Ӱ����Ȼ��ӵʥ�⡣",
"���ˢ��ÿ���˵�Ѫ�����������Ϊ���Ƶľ�tongǿbing��",
"������·�ҾͲ����ˣ���֮���Ŵ���ܣ���ͷ��Grid�����ˡ�",
"����ö�boss��ȫ���Ҷ���֪��������T�����֣����Ƕ��μ��š�",
"һ���������ƺ����Ӵ˵�ˢ��·�ˡ�",
"��������ëë��Ĺ֣��̲������˺Ǻǡ�����ôԶ����ȥ�ɣ�",
"̹�˲���Ҫ����MT���������䣡",
"ʲô�����������β�����״�ģ����ˡ�"
];

//am();
var amIndex = 0;
function am(){
//	console.log("ִ�е��˵�Ļ��")
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

