$(function(){function a(){var a=$(".mr_sns a");a.eq(a.length-1).addClass(),a.each(function(){{var a=$(this).data("sns"),c=$(this),v=c.find("span");v.find("em")}switch(parseInt(a)){case 1:var h=document.createTextNode("Twitter");c.addClass("sns1");break;case 2:var h=document.createTextNode("Dribbble");c.addClass("sns2");break;case 3:var h=document.createTextNode("Behance");c.addClass("sns3");break;case 4:var h=document.createTextNode("LinkedIn");c.addClass("sns4");break;case 5:var h=document.createTextNode("Quora");c.addClass("sns5");break;case 6:var h=document.createTextNode("Github");c.addClass("sns6");break;case 7:var h=document.createTextNode("知乎");c.addClass("sns7");break;case 8:var h=document.createTextNode("LOFTER");c.addClass("sns8");break;case 9:var h=document.createTextNode("UI中国");c.addClass("sns9");break;case 10:var h=document.createTextNode("新浪微博");c.addClass("sns10");break;case 11:var h=document.createTextNode("SegmentFault");c.addClass("sns11");break;case 12:var h=document.createTextNode("StackoverFlow");c.addClass("sns12")}v.prepend($(h)).css("marginLeft",-(v.width()+20)/2+"px")})}var c=$(".mr_jobe_list .l2 .projectTitle");c.each(function(){var a=$(this),c=a.width();a.find("span").css("left",c+5)}),$(".a").hover(function(){var a=$(".birth_span"),c=$.trim(a.text()),v=$(".a");""!=c&&"年出生"!=c?(a.removeClass("dn"),v.css("cursor","pointer")):v.css("cursor","default")},function(){setTimeout(function(){var a=$(".birth_span");a.addClass("dn")},90)});var v=parseInt($("#customBlock .cust_title").width())/2;$("#customBlock .cust_title").css("margin-left",-v-10),$(".mr_sns")&&$(".mr_sns a").length>0&&a(),$(".mr_sns a").hover(function(){$(this).find("span").show()},function(){$(this).find("span").hide()}),$(document).click(function(){$(".mr_down_tip").hide()}),$(".mr_down").bind("click",function(e){e.stopPropagation();var a=$(".mr_down_tip");a.is(":hidden")?a.show():a.hide()}),$(".mr_down_tip li").bind("click",function(e){e.stopPropagation(),$(".mr_down_tip").addClass("dn")}),$(".mr_down_tip li").hover(function(){$(".mr_down_tip li.active").removeClass("active"),$(this).addClass("active")},function(){$(".mr_down_tip li.active").removeClass("active"),$(this).removeClass("active")}),$(".mr_skill_con .mr_skill_plan").each(function(){var a=$(this).attr("data-skillLevel"),c=$(this).outerWidth(),v=a/100*c;$(this).find("em").width(v+10)})});