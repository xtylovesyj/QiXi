

module.exports = function(){
	var container = $('#content');
	var width = container.width();
    var boy = $('#boy');
var element = container.find(':first');  //就是content-wrap//相对定位

	//首先我们调整小男孩的位置



//写个通用的通过类名来获取坐标值

var getPosition = function(className){

	var $elem = $('.'+className);

	return{
		height:$elem.height(),
		top:$elem.position().top
	}
}

//获取中间的相对位置

var roadMiddleTop = getPosition('road');
var boyPositionTop = roadMiddleTop.top+roadMiddleTop.height/2-boy.height();

//开始修正小男孩的高度

boy.css({
	top:boyPositionTop +36
});



function boyRun(callback){

	//现在让小男孩动起来
	boy.addClass('slowWalk');

	boy.addClass('boyRun');


	boy.css({
	left:$('#content').width()/1.5
	})

	callback();

}

/*boyRun(function(){

	element.css({
		'transition-delay':'10s',
		'transition-timing-function':'linear',
		'transition-duration':'10000ms',
		'transform':'translate3d(' +(-(width * 2)) +'px,0px,0px)'
	})

});*/
};





	











