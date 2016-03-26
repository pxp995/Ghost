$(function(){
	$('.link .botton').hover(function(){
		var title=$(this).attr('data');//获取data
		$('.tip em').text(title);//把data的内容引入em
		var pos=$(this).position().left+10;//获取有定位的父元素的相对位置
		var dis=($('.tip').outerWidth()-$(this).outerWidth())/2;
		var l=pos-dis;
		$('.tip').css({'left':l+'px'}).stop(true,true).animate({'top':140,'opacity':1},500);//tip的动画按钮
		},function(){
			//if(!$('.tip').is(':animated')){
				$('.tip').stop(true,true).animate({'top':100,'opacity':0},500);
			//}
			})
})